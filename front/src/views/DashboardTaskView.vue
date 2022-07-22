<template>
  <div class="pa-6">
    <v-toolbar color="gray" flat>
      <v-toolbar-title>タスク一覧</v-toolbar-title>
      <v-divider class="mx-3" inset vertical></v-divider>

      <!-- リスト更新ボタン -->
      <v-icon @click="getAll_task()">mdi-refresh</v-icon>
      <v-spacer></v-spacer>

      <!-- 検索フィールド -->
      <v-text-field v-model="search" append-icon="mdi-magnify" label="検索したいワードを入力" single-line hide-details>
      </v-text-field>

      <!-- 新規追加ボタン -->
      <v-divider class="mx-3" inset vertical></v-divider>
      <v-btn @click="dialog = true" color="accent" dark>
        <v-icon left>mdi-pencil-plus</v-icon>
        <span>新規作成</span>
      </v-btn>
    </v-toolbar>

    <!-- データテーブル -->
    <v-data-table :headers="headers" :items="taskList" :search="search"
      :footer-props="{ 'items-per-page-text': '表示行数/ページ:' }" class="elevation-1">
      <template v-slot:[`item.action`]="{ item }">
        <!-- 編集ボタン -->
        <v-icon class="mr-2" @click="openCreateAndUpdateDialog(item.task_id, item.text)">
          mdi-square-edit-outline
        </v-icon>

        <!-- 削除ボタン -->
        <v-icon @click="openDeleteDialog(item.task_id)">
          mdi-trash-can-outline
        </v-icon>
      </template>

      <!-- 検索結果なしの時の表示 -->
      <v-alert slot="no-results" :value="true" color="secondary" dark icon="mdi-alert-circle-outline">
        "{{ search }}" の検索結果はありませんでした
      </v-alert>

      <!-- データなしの時の表示 -->
      <template slot="no-data"> データがありません </template>
    </v-data-table>

    <!-- 入力ダイアログのレイアウト -->
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-form v-model="valid" lazy-validation>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex>
                    <v-text-field v-model="selectedTask.text" label="タスク内容" :counter="100" required>
                    </v-text-field>
                    <!--<v-text-field v-model="selectedTask.text" label="タスク内容" :rules="textRules" :counter="100" required>-->
                    <!--</v-text-field>-->
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" min-width="90px" dark @click="save()" :disabled="!valid">保存</v-btn>
              <v-btn color="secondary" min-width="90px" dark @click="close()">キャンセル</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </v-layout>

    <!-- 削除確認ダイアログのレイアウト -->
    <v-layout row justify-center>
      <v-dialog v-model="deleteDialog" color="primary" persistent max-width="280px">
        <v-card>
          <v-container>
            <v-row class="text-center py-2" justify="center">
              <v-card-text> 削除してよろしいですか？ </v-card-text>
              <v-card-actions>
                <v-btn color="primary" min-width="90px" dark @click="delete_task()">削除</v-btn>
                <v-btn color="secondary" min-width="90px" dark @click="close()">キャンセル</v-btn>
              </v-card-actions>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import log from 'loglevel';
import { getUserInfo } from "@/utils/userAxios";

// リポジトリの生成
import { RepositoryFactory } from "@/repository/RepositoryFactory";
const TaskRepository = RepositoryFactory.get("task");

