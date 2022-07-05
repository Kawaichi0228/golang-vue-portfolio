import Vue, { VueConstructor } from "vue";
import { VApp, VAppBar, VContent } from "vuetify/lib";

// ユーザー定義コンポーネント
import FrontHeader from "@/components/globals/FrontHeader.vue";
import ScrollTopButton from "@/components/parts/ScrollTopButton.vue";

export function frontLayout(PageComponent: VueConstructor<Vue>) {
  return Vue.extend({
    inheritAttrs: false,

    components: {
      PageComponent,
      VApp,
      VAppBar,
      VContent,

      // ユーザー定義コンポーネント
      FrontHeader,
      ScrollTopButton,
    },

    render() {
      return (
        <v-app>
          <FrontHeader />
          <v-content>
            <PageComponent propsData={this.$attrs} />
          </v-content>
          <ScrollTopButton />
        </v-app>
      );
    },
  });
}
