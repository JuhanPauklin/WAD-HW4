<template>
    <div class="about">
      <h1>How to contact us:</h1>
      <h3>email: support@support.ee</h3>
      <h3>Phone: 8669 5420</h3>
    </div>
  </template>
  
  <script>
  export default{
  name:"test",
  components: {},
  methods:{
    Testing: function(){
      console.log("test")
    }
  }
  }
  </script>

<style>

.about {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  max-width: 400px;
  margin: auto;
  padding: 20px 30px 50px 30px;
  border-radius: 10px;
}
</style>