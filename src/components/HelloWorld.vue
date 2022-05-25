<template>
  <h2>{{ firstName }} {{ lastName }}</h2>
  <h2>Email: {{ email }}</h2>
  <h3><img :src="picture" :alt="`${firstName} ${lastName}`"></h3>
  <button v-on:click="showUser()">Show Random User</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },
  methods: {
    showUser() {
      this.firstName = 'Sam',
        this.lastName = 'Smith',
        this.email = 'jedi@gmail.com',
        this.gender = 'Unknown',
        this.picture = 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    props: {
      msg: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

/* CSS */
button {
  align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s, transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
}

button:focus {
  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
}

button:hover {
  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  transform: translateY(-2px);
}

button:active {
  box-shadow: #3c4fe0 0 3px 7px inset;
  transform: translateY(2px);
}

img {
  border-radius: 28px;
}
</style>
