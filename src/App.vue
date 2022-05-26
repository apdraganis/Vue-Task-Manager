<template>
  <div class="container">
    <TaskHeader title="hello" />
  </div>
</template>

<script>
import TaskHeader from './components/TaskHeader.vue';

export default {
  name: 'App',
  components: {
    TaskHeader,
  },
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


