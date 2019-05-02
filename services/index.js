import apiClient from '~/services/apiClient'
import { API_ROOT } from '@/config.js'

export default {
  localLogin(userInfo) {
    return apiClient.post(`${API_ROOT}/auth/local`, userInfo)
  },
  getSnsLogins() {
    return apiClient.get(`${API_ROOT}/users/snsLogins`)
  },
  getMe() {
    return apiClient.get(`${API_ROOT}/users/me`)
  },
  mdUser(userInfo) {
    return apiClient.put(`${API_ROOT}/users/mdUser`, userInfo)
  },
  getTagList() {
    return apiClient.get(`${API_ROOT}/tags/getFrontTagList`)
  },
  getIndexImage() {
    return apiClient.get(`${API_ROOT}/article/getIndexImage`)
  },
  getApps() {
    return apiClient.get(`${API_ROOT}/mobile/getApps`)
  },
  getFrontArticleList(options) {
    return apiClient.get(`${API_ROOT}/article/getFrontArticleList`, {
      params: options
    })
  },
  getFrontArticleCount() {
    return apiClient.get(`${API_ROOT}/article/getFrontArticleCount`)
  },
  getFrontArticle(id) {
    return apiClient.get(`${API_ROOT}/article/${id}/getFrontArticle`)
  },
  toggleLike(id) {
    return apiClient.put(`${API_ROOT}/article/${id}/toggleLike`)
  },
  getPrenext(id, options) {
    return apiClient.get(`${API_ROOT}/article/${id}/getPrenext`, {
      params: options
    })
  },
  getFrontCommentList(id) {
    return apiClient.get(`${API_ROOT}/comment/${id}/getFrontCommentList`)
  },
  addNewComment(data) {
    return apiClient.post(`${API_ROOT}/comment/addNewComment`, data)
  },
  addNewReply(id, data) {
    return apiClient.post(`${API_ROOT}/comment/${id}/addNewReply`, data)
  },
  delComment(id) {
    return apiClient.delete(`${API_ROOT}/comment/${id}`)
  },
  delReply(id, data) {
    return apiClient.put(`${API_ROOT}/comment/${id}/delReply`, data)
  }
}
