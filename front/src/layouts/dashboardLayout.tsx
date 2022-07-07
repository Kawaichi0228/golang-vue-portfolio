import Vue, { VueConstructor } from "vue";
import { VApp, VAppBar, VContent } from "vuetify/lib";

// ユーザー定義コンポーネント
import DashboardHeader from "@/components/globals/DashboardHeader.vue";

export function dashboardLayout(PageComponent: VueConstructor<Vue>) {
  return Vue.extend({
    inheritAttrs: false,

    components: {
      PageComponent,
      VApp,
      VAppBar,
      VContent,

      // ユーザー定義コンポーネント
      DashboardHeader,
    },

    render() {
      return (
        <v-app>
          <DashboardHeader />
          <v-content>
            <PageComponent propsData={this.$attrs} />
          </v-content>
        </v-app>
      );
    },
  });
}
