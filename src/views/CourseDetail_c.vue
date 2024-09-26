<template>
  <div class="course-detail">
    <h2>{{ courseDetails.title }}</h2>
    <p>{{ courseDetails.description }}</p>
    <p :style="{ color: 'red' }">動画プレーヤーの再生領域：動画をクリックすると、画面の下部に動画が表示されます。</p>
    <router-link to="/" class="home-button">
      <button>ホーム画面へ</button>
    </router-link>
      <div class="youtube-playlist playlist-1">
        <h3>１．C言語を始める</h3>
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
        { id: 'l-M2AgxDNow', title: '【初めてみようC言語(1)】入門レッスン ―概要―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/l-M2AgxDNow/hqdefault.jpg' },
        { id: 'tJFaewdrypw', title: '【初めてみようC言語(2)】開発環境の設定 ―環境の準備―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/tJFaewdrypw/hqdefault.jpg' },
        { id: 'j_M0ehFwzEk', title: '【初めてみようC言語(3)】最初の3つの文法 ―基本的な文法を学ぶ―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/j_M0ehFwzEk/hqdefault.jpg' },
        { id: 'nVV4v5FnvkU', title: '【初めてみようC言語(4)】四則計算の基礎 ―数値データを扱う―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/nVV4v5FnvkU/hqdefault.jpg' },
        { id: 'JHlKLjVs8-8', title: '【初めてみようC言語(5)】Moduloの使い方 ―演算子を学ぶ―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/JHlKLjVs8-8/hqdefault.jpg' },
        { id: 'HGQbkbpAo-g', title: '【初めてみようC言語(6)】コメントの使い方 ―コードを見やすくする―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/HGQbkbpAo-g/hqdefault.jpg' },
        { id: '0aqNJ6C3lQ0', title: '【初めてみようC言語(7)】インデントの重要性 ―可読性を高める―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/0aqNJ6C3lQ0/hqdefault.jpg' },
        { id: 'cEv8jrjX5G4', title: '【初めてみようC言語(8)】ビットとバイトの理解 ―データの基本を学ぶ―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/cEv8jrjX5G4/hqdefault.jpg' },
        { id: 'IcSZsWOK3Ps', title: '【初めてみようC言語(9)】プリプロセッサ命令の使い方 ―コードの管理―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/IcSZsWOK3Ps/hqdefault.jpg' },
        { id: 'LBLqvyRzeQI', title: '【初めてみようC言語(10)】関数の作成 ―再利用可能なコードを書く―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/LBLqvyRzeQI/hqdefault.jpg' },
        { id: '30I8xRlV7MY', title: '【初めてみようC言語(11)】変数の宣言 ―データを保存する―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/30I8xRlV7MY/hqdefault.jpg' },
        { id: '4GsDxAWXDZM', title: '【初めてみようC言語(12)】データ型の種類 ―異なるデータを扱う―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/4GsDxAWXDZM/hqdefault.jpg' },
        { id: '60HHZffrLQY', title: '【初めてみようC言語(13)】インクリメント演算子の使い方 ―値を増やす―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/60HHZffrLQY/hqdefault.jpg' },
        { id: '0N43OWmQEr8', title: '【初めてみようC言語(14)】配列の基礎 ―複数のデータを管理する―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/0N43OWmQEr8/hqdefault.jpg' },
        { id: 'lt_8vsdro0g', title: '【初めてみようC言語(15)】自作関数の作成 ―独自のロジックを作る―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/lt_8vsdro0g/hqdefault.jpg' },
        { id: 'u44jllPUl3A', title: '【初めてみようC言語(16)】2進数の理解 ―基礎的な数の扱い―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/u44jllPUl3A/hqdefault.jpg' },
        { id: 'WX_DUIaXyzA', title: '【初めてみようC言語(17)】関係演算子の使い方 ―データを比較する―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/WX_DUIaXyzA/hqdefault.jpg' },
        { id: '1eqIl5gFYkI', title: '【初めてみようC言語(18)】if文の使い方 ―条件による処理の分岐―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/1eqIl5gFYkI/hqdefault.jpg' },
        { id: 'BEIF2MN7o94', title: '【初めてみようC言語(19)】else if文の理解 ―条件分岐の拡張―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/BEIF2MN7o94/hqdefault.jpg' },
        { id: 'IxJNT_u0dPc', title: '【初めてみようC言語(20)】三項演算子の使い方 ―簡潔な条件分岐―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/IxJNT_u0dPc/hqdefault.jpg' },
        { id: 'lw7S_AyfE9A', title: '【初めてみようC言語(21)】switch文の使い方 ―多くの条件を簡単に扱う―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/lw7S_AyfE9A/hqdefault.jpg' },
        { id: 'IUuxRjUJBjg', title: '【初めてみようC言語(22)】for文の使い方 ―繰り返し処理を実現する―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/IUuxRjUJBjg/hqdefault.jpg' },
        { id: 'qCcjlZueWbY', title: '【初めてみようC言語(23)】while文の理解 ―条件に基づく繰り返し―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/qCcjlZueWbY/hqdefault.jpg' },
        { id: '76sKFQ8fv8M', title: '【初めてみようC言語(24)】breakの使い方｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/76sKFQ8fv8M/hqdefault.jpg' },
        { id: 'HoHXsK4rISc', title: '【初めてみようC言語(25)】do while文 ｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/HoHXsK4rISc/hqdefault.jpg' },
        { id: 'RJh4dCmNOiI', title: '【初めてみようC言語(26)】多次元配列―｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/RJh4dCmNOiI/hqdefault.jpg' },
        { id: 'xebpE01sAjA', title: '【初めてみようC言語(27)】文字列｜C言語プログラミングのゆるふわレシピ', thumbnail: 'https://img.youtube.com/vi/xebpE01sAjA/hqdefault.jpg' },
        { id: 'v0igeubvzZY', title: 'C言語入門   レッスン28 加算代入', thumbnail: 'https://img.youtube.com/vi/v0igeubvzZY/hqdefault.jpg' },
        { id: 'qGiuEs6X7s0', title: 'C言語入門   レッスン29 文字列の代入', thumbnail: 'https://img.youtube.com/vi/qGiuEs6X7s0/hqdefault.jpg' },
        { id: 'Bfo2g20QIX0', title: 'C言語入門   レッスン30 strlen関数', thumbnail: 'https://img.youtube.com/vi/Bfo2g20QIX0/hqdefault.jpg' },
        { id: 'HepSZKp2se8', title: 'C言語入門   レッスン31 strcpy関数', thumbnail: 'https://img.youtube.com/vi/HepSZKp2se8/hqdefault.jpg' },
        { id: '_a8i0MK2C8U', title: 'C言語入門   レッスン32 strcat関数', thumbnail: 'https://img.youtube.com/vi/_a8i0MK2C8U/hqdefault.jpg' },
        { id: 'fTp_kxR306Y', title: 'C言語入門   レッスン33 ポインタ', thumbnail: 'https://img.youtube.com/vi/fTp_kxR306Y/hqdefault.jpg' },
        { id: 'W96brCR7QDU', title: 'C言語入門   レッスン34 ポインタ2', thumbnail: 'https://img.youtube.com/vi/W96brCR7QDU/hqdefault.jpg' },
        { id: 'Abs-WqHkbos', title: 'C言語入門   レッスン35 ポインタ3', thumbnail: 'https://img.youtube.com/vi/Abs-WqHkbos/hqdefault.jpg' },
        { id: 'VWLcXpJUilA', title: 'C言語入門   レッスン36 ポインタと配列', thumbnail: 'https://img.youtube.com/vi/VWLcXpJUilA/hqdefault.jpg' },
        { id: 'RlELQ7lr-Po', title: 'C言語入門   レッスン37 ポインタと配列2', thumbnail: 'https://img.youtube.com/vi/RlELQ7lr-Po/hqdefault.jpg' },
        { id: 'MWMZg3NJ0_U', title: 'C言語入門   レッスン38 ポインタと文字列', thumbnail: 'https://img.youtube.com/vi/MWMZg3NJ0_U/hqdefault.jpg' },
        { id: 'k2ztS5DY6Lc', title: 'C言語入門   レッスン39 ポインタと関数', thumbnail: 'https://img.youtube.com/vi/k2ztS5DY6Lc/hqdefault.jpg' },
        { id: 'ncWp-pv-0fw', title: 'C言語入門   レッスン40 関数のプロトタイプ', thumbnail: 'https://img.youtube.com/vi/ncWp-pv-0fw/hqdefault.jpg' },
        { id: 'Ds1MD_bmbrw', title: 'C言語入門   レッスン41 型変換', thumbnail: 'https://img.youtube.com/vi/Ds1MD_bmbrw/hqdefault.jpg' },
        { id: '1CbDDGsvaXk', title: 'C言語入門   レッスン42 変数の範囲', thumbnail: 'https://img.youtube.com/vi/1CbDDGsvaXk/hqdefault.jpg' },
        { id: '7t1Y0HpMC7M', title: 'C言語入門   レッスン43 再帰', thumbnail: 'https://img.youtube.com/vi/7t1Y0HpMC7M/hqdefault.jpg' },
        { id: 'tyTXCSyb-3s', title: 'C言語入門   レッスン44 値渡しと参照渡し', thumbnail: 'https://img.youtube.com/vi/tyTXCSyb-3s/hqdefault.jpg' },
        { id: 'FYi4NAeRa54', title: 'C言語入門   レッスン45 構造体', thumbnail: 'https://img.youtube.com/vi/FYi4NAeRa54/hqdefault.jpg' },
        { id: 'VavSVO4gks0', title: 'C言語入門   レッスン46 構造体2', thumbnail: 'https://img.youtube.com/vi/VavSVO4gks0/hqdefault.jpg' },
        { id: 'n2vYKekHXWw', title: 'C言語入門   レッスン47 配列構造体変数', thumbnail: 'https://img.youtube.com/vi/n2vYKekHXWw/hqdefault.jpg' },
        { id: 'n4fwZSBMiTQ', title: 'C言語入門   レッスン48 構造体変数の代入', thumbnail: 'https://img.youtube.com/vi/n4fwZSBMiTQ/hqdefault.jpg' },
        { id: 'Z3qYfiO-1sg', title: 'C言語入門   レッスン49 構造体と関数', thumbnail: 'https://img.youtube.com/vi/Z3qYfiO-1sg/hqdefault.jpg' },
        { id: 'HvIv3Bxm2cY', title: 'C言語入門   レッスン50 構造体とポインタ', thumbnail: 'https://img.youtube.com/vi/HvIv3Bxm2cY/hqdefault.jpg' },
        { id: 'bwV8uY-E1R4', title: 'C言語入門   レッスン51 構造体のネスト', thumbnail: 'https://img.youtube.com/vi/bwV8uY-E1R4/hqdefault.jpg' },
        { id: '5acMx-PToCE', title: 'C言語入門   レッスン52 構造体ネストのポインタ', thumbnail: 'https://img.youtube.com/vi/5acMx-PToCE/hqdefault.jpg' },
        { id: 'AdSgN_Z719Q', title: 'C言語入門   レッスン53 共用体', thumbnail: 'https://img.youtube.com/vi/AdSgN_Z719Q/hqdefault.jpg' },
        { id: '7s6i4os5sZ0', title: 'C言語入門   レッスン54 ビットフィールド', thumbnail: 'https://img.youtube.com/vi/7s6i4os5sZ0/hqdefault.jpg' },
        { id: '6wkN2SVUL_o', title: 'C言語入門   レッスン55 プリプロセッサ マクロ', thumbnail: 'https://img.youtube.com/vi/6wkN2SVUL_o/hqdefault.jpg' },
        { id: 'ONwFthQbEo4', title: 'C言語入門   レッスン56 マクロ判定', thumbnail: 'https://img.youtube.com/vi/ONwFthQbEo4/hqdefault.jpg' },
        { id: '4Bd0h501vQY', title: 'C言語入門   レッスン57 関数マクロ', thumbnail: 'https://img.youtube.com/vi/4Bd0h501vQY/hqdefault.jpg' },
        { id: 'zLfnGaMJy4U', title: 'C言語入門   レッスン58 組み込みマクロ', thumbnail: 'https://img.youtube.com/vi/zLfnGaMJy4U/hqdefault.jpg' },
        { id: 'zX4YZVMbwzo', title: 'C言語入門   レッスン59 型修飾子', thumbnail: 'https://img.youtube.com/vi/zX4YZVMbwzo/hqdefault.jpg' }
      ]
    }
  },
  setup () {
    const route = useRoute()
    const courseId = route.params.id

    return {
      courseDetails: {
        id: courseId,
        title: 'C言語のベーシック研修',
        description: 'C言語の基礎からきちんと学べる入門。',
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
