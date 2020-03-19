<template>
    <div class="col-sm-3 sidebar-box">
        <div
            :style="{ backgroundImage: 'url(' + indexImg + ')' }"
            class="cover-img"/>
        <div class="bottom-block">
            <h3>但行好事</h3>
            <h3>莫问前程</h3>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        indexImg: {
            type: String,
            default: () => ''
        }
    }
};
</script>
