<template>
  <div class="form">
    <h3>Add a Post</h3>
    <div class="container">
      <label for="body">Body</label>
      <input name="body" type="text" id="body" required v-model="post.body" />
    </div>
    <button @click="addPost" class="addPost">Add Post</button>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        body: "",
        date: ""
      },
    };
  },
  methods: {
    addPost() {
    
      let date = new Date();
      let month = date.toLocaleString('default', { month: 'long' });
      let day = date.getDate();
      let year = date.getFullYear();

      const currentDate = `${month} ${day}, ${year}`;

      var data = {
        body: this.post.body,
        date: currentDate
      };
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
        this.$router.push("/api/allposts");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
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
  background: var(--button-color);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: var(--button-text);
  border-radius: 20px;
  align-items: center;
  text-align: center;
  margin-left: 28%;
}
</style>