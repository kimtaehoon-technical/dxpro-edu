<template>
  <div class="course-detail">
    <h2>{{ courseDetails.title }}</h2>
    <p>{{ courseDetails.description }}</p>
    <p :style="{ color: 'red' }">動画プレーヤーの再生領域：動画をクリックすると、画面の下部に動画が表示されます。</p>
    <router-link to="/" class="home-button">
      <button>ホーム画面へ</button>
    </router-link>
      <div class="youtube-playlist playlist-1">
        <h3>１．TypeScriptを始める</h3>
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
        {
          id: 'kd8VH10jXwc',
          title: '【お知らせ】新講座開講 - これからTypeScriptを始める全ての人たちへ【日本一わかりやすいTypeScript入門】',
          thumbnail: 'https://img.youtube.com/vi/kd8VH10jXwc/hqdefault.jpg'
        },
        {
          id: 'qSHlXcSces8',
          title: '【日本一わかりやすいTypeScript入門】tsconfigとWebpackの設定を理解して環境構築',
          thumbnail: 'https://img.youtube.com/vi/qSHlXcSces8/hqdefault.jpg'
        },
        {
          id: 'R35LJL6a-p0',
          title: '【日本一わかりやすいTypeScript入門】ESLintとPrettierでコードの品質を高めよう',
          thumbnail: 'https://img.youtube.com/vi/R35LJL6a-p0/hqdefault.jpg'
        },
        {
          id: 'KQhyHHQrcic',
          title: '【日本一わかりやすいTypeScript入門】基本の型定義とアノテーション',
          thumbnail: 'https://img.youtube.com/vi/KQhyHHQrcic/hqdefault.jpg'
        },
        {
          id: 'obdbskaarVQ',
          title: '【日本一わかりやすいTypeScript入門】関数のパラメーターと戻り値に型をつける',
          thumbnail: 'https://img.youtube.com/vi/obdbskaarVQ/hqdefault.jpg'
        },
        {
          id: '2DoYdw-rvL0',
          title: '【日本一わかりやすいTypeScript入門】型エイリアス(type)でオブジェクトの型定義',
          thumbnail: 'https://img.youtube.com/vi/2DoYdw-rvL0/hqdefault.jpg'
        },
        {
          id: 'BUSlgsUWn4I',
          title: '【日本一わかりやすいTypeScript入門】積極的に使いたい配列・タプルの型定義',
          thumbnail: 'https://img.youtube.com/vi/BUSlgsUWn4I/hqdefault.jpg'
        },
        {
          id: '5JYZzB7MMvo',
          title: '【日本一わかりやすいTypeScript入門】ジェネリック型を使いながらポリモーフィズムを理解する',
          thumbnail: 'https://img.youtube.com/vi/5JYZzB7MMvo/hqdefault.jpg'
        },
        {
          id: '7u8o1r0LkHU',
          title: '【日本一わかりやすいTypeScript入門】TypeScriptで学ぶオブジェクト指向開発',
          thumbnail: 'https://img.youtube.com/vi/7u8o1r0LkHU/hqdefault.jpg'
        },
        {
          id: 'J2vox52T4W8',
          title: '【日本一わかりやすいTypeScript入門】ハンズオンで理解するInterfaceとType Aliasの違い',
          thumbnail: 'https://img.youtube.com/vi/J2vox52T4W8/hqdefault.jpg'
        },
        {
          id: '7BCC4psJXqQ',
          title: '【日本一わかりやすいTypeScript入門】非同期処理にも型定義！APIから安全にデータを取得',
          thumbnail: 'https://img.youtube.com/vi/7BCC4psJXqQ/hqdefault.jpg'
        }
      ]
    }
  },
  setup () {
    const route = useRoute()
    const courseId = route.params.id

    return {
      courseDetails: {
        id: courseId,
        title: 'TypeScriptベーシック研修',
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
