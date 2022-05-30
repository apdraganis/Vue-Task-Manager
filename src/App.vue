<template>
  <div class="container">
    <TaskHeader @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />

    <router-view :showAddTask="showAddTask"></router-view>
    <FooterVue />
  </div>
</template>

<script>
import TaskHeader from './components/TaskHeader.vue';
import FooterVue from './components/FooterVue.vue';

export default {
  name: 'App',
  components: {
    TaskHeader,
    FooterVue
  },
  data() {
    return {
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    }
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
  width: 500px;
  height: fit-content;
  margin: auto;
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgb(232, 242, 255);
  margin-top: 100px;
}
</style>
