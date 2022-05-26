<template>
  <div class="container">
    <TaskHeader @toggle-add-task="toggleAddTask" title="hello" :showAddTask="showAddTask" />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <TaskList @toggle-priority="togglePriority" @delete-task="deleteTask" v-bind:tasks="tasks" />
  </div>
</template>

<script>
import TaskHeader from './components/TaskHeader.vue';
import TaskList from './components/TaskList.vue';
import AddTask from './components/AddTask.vue';

export default {
  name: 'App',
  components: {
    TaskHeader,
    TaskList,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    addTask(newTask) {
      this.tasks = [...this.tasks, newTask]
    },
    deleteTask(id) {
      if (confirm('Are you sure?')) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    togglePriority(id) {
      this.tasks = this.tasks.map((task) => task.id === id ? { ...task, priority: !task.priority } : task)
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Study for exams',
        deadline: 'May 27th',
        priority: false
      },
      {
        id: 2,
        text: 'Work on vue.js project',
        deadline: 'June 1st',
        priority: true
      },
      {
        id: 3,
        text: 'Arrange dentist appointment',
        deadline: 'May 27th',
        priority: true
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
  width: 500px;
  height: fit-content;
  margin: auto;
  padding: 10px 20px;
}
</style>
