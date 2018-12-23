// export const API_ROOT = (process.env.NODE_ENV === 'production')
//   ? 'https://api.jackhu.top/'
//   :'http://127.0.0.1:9000/'

// export const CookieDomain = (process.env.NODE_ENV === 'production')
//   ? '.jackhu.top'
//   : ''

export const API_ROOT =
  process.env.NODE_ENV === 'production' ? '//api.dot2thread.com' : '/'

export const CookieDomain =
  process.env.NODE_ENV === 'production' ? '.dot2thread.com' : ''
// export const CookieDomain = (process.env.NODE_ENV === 'production')
//   ? '47.89.14.56'
//   : ''
