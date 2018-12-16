<template>
  <div class="login-sns">
    <ul>
      <li 
        v-for="(item,index) in logins" 
        :key="index" 
        @click.stop.prevent="snsLogin(item)">
        <a 
          :class="item" 
          href="#"><i :class="'fa fa-' + item"/></a>
      </li>
    </ul>
  </div>
</template>

<script>
import { API_ROOT } from '../../config'
import { getCookie, isLogin } from '../../utils/authService'

export default {
  props: {
    logins: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    snsLogin(provider) {
      let search =
        API_ROOT + 'auth/' + provider + '?redirectUrl=' + window.location.origin
      if (isLogin()) {
        const token = getCookie('token')
        search += '&access_token=' + token.replace(/(^\")|(\"$)/g, '')
      }
      window.location.href = search
    }
  }
}
</script>
