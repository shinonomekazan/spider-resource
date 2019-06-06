<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>
      <ul>
        <li><router-link :to="{name: 'myDetail', params: {}}">my/</router-link></li>
        <li><router-link :to="{name: 'myEdit', params: {}}">my/edit</router-link></li>
        <li><router-link :to="{name: 'resourceSearch', params: {}}">resource</router-link></li>
        <li><router-link :to="{name: 'resourceDetail', params: {id: '1'}}">resource/:id</router-link></li>
        <li><router-link :to="{name: 'resourceContact', params: {id: '1'}}">resource/:id/contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
