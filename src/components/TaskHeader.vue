<template>
  <header>
    <h1>Task Manager</h1>
    <TaskButton @btn-click="$emit('toggle-add-task')" :buttonText="showAddTask ? 'Close' : 'Add Task'"
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