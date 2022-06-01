<template>
  <li class="item-wrapper">
    <div>
      <h4 @dblclick="$emit('toggle-priority', task.id)" :class="task.priority === true ? 'priority-task' : ''">{{
          task.text
      }}</h4>
      <p>Deadline: {{ task.deadline }}</p>
    </div>
    <div id="btn-delete">
      <font-awesome-icon @click="$emit('delete-task')" icon="trash-can" />
    </div>
  </li>
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