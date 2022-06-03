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
    <div id="priority-task">
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
      deadline: '',
      priority: false
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()

      if ((!this.text) || (!this.deadline)) {
        alert('Task title or deadline missing...')
        return
      }

      const newTask = {
        text: this.text,
        deadline: this.deadline,
        priority: false
      }

      console.log(JSON.stringify(newTask))

      this.$emit('add-task', newTask)

      this.text = ''
      this.deadline = ''
      this.priority = false
    }
  }
}

</script>