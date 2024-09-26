<template>
  <div class="course-detail">
    <h2>{{ courseDetails.title }}</h2>
    <p>{{ courseDetails.description }}</p>
    <p :style="{ color: 'red' }">動画プレーヤーの再生領域：動画をクリックすると、画面の下部に動画が表示されます。</p>
    <router-link to="/" class="home-button">
      <button>ホーム画面へ</button>
    </router-link>
      <div class="youtube-playlist playlist-1">
        <h3>１．Apache</h3>
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
        <h3>２．Azure</h3>
        <div class="video-thumbnails">
          <div
            v-for="video in playlistVideos2"
            :key="video.id"
            class="video-thumbnail"
            @click="openVideo(video.id)"
          >
            <img :src="video.thumbnail" alt="Video Thumbnail" />
            <p>{{ video.title }}</p>
          </div>
        </div>
      </div>

      <div class="youtube-playlist playlist-3">
        <h3>３．AWS</h3>
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
        { id: '7Z8ibl3MCwQ', title: 'WEBサーバーの仕組み入門｜ApacheやNginxなどWEBサーバーの基本を初心者向けに解説', thumbnail: 'https://img.youtube.com/vi/7Z8ibl3MCwQ/hqdefault.jpg' }
      ],
      playlistVideos2: [
        { id: 'OogiYJ4ogtY', title: 'Azure で始める Web アプリ/サービス開発再入門', thumbnail: 'https://img.youtube.com/vi/OogiYJ4ogtY/hqdefault.jpg' },
        { id: 'vcKr3RF2HOQ', title: 'Azure OpenAI入門基礎講座 Part1 - Azure Open AIの利用申請', thumbnail: 'https://img.youtube.com/vi/vcKr3RF2HOQ/hqdefault.jpg' },
        { id: 'RB98sxW-y7I', title: 'Azure OpenAI入門基礎講座 Part2 - モデル展開', thumbnail: 'https://img.youtube.com/vi/RB98sxW-y7I/hqdefault.jpg' },
        { id: 'OPNLpg4y-yE', title: 'Azure OpenAI入門基礎講座 Part3 - チャットプレイグラウンド', thumbnail: 'https://img.youtube.com/vi/OPNLpg4y-yE/hqdefault.jpg' },
        { id: 'VsIz3ENKboY', title: 'Azure OpenAI入門基礎講座 Part4 - パラメーターの理解', thumbnail: 'https://img.youtube.com/vi/VsIz3ENKboY/hqdefault.jpg' },
        { id: 'LzretpC4oDQ', title: 'Azure OpenAI入門基礎講座 Part6 - データを追加する(RAG)', thumbnail: 'https://img.youtube.com/vi/LzretpC4oDQ/hqdefault.jpg' },
        { id: 'wzPTEqLfhS4', title: 'Azure OpenAI入門基礎講座 Part7 - Webアプリ展開', thumbnail: 'https://img.youtube.com/vi/wzPTEqLfhS4/hqdefault.jpg' },
        { id: 'thwSMkiqBY4', title: 'Azure OpenAI入門基礎講座 Part8 - Copilot Studioへのエクスポート', thumbnail: 'https://img.youtube.com/vi/thwSMkiqBY4/hqdefault.jpg' },
        { id: '7q9XHQlSpH4', title: 'Azure OpenAI入門基礎講座 Part9 - DALL·Eプレイグラウンド', thumbnail: 'https://img.youtube.com/vi/7q9XHQlSpH4/hqdefault.jpg' },
        { id: 'KYDDSuUwCMI', title: 'Azure OpenAI入門基礎講座 Part10 - 入力候補プレイグラウンド', thumbnail: 'https://img.youtube.com/vi/KYDDSuUwCMI/hqdefault.jpg' },
        { id: 'fVWX54jWa_c', title: 'Azure OpenAI入門基礎講座 Part11 - アシスタントプレイグラウンド', thumbnail: 'https://img.youtube.com/vi/fVWX54jWa_c/hqdefault.jpg' },
        { id: 'sDp3-sKNc-Q', title: 'Azure OpenAI入門基礎講座 Part12 - 関数(Function Calling)', thumbnail: 'https://img.youtube.com/vi/sDp3-sKNc-Q/hqdefault.jpg' },
        { id: 'fJaMC90M3wU', title: 'Azure OpenAI入門基礎講座 Part13 - 関数(Function Calling) 後編', thumbnail: 'https://img.youtube.com/vi/fJaMC90M3wU/hqdefault.jpg' },
        { id: 'b5CCkM1RE-w', title: 'Azure OpenAI入門基礎講座 Part14 - Docker Desktopインストール', thumbnail: 'https://img.youtube.com/vi/b5CCkM1RE-w/hqdefault.jpg' },
        { id: 'ynirhK9XwaA', title: 'Azure OpenAI入門基礎講座 Part15 - Visual Studio Code インストール', thumbnail: 'https://img.youtube.com/vi/ynirhK9XwaA/hqdefault.jpg' },
        { id: '3rqyw6f04u8', title: 'Azure OpenAI入門基礎講座 Part16 - Git for Windows インストール', thumbnail: 'https://img.youtube.com/vi/3rqyw6f04u8/hqdefault.jpg' }
      ],
      playlistVideos3: [
        { id: 'xXWlSHuos-0', title: '-中堅・中小企業向け- やってみようシリーズ 15分で簡単早分かり構築デモ動画：Amazon EC2 で仮想サーバーを作成する', thumbnail: 'https://img.youtube.com/vi/xXWlSHuos-0/hqdefault.jpg' },
        { id: 'K7FElmt6Jq4', title: 'AWS EC2入門 #01： AWSを始めよう', thumbnail: 'https://img.youtube.com/vi/K7FElmt6Jq4/hqdefault.jpg' },
        { id: 'xXuAX1ctg9E', title: 'AWS EC2入門 #02： EC2に SSH接続して Apacheをインストールしよう', thumbnail: 'https://img.youtube.com/vi/xXuAX1ctg9E/hqdefault.jpg' },
        { id: '3ykzi358sK8', title: 'AWS EC2入門 #03： セキュリティグループを変更してブラウザーからアクセスしよう', thumbnail: 'https://img.youtube.com/vi/3ykzi358sK8/hqdefault.jpg' },
        { id: 'NJYdAygCp4M', title: 'AWS EC2入門 #04：EC2に、PHPをインストール。Vimを使ってファイルを作ろう', thumbnail: 'https://img.youtube.com/vi/NJYdAygCp4M/hqdefault.jpg' },
        { id: 'JZ74hVUh4Po', title: 'AWS EC2入門 #05：Elastic IPで固定IPを取ろう。IPアドレスってなに？', thumbnail: 'https://img.youtube.com/vi/JZ74hVUh4Po/hqdefault.jpg' },
        { id: 'IaE_V53O0ZM', title: 'AWS EC2入門 #06：WordPressをコマンドラインでセットアップしてみよう①', thumbnail: 'https://img.youtube.com/vi/IaE_V53O0ZM/hqdefault.jpg' },
        { id: '4UTJoMjGMVo', title: 'AWS EC2入門 #07：WordPressをコマンドラインでセットアップしてみよう②', thumbnail: 'https://img.youtube.com/vi/4UTJoMjGMVo/hqdefault.jpg' },
        { id: 'l1yA0JdVmMc', title: 'AWS EC2入門 #08：独自ドメインを取得してつなごう & DNSとドメインのしくみ', thumbnail: 'https://img.youtube.com/vi/l1yA0JdVmMc/hqdefault.jpg' }
      ]
    }
  },
  setup () {
    const route = useRoute()
    const courseId = route.params.id

    return {
      courseDetails: {
        id: courseId,
        title: '各種サーバー構築の研修',
        description: 'システム開発がスムーズに出来るように、基礎からきちんと学べる入門。',
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

.playlist-2 {
  background-color: #e3f2fd;
  border: 1px solid #bbdefb;
}

.playlist-3 {
  background-color: #ffe0b2;
  border: 1px solid #ffcc80;
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
