<template>
  <main>
    <p v-if="mode === 'home'">All Tasks</p>
    <p v-else-if="mode === 'favorites'">High Priority Tasks</p>
    <ul class="item-list" v-show="mode === 'home'">
      <TaskItem v-for="task in tasks" v-bind:key="task._id" @toggle-priority="$emit('toggle-priority', task._id)"
        @delete-task="$emit('delete-task', task._id)" v-bind:task='task' />
    </ul>
    <ul class="item-list" v-show="mode === 'favorites'">
      <TaskItem v-for="task in tasks" v-show="task.priority" v-bind:key="task._id"
        @toggle-priority="$emit('toggle-priority', task._id)" @delete-task="$emit('delete-task', task._id)"
        v-bind:task='task' />
    </ul>
  </main>
</template>


<script>
import TaskItem from './TaskItem.vue';

export default {
  name: "TaskList",
  props: {
    tasks: Array,
    mode: String
  },
  components: { TaskItem },
  emits: ['delete-task', 'toggle-priority']
}
</script>