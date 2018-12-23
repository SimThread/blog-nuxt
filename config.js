export const API_ROOT =
  process.env.NODE_ENV === 'production' ? '//api.dot2thread.com' : '/api'

export const CookieDomain =
  process.env.NODE_ENV === 'production' ? '.dot2thread.com' : ''
// export const CookieDomain = (process.env.NODE_ENV === 'production')
//   ? '47.89.14.56'
//   : ''
