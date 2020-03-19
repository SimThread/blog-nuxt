<template>
    <div class="article-wrap">
        <div class="article-box">
            <Sidebar>
                <template>
                    <div v-html="articleDetail.toc"/>
                </template>
            </Sidebar>
            <ArtickeContent :article-detail="articleDetail"/>
            <Like
                :like-count="articleDetail.like_count"
                :is-like="articleDetail.isLike"/>
            <Prenext
                :prev-article="prevArticle"
                :next-article="nextArticle"/>
            <Comment
                :comment-list="commentList"
                :user="user"/>
            <Loginmodal ref="modal"/>
            <Scrolltop/>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import ArtickeContent from '@/components/Article/content.vue';
import Comment from '@/components/Article/comment.vue';
import Prenext from '@/components/Article/prenext.vue';
import Like from '@/components/Article/like.vue';
import Sidebar from '@/components/Article/sidebar.vue';
import Loginmodal from '@/components/Login/modal.vue';
import Scrolltop from '@/components/Scrolltop/index.vue';

export default {
    components: {
        ArtickeContent,
        Comment,
        Like,
        Prenext,
        Scrolltop,
        Loginmodal,
        Sidebar
    },
    computed: {
        ...mapState({
            articleDetail: ({ articleDetail }) => articleDetail.item,
            user: ({ auth }) => auth.user,
            nextArticle: ({ prenextArticle }) => prenextArticle.next,
            prevArticle: ({ prenextArticle }) => prenextArticle.prev,
            commentList: ({ commentList }) => commentList.items,
            options: ({ options }) => options.item,
            aid: ({ route }) => route.params.aid
        })
    },
    // watch: {
    //   $route: 'initData'
    // },
    // created() {
    //   this.initData()
    // },
    async fetch ({ store, params }) {
        const aid = params.aid;

        try {
            await Promise.all([
                store.dispatch('getPrenext', aid),
                store.dispatch('getCommentList', aid),
                store.dispatch('getArticleDetail', aid, store.state.auth.user)
            ]);
        } catch (error) {
            console.log('error:', error);
        }
    },
    methods: {
        ...mapActions([
            'getArticleDetail',
            'getPrenext',
            'getCommentList',
            'toggleLike',
            'addComment',
            'addReply'
        ]),
        initData () {
            const aid = this.$route.params.aid;
            this.getPrenext(aid);
            this.getCommentList(aid);
            this.getArticleDetail(aid, this.user);
        },
        openLoginModal () {
            this.$refs.modal.showModal();
        },
        handleToggleLike () {
            if (this.user) {
                this.toggleLike(this.$route.params.aid);
            }
        },
        handleSubmitComment (content) {
            if (this.user && content.trim() !== '') {
                this.addComment({ aid: this.$route.params.aid, content });
            } else {
                this.openLoginModal();
            }
        },
        handleShowReply (content) {
            // 判断是否登录.未登录则弹出登录框.
            if (this.user && content.trim() !== '') {
                this.addComment({ aid: this.$route.params.aid, content });
            } else {
                this.openLoginModal();
            }
        },
        handleSubmitReply (cid, content) {
            if (this.user && content.trim() !== '') {
                this.addReply({ cid, data: { content } });
            } else {
                this.openLoginModal();
            }
        }
    }
};
</script>
