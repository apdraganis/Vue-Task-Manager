<template>
  <h3>{{ task.text }}</h3>
  <p>{{ task.day }}</p>
  <TaskButton class="button-default" buttonText='Update Task' />
  <TaskButton class="button-delete" buttonText='Delete Task' />
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
  }
}
</script>