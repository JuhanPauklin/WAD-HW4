<template>
  <div class="form">
    <h3>LogIn</h3>
    <div class="container">
      <label for="email">Email</label>
      <input type="email" name="email"  required v-model="email">
    </div>
    <div class="container">
      <label for="password">Password</label>
      <input type="password" name="password" required v-model="password">
    </div>
    <div class="container">
      <button @click="LogIn"  class="center">LogIn</button>
      <p>Or</p>
      <button @click='this.$router.push("/api/signup")' class="center">Signup</button>
    </div>
  </div>
</template>

<script>
export default {
name: "LogIn", 
data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {
LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', 
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  }, 
  }
</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background: var(--primary-color);
  text-align: left;
  padding: 30px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: var(--secondary-color);
}
label {
  color: var(--secondary-color);
  display: inline-block;
  margin: auto 35px auto 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 150px;
  text-align: right;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: blue;
  border-radius: 10px;
}
button {
  background: var(--button-color);
  border: 0;
  padding: 10px 20px;
  margin: 20px 20px 20px 20px;
  color: var(--button-text);
  border-radius: 20px;
  align-items: center;
  text-align: center;
}
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%; 
}

p {
  margin-top: 27px;
}
</style>