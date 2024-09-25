<template>
    <div class="login">
      <img src="@/assets/logo_new.png" alt="Logo" class="logo" />
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">ユーザー名:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="input-group">
          <label for="password">パスワード:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="login-button">ログイン</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>

      <div v-if="showPopup" class="popup">
        <div class="popup-content">
          <h2>{{ success }}</h2>
          <button @click="goHome">ホーム画面へ</button>
        </div>
      </div>
    </div>
  </template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { db } from '@/firebase' // Import your firebase config
import { collection, query, where, getDocs } from 'firebase/firestore'

export default {
  name: 'LoginPage',
  setup () {
    const username = ref('')
    const password = ref('')
    const error = ref('')
    const success = ref('')
    const showPopup = ref(false)
    const router = useRouter()

    const handleLogin = async () => {
      console.log('Firestore db instance:', db) // This should log the db instance
      if (!db) {
        console.error('Firestore db is not initialized')
        return
      }

      try {
        const usersCollection = collection(db, 'users')
        const usersSnapshot = await getDocs(usersCollection)
        usersSnapshot.forEach(doc => {
          console.log(doc.id, ' => ', doc.data())
        })
      } catch (err) {
        console.error('Error getting users: ', err)
      }
      // 確認要
      try {
        const q = query(
          collection(db, 'users'),
          where('username', '==', username.value),
          where('password', '==', password.value)
        )

        const querySnapshot = await getDocs(q)
        console.log('Query result:', querySnapshot.docs)

        if (!querySnapshot.empty) {
          const user = querySnapshot.docs[0].data()
          success.value = 'ログインに成功しました。'
          error.value = ''
          showPopup.value = true
          localStorage.setItem('isLoggedIn', 'true')
          localStorage.setItem('employeeName', user.employeename)
        } else {
          error.value = 'ユーザー名またはパスワードが間違っています。'
          success.value = ''
        }
      } catch (err) {
        console.error('Error during login: ', err)
        error.value = 'ログイン中にエラーが発生しました。'
      }

      // Your existing login logic follows...
    }
    const goHome = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
      if (isLoggedIn) {
        router.push('/')
      } else {
        router.push({ name: 'Login' })
      }
    }

    return {
      username,
      password,
      error,
      success,
      showPopup,
      handleLogin,
      goHome
    }
  }
}
</script>

  <style scoped>
  .login {
    max-width: 400px;
    margin: 40px auto;
    padding: 60px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    transition: box-shadow 0.3s;
    position: relative;
  }

  .login:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }

  .input-group {
    margin-bottom: 25px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: #555;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    border-color: #4CAF50;
    outline: none;
  }

  .login-button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .login-button:hover {
    background-color: #45a049;
  }

  .error {
    color: red;
    text-align: center;
    margin-top: 10px;
  }

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .popup-content {
    background-color: white;
    padding: 60px;
    border-radius: 10px;
    text-align: center;
  }

  .popup-content button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .popup-content button:hover {
    background-color: #45a049;
  }

  .logo {
    display: block;
    margin: 0 auto 20px;
    max-width: 250px;
  }
  </style>