export default {
  name: "ListTemplate",

  created() {
    this.getAll_task();
  },

  data() {
    return {
      // タスク一覧用の配列
      //   MEMO: v-forを使いたいときは{}より[]のほうがよい
      taskList: [],

      // ユーザー一覧用のオブジェクト
      userData: {},

      // テーブルヘッダ
      headers: [
        { text: "番号", align: "left", value: "task_id", sortable: true },
        { text: "タスク", align: "left", value: "text", sortable: true },
        { text: "操作", align: "left", value: "action", sortable: false },
      ],

      // 選択中のレコードの値
      selectedTask: {
        ID: -1,
        text: "",
      },

      // レコードの初期値
      defaultValue: {
        ID: -1,
        text: "",
      },

      search: "", // フィルタリング検索キーワード
      dialog: false, // 新規＆更新入力フォーム
      deleteDialog: false, // 削除確認ダイアログ
      valid: false, // バリデーション結果

      textRules: [
        (v) => !!v || "入力してください",
        (v) => v.length <= 100 || "タスク内容は100文字までです",
      ],
    };
  },

  methods: {
    // 指定ユーザーの全タスクを取得(削除データを除く)
    async getAll_task() {
      const res = await TaskRepository.getAll().catch((err) => {
        return err.response;
      });
      if (res.status !== 200) {
        console.warn("タスク取得に失敗しました");
        return;
      }
      log.info("タスク取得に成功しました");
      log.info(res.data);

      // 取得したデータをdata()へ格納
      this.taskList = res.data.data;
    },

    // タスクを作成
    async create_task(text) {
      // json作成
      const formData = {
        text: text,
      };

      const res = await TaskRepository.create(formData).catch((err) => {
        return err.response;
      });
      if (res.status !== 200) {
        console.warn("タスク作成に失敗しました");
        this.close();
        return;
      }
      log.info("タスク作成に成功しました");
      log.info(res.data);

      // タスク一覧を更新
      await this.getAll_task();
    },

    // タスクを更新
    async update_task(id, text) {
      const formData = {
        ID: id,
        text: text,
      };

      const res = await TaskRepository.update(formData.ID, formData).catch(
        (err) => {
          return err.response;
        }
      );
      if (res.status !== 200) {
        console.warn("タスク更新に失敗しました");
        this.close();
        return;
      }
      log.info("タスク更新に成功しました");
      log.info(res.data);

      // タスク一覧を更新
      await this.getAll_task();
    },

    // タスクを削除
    async delete_task() {
      // 削除したいタスクのIDを定義
      const targetID = this.selectedTask.ID;

      // 削除の通信処理
      const res = await TaskRepository.delete(targetID).catch((err) => {
        return err.response;
      });
      if (res.status !== 200) {
        console.warn("タスク削除に失敗しました");
        this.close();
        return;
      }
      log.info("タスク削除に成功しました");
      log.info(res.data);

      // タスク一覧を更新
      this.getAll_task();

      // ダイアログを閉じる
      this.close();
    },

    // ユーザ情報を取得
    async getUserInfo() {
      const res = await getUserInfo().catch((err) => {
        return err.response;
      });
      // 取得したデータをdata()へ格納
      this.userData = res;
    },

    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    openCreateAndUpdateDialog(id, text) {
      // テーブルから選択されたデータを、dataプロパティにいったん格納しておく(別のmethodsから値を利用するため)
      this.selectedTask.ID = id;
      this.selectedTask.text = text;

      // ダイアログを表示する
      this.dialog = true;
    },

    // 削除ダイアログ
    openDeleteDialog(id) {
      // テーブルから選択されたデータを、dataプロパティにいったん格納しておく(別のmethodsから値を利用するため)
      this.selectedTask.ID = id;

      // ダイアログを表示する
      this.deleteDialog = true;
    },

    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // ダイアログの保存ボタンが押されたときの処理
    save() {
      // IDが初期値のまま(=テーブルから選択がされていない状態)ならcreateメソッドを実行する
      if (this.selectedTask.ID === -1) {
        // 作成
        this.create_task(this.selectedTask.text);
      } else {
        // 更新
        this.update_task(this.selectedTask.ID, this.selectedTask.text);
      }
      this.close();
    },

    // ダイアログのキャンセルボタンが押されたときの処理
    close() {
      this.dialog = false;
      this.deleteDialog = false;
      setTimeout(() => {
        this.selectedTask = Object.assign({}, this.defaultValue);
      }, 500);
    },
  },

  computed: {
    // ダイアログのタイトルを作成と更新で使い分ける
    formTitle() {
      return this.selectedTask.ID === -1 ? "新しいタスク" : "タスクの編集";
    },
  },
};
</script>

<style scoped>
</style>
