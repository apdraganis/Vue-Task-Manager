<template>
  <div class="container">
    <TaskHeader />
    <router-view :showAddTask="showAddTask"></router-view>
    <NavBar @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
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
