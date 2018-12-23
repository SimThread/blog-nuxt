import api from '../api'
import * as types from './types'
import service from '@/services/index'
import cookieUtils from '@/utils/cookieUtils'
// import img from '../assets/images/bg.jpg'

export const nuxtServerInit = ({ state, commit }, { req }) => {
  const token = cookieUtils.getCookies(req.headers.cookie)['token'] || null

  commit(types.UPDATE_TOKEN, {
    token
  })
}

export const showMsg = ({ commit }, content, type = 'error') => {
  commit(types.SHOW_MSG, { content: content, type: type })
}

export const hideMsg = ({ commit }) => {
  commit(types.HIDE_MSG)
}

export const changeStyleMode = ({ commit }) => {
  commit(types.CHANGE_STYLE_MODE)
}

export const getCaptchaUrl = ({ commit }) => {
  commit(types.GET_CAPTCHAURL)
}

export const getIndexImage = ({ commit }) => {
  service.getIndexImage().then(
    response => {
      if (response.statusText != 'OK') {
        // return commit(types.GET_INDEX_IMG, {indexImg: img})
      }
      commit(types.GET_INDEX_IMG, { indexImg: response.data.img })
    },
    response => {
      // commit(types.GET_INDEX_IMG, {indexImg: img})
    }
  )
}
