<template>
  <header>
    <h2>Task Manager</h2>
    <span>
      <font-awesome-icon icon="user" />
      <font-awesome-icon icon="gear" />
    </span>
  </header>
</template>

<script>
// import TaskButton from './TaskButton.vue';

export default {
  name: 'TaskHeader',
  components: {
    // TaskButton,
  },
  props: {
    title: String,
    showAddTask: Boolean
  },
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

span *:first-child {
  margin-right: 20px;
}
</style>