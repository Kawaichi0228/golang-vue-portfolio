<template>
  <v-container fluid class="test">
    <v-row class="main-visual__bg">
      <v-row align-content="center">
        <v-col cols="12">
          <!-- タイトル(キャッチコピー) -->
          <div class="home-contents__title">
            <h1 class="home-contents--padding">
              <div class="home-contents__title--text">日々のタスクを</div>
              <div class="home-contents__title--text">迅速に管理</div>
            </h1>
          </div>

          <!-- アプリの内容説明 -->
          <div class="home-contents__text home-contents--padding">
            {{
              pageTitle
            }}は、日々のタスクを迅速に管理するための機能を備えた無料のツールで、
            簡単で使いやすいコンセプトでデザインされています。
          </div>

          <v-row>
            <v-col cols="12" class="home-contents__btn">
              <v-btn class="primary white--text" x-large text to="/signup">
                <span class="mr-1">無料登録して使ってみる</span>
                <v-icon class="mt-1" dark>mdi-chevron-right-circle</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import { constants } from "@/utils/constants";

export default {
  data() {
    return {
      pageTitle: constants.pageTitle,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/base/_variables.scss";
@import "@/styles/base/_mixin.scss";
@import "@/styles/utils/_centering.scss";

// -------------------------------------------------------------------------
.container {
  padding: 0 !important;
}
.v-btn__content {
  line-height: 0 !important;
}

// -------------------------------------------------------------------------
.main-visual__bg {
  min-height: 450px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/photos/main-visual-bg-tab.png");

  @include tab {
    min-height: 450px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("@/assets/images/photos/main-visual-bg.png");
  }
}

.home-contents {
}
.home-contents__text {
  text-align: center;
  color: $color-gray;
  @include tab {
    text-align: left;
    max-width: 600px;
  }
}
.home-contents__title {
  text-align: center;
  @include tab {
    text-align: left;
  }
}
.home-contents__btn {
  @include center-horizontal;
  justify-content: center;
  @include tab {
    justify-content: left;
  }
}
.home-contents__title--text {
  display: block;
  @include tab {
    display: inline-block;
  }
}
.home-contents--padding {
  $line-indent: 1.8rem;
  margin-bottom: $line-indent;
}
</style>