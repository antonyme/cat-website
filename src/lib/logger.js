/* eslint no-console:"off" */
const isProd = process.env.NODE_ENV === 'production'

export default {
  log (...args) {
    if (!isProd) {
      console.log(...args)
    }
  },
  errorSecret (...args) {
    if (!isProd) {
      console.error(...args)
    }
  },
  error: console.error
}
