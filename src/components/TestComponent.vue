<template>
  <h1>Test Component</h1>

  <textarea rows="10" cols="50">
    {{ imageBase64 }}
  </textarea>
</template>

<script>
import logo from '../assets/logo.png';


export default {
  name: 'TestComponent',
  data() {
    return {
      imageBase64: logo,
    };
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
