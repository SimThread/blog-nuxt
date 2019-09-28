const getCookies = function (cookie) {
    const cookies = {};
    cookie &&
    cookie.split(';').forEach(function (cookie) {
        const parts = cookie.match(/(.*?)=(.*)$/);
        cookies[parts[1].trim()] = (parts[2] || '').trim();
    });
    return cookies;
};

export default {
    getCookies
};
