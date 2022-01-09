<template>
  <div></div>
</template>

<script>
export default {
  name: 'WellKnown',
  props: {
    file: String
  },
  mounted () {
    window.location.href = this.file
  }
}
</script>