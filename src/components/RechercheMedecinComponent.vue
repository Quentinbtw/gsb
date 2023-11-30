<template>
    <v-container>
        <v-text-field @keyup="getLesMedecins" label="Nom de medecin" v-model="nomMedecin"></v-text-field>
        <v-card class="mx-auto">
            <v-list v-show="isListVisible">
                <v-list-item v-for="item in items" :key="item.id" :value="item.nom" @click="getInfos(item)">
                    {{ item.nom + " " + item.prenom }} 
                </v-list-item>
            </v-list>
        </v-card>
        <div v-show="selectedMedecin">
      <h2>Options pour {{ this.$store.state.medecin.nom }} {{ this.$store.state.medecin.prenom }}</h2>
      <v-toolbar border dentity="comfortable" style="margin-top:10px">
    <v-col class="d-flex justify-space-around">
      <v-btn @click="consulterRapports">Consulter les rapports</v-btn>
    </v-col>
    <v-col class="d-flex justify-space-around">
      <v-btn @click="gererMedecins">Gérer les médecins</v-btn>
    </v-col>
     </v-toolbar>
    </div>
    </v-container>
</template>

<script>
export default {
    name: 'RechercheMedecinComponent',
    data() {

        return {
            idMedecin: '',
            nomMedecin: '',
            items: [],
            isListVisible: false,
            selectedMedecin: false,
        }
    },
    methods: {

        getLesMedecins() {

            this.$store.state.DataService.getMedecins(this.nomMedecin)
            
                .then(
                    (data) => {

                        this.$store.state.utilisateur = data;
                        this.items = data;
                        this.isListVisible = true;
                        console.log(data);

                    }) 
                    .catch((error) => {
          console.error('Erreur lors de la récupération des médecins', error);
        });
        },

        getInfos(item) {

            this.$store.state.medecin = item;
            this.nomMedecin = item.nom + " " +item.prenom;
            this.isListVisible = false;
            this.selectedMedecin = true;

        }
    }
}
</script>

<style></style>