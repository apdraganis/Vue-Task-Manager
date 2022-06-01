<template>
  <div class="container" v-bind:class="{ darkTheme: darkTheme }">
    <TaskHeader @toggle-theme="toggleTheme" />
    <router-view :showAddTask="showAddTask"></router-view>
    <NavBar @close-add-task="closeAddTask" @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
  </div>
</template>

<script>
import './style/style.scss'; // Is this good practice? 
import TaskHeader from './components/TaskHeader.vue';
import NavBar from './components/NavBar/NavBar.vue';

export default {
  name: 'App',
  components: {
    TaskHeader,
    NavBar
  },
  data() {
    return {
      showAddTask: false,
      darkTheme: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    toggleTheme() {
      this.darkTheme = !this.darkTheme
    },
    closeAddTask() {
      this.showAddTask = false
    }
  },
}
</script>
