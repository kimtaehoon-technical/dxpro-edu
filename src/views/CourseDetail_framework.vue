<template>
  <div class="course-detail">
    <h2>{{ courseDetails.title }}</h2>
    <p>{{ courseDetails.description }}</p>
    <p :style="{ color: 'red' }">動画プレーヤーの再生領域：動画をクリックすると、画面の下部に動画が表示されます。</p>
    <router-link to="/" class="home-button">
      <button>ホーム画面へ</button>
    </router-link>
      <div class="youtube-playlist playlist-1">
        <h3>１．JAVA - SPRINGフレームワーク</h3>
        <div class="video-thumbnails">
          <div
            v-for="video in playlistVideos"
            :key="video.id"
            class="video-thumbnail"
            @click="openVideo(video.id)"
          >
            <img :src="video.thumbnail" alt="Video Thumbnail" />
            <p>{{ video.title }}</p>
          </div>
        </div>
      </div>

      <div class="youtube-playlist playlist-2">
        <h3>２．JAVA - STRUCTS</h3>
        <div class="link-card">
          <p><b>①Structs</b></p>
          <p>下記のサイトを参照してください。</p>
          <a href="https://qiita.com/ebichan_88/items/aaae17e72d068517f33f" target="_blank">
            Structs入門
          </a><br>
        </div>
        <div class="link-card">
          <p><b>②Structs2</b></p>
          <p>下記のサイトを参照してください。</p>
          <a href="https://qiita.com/Keichan_15/items/cf98f4ba9a61916047ce" target="_blank">
            Structs2入門（1）～インストールなど。基本設定～
          </a><br>
          <a href="https://codezine.jp/article/detail/2296" target="_blank">
            Struts 2入門（2）～基本形で理解する仕組みと構造～
          </a>
        </div>
      </div>
      <div class="youtube-playlist playlist-3">
        <h3>３．JavaScript - Node.js(Express.js)</h3>
        <div class="video-thumbnails">
          <div
            v-for="video in playlistVideos3"
            :key="video.id"
            class="video-thumbnail"
            @click="openVideo(video.id)"
          >
            <img :src="video.thumbnail" alt="Video Thumbnail" />
            <p>{{ video.title }}</p>
          </div>
        </div>
      </div>
      <div class="youtube-playlist playlist-4">
        <h3>４．Ruby on Rails</h3>
        <div class="video-thumbnails">
          <div
            v-for="video in playlistVideos4"
            :key="video.id"
            class="video-thumbnail"
            @click="openVideo(video.id)"
          >
            <img :src="video.thumbnail" alt="Video Thumbnail" />
            <p>{{ video.title }}</p>
          </div>
        </div>
      </div>
      <div class="youtube-playlist playlist-5">
        <h3>５．PHP - Laravel</h3>
        <div class="video-thumbnails">
          <div
            v-for="video in playlistVideos5"
            :key="video.id"
            class="video-thumbnail"
            @click="openVideo(video.id)"
          >
            <img :src="video.thumbnail" alt="Video Thumbnail" />
            <p>{{ video.title }}</p>
          </div>
        </div>
      </div>
      <div class="youtube-playlist playlist-6">
        <h3>６．Python - Django</h3>
        <div class="video-thumbnails">
          <div
            v-for="video in playlistVideos6"
            :key="video.id"
            class="video-thumbnail"
            @click="openVideo(video.id)"
          >
            <img :src="video.thumbnail" alt="Video Thumbnail" />
            <p>{{ video.title }}</p>
          </div>
        </div>
      </div>
      <div class="youtube-playlist playlist-1">
        <h3>７．.NET FrameWork</h3>
        <div class="video-thumbnails">
          <div
            v-for="video in playlistVideos7"
            :key="video.id"
            class="video-thumbnail"
            @click="openVideo(video.id)"
          >
            <img :src="video.thumbnail" alt="Video Thumbnail" />
            <p>{{ video.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="currentVideoId" class="video-player">
      <iframe
        width="100%"
        height="600"
        :src="`https://www.youtube.com/embed/${currentVideoId}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  mounted () {
    window.scrollTo(0, 0)
  },
  data () {
    return {
      courses: [
      ],
      currentVideoId: '',
      playlistVideos: [
        { id: '85wTwNAbWao', title: '【Spring Bootで作るWebアプリ | part1】作っていくシステムの概要について【初学者向け】', thumbnail: 'https://img.youtube.com/vi/85wTwNAbWao/hqdefault.jpg' },
        { id: 'moiNMYif628', title: '【Spring Bootで作るWebアプリ | part2】統合開発環境をインストールしよう！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/moiNMYif628/hqdefault.jpg' },
        { id: 'QTBsCxqGAPc', title: '【Spring Bootで作るWebアプリ | part3】プログラムの実行環境を作成しよう！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/QTBsCxqGAPc/hqdefault.jpg' },
        { id: '8Kjdn_pqdO8', title: '【Spring Bootで作るWebアプリ | part4】画面を表示してみよう！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/8Kjdn_pqdO8/hqdefault.jpg' },
        { id: 'xA_LTUI6X1o', title: '【Spring Bootで作るWebアプリ | part4 補足】GetMappingの別実装方法について【初学者向け】', thumbnail: 'https://img.youtube.com/vi/xA_LTUI6X1o/hqdefault.jpg' },
        { id: 'Usf1sh0pTWQ', title: '【Spring Bootで作るWebアプリ | part5】ログイン画面の入力値を受け取る！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/Usf1sh0pTWQ/hqdefault.jpg' },
        { id: 'RbrCJYm82lQ', title: '【Spring Bootで作るWebアプリ | part6】ログイン成功時、失敗時の処理を実装する！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/RbrCJYm82lQ/hqdefault.jpg' },
        { id: 'ai5HILL2P6Q', title: '【Spring Bootで作るWebアプリ | part7】開発用PCにデータベースを構築する！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/ai5HILL2P6Q/hqdefault.jpg' },
        { id: 'F7AuKgTwWTg', title: '【Spring Bootで作るWebアプリ | part8】Spring Data JPAを使ってデータベースにアクセスする！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/F7AuKgTwWTg/hqdefault.jpg' },
        { id: 'FBNjjnrjHsc', title: '【Spring Bootで作るWebアプリ | part9】ソースコードにコメントを書いてみよう！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/FBNjjnrjHsc/hqdefault.jpg' },
        { id: 'Qt3bjKItFac', title: '【Spring Bootで作るWebアプリ | part10】ハッシュ化したパスワードの比較処理を実装する！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/Qt3bjKItFac/hqdefault.jpg' },
        { id: 'eoRxkHsSn2w', title: '【Spring Bootで作るWebアプリ | part11】エラーメッセージをプロパティファイルで管理する【初学者向け】', thumbnail: 'https://img.youtube.com/vi/eoRxkHsSn2w/hqdefault.jpg' },
        { id: '8v8Ybbcde_k', title: '【Spring Bootで作るWebアプリ | part12】DBのユーザー情報テーブルへ登録を行う処理を実装する！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/8v8Ybbcde_k/hqdefault.jpg' },
        { id: 'PkdLDPSdeiE', title: '【Spring Bootで作るWebアプリ | part13】テーブルデータ登録前のキー重複チェックを実装する！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/PkdLDPSdeiE/hqdefault.jpg' },
        { id: 'xCgxL0Y6ZBE', title: '【Spring Bootで作るWebアプリ | part14】Bootstrapを使って画面レイアウトを整えよう！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/xCgxL0Y6ZBE/hqdefault.jpg' },
        { id: '-dpgVjhmnsA', title: '【Spring Bootで作るWebアプリ | part15】Bootstrapをもう少し詳しく知ろう！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/-dpgVjhmnsA/hqdefault.jpg' },
        { id: '-vS_vw0Tygo', title: '【Spring Bootで作るWebアプリ | part16】画面メッセージに適用するcssを動的に切り替える！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/-vS_vw0Tygo/hqdefault.jpg' },
        { id: 'PZCidbWXahc', title: '【Spring Bootで作るWebアプリ | part17】htmlの共通部品を作成して、それを取り込む！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/PZCidbWXahc/hqdefault.jpg' },
        { id: 'GdZP9Hpqv5E', title: '【Spring Bootで作るWebアプリ | part18】アノテーションで超簡単！入力チェックを実装する！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/GdZP9Hpqv5E/hqdefault.jpg' },
        { id: 'gIffdze1xho', title: '【Spring Bootで作るWebアプリ | part19】Spring Securityを使ってログイン処理を実装！(①Spring Securityの導入)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/gIffdze1xho/hqdefault.jpg' },
        { id: 'nxHJEDXsZcg', title: '【Spring Bootで作るWebアプリ | part20】Spring Securityを使ってログイン処理を実装する！(②認証状態に応じた画面遷移制御)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/nxHJEDXsZcg/hqdefault.jpg' },
        { id: 'ZdI3YGKt5FA', title: '【Spring Bootで作るWebアプリ | 番外編】Spring Securityの全体的な処理の流れについて！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/ZdI3YGKt5FA/hqdefault.jpg' },
        { id: 'IseJ96qnHP8', title: '【Spring Bootで作るWebアプリ | part21】Spring Securityを使ってログイン処理を実装する！(③DB登録ユーザを用いた認証処理)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/IseJ96qnHP8/hqdefault.jpg' },
        { id: '2JjEeps7CAY', title: '【Spring Bootで作るWebアプリ | part22】Spring Securityを使ってログイン処理を実装する！(④デフォルトエラーメッセージの変更)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/2JjEeps7CAY/hqdefault.jpg' },
        { id: 'uuliDnXa6MM', title: '【Spring Bootで作るWebアプリ | part23】Spring Securityを使ってログイン処理を実装する！(⑤パスワード認証以外のチェック処理実装)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/uuliDnXa6MM/hqdefault.jpg' },
        { id: 'NyuBxvqoyI8', title: '【Spring Bootで作るWebアプリ | part24】プロパティファイルの設定値を取得する！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/NyuBxvqoyI8/hqdefault.jpg' },
        { id: 'VJZVZSKqxlA', title: '【Spring Bootで作るWebアプリ | part25】Spring Securityを使ってログアウト処理を実装する！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/VJZVZSKqxlA/hqdefault.jpg' },
        { id: 'l1B0qOTxIQA', title: '【Spring Bootで作るWebアプリ | part26】Spring Securityを使ってログイン中のユーザー情報を取得する！(①概要説明編)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/l1B0qOTxIQA/hqdefault.jpg' },
        { id: 'FscpHmaiTEw', title: '【Spring Bootで作るWebアプリ | part27】Spring Securityを使ってログイン中のユーザー情報を取得する！(②実装編)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/FscpHmaiTEw/hqdefault.jpg' },
        { id: '9RBls1VZqC0', title: '【Spring Bootで作るWebアプリ | part28】より良いJavadocの書き方を知ろう！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/9RBls1VZqC0/hqdefault.jpg' },
        { id: 'irQpQC8CDo8', title: '【Spring Bootで作るWebアプリ | part29】DIの仕組みを知ろう！【初学者向け】', thumbnail: 'https://img.youtube.com/vi/irQpQC8CDo8/hqdefault.jpg' },
        { id: 'XAcOi-BLUCg', title: '【Spring Bootで作るWebアプリ | part30】AOPについて学ぼう！(①解説編)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/XAcOi-BLUCg/hqdefault.jpg' },
        { id: 'aySDpKmxAZ0', title: '【Spring Bootで作るWebアプリ | part31】AOPについて学ぼう！(②実装編)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/aySDpKmxAZ0/hqdefault.jpg' },
        { id: 'yYNbKLvn-B8', title: '【Spring Bootで作るWebアプリ | part32】ユーザー一覧画面を実装する！(画面紹介編)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/yYNbKLvn-B8/hqdefault.jpg' },
        { id: '6ic6cW1IE24', title: '【Spring Bootで作るWebアプリ | part33】ユーザー一覧画面を実装する！(実装編①)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/6ic6cW1IE24/hqdefault.jpg' },
        { id: '5N5Qb2lUkbY', title: '【Spring Bootで作るWebアプリ | part34】ユーザー一覧画面を実装する！(実装編②)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/5N5Qb2lUkbY/hqdefault.jpg' },
        { id: 'U3CF9dou8FA', title: '【Spring Bootで作るWebアプリ | part35】ユーザー一覧画面を実装する！(実装編③)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/U3CF9dou8FA/hqdefault.jpg' },
        { id: '9WGieJkQe9U', title: '【Spring Bootで作るWebアプリ | part35(補足)】ユーザー一覧画面を実装する！(実装編③)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/9WGieJkQe9U/hqdefault.jpg' },
        { id: '2DLZKnhM_ag', title: '【Spring Bootで作るWebアプリ | part36】ユーザー一覧画面を実装する！(実装編④)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/2DLZKnhM_ag/hqdefault.jpg' },
        { id: 'OeBPLZx7xHo', title: '【Spring Bootで作るWebアプリ | part37】ユーザー一覧画面を実装する！(実装編⑤)【初学者向け】', thumbnail: 'https://img.youtube.com/vi/OeBPLZx7xHo/hqdefault.jpg' },
        {
          id: '2QtQdVWTInU',
          title: '【Spring Bootで作るWebアプリ | part38】ユーザー一覧画面を実装する！(実装編⑥)【初学者向け】',
          thumbnail: 'https://img.youtube.com/vi/2QtQdVWTInU/hqdefault.jpg'
        },
        {
          id: '5DHOqPkB4ew',
          title: '【Spring Bootで作るWebアプリ | part37(補足)】ユーザー一覧画面を実装する！(実装編⑤)【初学者向け】',
          thumbnail: 'https://img.youtube.com/vi/5DHOqPkB4ew/hqdefault.jpg'
        },
        {
          id: 'gaVK2dpv1Eo',
          title: '【Spring Bootで作るWebアプリ | part39】既存ソースを修正する！【初学者向け】',
          thumbnail: 'https://img.youtube.com/vi/gaVK2dpv1Eo/hqdefault.jpg'
        },
        {
          id: 'ftNBfNfN4Is',
          title: '【Spring Bootで作るWebアプリ | part40】ユーザー編集画面を実装する！【初学者向け】',
          thumbnail: 'https://img.youtube.com/vi/ftNBfNfN4Is/hqdefault.jpg'
        },
        {
          id: 'PawIXyhTnyc',
          title: '【Spring Bootで作るWebアプリ | part41】ユーザー編集画面を修正する！【初学者向け】',
          thumbnail: 'https://img.youtube.com/vi/PawIXyhTnyc/hqdefault.jpg'
        },
        {
          id: 'Z98dl-15Yn4',
          title: '【Spring Bootで作るWebアプリ | part42】メール送信処理を実装する！(準備編)【初学者向け】',
          thumbnail: 'https://img.youtube.com/vi/Z98dl-15Yn4/hqdefault.jpg'
        },
        {
          id: 'I3KCtL9d_G4',
          title: '【Spring Bootで作るWebアプリ | part43】メール送信処理を実装する！（実装方法、処理フロー説明編）【初学者向け】',
          thumbnail: 'https://img.youtube.com/vi/I3KCtL9d_G4/hqdefault.jpg'
        },
        {
          id: '_MQ0NtH8uiw',
          title: '【Spring Bootで作るWebアプリ | part44】メール送信処理を実装する！（実装編）【初学者向け】',
          thumbnail: 'https://img.youtube.com/vi/_MQ0NtH8uiw/hqdefault.jpg'
        },
        {
          id: 'c97lGH9CcwA',
          title: '【Spring Bootで作るWebアプリ | part45】PRGパターンって何？！【初学者向け】',
          thumbnail: 'https://img.youtube.com/vi/c97lGH9CcwA/hqdefault.jpg'
        },
        {
          id: 'lMwE1PeC8g8',
          title: '【Spring Bootで作るWebアプリ | part46】仮登録状態ユーザーのログインをエラーとする！【初学者向け】',
          thumbnail: 'https://img.youtube.com/vi/lMwE1PeC8g8/hqdefault.jpg'
        },
        {
          id: 'Bm4IeuOpZ9E',
          title: '【Spring Bootで作るWebアプリ | part47】既存ソースを改修する！【初学者向け】',
          thumbnail: 'https://img.youtube.com/vi/Bm4IeuOpZ9E/hqdefault.jpg'
        }

      ],

      playlistVideos3: [
        { id: 'nSXnif14lVo', title: '初めてのNode.js入門！環境構築からWebサーバーを作ってみよう！', thumbnail: 'https://img.youtube.com/vi/nSXnif14lVo/hqdefault.jpg' },
        { id: '6KT9T73-Iik', title: 'Node.jsとexpressでチャットアプリケーションを作ってみよう！', thumbnail: 'https://img.youtube.com/vi/6KT9T73-Iik/hqdefault.jpg' },
        { id: 'Zk7tpzaKv0U', title: '【Express入門】Node.jsでWebアプリケーションの作り方を１から学ぼう！', thumbnail: 'https://img.youtube.com/vi/Zk7tpzaKv0U/hqdefault.jpg' }
      ],
      playlistVideos4: [
        { id: 'AKrW0Oog4xo', title: '【Ruby on Rails入門 #1】つまづきやすいRuby on Railsのインストール手順を解説します【ポテパンキャンプの初心者向けプログラミング学習講座】', thumbnail: 'https://img.youtube.com/vi/AKrW0Oog4xo/hqdefault.jpg' },
        { id: '_qKH4QMaBDA', title: '【Ruby on Rails入門 #2】Ruby on RailsのMVCについて解説します！【ポテパンキャンプの初心者向けプログラミング学習講座】', thumbnail: 'https://img.youtube.com/vi/_qKH4QMaBDA/hqdefault.jpg' },
        { id: '_fdBCI-brx8', title: '【Ruby on Rails入門 #3】モデルの役割とデータベースとの関わりを理解しよう！【ポテパンキャンプの初心者向けプログラミング学習講座】', thumbnail: 'https://img.youtube.com/vi/_fdBCI-brx8/hqdefault.jpg' },
        { id: '1BufFqTbhyU', title: '【Ruby on Rails入門 #4】Railsのメイン機能！CRUD処理について解説していきます！【ポテパンキャンプの初心者向けプログラミング学習講座】', thumbnail: 'https://img.youtube.com/vi/1BufFqTbhyU/hqdefault.jpg' },
        { id: 'OuzKbvLPc7M', title: '【Ruby on Rails入門 #5】Railsコントローラーの実務で使える応用機能4つのご紹介【ポテパンキャンプの初心者向けプログラミング学習講座】', thumbnail: 'https://img.youtube.com/vi/OuzKbvLPc7M/hqdefault.jpg' },
        { id: 'qo8YMk1MVKQ', title: '【Ruby on Rails入門 #6】MVCラスト！RailsのMVCのViewについて勉強していきます！【ポテパンキャンプの初心者向けプログラミング学習講座】', thumbnail: 'https://img.youtube.com/vi/qo8YMk1MVKQ/hqdefault.jpg' },
        { id: 'gejPY7TgDVw', title: '【Ruby on Rails入門 #7】Rails総復習編！基礎をおさらいして実践課題に取り組みます！【ポテパンキャンプの初心者向けプログラミング学習講座】', thumbnail: 'https://img.youtube.com/vi/gejPY7TgDVw/hqdefault.jpg' },
        { id: 'F6OpZgy1Opc', title: '【Ruby on Rails入門 #8】Railsでスケジュール管理サイトを作成！まずはルーティングを設定してみましょう！【ポテパンキャンプの初心者向けプログラミング学習講座】', thumbnail: 'https://img.youtube.com/vi/F6OpZgy1Opc/hqdefault.jpg' },
        { id: 'g01xVZgQAfg', title: '【Ruby on Rails入門 #9】Railsでスケジュール管理サイトを作成！投稿データを表示してみましょう！【ポテパンキャンプの初心者向けプログラミング学習講座】', thumbnail: 'https://img.youtube.com/vi/g01xVZgQAfg/hqdefault.jpg' },
        { id: 'Or-2yDGwQtc', title: '【Ruby on Rails入門 #10】Railsでスケジュール管理サイトを作成！投稿作成機能を実装してみましょう【ポテパンキャンプの初心者向けプログラミング学習講座】', thumbnail: 'https://img.youtube.com/vi/Or-2yDGwQtc/hqdefault.jpg' },
        { id: '6O-gqkJ7FCY', title: '【Ruby on Rails入門 #11】Railsでスケジュール管理サイトを作成！投稿編集機能を実装してみましょう【ポテパンキャンプの初心者向けプログラミング学習講座】', thumbnail: 'https://img.youtube.com/vi/6O-gqkJ7FCY/hqdefault.jpg' },
        { id: 'CiGpUkCisUU', title: '【Ruby on Rails入門 #12】Railsでスケジュール管理サイトを作成！投稿削除機能を実装してみましょう【ポテパンキャンプの初心者向けプログラミング学習講座】', thumbnail: 'https://img.youtube.com/vi/CiGpUkCisUU/hqdefault.jpg' }
      ],
      playlistVideos5: [
        { id: 'p1bGCZkz25c', title: 'Laravel入門 その1「開発環境を整える(XAMMP編)」', thumbnail: 'https://img.youtube.com/vi/p1bGCZkz25c/hqdefault.jpg' },
        { id: 'iydjREwuaTc', title: 'Laravel入門 その2「ルーティング」', thumbnail: 'https://img.youtube.com/vi/iydjREwuaTc/hqdefault.jpg' },
        { id: '1uOavQlUFt8', title: 'Laravel入門 その3「コントローラーとビューの基本」', thumbnail: 'https://img.youtube.com/vi/1uOavQlUFt8/hqdefault.jpg' },
        { id: 'fkpnf_VLATQ', title: 'Laravel入門 その4「Bladeテンプレートエンジン(1)」', thumbnail: 'https://img.youtube.com/vi/fkpnf_VLATQ/hqdefault.jpg' },
        { id: 'UcCm4-lHq7M', title: 'Laravel入門 その5「Bladeテンプレートエンジン(2)」', thumbnail: 'https://img.youtube.com/vi/UcCm4-lHq7M/hqdefault.jpg' },
        { id: '5EIQc0D3bDM', title: 'Laravel入門 その6「Bladeテンプレートエンジン(3)」', thumbnail: 'https://img.youtube.com/vi/5EIQc0D3bDM/hqdefault.jpg' },
        { id: 'vaBN_0C1P0I', title: 'Laravel入門 その7「データベース(MySQL)の設定」', thumbnail: 'https://img.youtube.com/vi/vaBN_0C1P0I/hqdefault.jpg' },
        { id: 'Bb1cGNuW-NU', title: 'Laravel入門 その8「マイグレーション(1)」', thumbnail: 'https://img.youtube.com/vi/Bb1cGNuW-NU/hqdefault.jpg' },
        { id: 'gxIZ-fDHulw', title: 'Laravel入門 その9「マイグレーション(2)」', thumbnail: 'https://img.youtube.com/vi/gxIZ-fDHulw/hqdefault.jpg' },
        { id: '2lkoWjIbtV4', title: 'Laravel入門 その10「シーディング」', thumbnail: 'https://img.youtube.com/vi/2lkoWjIbtV4/hqdefault.jpg' },
        { id: 'kxFT45bCDRM', title: 'Laravel入門 その11「クエリビルダー(1)」', thumbnail: 'https://img.youtube.com/vi/kxFT45bCDRM/hqdefault.jpg' },
        { id: 'nLOkCVkuBH0', title: 'Laravel入門 その12「クエリビルダー(2)」', thumbnail: 'https://img.youtube.com/vi/nLOkCVkuBH0/hqdefault.jpg' },
        { id: 'k0lwPBSRrZw', title: 'Laravel入門 その13「Eloquent(1)」', thumbnail: 'https://img.youtube.com/vi/k0lwPBSRrZw/hqdefault.jpg' },
        { id: 'hWHWZv7HHfI', title: 'Laravel入門 その14「Eloquent(2)」', thumbnail: 'https://img.youtube.com/vi/hWHWZv7HHfI/hqdefault.jpg' },
        { id: 'udhhRokJ3WQ', title: 'Laravel入門 その15「Eloquent(3)」', thumbnail: 'https://img.youtube.com/vi/udhhRokJ3WQ/hqdefault.jpg' },
        { id: 'yhCbZU8zvxA', title: 'Laravel入門 その16「Eloquent(4)」', thumbnail: 'https://img.youtube.com/vi/yhCbZU8zvxA/hqdefault.jpg' },
        { id: '3rrqmqk7GrE', title: 'Laravel入門 その17「Eloquent(5)」', thumbnail: 'https://img.youtube.com/vi/3rrqmqk7GrE/hqdefault.jpg' },
        { id: 'e32mrFRNuGo', title: 'Laravel入門 その18「ユーザーの入力データを受け取る」', thumbnail: 'https://img.youtube.com/vi/e32mrFRNuGo/hqdefault.jpg' },
        { id: 'R0-0ouSHaos', title: 'Laravel入門 その19「ファイルアップロード」', thumbnail: 'https://img.youtube.com/vi/R0-0ouSHaos/hqdefault.jpg' },
        { id: 'AOLMQt5rSOc', title: 'Laravel入門 その20「バリデーション(1)」', thumbnail: 'https://img.youtube.com/vi/AOLMQt5rSOc/hqdefault.jpg' },
        { id: 'Y-SnD6dBUl0', title: 'Laravel入門 その21「バリデーション(2)」', thumbnail: 'https://img.youtube.com/vi/Y-SnD6dBUl0/hqdefault.jpg' },
        { id: 'HzjPW8dpWF8', title: 'Laravel入門 その22「Eloquentのマスアサインメント」', thumbnail: 'https://img.youtube.com/vi/HzjPW8dpWF8/hqdefault.jpg' },
        { id: 'KIEnt74WJiw', title: 'Laravel入門 その23「ユーザー認証(1)」', thumbnail: 'https://img.youtube.com/vi/KIEnt74WJiw/hqdefault.jpg' },
        { id: 'UgJigO5LPR8', title: 'Laravel入門 その24「ユーザー認証(2)」', thumbnail: 'https://img.youtube.com/vi/UgJigO5LPR8/hqdefault.jpg' },
        { id: 'uFEcsmIArQA', title: 'Laravel入門 その25「メール送信」', thumbnail: 'https://img.youtube.com/vi/uFEcsmIArQA/hqdefault.jpg' },
        { id: 'ob4dDgjz2cQ', title: 'Laravel入門 その26「ソーシャルログイン(1/4)」', thumbnail: 'https://img.youtube.com/vi/ob4dDgjz2cQ/hqdefault.jpg' },
        { id: 'cR65fl6oC4w', title: 'Laravel入門 その27「ソーシャルログイン(2/4)」', thumbnail: 'https://img.youtube.com/vi/cR65fl6oC4w/hqdefault.jpg' },
        { id: 'ObkhHWLGe8g', title: 'Laravel入門 その28「ソーシャルログイン(3/4)」', thumbnail: 'https://img.youtube.com/vi/ObkhHWLGe8g/hqdefault.jpg' },
        { id: '_j8EXGuztL4', title: 'Laravel入門 その29「ソーシャルログイン(4/4)」', thumbnail: 'https://img.youtube.com/vi/_j8EXGuztL4/hqdefault.jpg' }
      ],
      playlistVideos6: [
        { id: 'nS41IkL13QE', title: 'Pythonでウェブサービスを作ろう！ 初心者向けdjangoチュートリアル #1', thumbnail: 'https://img.youtube.com/vi/nS41IkL13QE/hqdefault.jpg' },
        { id: 'b6XnrM_zK1s', title: 'テンプレートをマスターしよう！ | 初心者向けdjangoチュートリアル #2', thumbnail: 'https://img.youtube.com/vi/b6XnrM_zK1s/hqdefault.jpg' },
        { id: 'USjyUtGD9xg', title: '静的ファイルを配信しよう！ | 初心者向けdjangoチュートリアル #3', thumbnail: 'https://img.youtube.com/vi/USjyUtGD9xg/hqdefault.jpg' },
        { id: 'vV_eUbaEH2A', title: '本番公開しよう！初心者向けdjangoチュートリアル #4', thumbnail: 'https://img.youtube.com/vi/vV_eUbaEH2A/hqdefault.jpg' },
        { id: 'k3feQcc6bFw', title: 'データベースと接続しよう！ 初心者向けdjangoチュートリアル #5', thumbnail: 'https://img.youtube.com/vi/k3feQcc6bFw/hqdefault.jpg' },
        { id: 'gHSftWxp988', title: 'ブログを作って学ぶモデル入門！ | djangoチュートリアル #6', thumbnail: 'https://img.youtube.com/vi/gHSftWxp988/hqdefault.jpg' },
        { id: 'vdYNqug44rc', title: 'これが汎用ビューの力！最小コードでウェブサービスを作ろう | djangoチュートリアル #7', thumbnail: 'https://img.youtube.com/vi/vdYNqug44rc/hqdefault.jpg' },
        { id: '0WIoJor2Hhg', title: 'djangoフォームを自由自在に操ろう！ | djangoチュートリアル #8', thumbnail: 'https://img.youtube.com/vi/0WIoJor2Hhg/hqdefault.jpg' },
        { id: 'gpByOYi7nzk', title: 'djangoを最大限使って効率よくログインを作ろう！ | djangoチュートリアル #9', thumbnail: 'https://img.youtube.com/vi/gpByOYi7nzk/hqdefault.jpg' },
        { id: 'yl-OXaAiwGU', title: 'ログイン完成！サインアップ & メール認証 | django チュートリアル #10', thumbnail: 'https://img.youtube.com/vi/yl-OXaAiwGU/hqdefault.jpg' },
        { id: 'ZrLmqwT0O7I', title: 'Mailgunと接続してメールを送信しよう！ | djangoチュートリアル #11', thumbnail: 'https://img.youtube.com/vi/ZrLmqwT0O7I/hqdefault.jpg' },
        { id: '1s_G8SNrT2c', title: '実務で即戦力の管理サイトの使い方！（前編）| djangoチュートリアル #12', thumbnail: 'https://img.youtube.com/vi/1s_G8SNrT2c/hqdefault.jpg' },
        { id: 'S6kZ4kZY7mU', title: 'モデル一覧ページのカスタマイズ - 管理サイト 中編 | djangoチュートリアル #13', thumbnail: 'https://img.youtube.com/vi/S6kZ4kZY7mU/hqdefault.jpg' },
        { id: 'P7xroiLnOfQ', title: 'モデル作成ページ & JSロード方法も - 管理サイト後編 | djangoチュートリアル #14', thumbnail: 'https://img.youtube.com/vi/P7xroiLnOfQ/hqdefault.jpg' },
        { id: 'BVVwsJnNyY8', title: 'データベースマイグレーション前編 | djangoチュートリアル #15', thumbnail: 'https://img.youtube.com/vi/BVVwsJnNyY8/hqdefault.jpg' },
        { id: 'Sc-uc2UXijs', title: 'データベースマイグレーション後編 | djangoチュートリアル #16', thumbnail: 'https://img.youtube.com/vi/Sc-uc2UXijs/hqdefault.jpg' },
        { id: 'gSg27Ok3xWI', title: 'ビューとレスポンスの基本 〜HTML以外を表示してみよう〜 | djangoチュートリアル #17', thumbnail: 'https://img.youtube.com/vi/gSg27Ok3xWI/hqdefault.jpg' },
        { id: 'fYBwPf_50kw', title: 'CSV・PDF・JSONレスポンス | djangoチュートリアル #18', thumbnail: 'https://img.youtube.com/vi/fYBwPf_50kw/hqdefault.jpg' }
      ],
      playlistVideos7: [
        { id: 'iHOt7wt-ono', title: 'ASP.NET MVC5によるWEBアプリケーション入門①(WEBアプリケーションを作ってみる1)', thumbnail: 'https://img.youtube.com/vi/iHOt7wt-ono/hqdefault.jpg' },
        { id: '1-3EynnZT6g', title: 'ASP.NET MVC5によるWEBアプリケーション入門②(WEBアプリケーションを作ってみる2)', thumbnail: 'https://img.youtube.com/vi/1-3EynnZT6g/hqdefault.jpg' }
      ]
    }
  },
  setup () {
    const route = useRoute()
    const courseId = route.params.id

    return {
      courseDetails: {
        id: courseId,
        title: '各種フレームワーク研修',
        description: '各種フレームワークの基本概念と利点を理解し、適切な場面での活用方法を学ぶ。',
        image: 'course1.jpg'
      }
    }
  },
  methods: {
    openVideo (videoId: string) {
      this.currentVideoId = videoId
    }
  }
})
</script>

