<template>
  <div class="course-detail">
    <h2>{{ courseDetails.title }}</h2>
    <p>{{ courseDetails.description }}</p>

    <router-link to="/" class="home-button">
      <button>ホーム画面へ</button>
    </router-link>
      <div class="youtube-playlist playlist-1">
        <h3>１．Ｃ＋＋を始める</h3>
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
        { id: 'oOAGhcCh_r8', title: '丁寧に学ぶC++ vector　0⃣配列（vectorの前に基本の振り返り）', thumbnail: 'https://img.youtube.com/vi/oOAGhcCh_r8/hqdefault.jpg' },
        { id: 'kUhd-5Zyp7o', title: '丁寧に学ぶC++ vector　①ベクトルの基本', thumbnail: 'https://img.youtube.com/vi/kUhd-5Zyp7o/hqdefault.jpg' },
        { id: '0FS6uoVIn0M', title: '丁寧に学ぶC++ vector　②初期化とコピー', thumbnail: 'https://img.youtube.com/vi/0FS6uoVIn0M/hqdefault.jpg' },
        { id: 'Dql17gUMiV0', title: '丁寧に学ぶC++ vector　③vectorの基本操作', thumbnail: 'https://img.youtube.com/vi/Dql17gUMiV0/hqdefault.jpg' },
        { id: 'wEkOsz6iv1g', title: '丁寧に学ぶC++ vector　④イテレータ', thumbnail: 'https://img.youtube.com/vi/wEkOsz6iv1g/hqdefault.jpg' },
        { id: 'mg_xRh36zAM', title: '丁寧に学ぶC++ vector　⑤アルゴリズム（コピー、一括指定、交換、ソート、反転）', thumbnail: 'https://img.youtube.com/vi/mg_xRh36zAM/hqdefault.jpg' },
        { id: 'k3PEw1QXwYI', title: '丁寧に学ぶC++ vector　⑥二次元ベクトル（行列の扱い）', thumbnail: 'https://img.youtube.com/vi/k3PEw1QXwYI/hqdefault.jpg' },
        { id: 'LreVZwsHe7I', title: '丁寧に学ぶC++ vector　⑦リスト（List）', thumbnail: 'https://img.youtube.com/vi/LreVZwsHe7I/hqdefault.jpg' }
      ]
    }
  },
  setup () {
    const route = useRoute()
    const courseId = route.params.id

    return {
      courseDetails: {
        id: courseId,
        title: 'C++のベーシック研修',
        description: 'C++理解とプログラミングが出来るように、基礎からきちんと学べる入門。',
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
