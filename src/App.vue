<template>
  <div class="container">
    <TaskHeader title="hello" />
    <TaskList v-bind:tasks="tasks" />
  </div>
</template>

<script>
import TaskHeader from './components/TaskHeader.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: {
    TaskHeader,
    TaskList,
  },
  data() {
    return {
      tasks: [],
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Study for exams',
        day: 'May 27th',
      },
      {
        id: 2,
        text: 'Work on vue.js project',
        day: 'June 1st',
      },
      {
        id: 3,
        text: 'Arrange dentist appointment',
        day: 'May 27th',
      }
    ]
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  border: 1px solid black;
}
</style>


