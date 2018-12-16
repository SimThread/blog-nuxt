<template>
  <div class="prenext">
    <div 
      v-if="prevArticle._id" 
      class="text-left prev">
      <nuxt-link 
        :to="{ name: 'article', params: { aid: prevArticle._id }}" 
        class="link-title"><span>上一篇:</span> {{ prevArticle.title }}</nuxt-link>
    </div>
    <div 
      v-if="nextArticle._id" 
      class="text-right next">
      <nuxt-link 
        :to="{ name: 'article', params: { aid: nextArticle._id }}" 
        class="link-title"><span>下一篇:</span> {{ nextArticle.title }}</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prevArticle: {
      type: Object,
      default: () => {}
    },
    nextArticle: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
