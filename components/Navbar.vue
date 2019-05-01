<template>
  <div class="navbar-box navbar-skin">
    <div class="navbar-menu">
      <nuxt-link 
        :to="{ path: '/' }" 
        :class="{'active':$route.name !== 'apps'}" 
        class="navbar-item logo" 
        title="首页">
        CX
      </nuxt-link>
    </div>   

    <div class="navbar-expanded">
      <!-- <div>
        <a 
          class="navbar-item change-mode" 
          href="javascript:;" 
          @click="changeMode()">
          <i 
            v-if="styleMode === 'day-mode'" 
            class="fa fa-moon-o"/>
          <i 
            v-else 
            class="fa fa-sun-o"/>
        </a>
      </div> -->
	        
      <div v-if="auth.token && auth.user">
        <a 
          href="javascript:;" 
          class="navbar-item expanded-logout" 
          title="登出" 
          @click="logout()">
          <i class="fa fa-sign-out"/>
        </a>
        <nuxt-link 
          :to="{ path: '/settings' }" 
          :title="auth.user.nickname" 
          class="navbar-item expanded-avatar">
          <img :src="auth.user.avatar || defaultAvatar">
        </nuxt-link>
      </div>
      <div v-else>
        <nuxt-link 
          :to="{ path: '/login',activeClass:'active' }" 
          class="navbar-item" 
          title="登录">
          <i class="fa fa-sign-in"/>
        </nuxt-link>   
      </div>
    </div>

    <div class="navbar-shrink">
      <div 
        v-if="auth.token && auth.user" 
        class="pull-right">
        <a 
          href="javascript:;" 
          class="shrink-avatar" 
          @click="dropdown()">
          <img :src="auth.user.avatar || defaultAvatar">
        </a>							
        <ul 
          id="dropdownMenu" 
          class="dropdown-menu pull-right">
          <li>
            <nuxt-link :to="{ path: '/settings' }">
              <i class="fa fa-cog"/> 设置
            </nuxt-link>
          </li>
          <li 
            role="separator" 
            class="divider"/>
          <li>					
            <a 
              href="javascript:;" 
              class="shrink-logout" 
              @click="logout()">
              <i class="fa fa-sign-out"/> 登出
            </a>  
          </li>
        </ul>
      </div>
      <div 
        v-else 
        class="pull-right">
        <nuxt-link 
          :to="{ path: '/login' }" 
          class="shrink-login" 
          title="登录">
          <i class="fa fa-sign-in"/> 登录
        </nuxt-link>
      </div>
      <a 
        class="pull-right navbar-item change-mode" 
        href="javascript:;" 
        @click="changeMode()">
        <i 
          v-if="styleMode === 'day-mode'" 
          class="fa fa-moon-o"/>
        <i 
          v-else 
          class="fa fa-sun-o"/>
      </a>
      <a 
        class="pull-right expanded-var angular1" 
        href="//angular.jackhu.top" 
        title="Angular1.x版"/>
      <a 
        class="pull-right expanded-var react" 
        href="//react.jackhu.top" 
        title="React版"/>
      <a 
        class="pull-right expanded-var vue" 
        href="//vue.jackhu.top" 
        title="Vue版"/>
      <a 
        class="pull-right expanded-var angular2" 
        href="//angular2.jackhu.top" 
        title="Agnular2.x版"/>
    </div>
  </div>
</template>

<script>
import defaultAvatar from '../assets/images/avatar.png'
import { mapState, mapActions } from 'vuex'
import { getCookie, saveCookie, signOut } from '../utils/authService'

export default {
  computed: {
    ...mapState({
      auth: state => state.auth,
      styleMode: state => state.globalVal.styleMode
    }),
    defaultAvatar() {
      return defaultAvatar
    }
  },
  created() {
    if (process.browser) {
      document.body.className = this.styleMode
    }

    if (this.auth.token) {
      this.getUserInfo()
    }
  },
  methods: {
    ...mapActions(['changeStyleMode', 'logout', 'getUserInfo']),
    changeMode() {
      this.changeStyleMode()
      document.body.className = this.styleMode
    },
    dropdown() {
      const dropdownMenu = document.getElementById('dropdownMenu')
      const isShow = dropdownMenu.style.display !== 'block' ? 'block' : 'none'
      dropdownMenu.style.display = isShow
    }
  }
}
</script>
