<template>
  <div class="resource_detail">
    resource/detail
    <ul>
      <li><router-link :to="{ name: 'resourceContact', params: {id: id}}">Contact</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class ResourceDetail extends Vue {
  @Prop() id!: string;
}
</script>
