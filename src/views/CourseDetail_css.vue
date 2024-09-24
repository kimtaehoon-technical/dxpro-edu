<template>
  <div class="course-detail">
    <h2>{{ courseDetails.title }}</h2>
    <p>{{ courseDetails.description }}</p>

    <router-link to="/" class="home-button">
      <button>ホーム画面へ</button>
    </router-link>
      <div class="youtube-playlist playlist-1">
        <h3>１．CSS入門</h3>
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
        { id: 'Pt-PyX6IyHk', title: 'CSS入門: 1. CSSの基本', thumbnail: 'https://img.youtube.com/vi/Pt-PyX6IyHk/hqdefault.jpg' },
        { id: 'D0wtebs8zVo', title: 'CSS入門: 2. CSSセレクタ', thumbnail: 'https://img.youtube.com/vi/D0wtebs8zVo/hqdefault.jpg' },
        { id: 'lNf10A9wza8', title: 'CSS入門: 3. ボックスモデル', thumbnail: 'https://img.youtube.com/vi/lNf10A9wza8/hqdefault.jpg' },
        { id: 'M2A06t6vlno', title: 'CSS入門: 4. レイアウト', thumbnail: 'https://img.youtube.com/vi/M2A06t6vlno/hqdefault.jpg' },
        { id: 't5GtBMKIr7w', title: 'CSS入門: 5. 色と背景', thumbnail: 'https://img.youtube.com/vi/t5GtBMKIr7w/hqdefault.jpg' },
        { id: 'A_g3xgr472k', title: 'CSS入門: 6. テキスト装飾', thumbnail: 'https://img.youtube.com/vi/A_g3xgr472k/hqdefault.jpg' },
        { id: 'Jqx5Sf0yGTA', title: 'CSS入門: 7. フォントとタイポグラフィ', thumbnail: 'https://img.youtube.com/vi/Jqx5Sf0yGTA/hqdefault.jpg' },
        { id: '2FXkwTUJnik', title: 'CSS入門: 8. フロートとクリア', thumbnail: 'https://img.youtube.com/vi/2FXkwTUJnik/hqdefault.jpg' },
        { id: 'BmnSZx6MBYQ', title: 'CSS入門: 9. ポジションプロパティ', thumbnail: 'https://img.youtube.com/vi/BmnSZx6MBYQ/hqdefault.jpg' },
        { id: 'pFQFl8Fzebs', title: 'CSS入門: 10. Flexbox', thumbnail: 'https://img.youtube.com/vi/pFQFl8Fzebs/hqdefault.jpg' },
        { id: 'SZZy6QbCRlI', title: 'CSS入門: 11. グリッドレイアウト', thumbnail: 'https://img.youtube.com/vi/SZZy6QbCRlI/hqdefault.jpg' }
      ]
    }
  },
  setup () {
    const route = useRoute()
    const courseId = route.params.id

    return {
      courseDetails: {
        id: courseId,
        title: 'CSSのベーシック研修',
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
