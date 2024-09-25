<template>
  <div id="app">
    <header>
      <h1>教育コンテンツ</h1>
      <nav>
        <router-link to="/">ホーム画面</router-link>
        <router-link v-if="!isLoggedIn" to="/login">ログイン</router-link>
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
  padding: 5px;
  text-align: center;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #f1f1f1;
  margin-top: 20px;
}
</style>
