<template>
  <v-container>
    <div>
      <h2>東雲火山の稼働状況</h2>
    </div>
    <v-tabs color="cyan" dark grow slider-color="yellow">
      <v-tab ripple>
        リソースグラフ
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>ほげほげ</v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab ripple>
        週表示
      </v-tab>
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

@Component({
  components: {}
})
export default class ResourceDetail extends Vue {
  @Prop() id!: string;
}
</script>
