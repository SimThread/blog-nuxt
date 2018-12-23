import api from '../../api'
import service from '@/services/index'
import { PRENEXT_ARTICLE } from '../types'

const state = {
  next: {},
  prev: {}
}

const actions = {
  getPrenext({ commit, rootState }, id) {
    return new Promise((resolve, reject) => {
      return service.getPrenext(id, rootState.options.item).then(response => {
        if (response.statusText == 'OK') {
          commit(PRENEXT_ARTICLE, {
            prenextArticle: response.data.data
          })
          return resolve()
        }

        console.log('get Prenext:', response)

        return reject()
      })
    })
  }
}

const mutations = {
  [PRENEXT_ARTICLE](state, action) {
    state.prev = action.prenextArticle.prev || {}
    state.next = action.prenextArticle.next || {}
  }
}

export default {
  state,
  actions,
  mutations
}
