<template>
  <button @click="onClick">{{ buttonText }}</button>
</template>

<script>
import '../style/style.scss';

export default {
  name: 'TaskButton',
  props: {
    buttonText: {
      type: String,
    },
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    }
  }
}
</script>

<style scoped>
</style>