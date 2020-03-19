<template>
    <ul class="sort-tags list-unstyled clearfix">
        <li>
            <a
                :class="{'active':(options.sortName == 'publish_time')}"
                href="javascript:;"
                @click.prevent="changeSort('publish_time')">最新</a>
        </li>
        <li>
            <a
                :class="{'active':(options.sortName == 'visit_count')}"
                href="javascript:;"
                @click.prevent="changeSort('visit_count')">热门</a>
        </li>
        <li
            v-for="tag in tagList"
            :key="tag._id">
            <a
                :class="{'active':(options.tagId == tag._id)}"
                href="javascript:;"
                @click.prevent="changeTag(tag._id)">{{ tag.name }}</a>
        </li>
        <li>
            <img
                v-show="isFetching"
                :src="loadingImg"
                class="loader-tiny"
                alt="Tiny">
        </li>
    </ul>
</template>

<script>
import tiny from '../../assets/images/tiny.gif';

export default {
    props: {
        tagList: {
            type: Array,
            default: () => []
        },
        options: {
            type: Object,
            default: () => {}
        },
        isFetching: {
            type: Boolean,
            default: () => false
        }
    },
    data () {
        return {
            loadingImg: tiny
        };
    },
    methods: {
        changeSort (sortName) {
            this.$parent.handleChange({
                currentPage: 1,
                sortName,
                tagId: ''
            });
        },
        changeTag (tagId) {
            this.$parent.handleChange({ currentPage: 1, sortName: '', tagId });
        }
    }
};
</script>
