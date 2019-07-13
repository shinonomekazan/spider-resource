<template>
	<div class="resource_search">
		resource/search
		<ul>
			<li>
				<router-link :to="{ name: 'resourceDetail', params: { id: 1 } }"
					>detail</router-link
				>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {},
})
export default class ResourceSearch extends Vue {}
</script>
