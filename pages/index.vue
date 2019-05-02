<template>
  <div>
    <div class="container-fluid main-box">
      <div class="row">
        <Sidebar :index-img="indexImg"/>
        <div class="col-sm-7 offset-sm-3 main-content">
          <Tags 
            :tag-list="tagList" 
            :options="options" 
            :is-fetching="isFetching"/>
          <Articles :article-list="articleList"/>
          <Loadmore 
            v-if="articleList.length > 0 && isMore" 
            :options="options" 
            :is-more="isMore" 
            :is-fetching="isFetching"/>
        </div>
      </div>
    </div>
    <Footerbar/>
  </div>
</template>
<script>
import Sidebar from '@/components/Home/sidebar.vue'
import Tags from '@/components/Home/tags.vue'
import Articles from '@/components/Home/articles.vue'
import Loadmore from '@/components/Home/loadmore.vue'
import Footerbar from '@/components/Home/footer.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: { Sidebar, Footerbar, Tags, Articles, Loadmore },
  computed: {
    ...mapState({
      indexImg: ({ globalVal }) => globalVal.indexImg,
      tagList: ({ tagList }) => tagList.items,
      options: ({ options }) => options.item,
      articleList: ({ articleList }) => articleList.items,
      isMore: ({ articleList }) => articleList.isMore,
      isFetching: ({ articleList }) => articleList.isFetching
    })
  },
  async fetch({ store }) {
    console.log('fetch...........')
    console.log('items:', store.state.articleList.items)
    const queue = []

    queue.push(store.dispatch('getIndexImage'))
    queue.push(store.dispatch('getTagList'))
    queue.push(
      store.dispatch('getArticleList', { options: store.state.options.item })
    )

    await Promise.all(queue)
  },
  mounted() {
    console.log('mounted')
    console.log('this.articleList:', this.articleList)
    if (this.indexImg === '') {
      this.getIndexImage()
    }
    if (this.tagList.length < 1) {
      this.getTagList()
    }
    if (this.articleList.length < 1) {
      this.getArticleList({ options: this.options })
    }
  },
  methods: {
    ...mapActions([
      'getIndexImage',
      'getTagList',
      'changeOptions',
      'getArticleList'
    ]),
    handleChange(options, isAdd = false) {
      this.changeOptions(options)
      this.getArticleList({ options: this.options, isAdd: isAdd })
    }
  }
}
</script>
