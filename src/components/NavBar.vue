<template>
  <ul>
    <li>
      <font-awesome-icon icon="house" />
    </li>
    <li id="addtask">
      <font-awesome-icon icon="circle-plus" />
    </li>
    <li>
      <font-awesome-icon icon="star" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavBar',
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
}

li>* {
  font-size: 25px;
}
</style>