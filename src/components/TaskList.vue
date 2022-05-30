<template>
  <p>All Tasks</p>
  <div v-for="task in tasks" v-bind:key="task.id">
    <TaskItem @toggle-priority="$emit('toggle-priority', task.id)" @delete-task="$emit('delete-task', task.id)"
      v-bind:task='task' />
  </div>
</template>


<script>
import TaskItem from './TaskItem.vue';

export default {
  name: "TaskList",
  props: {
    tasks: Array,
  },
  components: { TaskItem },
  emits: ['delete-task', 'toggle-priority']
}
</script>

<style scoped>
p {
  margin-left: 10px;
  color: grey;
  font-weight: 400;
}
</style>