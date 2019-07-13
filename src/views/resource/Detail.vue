<template>
	<v-container>
		<div>
			<h2>東雲火山の稼働状況</h2>
		</div>
		<v-tabs color="cyan" dark grow slider-color="yellow">
			<v-tab ripple>リソースグラフ</v-tab>
			<v-tab-item>
				<v-layout wrap>
					<v-flex xs12 class="mb-3">
						<v-sheet height="500">
							<v-calendar
								ref="calendar"
								v-model="start"
								:type="type"
								:end="end"
								:now="today"
								color="primary"
							></v-calendar>
						</v-sheet>
					</v-flex>

					<v-flex sm4 xs12 class="text-sm-left text-xs-center">
						<v-btn @click="$refs.calendar.prev()">
							<v-icon dark left>keyboard_arrow_left</v-icon>Prev
						</v-btn>
					</v-flex>
					<v-flex sm4 xs12 class="text-xs-center">
						<v-select
							v-model="type"
							:items="calendarOptions.options"
							label="Type"
						></v-select>
					</v-flex>
					<v-flex sm4 xs12 class="text-sm-right text-xs-center">
						<v-btn @click="$refs.calendar.next()">
							Next
							<v-icon right dark>keyboard_arrow_right</v-icon>
						</v-btn>
					</v-flex>
				</v-layout>
			</v-tab-item>

			<v-tab ripple>週表示</v-tab>
			<v-tab-item>
				<v-card flat>
					<v-card-text>ふがふが</v-card-text>
				</v-card>
			</v-tab-item>
		</v-tabs>
		<div>
			<v-flex xs12>
				<v-card>
					<v-card-title>
						<div>
							<h3>株式会社東雲火山</h3>
							<div>
								<p>ほげほげな会社です。</p>
							</div>
						</div>
					</v-card-title>
					<v-card-actions>
						<div>
							<v-btn flat :to="{ name: 'resourceContact', params: { id: id } }"
								>問い合わせ</v-btn
							>
						</div>
						<div>
							<v-btn
								flat
								href="https://shinonomekazan.com"
								target="_spider_resource_web"
								>WEB</v-btn
							>
						</div>
					</v-card-actions>
				</v-card>
			</v-flex>
		</div>
	</v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

function createDateString(date?: Date | number) {
	const now =
		date == null
			? new Date()
			: typeof date === "number"
				? new Date(date)
				: date;
	return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
}

@Component({
	components: {},
})
export default class ResourceDetail extends Vue {
	@Prop() id!: string;
	get calendarOptions() {
		return {
			options: [{ text: "週", value: "week" }, { text: "月", value: "month" }],
		};
	}
	get today() {
		return Date.now();
	}

	start: string = createDateString();
	end: string = "";
	type: string = "week";
}
</script>
