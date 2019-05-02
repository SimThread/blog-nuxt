<template>
  <div class="article-share clearfix">
    <div
      :class=" isLike ? 'note-liked' :'' " 
      class="like-btn" 
      @click="toggleLike($route.params.id)">
      <span class="like-content">
        <i 
          :class="isLike ? 'fa-heart' : 'fa-heart-o'" 
          class="fa"/>  喜欢
      </span>
      <span class="like-count">{{ likeCount }}</span>        
    </div>
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
    toggleLike(id) {
      this.$parent.handleToggleLike(id)
    }
  }
}
</script>
