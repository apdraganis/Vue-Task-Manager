<template>
  <header>
    <h2>Task Manager</h2>
    <span>
      <font-awesome-icon @click="$emit('toggle-theme')" class="head-icon" icon="sun" />
    </span>
  </header>
</template>

<script>
export default {
  name: 'TaskHeader',
  props: {
    title: String,
    showAddTask: Boolean,
    darkTheme: Boolean
  },
  // computed: {
  //   homePage() {
  //     if (this.$route.path === '/') {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
  // },
};
</script>