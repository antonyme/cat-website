import axios from 'axios'
import {
  NetworkError,
  ServerHttpError
} from '@/lib/error'

const endpoint = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'Accept': 'application/json',
    'x-api-key': process.env.VUE_APP_CAT_API_KEY
  }
})
endpoint.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response) { // error response from server
    throw new ServerHttpError(error.response.status)
  } else if (error.request) { // no response received from server
    throw new NetworkError()
  } else { // axios error setting the request
    throw new Error(error.message)
  }
})

export default {
  getBreedList () {
    return endpoint.get('/breeds').then(({ data }) => {
      return data.map(breed => {
        return {
          id: breed.id,
          name: breed.name,
          origin: breed.origin
        }
      })
    })
  }
}
