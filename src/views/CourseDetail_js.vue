<template>
  <div class="course-detail">
    <h2>{{ courseDetails.title }}</h2>
    <p>{{ courseDetails.description }}</p>

    <router-link to="/" class="home-button">
      <button>ホーム画面へ</button>
    </router-link>
      <div class="youtube-playlist playlist-1">
        <h3>１．Vue.jsを始める</h3>
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
        <h3>２．Angular.jsを始める</h3>
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
        <h3>３．React.jsを始める</h3>
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
        { id: 'cL3Al628mLE', title: 'Vue.js入門 #01： 一番最初のプログラム', thumbnail: 'https://img.youtube.com/vi/cL3Al628mLE/hqdefault.jpg' },
        { id: 'TTAsbt0Ed-Q', title: 'Vue.js入門 #02： 最初のプログラム解説', thumbnail: 'https://img.youtube.com/vi/TTAsbt0Ed-Q/hqdefault.jpg' },
        { id: 'MYhgkaCEdYo', title: 'Vue.js入門 #03：if構文とディレクティブ', thumbnail: 'https://img.youtube.com/vi/MYhgkaCEdYo/hqdefault.jpg' },
        { id: 'qzFJfekigY8', title: 'Vue.js入門 #04：Vue.jsによる属性の書き換え', thumbnail: 'https://img.youtube.com/vi/qzFJfekigY8/hqdefault.jpg' },
        { id: 'jdcZ3LvTs78', title: 'Vue.js入門 #05：ボタンクリックで現在時刻を表示する - v-onディレクティブ', thumbnail: 'https://img.youtube.com/vi/jdcZ3LvTs78/hqdefault.jpg' },
        { id: 'lZGtYit4wLc', title: 'Vue.js入門 #06：配列の内容を繰り返し表示する - v-for', thumbnail: 'https://img.youtube.com/vi/lZGtYit4wLc/hqdefault.jpg' },
        { id: 'S0b1ZBIooyY', title: 'Vue.js入門 #07：Vue.jsの動きにアニメーションを追加しよう', thumbnail: 'https://img.youtube.com/vi/S0b1ZBIooyY/hqdefault.jpg' },
        { id: 'vD7fZY2F_Kc', title: 'Vue.js入門 #08：コンポーネントで再利用可能なパーツを作ろう', thumbnail: 'https://img.youtube.com/vi/vD7fZY2F_Kc/hqdefault.jpg' }
      ],
      playlistVideos2: [
        { id: '4xtwOikp72M', title: 'AngularJS with ASP.Net MVC - Part 00', thumbnail: 'https://img.youtube.com/vi/4xtwOikp72M/hqdefault.jpg' },
        { id: 'o118-pOdAuM', title: 'AngularJS with ASP.Net MVC - Part 01', thumbnail: 'https://img.youtube.com/vi/o118-pOdAuM/hqdefault.jpg' },
        { id: 'bkeHLa8vuQs', title: 'AngularJS with ASP.Net MVC - Part 02', thumbnail: 'https://img.youtube.com/vi/bkeHLa8vuQs/hqdefault.jpg' },
        { id: 'LXBegDNFgs0', title: 'AngularJS with ASP.Net MVC - Part 03', thumbnail: 'https://img.youtube.com/vi/LXBegDNFgs0/hqdefault.jpg' },
        { id: 'TNvYEHmbAqs', title: 'AngularJS with ASP.Net MVC - Part 04', thumbnail: 'https://img.youtube.com/vi/TNvYEHmbAqs/hqdefault.jpg' },
        { id: 'zgKFpGAFGEY', title: 'AngularJS with ASP.Net MVC - Part 05', thumbnail: 'https://img.youtube.com/vi/zgKFpGAFGEY/hqdefault.jpg' }
      ],
      playlistVideos3: [
        { id: 'ojesAXHKf7U', title: '【React入門】#1 Reactの理解', thumbnail: 'https://img.youtube.com/vi/ojesAXHKf7U/hqdefault.jpg' },
        { id: 'flsyPNAGh9o', title: '【React入門】#2 Reactの環境構築', thumbnail: 'https://img.youtube.com/vi/flsyPNAGh9o/hqdefault.jpg' },
        { id: 'iSFNOfBc0Ks', title: '【React入門】#3 JSXの理解', thumbnail: 'https://img.youtube.com/vi/iSFNOfBc0Ks/hqdefault.jpg' },
        { id: 'mjrNtEIk5Fs', title: '【React入門】#4 Component（コンポーネント）の理解', thumbnail: 'https://img.youtube.com/vi/mjrNtEIk5Fs/hqdefault.jpg' },
        { id: 'mT6EKxs-ACA', title: '【React入門】#5 Props（プロップス）の理解', thumbnail: 'https://img.youtube.com/vi/mT6EKxs-ACA/hqdefault.jpg' },
        { id: 'ykiCPXF4bzU', title: '【React入門】#6 State（ステート）の理解', thumbnail: 'https://img.youtube.com/vi/ykiCPXF4bzU/hqdefault.jpg' },
        { id: 'tPK0nDpnu98', title: '【React入門】#7 axiosを用いたHTTP通信の実装', thumbnail: 'https://img.youtube.com/vi/tPK0nDpnu98/hqdefault.jpg' },
        { id: '2PdVUO7FitM', title: '【React入門】#8-1 WebAPIを用いた画像検索アプリ ~検索フォームの作成~', thumbnail: 'https://img.youtube.com/vi/2PdVUO7FitM/hqdefault.jpg' },
        { id: 'tclzlcdKUlI', title: '【React入門】#8-2 WebAPIを用いた画像検索アプリ ~画像検索機能の作成~', thumbnail: 'https://img.youtube.com/vi/tclzlcdKUlI/hqdefault.jpg' },
        { id: '4oawSYbY2Zg', title: '【React入門】#8-3 WebAPIを用いた画像検索アプリ ~スタイルの修正~', thumbnail: 'https://img.youtube.com/vi/4oawSYbY2Zg/hqdefault.jpg' }
      ]
    }
  },
  setup () {
    const route = useRoute()
    const courseId = route.params.id

    return {
      courseDetails: {
        id: courseId,
        title: 'JavaScriptベーシック研修',
        description: '各種Scriptプログラミングが出来るように、基礎からきちんと学べる入門。',
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
