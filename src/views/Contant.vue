<template>
  <div>Content</div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  created(){
    this.$store.commit('displayTabbar',false)
  },
  destroyed(){
    this.$store.commit('displayTabbar',true)
  }
}
</script>

<style>

</style>