<style scoped>
.course-detail {
  text-align: center;
  padding: 20px;
}

.course-detail img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.youtube-playlist {
  margin-top: 20px;
}

.video-thumbnails {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.video-thumbnail {
  margin: 10px;
  cursor: pointer;
  text-align: center;
  width: 300px;
  height: auto;
  overflow: hidden;
}

.video-thumbnail img {
  width: 300px;
  height: 180px;
  object-fit: cover;
}

.video-player {
  margin-top: 20px;
}

.playlist-1 {
  background-color: #e8f5e9;
  border: 1px solid #c8e6c9;
}

.youtube-playlist.playlist-2 {
  background-color: #e3f2fd;
  border: 1px solid #bbdefb;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.youtube-playlist.playlist-2 h3 {
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #333;
}

.youtube-playlist.playlist-2 p {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 10px;
}

.youtube-playlist.playlist-2 a {
  display: block;
  font-size: 1.1em;
  color: #1a73e8;
  margin-bottom: 10px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.youtube-playlist.playlist-2 a:hover {
  color: #0a5dc2;
}

.youtube-playlist.playlist-2 a::before {
  content: "🔗 ";
}

.link-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.link-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.playlist-3 {
  background-color: #ffe0b2;
  border: 1px solid #ffcc80;
}

.playlist-4 {
  background-color: #f6ffb2;
  border: 1px solid #e7f250;
}

.playlist-5 {
  background-color: #b2fffa;
  border: 1px solid #65b4df;
}

.playlist-6 {
  background-color: #e0b2ff;
  border: 1px solid #e380ff;
}

.home-button {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
}

.home-button button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.home-button button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}

.home-button button:active {
  transform: translateY(0);
}

</style>
