<template>
  <h1>Test Component</h1>

  <div>
    <h2>Image imported within main app thread:</h2>
    <textarea rows="10" cols="50">
      {{ imageBase64 }}
    </textarea>
  </div>

  <div>
    <h2>Image imported within web worker:</h2>
    <textarea rows="10" cols="50">
      {{ workerImage }}
    </textarea>
  </div>
</template>

<script>
import logo from '../assets/logo.png';
import Worker from '../worker.js?worker&inline';


export default {
  name: 'TestComponent',
  data() {
    return {
      imageBase64: logo,
      workerImage: '',
      worker: new Worker(),
    };
  },
  mounted() {
    this.worker.onmessage = (e) => {
      this.workerImage = e.data;
    }

    this.worker.postMessage('ping');
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
