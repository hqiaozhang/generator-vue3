<template>
  <div class="home">Welcome to Your Vue.js App {{fullName}}</div>
</template>

<script >
import { useStore } from 'vuex'
import { toRefs } from 'vue'
export default {
  setup(props) {
    const store = useStore()
    console.log(props)
    return {
      ...toRefs(store.state.user) // 复制 reactive 里的所有属性并转成 ref
    }
  }
}
</script>

<style>

</style>
