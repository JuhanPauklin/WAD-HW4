<template>
  <div class="form">
    <h3>SignUp</h3>
    <div class="container">
      <label for="email">Email</label>
      <input type="email" name="email"  required v-model="email">
    </div>
    <div class="container">
      <label for="password">Password</label>
      <input type="password" name="password" required v-model="password">
    </div>
    <div v-if="errMsg">{{errMsg}} </div>
    <button @click="SignUp" class="SignUp">SignUp</button>
  </div>
</template>

<script>
export default {
name: "SignUp", 
data: function() {
    return {
   email: '',
   password: '',
   errMsg: '',
  }
  },
watch: {
    password(value) {
      this.password = value;
      this.validatePassword(value);
    }
  },
  methods: {
validatePassword(value) {
      if (value.length < 8 || value.length >= 16 || !/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
        this.errMsg = "Password must be at least 8 characters  and less than 16 characters, it must include a capital letter and at least one number"
      }else{
      this.errMsg = ''
      }
    },
SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/signup", {
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
      this.$router.push("/");
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
  color: blue;
  border-radius: 10px;
}
button {
  margin: auto;
  margin-top: 20px;
  background: var(--button-color);
  border: 0;
  padding: 10px 20px;
  color: var(--button-text);
  border-radius: 20px;
  text-align: center;
}
</style>