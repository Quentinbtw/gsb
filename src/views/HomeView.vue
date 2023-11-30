<template>
  <PageLogin />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import PageLogin from "../components/PageLogin.vue"

export default defineComponent({
  name: 'HomeView',

  components: {
    PageLogin,
  },
});
</script>
