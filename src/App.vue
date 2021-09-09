<template>
  <div id="app">
    <Nav/>
    <Students/>
    <Theacher/>
    <About/>
  </div>
</template>

<script>
import Students from './components/Student/Students';
import Theacher from './components/Teacher/Teacher'
import About from './components/About/About'
import Nav from './components/_nav/Nav';

export default {
  name: 'App',
  components: {
    Students,
    Theacher,
    About,
    Nav
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f3f3f3;
}

#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
  margin: auto;
  max-width: 600px;
  padding: 0 5px;
}
</style>
