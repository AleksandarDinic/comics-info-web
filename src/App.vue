<template>
  <div id="app">
    <CIHeader />
    <router-view></router-view>
    <CIFooter />
  </div>
</template>

<script>
import CIHeader from "@/components/CIHeader";
import CIFooter from "@/components/CIFooter";

export default {
  name: "App",
  components: {
    CIHeader,
    CIFooter
  }
};
</script>

<style></style>
