<template>
  <div id="app">
    <header>
      <h1>教育コンテンツ</h1>
      <nav>
        <router-link to="/">ホーム画面</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2024 DXPRO SOLUTION 教育コンテンツ</p>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style scoped>
header {
  background-color: #4CAF50;
  padding: 10px;
  text-align: center;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #f1f1f1;
  margin-top: 20px;
}
</style>
