

function impressionBodyOnLoad() {
    impressionFicheLecture();
}

/*******************************************************************************
 * Initialise la fiche avec les données du fichier dont l'identifiant est dans
 * la variable "fiche_courante" du sessionStorage.
 *******************************************************************************/
function impressionFicheLecture() {
    // Récupération de l'identifiant du fichier.
    let varIdFichier = sessionStorage.getItem("fiche_courante");
    if(varIdFichier===null) {
        console.error("Impossible de récupérer l'identifiant du fichier dans la variable 'fiche_courante' du sessionStorage. Initialisation de la fiche abandonnée.");
        return;
    }
    
    // Récupération des données
    let strDonneesFiche = fichier_getDonnees(varIdFichier);
    if(strDonneesFiche===null) {
        console.error("Impossible de récupérer les données du fichier. Initialisation de la fiche abandonnée.");
        return;        
    }
    let objDonneesFiche = {};
    if(strDonneesFiche!=="")
        objDonneesFiche = JSON.parse(strDonneesFiche);
    
    // Initialisation de la fiche.
    impressionInitAvecJSON(objDonneesFiche);
}

/*******************************************************************************
 * Initialise la fiche avec l'objet JSON passé en paramètre. Si l'objet n'est pas
 * complet, les valeurs manquantes sont renmplacées par les valeurs par défaut.
 * @param {object} parObjPersonnage Objet JSON contenant les données de la fiche.
 *******************************************************************************/
function impressionInitAvecJSON(parObjPersonnage) {
    let objPersonnage = parObjPersonnage;

    // Nom du personnage
    if (objPersonnage.commun === undefined)
        document.getElementById("TXT_NOM").innerText = "";
    else {
        if (objPersonnage.commun.nom_personnage === undefined)
            document.getElementById("TXT_NOM").innerText = "";
        else
            document.getElementById("TXT_NOM").innerText = objPersonnage.commun.nom_personnage;
    }
    
    // Initiative
    if ((objPersonnage.initiative !== undefined) && (objPersonnage.initiative !== ""))
        document.getElementById("TXT_INITIATIVE").innerText = objPersonnage.initiative;
    else
        document.getElementById("TXT_INITIATIVE").innerText = "";
    
    // Vigueur
    if (objPersonnage.vigueurActuelle !== undefined)
        document.getElementById("TXT_PTS_VIGUEUR_ACTUELS").innerText = objPersonnage.vigueurActuelle;
    else
        document.getElementById("TXT_PTS_VIGUEUR_ACTUELS").innerText = "";
    if (objPersonnage.vigueurMax !== undefined)
        document.getElementById("TXT_PTS_VIGUEUR_MAX").innerText = objPersonnage.vigueurMax;
    else
        document.getElementById("TXT_PTS_VIGUEUR_MAX").innerText = "";
  
}