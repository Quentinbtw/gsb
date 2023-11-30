export default class DataService{
    // Fonction qui va permettre d'authentifier un visiteur
    async getVisiteur(unLogin,unMdp){

        // Je passe ici les paramètres de mon appel ) l'API
        var params = new URLSearchParams({
            login: unLogin,
            mdp: unMdp,
        });
        // Appel de l'API
        var response = await fetch('http://localhost/restGSB/connexion?'+params);
        // Récupération de la réponse, et retour
        var items = await response.json();
        return items;
    }

    async getMedecins(unMedecin){

         // Je passe ici les paramètres de mon appel ) l'API
         var params = new URLSearchParams({
            nom: unMedecin
        });
        // Appel de l'API
        var response = await fetch('http://localhost/restGSB/medecins?'+params);
        // Récupération de la réponse, et retour
        var items = await response.json();
        return items;

    }

}