const getCookies = function(cookie) {
  var cookies = {}
  cookie &&
    cookie.split(';').forEach(function(cookie) {
      var parts = cookie.match(/(.*?)=(.*)$/)
      cookies[parts[1].trim()] = (parts[2] || '').trim()
    })
  return cookies
}

export default {
  getCookies
}
