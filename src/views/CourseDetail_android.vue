<template>
  <div class="course-detail">
    <h2>{{ courseDetails.title }}</h2>
    <p>{{ courseDetails.description }}</p>

    <router-link to="/" class="home-button">
      <button>ホーム画面へ</button>
    </router-link>
      <div class="youtube-playlist playlist-1">
        <h3>１．Javaを始める</h3>
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
        <h3>２．Javaプログラミング基本</h3>
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
        <h3>３．JavaとJDBC連携</h3>
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
        { id: 'upapyPY-M5E', title: '【初めてみようJava(1)】開発環境を作る ―Eclipse(日本語)のインストール―｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/upapyPY-M5E/hqdefault.jpg' },
        { id: 'hNtWcgdRGVA', title: '【初めてみようJava(2)】初めてのプログラムを作る ―Eclipseの使い方とHello World―｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/hNtWcgdRGVA/hqdefault.jpg' },
        { id: 'm2J66JJAv_0', title: '【初めてみようJava(3)】文字列を扱う―文字列の代表的な処理―｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/m2J66JJAv_0/hqdefault.jpg' },
        { id: '04BkCDGfTIY', title: '【初めてみようJava(4)】数値データを扱う―四則演算をやってみる―｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/04BkCDGfTIY/hqdefault.jpg' }
      ],
      playlistVideos2: [
        { id: 'MSV4lJ3D6fM', title: '【初めてみようJava(5)】配列の基礎を学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/MSV4lJ3D6fM/hqdefault.jpg' },
        { id: '0rFM7NTDEvY', title: '【初めてみようJava(6)】制御構文を学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/0rFM7NTDEvY/hqdefault.jpg' },
        { id: 'P674Vz1Xcao', title: '【初めてみようJava(7)】メソッドの使い方｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/P674Vz1Xcao/hqdefault.jpg' },
        { id: 'xU3OkuvaHMA', title: '【初めてみようJava(8)】オブジェクト指向の基礎｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/xU3OkuvaHMA/hqdefault.jpg' },
        { id: 'r7XpftZXNJw', title: '【初めてみようJava(9)】クラスとオブジェクトの理解｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/r7XpftZXNJw/hqdefault.jpg' },
        { id: 'NXSTljFWsNQ', title: '【初めてみようJava(10)】継承とポリモーフィズム｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/NXSTljFWsNQ/hqdefault.jpg' },
        { id: '9k_wKN4pY2s', title: '【初めてみようJava(11)】例外処理の基本｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/9k_wKN4pY2s/hqdefault.jpg' },
        { id: 'z9NY36qBdBo', title: '【初めてみようJava(12)】ファイル操作入門｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/z9NY36qBdBo/hqdefault.jpg' },
        { id: 'bue3_dNUZAA', title: '【初めてみようJava(13)】コレクションフレームワークの基礎｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/bue3_dNUZAA/hqdefault.jpg' },
        { id: 'GnMCW9bHdoQ', title: '【初めてみようJava(14)】ストリームAPIの使い方｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/GnMCW9bHdoQ/hqdefault.jpg' },
        { id: 'u8nO_FRwTLA', title: '【初めてみようJava(15)】JavaFXでGUIアプリを作る｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/u8nO_FRwTLA/hqdefault.jpg' },
        { id: 'IkIHGZPuHUc', title: '【初めてみようJava(16)】データベース接続入門｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/IkIHGZPuHUc/hqdefault.jpg' },
        { id: 'Tm4n1lR5eKw', title: '【初めてみようJava(17)】JDBCの基本｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/Tm4n1lR5eKw/hqdefault.jpg' },
        { id: '91Ex607Iocw', title: '【初めてみようJava(18)】Springフレームワーク入門｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/91Ex607Iocw/hqdefault.jpg' },
        { id: 'NMmVUgfxpwo', title: '【初めてみようJava(19)】RESTful APIの作り方｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/NMmVUgfxpwo/hqdefault.jpg' },
        { id: 'xV2a7RN7VSk', title: '【初めてみようJava(20)】JUnitで単体テストを学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/xV2a7RN7VSk/hqdefault.jpg' },
        { id: 'WZyo6HIKyJI', title: '【初めてみようJava(21)】プロジェクト管理ツールを使おう｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/WZyo6HIKyJI/hqdefault.jpg' },
        { id: 'Ctrj4ND_rt4', title: '【初めてみようJava(22)】設計パターンの基本｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/Ctrj4ND_rt4/hqdefault.jpg' },
        { id: 'W9-vow7luWU', title: '【初めてみようJava(23)】デザインパターンの実装｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/W9-vow7luWU/hqdefault.jpg' },
        { id: 'oQbbl-G4amI', title: '【初めてみようJava(24)】データ構造とアルゴリズムの基本｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/oQbbl-G4amI/hqdefault.jpg' },
        { id: 'f3be-zNKRYU', title: '【初めてみようJava(25)】基本的なアルゴリズムの実装｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/f3be-zNKRYU/hqdefault.jpg' },
        { id: 'Zemf7S6aP9g', title: '【初めてみようJava(26)】再帰的なアルゴリズムを学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/Zemf7S6aP9g/hqdefault.jpg' },
        { id: 'dr-23d9Qcfs', title: '【初めてみようJava(27)】動的プログラミングの基本｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/dr-23d9Qcfs/hqdefault.jpg' },
        { id: '1dN0-sVTFVo', title: '【初めてみようJava(28)】マルチスレッドプログラミングを学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/1dN0-sVTFVo/hqdefault.jpg' },
        { id: 'SpnYVsmDEvg', title: '【初めてみようJava(29)】スレッドの同期を学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/SpnYVsmDEvg/hqdefault.jpg' },
        { id: 'AZ2cBzNyzx8', title: '【初めてみようJava(30)】Java 8の新機能を学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/AZ2cBzNyzx8/hqdefault.jpg' },
        { id: 'fk_qb35ODjQ', title: '【初めてみようJava(31)】Java 11の新機能を学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/fk_qb35ODjQ/hqdefault.jpg' },
        { id: 'S6laPmfTheA', title: '【初めてみようJava(32)】Java 17の新機能を学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/S6laPmfTheA/hqdefault.jpg' },
        { id: 'EWMCaDlbXIg', title: '【初めてみようJava(33)】Javaの開発環境を整えよう｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/EWMCaDlbXIg/hqdefault.jpg' },
        { id: 'uNKDt3ZVLCw', title: '【初めてみようJava(34)】JavaでのAPI設計の考え方｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/uNKDt3ZVLCw/hqdefault.jpg' },
        { id: 'MLKachBqPao', title: '【初めてみようJava(35)】セキュリティ対策の基本｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/MLKachBqPao/hqdefault.jpg' },
        { id: '9-IEi7sGEGo', title: '【初めてみようJava(36)】Spring Cloudの使い方を学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/9-IEi7sGEGo/hqdefault.jpg' },
        { id: '3OQcpLU1bcM', title: '【初めてみようJava(37)】マイクロサービスアーキテクチャを学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/3OQcpLU1bcM/hqdefault.jpg' },
        { id: 'U23rOann-mI', title: '【初めてみようJava(38)】Dockerを使った開発環境の構築｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/U23rOann-mI/hqdefault.jpg' },
        { id: 'ZrshnhU3jqg', title: '【初めてみようJava(39)】Kubernetesを使ったデプロイ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/ZrshnhU3jqg/hqdefault.jpg' },
        { id: 'ZAwOaSpeCzg', title: '【初めてみようJava(40)】サーバーレスアーキテクチャを学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/ZAwOaSpeCzg/hqdefault.jpg' },
        { id: 'pxZcxzkT7Zc', title: '【初めてみようJava(41)】API Gatewayの使い方｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/pxZcxzkT7Zc/hqdefault.jpg' },
        { id: 'cz3Qw1SSaBU', title: '【初めてみようJava(42)】CI/CDの基本を学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/cz3Qw1SSaBU/hqdefault.jpg' },
        { id: 'UjD2uAn_mP0', title: '【初めてみようJava(43)】Gitを使ったバージョン管理を学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/UjD2uAn_mP0/hqdefault.jpg' },
        { id: 'dZf_b8CFwYc', title: '【初めてみようJava(44)】APIのバージョニングを学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/dZf_b8CFwYc/hqdefault.jpg' },
        { id: 'IyIaA_DW1j4', title: '【初めてみようJava(45)】OpenAPIの使い方を学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/IyIaA_DW1j4/hqdefault.jpg' },
        { id: 'PuQnCq6GBOs', title: '【初めてみようJava(46)】GraphQLの基本を学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/PuQnCq6GBOs/hqdefault.jpg' },
        { id: '2-zWrKWp05g', title: '【初めてみようJava(47)】Reactive Programmingを学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/2-zWrKWp05g/hqdefault.jpg' },
        { id: '39t5kaQz_nU', title: '【初めてみようJava(48)】Spring WebFluxの使い方を学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/39t5kaQz_nU/hqdefault.jpg' },
        { id: '4asKf6OzoxQ', title: '【初めてみようJava(49)】マイクロフロントエンドを学ぶ｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/4asKf6OzoxQ/hqdefault.jpg' },
        { id: 'FtI5ajh31Kk', title: '【初めてみようJava(50)】Javaの未来を考える｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/FtI5ajh31Kk/hqdefault.jpg' }
      ],
      playlistVideos3: [
        { id: '9a3xY4HDQno', title: '【Java】Oracle接続のための開発、実行環境を作る｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/9a3xY4HDQno/hqdefault.jpg' },
        { id: 'T7ak8Da8I80', title: '【Java】JavaアプリケーションからOracleへ接続する｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/T7ak8Da8I80/hqdefault.jpg' },
        { id: 'MMX3I5jdqwI', title: '【Java】JavaサーブレットからOracleへ接続する｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/MMX3I5jdqwI/hqdefault.jpg' },
        { id: 'HyyciIM-0Zo', title: '【Java】パラメーターを含むSQLは、PreparedStatementを使う｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/HyyciIM-0Zo/hqdefault.jpg' },
        { id: 'Q3X3rLCr-Sc', title: '【Java】SQL検索結果からカラムの情報を取得する｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/Q3X3rLCr-Sc/hqdefault.jpg' },
        { id: 'a2NuAGICTBg', title: '【Java】ストアドプロシージャを実行する(CallableStatement)｜Javaプログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/a2NuAGICTBg/hqdefault.jpg' }
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
