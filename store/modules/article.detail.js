import api from '../../api'
import service from '@/services'
import { ARTICLE_DETAIL, TOGGLE_LIKE } from '../types'

const state = {
  item: {}
}
// actions
const actions = {
  getArticleDetail({ commit }, id, user) {
    return new Promise((resolve, reject) => {
      service.getFrontArticle(id).then(response => {
        if (response.statusText == 'OK') {
          let isLike = false
          const article = response.data.data
          if (user) {
            user.likes.map(item => {
              if (item.toString() === article._id) {
                isLike = true
              }
            })
          }
          commit(ARTICLE_DETAIL, {
            articleDetail: {
              ...article,
              isLike: isLike
            }
          })
          return resolve()
        }
        return reject()
      })
    })
  },
  toggleLike({ commit }, id) {
    service.toggleLike(id).then(response => {
      const json = response.data
      if (response.statusText == 'OK') {
        commit(TOGGLE_LIKE, {
          like_count: json.count,
          isLike: json.isLike
        })
      }
    })
  }
}

const mutations = {
  [ARTICLE_DETAIL](state, action) {
    state.item = { ...state.item, ...action.articleDetail }
  },
  [TOGGLE_LIKE](state, action) {
    state.item = {
      ...state.item,
      isLike: action.isLike,
      like_count: action.like_count
    }
  }
}

export default {
  state,
  actions,
  mutations
}
