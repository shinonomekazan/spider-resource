<template>
	<div class="my_detail">
		my/detail
		<ul>
			<li><router-link :to="{ name: 'myEdit' }">Contact</router-link></li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {},
})
export default class MyDetail extends Vue {}
</script>
