<template>
  <nav>
    <h2>Task Manager</h2>
    <span>
      <font-awesome-icon class="nav-icon" icon="user" />
      <font-awesome-icon class="nav-icon" icon="gear" />
    </span>
  </nav>
</template>

<script>
export default {
  name: 'TaskHeader',
  props: {
    title: String,
    showAddTask: Boolean
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
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    },
    logout() {
      this.$auth0.logout({ returnTo: window.location.origin });
    }
  }
};
</script>