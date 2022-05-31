<template>
  <p v-if="mode === 'home'">All Tasks</p>
  <p v-else-if="mode === 'favorites'">High Priority Tasks</p>
  <div v-show="mode === 'home'" v-for="task in tasks" v-bind:key="task.id">
    <TaskItem @toggle-priority="$emit('toggle-priority', task.id)" @delete-task="$emit('delete-task', task.id)"
      v-bind:task='task' />
  </div>
  <div v-show="mode === 'favorites'" v-for="task in tasks" v-bind:key="task.id">
    <TaskItem v-if="task.priority === true" @toggle-priority="$emit('toggle-priority', task.id)"
      @delete-task="$emit('delete-task', task.id)" v-bind:task='task' />
  </div>
</template>


<script>
import TaskItem from './TaskItem.vue';

export default {
  name: "TaskList",
  props: {
    tasks: Array,
    mode: String
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