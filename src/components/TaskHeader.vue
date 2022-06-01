<template>
  <nav>
    <h2>Task Manager</h2>
    <span>
      <font-awesome-icon @click="$emit('toggle-theme')" class="nav-icon" icon="sun" />
    </span>
  </nav>
</template>

<script>
export default {
  name: 'TaskHeader',
  props: {
    title: String,
    showAddTask: Boolean,
    darkTheme: Boolean
  },
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  },
};
</script>