<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Comics Info</h1>
        <h1>UNDER CONSTRUCTION</h1>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
