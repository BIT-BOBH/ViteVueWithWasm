<script setup>
import { ref } from 'vue'
import webassembly from '../webassembly'
defineProps({
  msg: String
})

const count = ref(0)
let CallFib = ()=>{
  let res = webassembly.Fib(6);
  alert("Fib(6) is " + res);
}

console.log("Hello!");
console.log(import.meta.env);
console.log(import.meta.env.VITE_BOBH);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="CallFib()">Call fib() from wasm!</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
