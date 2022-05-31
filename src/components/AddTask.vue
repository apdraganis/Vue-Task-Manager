<template>
  <form @submit="onSubmit" class="form-add">
    <div class="form-control">
      <label>Task</label>
      <input type="text" name="text" v-model="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Deadline</label>
      <input type="date" name="deadline" v-model="deadline" />
    </div>
    <div>
      <label>Is this a high priorty task?</label>
      <input type="checkbox" name="priority" v-model="priority">
    </div>
    <input type="submit" class="button-submit" />
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      priority: false
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()

      if (!this.text) {
        alert('Please add a task')
        return
      }

      const newTask = {
        text: this.text,
        deadline: this.deadline,
        priority: this.priority
      }

      this.$emit('add-task', newTask)

      this.text = ''
      this.deadline = ''
      this.priority = false
    }
  }
}

</script>