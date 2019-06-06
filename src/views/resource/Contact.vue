<template>
  <div class="resource_contact">
    resource/contact
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ResourceContact extends Vue {
  @Prop() id!: string;
}
</script>
