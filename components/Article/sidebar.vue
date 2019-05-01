<template>
  <div 
    id="sidebar-box" 
    class="col-sm-3 sidebar-box">
    <slot/>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      console.log('document:', document)
      document.getElementById('sidebar-box').addEventListener('click', e => {
        e.preventDefault()
        if (e.target.classList.contains('toc-link')) {
          const selector = e.target.getAttribute('href').slice(1)
          var anchor = document.getElementById(selector)
          document.documentElement.scrollTop = anchor.offsetTop
        }
      })
    })
  }
}
</script>
