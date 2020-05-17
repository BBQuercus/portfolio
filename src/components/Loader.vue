<template>

</template>

<script>
export default {
  name: "Loader",
  data: function() {
    return {
      isLoading: true
    };
  },
  methods: {
    checkLoading: function() {
    }
  },
  beforeMount() {
    this.checkLoading();
  }
};
</script>

<style>
</style>
