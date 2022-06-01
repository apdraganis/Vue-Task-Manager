<template>

  <TaskList mode="favorites" @toggle-priority="togglePriority" @delete-task="deleteTask" v-bind:tasks="tasks" />
  <AddTask v-show="showAddTask" @add-task="addTask" />
</template>

<script>
import TaskList from '../components/Tasks/TaskList.vue';
import AddTask from '../components/AddTask.vue';

export default {
  name: 'HomeVue',
  props: {
    showAddTask: Boolean
  },
  components: {
    AddTask,
    TaskList
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    async deleteTask(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE'
        })

        res.status === 200 ? this.tasks = this.tasks.filter((task) => task.id !== id) : alert('Error deleting task..')
      }
    },
    async addTask(newTask) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newTask),
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },
    async togglePriority(id) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = { ...taskToToggle, priority: !taskToToggle.priority }

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })

      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, priority: data.priority } : task)
    },
    async fetchTasks() {
      const response = await fetch('api/tasks');
      const data = await response.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    }
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
}
</script>