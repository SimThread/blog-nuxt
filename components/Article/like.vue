<template>
  <div class="article-share clearfix">
    <a 
      :class=" isLike ? 'note-liked' :'' " 
      href="javascript:;" 
      class="like-btn" 
      @click.prevent="toggleLike()">
      <span class="like-content">
        <i 
          :class="isLike ? 'fa-heart' : 'fa-heart-o'" 
          class="fa"/>  喜欢
      </span>
      <span class="like-count">{{ likeCount }}</span>        
    </a>
  </div>
</template>
<script>
export default {
  props: {
    likeCount: {
      type: Number,
      default: () => 0
    },
    isLike: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    toggleLike() {
      this.$parent.handleToggleLike()
    }
  }
}
</script>
