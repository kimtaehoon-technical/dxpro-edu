<template>
  <div id="app">
    <header>
      <h1>教育コンテンツ</h1>
      <h3>【社員専用】</h3>
      <nav>
        <a href="https://dxpro-sol.com/" target="_blank" rel="noopener noreferrer">ポータルサイトへ</a>
        <a href="https://2024073118010411766192.onamaeweb.jp/login" target="_blank" rel="noopener noreferrer">自社AI検索パッケージへ【IT-IS】</a>
      </nav>
    </header>
    <main>
      <router-view @login="handleLogin" @logout="handleLogout" />
    </main>
    <footer>
      <p>© 2024 DXPRO SOLUTION 教育コンテンツ</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'App',
  setup () {
    const isLoggedIn = ref(false)

    const handleLogin = () => {
      isLoggedIn.value = true
    }

    const handleLogout = () => {
      isLoggedIn.value = false
    }

    return {
      isLoggedIn,
      handleLogin,
      handleLogout
    }
  }
}
</script>

<style scoped>
header {
  background-color: #4CAF50;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #ffffff;
  margin: 0;
  font-family: 'Arial', sans-serif; /* Change to a more elegant font if needed */
}

h3 {
  font-size: 1.5rem;
  color: #ffffff;
  margin: 10px 0;
  font-weight: normal; /* Make it less bold for elegance */
  font-family: 'Arial', sans-serif; /* Change to a more elegant font if needed */
}

nav {
  margin-top: 15px;
}

nav a {
  margin: 0 15px;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #ddd; /* Change color on hover for better UX */
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #f1f1f1;
  margin-top: 20px;
}
</style>
