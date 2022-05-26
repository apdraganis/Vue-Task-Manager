<template>
  <button>{{ buttonText }}</button>
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
}
</script>

<style scoped>
</style>