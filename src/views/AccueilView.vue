<template>
  <NavBarComponent />
<div style="text-align: center; margin-top: 300px; font-size: 300%;">
Bienvenue {{ user.nom }} !
</div>
</template>
<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
 export default {
  components: { NavBarComponent },
  data(){
    return{
    user : this.$store.state.utilisateur,
    }
  }
}
</script>