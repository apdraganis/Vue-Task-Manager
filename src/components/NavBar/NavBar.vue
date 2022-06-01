<template>
  <footer>
    <ul>
      <li>
        <router-link @click="$emit('close-add-task')" style="text-decoration: none; color: inherit;" to="/">
          <font-awesome-icon icon="house" />
        </router-link>
      </li>
      <li id="addtask">
        <AddButton @toggle-add-task="$emit('toggle-add-task')" />
      </li>
      <li>
        <router-link @click="$emit('close-add-task')" style="text-decoration: none; color: inherit;" to="/favorites">
          <font-awesome-icon icon="star" />
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
import AddButton from './AddButton.vue';

export default {
  name: 'NavBar',
  components: {
    AddButton
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  padding: 15px 0px 10px 0px;
  margin: auto;
}

li#addtask>* {
  color: #6577B3;
  font-size: 35px;
  border: none;
}

li>* {
  font-size: 25px;
  cursor: pointer;
}

li>*:hover {
  transform: scale(1.1);
  transition: 0.3s;
}
</style>