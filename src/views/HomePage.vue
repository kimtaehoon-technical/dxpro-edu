<template>
  <div class="header">
    <span class="username">{{ employeeName }}&nbsp;&nbsp;&nbsp;様、<br><br> DXPRO SOLUTIONSの教育コンテンツです。</span>
    <button class="change-password-button" @click="showChangePasswordDialog = true">パスワード変更</button>
    <button class="logout-button" @click="logout">ログアウト</button>
  </div>
  <!-- Password Change Dialog -->
  <div v-if="showChangePasswordDialog" class="dialog">
    <div class="dialog-content">
      <h3>パスワード変更</h3>

      <label for="newPassword">新しいパスワード:</label>
      <input type="password" v-model="newPassword" id="newPassword" />
      <p v-if="newPasswordError" style="color: red;">{{ newPasswordError }}</p>

      <label for="confirmPassword">パスワード再入力:</label>
      <input type="password" v-model="confirmPassword" id="confirmPassword" />
      <p v-if="confirmPasswordError" style="color: red;">{{ confirmPasswordError }}</p>
      <button class="change-button" @click="changePassword">変更する</button>
      <button class="cancel-button" @click="showChangePasswordDialog = false">キャンセル</button>
    </div>
  </div>

  <div v-if="showSuccessMessage" class="alert-message">
    パスワードが変更されました。
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
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore'
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
      newPassword: '',
      confirmPassword: '',
      showSuccessMessage: false,
      newPasswordError: '', // 新しいパスワードのエラーメッセージ
      confirmPasswordError: '', // 確認パスワードのエラーメッセージ
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
    async changePassword () {
      this.newPasswordError = ''
      this.confirmPasswordError = ''

      if (!this.newPassword) {
        this.newPasswordError = '新しいパスワードを入力してください。'
        return
      }
      if (!this.confirmPassword) {
        this.confirmPasswordError = '確認パスワードを入力してください。'
        return
      }

      if (this.newPassword !== this.confirmPassword) {
        this.confirmPasswordError = 'パスワードが一致しません。'
        return
      }

      const userId = localStorage.getItem('userId') // Get the userId from local storage

      if (!userId) {
        alert('ユーザーが見つかりません。再度ログインしてください。')
        return
      }

      const userDocRef = doc(getFirestore(), 'users', userId)

      try {
        await updateDoc(userDocRef, { password: this.newPassword })
        this.showSuccessMessage = true // 成功メッセージを表示
        this.showChangePasswordDialog = false
        setTimeout(() => {
          this.showSuccessMessage = false // 3秒後にメッセージを消す
        }, 3000)
      } catch (error) {
        console.error('Error updating password: ', error)
        alert('パスワードの変更中にエラーが発生しました。')
      }
    },
    logout () {
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('employeeName')
      this.$router.push({ name: 'Login' })
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
  font-size: 20px; /* Larger font size for better visibility */
  font-weight: bold; /* Bold text for prominence */
  color: #343a40; /* Darker color for readability */
  line-height: 1.4; /* Improved line height for better spacing */
  background: linear-gradient(90deg, #007bff, #6f42c1); /* Gradient background */
  -webkit-background-clip: text; /* Clip background to text */
  -webkit-text-fill-color: transparent; /* Make text color transparent for gradient effect */
  padding: 10px; /* Padding around the text */
  border-radius: 5px; /* Rounded corners */
  text-align: center; /* Centered text */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* Soft shadow for depth */
  transition: transform 0.3s ease; /* Smooth transition for hover effect */
}

.username:hover {
  transform: scale(1.05); /* Slightly enlarge on hover */
}

/* Optional: Add a before pseudo-element for a decorative touch */
.username::before {
  content: "👤 "; /* User icon before the username */
  font-size: 1.5rem; /* Match icon size with text */
  vertical-align: middle; /* Align icon with text */
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
  margin-left: 430px;
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
  width: 400px; /* Fixed width */
  height: auto; /* Fixed height, adjust as necessary */
  overflow: auto; /* Add scrollbars if content overflows */
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
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.change-button {
  background-color: #28a745; /* Green for the change button */
  color: white;
}

.change-button:hover {
  background-color: #218838; /* Darker green on hover */
  transform: translateY(-2px); /* Lift effect on hover */
}

.cancel-button {
  background-color: #dc3545; /* Red for cancel button */
  color: white;
}

.cancel-button:hover {
  background-color: #c82333; /* Darker red on hover */
  transform: translateY(-2px); /* Lift effect on hover */
}

.alert-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #28a745; /* 成功メッセージの背景色 */
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  font-weight: bold;
  z-index: 1000;
  animation: fadeOut 3s forwards; /* 自動的に消えるアニメーション */
}

@keyframes fadeOut {
  0% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
}

@media (max-width: 768px) { /* Adjust this value as needed */
  .header {
    flex-direction: column; /* Stack elements vertically */
    align-items: flex-start; /* Align items to the start */
    padding: 10px 15px; /* Reduce padding */
  }

  .username {
    margin-left: 10px;
    font-size: 15px; /* Smaller font size */
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
