<template>
  <div class="course-container">
    <div class="course-list" v-for="(courseGroup, index) in courseGroups" :key="index">
      <h2>{{ courseGroup.title }}</h2>
      <div class="course-cards">
        <CourseCard
          v-for="course in courseGroup.courses"
          :key="course.id"
          :course="course"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CourseCard from '@/components/CourseCard.vue'
import javaImage from '@/assets/java.webp'
import javaScriptImage from '@/assets/javascript.png'
import typeScriptImage from '@/assets/typescript.webp'
import csharpImage from '@/assets/csharp.webp'
import cppImage from '@/assets/cpp.webp'
import cImage from '@/assets/c.webp'
import androidImage from '@/assets/android.png'
import iosImage from '@/assets/ios.jpg'
import cssImage from '@/assets/css.png'
import htmlImage from '@/assets/html.jpg'
import frameworkImage from '@/assets/framework.webp'
import serverImage from '@/assets/server.png'
import etcImage from '@/assets/etc.png'

export default defineComponent({
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    CourseCard
  },
  data () {
    return {
      courseGroups: [
        {
          title: 'プログラミング',
          courses: [
            { id: 1, title: 'Java', description: 'Javaのベーシック研修【プログラミングの基礎を学ぶ】', image: javaImage },
            { id: 2, title: 'JavaScript', description: 'JavaScript研修（Vue.js、Angular.js、React.js）', image: javaScriptImage },
            { id: 3, title: 'TypeScript', description: 'TypeScript研修（アプリ構築～アプリ実行）', image: typeScriptImage },
            { id: 4, title: 'C#', description: 'C#のベーシック研修（構築～実行）', image: csharpImage },
            { id: 5, title: 'C++', description: 'C++研修（ベーシック研修）', image: cppImage },
            { id: 6, title: 'C言語', description: 'C言語（ベーシック研修）', image: cImage }
          ]
        },
        {
          title: 'フロントエンド',
          courses: [
            { id: 7, title: 'HTML', description: 'HTMLのベーシック研修', image: htmlImage },
            { id: 8, title: 'CSS', description: 'CSSのベーシック研修', image: cssImage },
            { id: 9, title: 'その他', description: 'bootstrap、Jqueryなど', image: etcImage }
          ]
        },
        {
          title: 'バックエンド',
          courses: [
            { id: 10, title: 'フレームワーク', description: '各種フレームワークについて（ベーシック研修）', image: frameworkImage },
            { id: 11, title: 'サーバー構築', description: 'アプリのサーバー構築について（ベーシック研修）', image: serverImage }
          ]
        },
        {
          title: 'モバイル',
          courses: [
            { id: 3, title: 'Android', description: 'Androidのベーシック研修（サンプルアプリ）', image: androidImage },
            { id: 4, title: 'IOS', description: 'IOSのベーシック研修（サンプルアプリ）', image: iosImage }
          ]
        }
      ]
    }
  }
})
</script>

<style scoped>
.course-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.course-list {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.course-list h2 {
  text-align: center;
  margin-bottom: 15px;
  font-weight: bold;
  color: #333;
}

.course-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}
</style>
