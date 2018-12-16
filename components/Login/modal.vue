<template>
  <b-modal 
    v-model="showLoginModal" 
    :hide-footer="true" 
    effect="fade"
    width="400">
    <h4 
      slot="modal-header" 
      class="modal-title text-center"
      style="font-size: 18px; width: 100%;">请用以下方式登录</h4>
    <div 
      class="modal-body">
      <div class="portlet-body">
        <snsloginbtns :logins="logins"/>
      </div>
    </div>
    <!-- <div 
      slot="modal-footer" 
      style="display: none;"/> -->
  </b-modal>
</template>

<script>
import snsloginbtns from './snsLogin'
import { mapState, mapActions } from 'vuex'
// import { modal } from 'vue-strap'

export default {
  components: {
    // modal,
    snsloginbtns
  },
  data() {
    return {
      showLoginModal: false
    }
  },
  computed: {
    ...mapState({
      logins: ({ logins }) => logins.items
    })
  },
  created() {
    if (this.logins.length < 1) {
      this.getSnsLogins()
    }
  },
  methods: {
    ...mapActions(['getSnsLogins']),
    showModal() {
      this.showLoginModal = true
    }
  }
}
</script>
