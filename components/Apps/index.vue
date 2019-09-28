<template>
  <div class="settings-box">
    <div class="settings-container">
      <h2 class="title">App 下载</h2>
      <hr>
      <div
        v-for="(items,index) in apps"
        :key="index"
        class="row mobile-apps">
        <p class="version">{{ items.name }}版
          <a
            :href="items.gitUrl"
            target="_blank"><i class="fa fa-github"/></a>
        </p>
        <ul class="col-sm-7 downloads">
          <li>
            <a
              :href="items.downloadUrl.android || 'javascript:;'"
              class="btn btn-large btn-success">
              <i class="fa fa-android"/>
              <span>Android版</span>
            </a>
          </li>
          <li>
            <a
              :href="items.downloadUrl.ios || 'javascript:;'"
              class="btn btn-large btn-info">
              <i class="fa fa-mobile"/>
              <span>iPhone版</span>
            </a>
          </li>
        </ul>
        <div class="hidden-xs qrcode">
          <img
            :src="items.qrcode"
            alt="Download app qrcode">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState({
            apps: ({ apps }) => apps.items
        })
    },
    created () {
        this.getApps();
    },
    methods: {
        ...mapActions(['getApps'])
    }
};
</script>
