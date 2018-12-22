import apiClient from '~/services/apiClient'

export default {
  async localLogin(userInfo) {
    return apiClient.post('/auth/local', userInfo)
  },
  async getSnsLogins() {
    return apiClient.get('/users/snsLogins')
  },
  async getMe() {
    return apiClient.get('/users/me')
  },
  async mdUser(userInfo) {
    return apiClient.put('/users/mdUser', userInfo)
  },
  async getTagList() {
    return apiClient.get('/tags/getFrontTagList')
  },
  async getIndexImage() {
    return apiClient.get('/frontArticle/getIndexImage')
  },
  async getApps() {
    return apiClient.get('/mobile/getApps')
  },
  async getFrontArticleList(options) {
    return apiClient.get('/frontArticle/getFrontArticleList', {
      params: options
    })
  },
  async getFrontArticleCount() {
    return apiClient.get('/frontArticle/getFrontArticleCount')
  },
  async getFrontArticle(id) {
    return apiClient.get(`/frontArticle/${id}/getFrontArticle`)
  },
  async toggleLike() {
    return apiClient.put('/frontArticle/toggleLike')
  },
  async getPrenext(id, options) {
    return apiClient.get(`/frontArticle/${id}/getPrenext`, {
      params: options
    })
  },
  async getFrontCommentList(id) {
    return apiClient.get(`/comment/${id}/getFrontCommentList`)
  },
  async addNewComment(data) {
    return apiClient.post('/comment/addNewComment', data)
  },
  async addNewReply(id, data) {
    return apiClient.post(`/comment/${id}/addNewReply`, data)
  },
  async delComment(id) {
    return apiClient.delete(`/comment/${id}`)
  },
  async delReply(id, data) {
    return apiClient.put(`/comment/${id}/delReply`, data)
  }
}
