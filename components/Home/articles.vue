<template>
  <ul class="article-list list-unstyled clearfix">
    <li 
      v-for="(article,index) in articleList" 
      :key="index" 
      :class="article.images.length > 0 ? 'have-img' : ''" 
      class="article-item">
      <nuxt-link 
        v-if="article.images.length > 0" 
        :to="{ name: 'article', params: {aid: article._id } }" 
        class="wrap-img">
        <img :src="article.images[0].url + '?x-oss-process=style/w100-h100'">
      </nuxt-link>
      <div>
        <p class="list-top">               
          <span class="time">{{ article.publish_time | customTime }}</span>
        </p>
        <h4 class="title">
          <nuxt-link 
            :to="{ name: 'article', params: {aid: article._id } }" 
            class="link-title">
            {{ article.title }}
          </nuxt-link>
        </h4>
        <div class="list-footer">
          <span>阅读 {{ article.visit_count }}</span>
          <span> · 评论 {{ article.comment_count }}</span>        
          <span> · 喜欢 {{ article.like_count }}</span>
        </div>
      </div>
    </li>
    <li 
      v-if="articleList.length < 1" 
      class="no-content">正在大力回车...</li>
  </ul>
</template>

<script>
export default {
  props: {
    articleList: {
      type: Array,
      default: () => []
    }
  }
}
</script>
