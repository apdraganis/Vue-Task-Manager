<template>
  <h3 @dblclick="$emit('toggle-priority', task.id)" :class="task.priority === true ? 'priority-task' : ''">{{ task.text
  }}</h3>
  <p>{{ task.deadline }}</p>
  <TaskButton class="button-default" buttonText='Update Task' />
  <TaskButton @click="$emit('delete-task', task.id)" class="button-delete" buttonText='Delete Task' />
</template>


<script>
import TaskButton from './TaskButton.vue';

export default {
  name: 'TaskItem',
  props: {
    task: Object
  },
  components: {
    TaskButton,
  },
}
</script>

<style scoped>
h3 {
  cursor: pointer;
  user-select: none;
}
</style>