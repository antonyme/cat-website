import axios from 'axios'
import {
  NetworkError,
  ServerHttpError
} from '@/lib/error'

const endpoint = axios.create({
  baseURL: 'https://en.wikipedia.org/api/rest_v1/',
  headers: {
    'Accept': 'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Media/1.4.1"'
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
  getMedia (wikiPage) {
    return endpoint.get(`page/media/${wikiPage}`).then(({ data }) => {
      const firstMedia = data.items[0]
      if (!firstMedia) throw new ServerHttpError(404)
      return firstMedia.original.source
    })
  }
}
