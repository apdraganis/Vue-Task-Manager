<template>
  <div class="wrapper">
    <div>
      <h4 @dblclick="$emit('toggle-priority', task.id)" :class="task.priority === true ? 'priority-task' : ''">{{
          task.text
      }}</h4>
      <p>Deadline: {{ task.deadline }}</p>
    </div>
    <div class="btns">
      <font-awesome-icon icon="trash-can" />
    </div>
  </div>
</template>


<script>
// import TaskButton from './TaskButton.vue';

export default {
  name: 'TaskItem',
  props: {
    task: Object
  },
  // components: {
  //   TaskButton,
  // },
}
</script>

<style scoped>
/* .btns {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
} */
</style>