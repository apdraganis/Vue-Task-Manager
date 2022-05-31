<template>
  <font-awesome-icon @click="onClick" icon="circle-plus" />
</template>

<script>
export default {
  name: 'AddButton',
  methods: {
    onClick() {
      this.$emit('toggle-add-task');
    }
  }
}
</script>