import Vue, { VueConstructor } from "vue";
import { VApp, VAppBar, VContent } from "vuetify/lib";

// ユーザー定義コンポーネント
import FrontHeader from "@/components/globals/FrontHeader.vue";
import ButtonScrollTop from "@/components/atoms/ButtonScrollTop.vue";

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
      ButtonScrollTop,
    },

    render() {
      return (
        <v-app>
          <FrontHeader />
          <v-content>
            <PageComponent propsData={this.$attrs} />
          </v-content>
          <ButtonScrollTop />
        </v-app>
      );
    },
  });
}
