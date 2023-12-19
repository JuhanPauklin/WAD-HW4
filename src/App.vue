<template>
  <div>

    <nav>
      <router-link to="/api/allposts">Home</router-link> |
      <router-link to="/api/contact">Contact us</router-link>
    </nav>
    <router-view />
  
   
  </div>
</template>

<script>
export default {
  name: "App",
   methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  }, 
};
</script>

<style>
* {
    font-family: sans-serif;
    box-sizing: border-box;
    --primary-color: #8D7B68;
    --secondary-color: #F1DEC9;
    --teritary-color: #C8B6A6;
    --accent-color: #A4907C;
    --special-color: #0096FF;
    --light-text: var(--secondary-color);
    --dark-text: #716150;
    --button-color: #0096FF;
    --button-text: #ffffff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--secondary-color);
}

body {
  margin: 0px;
  background-color: var(--secondary-color);
}

input {
  background-color: var(--secondary-color);
}

nav {
  margin-bottom: 50px;
  padding: 30px;
  background-color: var(--primary-color);
  width: 100%;
}

nav a {
  font-weight: bold;
  font-size: 20px;
  color: var(--teritary-color);
  transition: background-color 0.2s ease, color 0.2s ease;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
}

nav a:hover {
  background-color: var(--accent-color);
  color: var(--light-text);
}

nav a.router-link-exact-active {
  color: #42b983;
}
button{
  margin-top: 30px;
  border-radius: 36px;
  background: var(--button-color);
  color: var(--button-text);
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
button:hover {
  transform: scale(1.05);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);
}
.form {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.form:hover {
  transform: scale(1.03);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}
</style>
