<template>
  <div v-for="task in tasks" v-bind:key="task.id">
    <TaskItem v-bind:task='task' />
  </div>
</template>


<script>
import TaskItem from './TaskItem.vue';

export default {
  name: "TaskList",
  props: {
    tasks: Array,
  },
  components: { TaskItem }
}
</script>