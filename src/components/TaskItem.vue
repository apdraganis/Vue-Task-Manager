<template>
  <div class="wrapper">
    <div>
      <h3 @dblclick="$emit('toggle-priority', task.id)" :class="task.priority === true ? 'priority-task' : ''">{{
          task.text
      }}</h3>
      <p>Deadline: {{ task.deadline }}</p>
    </div>
    <div class="btns">
      <TaskButton class="button-default" buttonText='Update Task' />
      <TaskButton @click="$emit('delete-task', task.id)" class="button-delete" buttonText='Delete Task' />
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 10px 15px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
}

h3 {
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