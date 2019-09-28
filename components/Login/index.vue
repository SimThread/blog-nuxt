<template>
  <div class="signin-box">
    <div class="signin-container">
      <h4 class="title">登 录</h4>
      <div id="signinForm">
        <form
          class="signin-form form-horizontal"
          novalidate
          @submit.prevent="login()">
          <div class="form-group">

            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i
                    class="fa fa-envelope-o"/>
                </div>
                <!-- <i class="fa fa-envelope-o"/> -->
              </div>
              <!-- <div class="input-group-addon">
              </div> -->
              <input
                v-validate="'required|email|min:3'"
                v-model="user.email"
                type="text"
                name="email"
                data-vv-delay="100"
                class="form-control"
                placeholder="邮箱">
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-unlock-alt"/></div>
              </div>
              <input
                v-validate="'required|min:5'"
                v-model="user.password"
                type="password"
                name="password"
                class="form-control"
                placeholder="密码">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-6 captcha-code">
              <input
                v-validate="'required|min:5|max:6'"
                v-model="user.captcha"
                type="text"
                name="captcha"
                maxlength="6"
                class="form-control"
                placeholder="验证码">
            </div>
            <div class="col-6 captcha-img">
              <a
                href="javascript:;"
                @click.prevent="getCaptchaUrl()">
                <img :src="captchaUrl">
              </a>
            </div>

          </div>
          <div class="form-group">
            <button
              id="signin_btn"
              class="btn btn-primary btn-lg btn-block"
              type="submit">登 录</button>
          </div>
        </form>
      </div>
      <div class="login-sns">
        <p>您还可以通过以下方式直接登录</p>
        <snsloginbtns :logins="logins"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import snsloginbtns from './snsLogin';

export default {
    components: {
        snsloginbtns
    },
    data () {
        return {
            user: {
                email: '',
                password: '',
                captcha: ''
            }
        };
    },
    computed: {
        ...mapState({
            captchaUrl: ({ globalVal }) => globalVal.captchaUrl,
            logins: ({ logins }) => logins.items,
            token: ({ auth }) => auth.token
        })
    },

    created () {
        this.getCaptchaUrl();
        this.getSnsLogins();
    },
    methods: {
        ...mapActions(['getSnsLogins', 'getCaptchaUrl', 'localLogin']),
        login () {
            this.$validator
                .validateAll({})
                .then((result) => {
                    if (result) {
                        this.localLogin(this.user);
                    }
                })
                .catch((error) => {
                    // 提示错误
                    console.log('error:', error);
                });
        }
    }
};
// :disabled="!fields.valid()"
</script>
