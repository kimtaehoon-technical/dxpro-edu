<template>
  <div class="course-detail">
    <h2>{{ courseDetails.title }}</h2>
    <p>{{ courseDetails.description }}</p>
    <p :style="{ color: 'red' }">動画プレーヤーの再生領域：動画をクリックすると、画面の下部に動画が表示されます。</p>
    <router-link to="/" class="home-button">
      <button>ホーム画面へ</button>
    </router-link>
      <div class="youtube-playlist playlist-1">
        <h3>１．C#を始める</h3>
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
        { id: '9Rcw9_KaqlI', title: '10分で作るWindowsアプリ!! VisualStudioを使用してデスクトップアプリを作ります。', thumbnail: 'https://img.youtube.com/vi/9Rcw9_KaqlI/hqdefault.jpg' },
        { id: '8eEvloG5WxM', title: '#02 C# VisualStudioでつくる Windowsアプリ 10分で習得 ボタンイベント', thumbnail: 'https://img.youtube.com/vi/8eEvloG5WxM/hqdefault.jpg' },
        { id: 'lpW8fHhv0Go', title: '#03 C# VisualStudioでつくる Windowsアプリ 変数を学習する GitHubも使用します', thumbnail: 'https://img.youtube.com/vi/lpW8fHhv0Go/hqdefault.jpg' },
        { id: 'HmBuSoasTCU', title: '#04 C# VisualStudioでつくる Windowsアプリ チェックボックスで学ぶIF文', thumbnail: 'https://img.youtube.com/vi/HmBuSoasTCU/hqdefault.jpg' },
        { id: 'w4SZIVNJjzo', title: '#05 C# VisualStudioでつくる Windowsアプリ Method講座 C#のメソッドについて説明します。VisualStudio .net Frameworkを使用して実演します。', thumbnail: 'https://img.youtube.com/vi/w4SZIVNJjzo/hqdefault.jpg' },
        { id: '8PmlHY_tPyQ', title: '#06 C# VisualStudioでつくる Windowsアプリ 繰返し処理講座!! C#のFOR文、WHILE文について説明します。.net Frameworkの開発環境です。', thumbnail: 'https://img.youtube.com/vi/8PmlHY_tPyQ/hqdefault.jpg' },
        { id: 'jzxUkDlfKpw', title: '#07 C# VisualStudioでつくる Windowsアプリ コンボボックスの使い方について説明します。.net Frameworkの開発環境です。', thumbnail: 'https://img.youtube.com/vi/jzxUkDlfKpw/hqdefault.jpg' },
        { id: 'x-gGlIeH7Bk', title: '#08 C# VisualStudioでつくる Windowsアプリ メッセージボックスの使い方について説明します。.net Frameworkの開発環境です。', thumbnail: 'https://img.youtube.com/vi/x-gGlIeH7Bk/hqdefault.jpg' },
        { id: '09CDOOrLcCk', title: '#09 C# VisualStudioでつくる Windowsアプリ メニューストリップ(メインメニュー)の使い方について説明します。.net Frameworkの開発環境です。MenuStrip', thumbnail: 'https://img.youtube.com/vi/09CDOOrLcCk/hqdefault.jpg' },
        { id: 'adQVWOZdOyw', title: '#10 C# VisualStudioでつくる Windowsアプリ ラジオボタン(RadioButton)の使い方について説明します。.net Frameworkの開発環境です。', thumbnail: 'https://img.youtube.com/vi/adQVWOZdOyw/hqdefault.jpg' },
        { id: 'VX1Z00TXzcQ', title: '#11 C# VisualStudioでつくる Windowsアプリ Exeファイル(外部アプリ)の実行方法を説明します .net Frameworkの開発環境です。', thumbnail: 'https://img.youtube.com/vi/VX1Z00TXzcQ/hqdefault.jpg' }
      ]
    }
  },
  setup () {
    const route = useRoute()
    const courseId = route.params.id

    return {
      courseDetails: {
        id: courseId,
        title: 'C#のベーシック研修',
        description: 'プログラミングが出来るように、基礎からきちんと学べる入門。',
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
