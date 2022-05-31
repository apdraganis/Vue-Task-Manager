<template>
  <button @click="onClick">{{ buttonText }}</button>
</template>

<script>
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