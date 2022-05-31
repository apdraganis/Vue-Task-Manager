<template>
  <div class="wrapper">
    <div>
      <h4 @dblclick="$emit('toggle-priority', task.id)" :class="task.priority === true ? 'priority-task' : ''">{{
          task.text
      }}</h4>
      <p>Deadline: {{ task.deadline }}</p>
    </div>
    <div class="btns">
      <TaskButton class="button-default" buttonText='Update' />
      <TaskButton @click="$emit('delete-task', task.id)" class="button-delete" buttonText='Delete' />
    </div>
  </div>
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
.wrapper {

  border-radius: 12px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  padding: 10px 15px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
}

h4 {
  margin-top: 0px;
  cursor: pointer;
  user-select: none;
}

.btns {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>