<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <a class="button is-primary" @click="changeStatus">Change Status</a>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>

