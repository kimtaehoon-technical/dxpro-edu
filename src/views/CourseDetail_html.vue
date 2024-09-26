<template>
  <div class="course-detail">
    <h2>{{ courseDetails.title }}</h2>
    <p>{{ courseDetails.description }}</p>
    <p :style="{ color: 'red' }">動画プレーヤーの再生領域：動画をクリックすると、画面の下部に動画が表示されます。</p>
    <router-link to="/" class="home-button">
      <button>ホーム画面へ</button>
    </router-link>
      <div class="youtube-playlist playlist-1">
        <h3>１．HTML入門</h3>
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
        { id: '5PMOsfEkpcc', title: '【HTML講座】HTMLとは？出来ることやなれる職業を知ろう！ #00', thumbnail: 'https://img.youtube.com/vi/5PMOsfEkpcc/hqdefault.jpg' },
        { id: 'BqGxnmec1i0', title: '【HTML講座】VSCodeエディタのインストールと初期設定 #01', thumbnail: 'https://img.youtube.com/vi/BqGxnmec1i0/hqdefault.jpg' },
        { id: 'ci1u43G3Uv4', title: '【HTML講座】HTMLの基本構造とhタグを学ぼう！ #02', thumbnail: 'https://img.youtube.com/vi/ci1u43G3Uv4/hqdefault.jpg' },
        { id: 'FXdTHwKl3XE', title: '【HTML講座】HTMLの基本とp、strong、brタグを学ぼう！ #03', thumbnail: 'https://img.youtube.com/vi/FXdTHwKl3XE/hqdefault.jpg' },
        { id: 'Tf4uwrT1D1o', title: '【HTML講座】要素の入れ子とリスト(ul、ol)タグを学ぼう！ #04', thumbnail: 'https://img.youtube.com/vi/Tf4uwrT1D1o/hqdefault.jpg' },
        { id: 'XSD0_SGKEkM', title: '【HTML講座】aタグと絶対パス・相対パスでリンクを指定しよう！ #05', thumbnail: 'https://img.youtube.com/vi/XSD0_SGKEkM/hqdefault.jpg' },
        { id: 'iXU10UBsKCg', title: '【HTML講座】imgタグで画像を挿入しよう！ #06', thumbnail: 'https://img.youtube.com/vi/iXU10UBsKCg/hqdefault.jpg' },
        { id: '8xR42d2Y0xI', title: '【HTML講座】dl、dt、ddリストタグを使ってみよう！ #07', thumbnail: 'https://img.youtube.com/vi/8xR42d2Y0xI/hqdefault.jpg' },
        { id: 'EsEfJOUOARI', title: '【HTML講座】フォーム(form)タグで「お問い合わせフォーム」づくり！ #08', thumbnail: 'https://img.youtube.com/vi/EsEfJOUOARI/hqdefault.jpg' },
        { id: 'vXOeWnBzhMc', title: '【HTML講座】テーブル(table)タグで表を作ってみよう！ #09', thumbnail: 'https://img.youtube.com/vi/vXOeWnBzhMc/hqdefault.jpg' },
        { id: 'GIu1Jq0UqvY', title: '【HTML講座】レイアウトタグを使ってサイトを構造化しよう！ #10', thumbnail: 'https://img.youtube.com/vi/GIu1Jq0UqvY/hqdefault.jpg' },
        { id: 'vLcq4os2eyw', title: '【HTML講座】div・spanタグとは何かを知ろう！ #11', thumbnail: 'https://img.youtube.com/vi/vLcq4os2eyw/hqdefault.jpg' }
      ]
    }
  },
  setup () {
    const route = useRoute()
    const courseId = route.params.id

    return {
      courseDetails: {
        id: courseId,
        title: 'HTMLのベーシック研修',
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
