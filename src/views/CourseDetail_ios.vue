<template>
  <div class="course-detail">
    <h2>{{ courseDetails.title }}</h2>
    <p>{{ courseDetails.description }}</p>

    <router-link to="/" class="home-button">
      <button>ホーム画面へ</button>
    </router-link>
      <div class="youtube-playlist playlist-1">
        <h3>SWIFTを始める</h3>
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
        { id: 'fXtT4ABI7l0', title: '【SwiftUI入門講座】Part1：SwiftUI、Storyboard開発について', thumbnail: 'https://img.youtube.com/vi/fXtT4ABI7l0/hqdefault.jpg' },
        { id: '9u--NANX33E', title: '【SwiftUI入門講座】Part2：簡単なアプリを作ってXcodeに慣れよう！', thumbnail: 'https://img.youtube.com/vi/9u--NANX33E/hqdefault.jpg' },
        { id: 'kJw_TFRwY2E', title: '【SwiftUI入門講座】Part3：「VStack・HStack・ZStack」を完全に覚えよう', thumbnail: 'https://img.youtube.com/vi/kJw_TFRwY2E/hqdefault.jpg' },
        { id: 'bECPfVUdkdE', title: '【SwiftUI入門講座】Part4：色々なオブジェクト・モディファイアに触れてみよう', thumbnail: 'https://img.youtube.com/vi/bECPfVUdkdE/hqdefault.jpg' },
        { id: 'u5gax6i9FSc', title: '【SwiftUI入門講座】Part5：消費税計算アプリを作ってみよう~値の計算とTextFieldの使い方~', thumbnail: 'https://img.youtube.com/vi/u5gax6i9FSc/hqdefault.jpg' },
        { id: 'OJN9u8CHtIM', title: '【SwiftUI入門講座】Part6：サイコロアプリを作ってみよう！~ボタン・タイマー機能を利用~', thumbnail: 'https://img.youtube.com/vi/OJN9u8CHtIM/hqdefault.jpg' },
        { id: 'ANKf6dr5McE', title: '【SwiftUI入門講座】Part7：画面遷移の仕方を完全に理解しよう。~ナビゲーション遷移とモーダル遷移~', thumbnail: 'https://img.youtube.com/vi/ANKf6dr5McE/hqdefault.jpg' },
        { id: 'Y9ykaX9HDjI', title: '【SwiftUI入門講座】Part8：@State、@Bindingを理解しよう。~簡単なアプリを作って使い方を覚えよう~', thumbnail: 'https://img.youtube.com/vi/Y9ykaX9HDjI/hqdefault.jpg' },
        { id: 'gx4T1V_K1f0', title: '【SwiftUI入門講座】Part9：アラートとダイアログを使ってみよう。~@Stateの復讐がてら実装方法を解説~', thumbnail: 'https://img.youtube.com/vi/gx4T1V_K1f0/hqdefault.jpg' },
        { id: 'RDR4PNj0YUI', title: '【SwiftUI開発講座】Listを使ってToDoリストアプリを作ってみよう!', thumbnail: 'https://img.youtube.com/vi/RDR4PNj0YUI/hqdefault.jpg' }
      ]
    }
  },
  setup () {
    const route = useRoute()
    const courseId = route.params.id

    return {
      courseDetails: {
        id: courseId,
        title: 'IOSのベーシック研修',
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
