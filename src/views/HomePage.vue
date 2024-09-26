<template>
  <div class="header">
    <span class="username">{{ employeeName }}&nbsp;&nbsp;&nbsp;様、<br><br> DXPRO SOLUTIONSの教育コンテンツへようこそ！</span>
    <button class="change-password-button" @click="showChangePasswordDialog = true">パスワード変更</button>
    <button class="logout-button" @click="logout">ログアウト</button>
  </div>
    <!-- Password Change Dialog -->
    <div v-if="showChangePasswordDialog" class="dialog">
    <div class="dialog-content">
      <h3>パスワード変更</h3>
      <label for="currentPassword">現在のパスワード:</label>
      <input type="password" v-model="currentPassword" id="currentPassword" required />

      <label for="newPassword">新しいパスワード:</label>
      <input type="password" v-model="newPassword" id="newPassword" required />

      <button @click="changePassword">変更する</button>
      <button @click="showChangePasswordDialog = false">キャンセル</button>
    </div>
  </div>
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
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, updateDoc, getDoc, doc } from 'firebase/firestore' // Import Firestore functions
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
import syoruiImage from '@/assets/syorui.jpg'

export default defineComponent({
  mounted () {
    window.scrollTo(0, 0)
    this.employeeName = localStorage.getItem('employeeName') || '不明'
  },
  components: {
    CourseCard
  },
  data () {
    return {
      employeeName: '',
      showChangePasswordDialog: false,
      currentPassword: '',
      newPassword: '',
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
            { id: 12, title: 'Android', description: 'Androidのベーシック研修（サンプルアプリ）', image: androidImage },
            { id: 13, title: 'IOS', description: 'IOSのベーシック研修（サンプルアプリ）', image: iosImage }
          ]
        },
        {
          title: '各種業務知識について',
          courses: [
            { id: 14, title: '要件定義・設計・テスト', description: '設計とテストについて書き方とやり方を事前に知っておきましょう', image: syoruiImage }
          ]
        }
      ]
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('employeeName')
      this.$router.push({ name: 'Login' })
    },
    async changePassword () {
      if (this.currentPassword && this.newPassword) {
        const auth = getAuth() // Initialize Firebase Auth
        const user = auth.currentUser // Get the current user
        const userId = user ? user.uid : null // Use the actual user ID

        if (!userId) {
          alert('ユーザーが見つかりません。')
          return
        }

        const db = getFirestore() // Initialize Firestore
        const userRef = doc(db, 'users', userId) // Access the user document

        // Check if the user document exists
        const userSnapshot = await getDoc(userRef)
        if (!userSnapshot.exists()) {
          alert('ユーザーが見つかりません。パスワードの変更ができません。')
          return
        }

        try {
          await updateDoc(userRef, {
            password: this.newPassword // Update the password field
          })
          alert('パスワードが変更されました。')
          this.showChangePasswordDialog = false
          this.currentPassword = ''
          this.newPassword = ''
        } catch (error) {
          console.error('Error updating password:', error)
          alert('パスワードの変更に失敗しました。')
        }
      } else {
        alert('すべてのフィールドを入力してください。')
      }
    }
    // changePassword () {
    //   if (this.currentPassword && this.newPassword) {
    //     console.log('既存のパスワード：', this.currentPassword)
    //     console.log('新しいパスワード：', this.newPassword)
    //     this.showChangePasswordDialog = false
    //     this.currentPassword = ''
    //     this.newPassword = ''
    //   } else {
    //     alert('すべてのフィールドを入力してください。')
    //   }
    // }
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: #f0f4f8; /* Soft background for contrast */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: box-shadow 0.3s ease; /* Smooth shadow transition */
}

.header:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Shadow on hover */
}

.username {
  font-size: 1.25rem; /* Increased font size for emphasis */
  font-weight: 700; /* Bold font for prominence */
  color: #495057; /* Darker text for readability */
  line-height: 1.4; /* Improved line height */
  margin: 0;
}

.logout-button {
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600; /* Bolder font for the button */
  transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transitions */
}

.logout-button:hover {
  background-color: #0056b3; /* Darker shade on hover */
  transform: translateY(-2px); /* Slight lift effect on hover */
}

.change-password-button {
  padding: 12px 24px;
  background-color: #28a745; /* Green color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 450px;
  font-weight: 600; /* Bolder font for the button */
  transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transitions */
}

.change-password-button:hover {
  background-color: #218838; /* Darker shade on hover */
  transform: translateY(-2px); /* Slight lift effect on hover */
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background: white;
  padding: 10px 60px 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dialog-content h3 {
  margin: 0 0 15px;
}

.dialog-content label {
  display: block;
  margin: 10px 0 5px;
}

.dialog-content input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.dialog-content button {
  margin-right: 10px;
}

@media (max-width: 768px) { /* Adjust this value as needed */
  .header {
    flex-direction: column; /* Stack elements vertically */
    align-items: flex-start; /* Align items to the start */
    padding: 10px 15px; /* Reduce padding */
  }

  .username {
    font-size: 14px; /* Smaller font size */
    line-height: 1.2; /* Adjust line height */
  }

  .logout-button,
  .change-password-button {
    padding: 8px 16px; /* Smaller button padding */
    font-size: 0.875rem; /* Smaller font size for buttons */
    margin-left: 0; /* Remove left margin on mobile */
    width: 100%; /* Make buttons full width */
    margin-top: 10px; /* Space between buttons */
  }
}
</style>
