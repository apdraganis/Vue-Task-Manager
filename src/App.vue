<template>
  <div class="container">
    <TaskHeader @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
    <router-view :showAddTask="showAddTask"></router-view>
    <NavBar />
  </div>
</template>

<script>
import TaskHeader from './components/TaskHeader.vue';
import NavBar from './components/NavBar.vue';

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
