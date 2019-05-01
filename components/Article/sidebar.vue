<template>
  <div 
    id="sidebar-box" 
    class="sidebar-box">
    <slot/>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      document.addEventListener('click', e => {
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
