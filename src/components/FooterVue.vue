<template>
  <footer>
    <p>Copyright &copy; 2022</p>
    <p>Coded by <a href="https://apdraganis.netlify.app/">Apostolos Draganis</a></p>
    <!-- <router-link to="/about">About</router-link> -->
  </footer>
</template>

<script>
export default {
  name: 'FooterVue',
}
</script>

<style scope>
footer {
  display: flex;
  justify-content: space-between;
}

footer a {
  text-decoration: none;
  font-weight: bold;
  color: inherit;
}
</style>