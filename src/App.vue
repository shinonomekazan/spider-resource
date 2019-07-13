<template>
	<v-app>
		<v-toolbar app>
			<v-toolbar-title class="headline text-uppercase">
				<router-link :to="{ name: 'home' }"
					><span>SPIDER RESOURCE</span></router-link
				>
			</v-toolbar-title>
			<v-spacer></v-spacer>

			<v-btn flat to="/my"><span class="mr-2">マイページ</span></v-btn>
			<v-btn flat to="/resources"><span class="mr-2">リソース検索</span></v-btn>
			<v-btn flat to="/about"><span class="mr-2">About</span></v-btn>
		</v-toolbar>

		<v-content>
			<router-view />
		</v-content>
	</v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {}
</script>

<style lang="stylus" scoped>
.v-toolbar__title a
  text-decoration none
  color inherit
</style>
