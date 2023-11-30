<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
  <v-card class="mx-auto px-6 py-8" max-width="344">
  <v-form v-model="form" @submit.prevent="getLogin">
  <v-text-field
  v-model="login"
  :readonly="loading"
  :rules="[required]"
  class="mb-2"
  clearable
  label="Login"
  ></v-text-field>
  
  <v-text-field
  v-model="password"
  :readonly="loading"
  :rules="[required]"
  clearable
  label="Mot de passe"
  placeholder="Entrez votre mot de passe"
  ></v-text-field>
  
  <br />
  
  <v-btn
  :loading="loading"
  block
  color="success"
  size="large"
  type="submit"
  variant="elevated"
  >
  Connexion
  </v-btn>
  </v-form>
  
  <div v-show="errorMessage" class="error-message mt-4">
  <v-alert type="error" outlined icon="mdi-alert-circle-outline" class="error-box">
  {{ errorMSG }}
  </v-alert>
  </div>
  
  <div v-show="successMessage" class="success-message mt-4">
  <v-alert type="success" outlined icon="mdi-check-circle-outline" class="success-box">
  {{ successMSG }}
  </v-alert>
  </div>
  </v-card>
  </v-sheet>
  </template>
  
  <script>
  import DataService from '@/services/DataService'
  

  var dataService = new DataService(); // Instanciation de l'objet de type DataService

  export default {
  data: () => ({
  form: false,
  login: null,
  password: null,
  loading: false,
  errorMessage: false,
  successMessage: false,
  errorMSG: "Erreur dans le login ou le mot de passe",
  successMSG: ""
  }),
  
  methods: {
    getLogin(){

      dataService.getVisiteur(this.login,this.password)

      .then(
        (data)=>{

          this.$store.state.utilisateur = data;
          console.log(data);
          this.successMessage=true

          this.$router.push('accueil')
          
        })
        .catch(
          (error)=>{
            console.log(error);
            this.isVisible=true
            this.errorMessage=true
          }
        )
    }
  }
}
  </script>
  
  <style scoped>
  .error-message {
  text-align: center;
  }
  
  .success-message {
  text-align: center;
  }
  
  .error-box {
  color: #ff5252;
  border-color: #fc0000;
  }
  
  .success-box {
  color: #4caf50;
  border-color: #00ff08;
  }
  </style>
  
  