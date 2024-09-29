<template>
  <div id="app">
    <header>
      <h1>教育コンテンツ</h1>
      <h3>【社員専用】</h3>
      <nav>
        <a href="https://dxpro-sol.com/" target="_blank" rel="noopener noreferrer">ポータルサイトへ</a>
        <a href="https://2024073118010411766192.onamaeweb.jp/" target="_blank" rel="noopener noreferrer">自社AI検索パッケージへ【IT-IS】</a>
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
  background-color: #3E8E41; /* Darker shade for sophistication */
  padding: 30px; /* Increased padding for a more spacious look */
  text-align: center;
  border-bottom: 4px solid #f1f1f1; /* Add a subtle border at the bottom */
}

h1 {
  font-size: 3rem; /* Larger font size */
  color: #ffffff;
  margin: 0;
  font-family: 'Georgia', serif; /* Change to a more elegant font */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Subtle shadow for depth */
}

h3 {
  font-size: 1.8rem; /* Slightly larger font size */
  color: #ffffff;
  margin: 10px 0;
  font-weight: normal;
  font-family: 'Georgia', serif;
}

nav {
  margin-top: 20px;
}

nav a {
  margin: 0 20px; /* Increased margin for a more spacious feel */
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease, transform 0.3s ease; /* Add a scale effect */
}

nav a:hover {
  color: #ddd;
  transform: scale(1.05); /* Slightly enlarge on hover */
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #f1f1f1;
  margin-top: 20px;
}

@media (max-width: 768px) { /* Adjust this value as needed */
  h1 {
    font-size: 2.5rem; /* Larger font size */
    color: #ffffff;
    margin: 0;
    font-family: 'Georgia', serif; /* Change to a more elegant font */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Subtle shadow for depth */
  }
  h3 {
    font-size: 1.3rem; /* Slightly larger font size */
    color: #ffffff;
    margin: 10px 0;
    font-weight: normal;
    font-family: 'Georgia', serif;
  }
  nav {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center align the items */
  }

  nav a {
    margin: 10px 0; /* Adjust margin for vertical spacing */
    width: 100%; /* Make links take full width */
    text-align: center; /* Center the text */
  }
}
</style>
