<template>
  <div class="flex-container">

<div class="sides"><p>Lorem ipsum</p></div>

<div class="mid">
  <div class="buttons_div">
      <button   @click="Logout" class="center">Logout</button>
    </div>
      
  <div id="post-list">
    <h1>All Posts</h1>



    <ul>
      <div class="item" v-for="post in posts" :key="post.id">
          <a class= 'singlepost' :href="'/api/apost/' + post.id">
          <span class="dateSpan"> {{ post.date }} </span> <br />
          <span class="bodySpan"> <b>Body:</b> {{ post.body }} </span> <br />
          </a>
      </div>
    </ul>
  </div>

  <div class="buttons_div">
  <button class="center" onclick="location.href='/api/addpost'" type="button">Add post</button>
  <button class="center"  @click="DeleteAll">Delete All</button>
  </div>
</div>
<div class="sides"><p>Lorem ipsum</p></div>
</div>
</template>


<script>
import auth from "../auth";

export default {
  name: "AllPosts",
  data() {
    return {
      posts: [],
      authResult: auth.authenticated()
    };
  },
  methods: {
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/api/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    DeleteAll() {
      
      fetch(`http://localhost:3000/api/posts/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        this.$router.push("/api/allposts");
        location.reload(); 

      })
      .catch((e) => {
        console.log(e);
      });
    },
  },

  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

<style scoped>
.flex-container {
display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch; 
}
.sides{
  min-height: 100%;
  width: 100%;
  background-color: var(--primary-color);
  border: 1px solid var(--accent-color);
  border-radius: 5px;
}
.buttons_div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  width: 50%;
}
.mid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200%;
  border-radius: 5px;
  height: 100%;
  min-height: 100%;
}
.allPostsButton {
  margin: auto;
}
h1 {
  font-size: 20px;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.item {
  background: var(--teritary-color);
  margin-bottom: 20px;
  padding: 35px 35px;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.item:hover {
  transform: scale(1.03);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);
}
#post-list {
  background-color: var(--primary-color);
  border: 1px solid var(--accent-color);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 75%;
  border-radius: 20px;
}
#post-list ul {
  padding: 0;
}
#post-list li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}

.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 30%; 
}

.dateSpan {
  display: table;
  width: 100%;
}

.bodySpan {
  margin-top: 50px;
  margin-bottom: 50px;
}

.singlepost {
  text-align: right;
}
</style>