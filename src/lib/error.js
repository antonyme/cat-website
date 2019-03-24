import Vue from 'vue'
import logger from '@/lib/logger'
import {
  E_NETWORK,
  E_SERVER_HTTP
} from '@/constants'

export function handler (err) {
  if (err.name === E_NETWORK) {
    Vue.toasted.error('Network error, try to reload the page')
  } else if (err.name === E_SERVER_HTTP && err.statusCode === 401) {
    Vue.toasted.error('Access denied')
  } else {
    logger.error(`[ERR_HANDLER] unexpected error (message: ${err.message}, other keys: ${JSON.stringify(err)})`)
    logger.errorSecret(`[ERR_HANDLER] stack trace: ${err.stack}`)
    Vue.toasted.error('Something is broken :/')
  }
}

export class NetworkError extends Error {
  constructor () {
    super('Network error')
    this.name = E_NETWORK

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NetworkError)
    }
  }
}

export class ServerHttpError extends Error {
  constructor (statusCode) {
    super(`HTTP error: ${statusCode}`)
    this.name = E_SERVER_HTTP
    this.statusCode = statusCode

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServerHttpError)
    }
  }
}
