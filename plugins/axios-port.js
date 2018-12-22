import { setClient } from '~/services/apiClient'

export default ({ app, store }) => {
  setClient(app.$axios)
}
