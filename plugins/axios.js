import qs from 'qs'
import { getCookie, signOut, isLogin } from '@/utils/authService'

export default function({ app, req, store, route, redirect }) {
  let $axios = app.$axios

  $axios.onRequest(config => {
    if (isLogin()) {
      console.log('已登录')
      config.headers.common.Authorization =
        'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
    }
    // config.data = qs.stringify(config.data, {
    //   allowDots: true //Option allowDots can be used to enable dot notation
    // })
    // if (config.method.toUpperCase() == 'GET' && config.data) {
    //   config.url += `?${config.data}`
    // }
    // console.log('config:', config)
    return config

    // if (store.state.im.uuid){
    //   config.headers.im_client = 'web';
    //   config.headers.im_uuid = store.state.im.uuid;
    // }
  })
  $axios.onResponse(response => {
    // if (response.status == 200) {
    //   if (401 == response.data.code) { //用户过期
    //     console.log('axios用户过期');
    //     //拋出異常
    //     if (process.browser) {
    //       store.commit('user/refresh');
    //       window.location.reload();
    //       // window.location.href = route.fullPath;
    //       // store.commit('option/setPrompt', { tle: '認證過期，正常嘗試重新認證', url: route.fullPath, refresh: 1 });
    //       // app.router.push('/prompt');
    //     } else {
    //       throw {
    //         message: '認證過期，正常嘗試重新認證',
    //         response: {
    //           status: 401
    //         },
    //         refresh: 1,
    //         url: '/'
    //       };
    //     }
    //   } else {
    //     return response.data;
    //   }
    // } else {
    //   return response;
    // }
    if (response.status == 404) {
      app.router.push({ name: 'error_404' })
      return
    }
    return response
  })

  $axios.onError(err => {
    const code = Number.parseInt(err.response && err.response.status)
    if (code == 404) {
      redirect('/error_404')
      return
    }
    throw {
      err,
      url: '/'
    }
    return err
  })
}
