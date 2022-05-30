<template>
  <header>
    <h1>Task Manager</h1>
    <TaskButton v-show="homePage" @btn-click="$emit('toggle-add-task')" :buttonText="showAddTask ? 'Close' : 'Add Task'"
      class="button-default" />
  </header>
</template>

<script>
import TaskButton from './TaskButton.vue';

export default {
  name: 'TaskHeader',
  components: {
    TaskButton,
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
  border-bottom: 1px solid black;
}
</style>