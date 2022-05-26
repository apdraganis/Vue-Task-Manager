<template>
  <form class="form-add">
    <div class="form-control">
      <label>Task</label>
      <input type="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Deadline</label>
      <input type="date" />
    </div>
    <div>
      <label>Is this a high priorty task?</label>
      <input type="checkbox">
    </div>
    <input type="submit" class="button-submit" />
  </form>
</template>

<script>
export default {
  name: 'AddTask'
}

</script>