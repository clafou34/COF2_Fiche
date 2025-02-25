/* 
 * Gestion des événements pour la gestion de la fiche.
 */

/*******************************************************************************
 * Initialise tous les événements des items de la fiche
 *******************************************************************************/
function initEventListners() {
    document.getElementById("SEL_PEUPLE").addEventListener('change', selPeupleOnChange);
    document.getElementById("SEL_FAMILLE").addEventListener('change', selFamilleOnChange);
    document.getElementById("SEL_PROFIL").addEventListener('change', selProfilOnChange);
    document.getElementById("SEL_VOIE_PEUPLE").addEventListener('change', selVoiePeupleOnChange);
    document.getElementById("SEL_VOIE_FAMILLE").addEventListener('change', selVoieFamilleOnChange);
    document.getElementById("TXT_NIVEAU").addEventListener('change', txtNiveauOnChange);
    document.getElementById("SEL_FOR").addEventListener('change', selForOnChange);
    document.getElementById("SEL_AGI").addEventListener('change', selAgiOnChange);
    document.getElementById("SEL_VOL").addEventListener('change', selVolOnChange);
    document.getElementById("TXT_DEF_AUTRE").addEventListener('change', txtDefAutreOnChange);
    for (let varSelectTypeArme of document.getElementsByClassName("selectTypeAttaque")) {
        varSelectTypeArme.addEventListener('change', selTypeAttaqueOnChange);
    }
    for (let varChkArmure of document.getElementsByClassName("chkArmure")) {
        varChkArmure.addEventListener('change', chkArmureOnChange);
    }
    for (let varTxtDefArmure of document.getElementsByClassName("txtDefArmure")) {
        varTxtDefArmure.addEventListener('change', txtDefArmureOnChange);
    }
    for (let varSelTypeVoieProfil of document.getElementsByClassName("selectTypeVoieProfil")) {
        varSelTypeVoieProfil.addEventListener('change', selTypeVoieProfilOnChange);
    }
    for (let varSelVoieHybride of document.getElementsByClassName("selectVoieHybride")) {
        varSelVoieHybride.addEventListener('change', selVoieHybrideOnChange);
    }
}

/*******************************************************************************
 * Gestion de la fin du chargement de la page.
 *******************************************************************************/
function bodyOnLoad() {
    // Initialisation des événements à écouter
    initEventListners();
    
    // Remplir les données par défaut
    initSelectPeuples();
    initSelectCaracteristiques();
    initSelectFamille();
    initSelectProfils();
    initSelectVoiesFamille();
    initSelectVoiePeuple();
    initSelectTypeAttaque();
    remplirAttaques();
    remplirCapacitesVoiePeuple();
    remplirDesRecuperation();
    remplirDefense();
    gereVoiesProfil();
}

/********************************************************************
 Gestion de l'événement "OnChange" du checkbox d'armure.
 ********************************************************************/
function chkArmureOnChange() {
    remplirDefense();
}

/********************************************************************
 Gestion de l'événement "OnChange" de la valeur de défence des armures
 ********************************************************************/
function txtDefArmureOnChange() {
    remplirDefense();
}

/********************************************************************
 Gestion de l'événement "OnChange" du champs des bonus de défense.
 ********************************************************************/
function txtDefAutreOnChange() {
    remplirDefense();
}

/********************************************************************
 Gestion de l'événement "OnChange" du champs du type d'attaque.
 ********************************************************************/
function selTypeAttaqueOnChange() {
    remplirAttaqueArme();
}

/********************************************************************
 Gestion de l'événement "OnChange" du champs NIVEAU.
 ********************************************************************/
function txtNiveauOnChange() {
    remplirAttaques();
}

/********************************************************************
 Gestion de l'événement "OnChange" du champs FOR.
 ********************************************************************/
function selForOnChange() {
    remplirAttaques();
}

/********************************************************************
 Gestion de l'événement "OnChange" du champs AGI.
 ********************************************************************/
function selAgiOnChange() {
    remplirAttaques();
    remplirDefense();
}

/********************************************************************
 Gestion de l'événement "OnChange" du champs VOL.
 ********************************************************************/
function selVolOnChange() {
    remplirAttaques();
}

/********************************************************************
 Gestion de l'événement "OnChange" de la liste de choix des peuples.
 ********************************************************************/
function selPeupleOnChange() {
    initSelectVoiePeuple();
    remplirCapacitesVoiePeuple();
}

/********************************************************************
 Gestion de l'événement "OnChange" de la liste de choix des familles.
 ********************************************************************/
function selFamilleOnChange() {
    initSelectProfils();
    initSelectVoiesFamille();
    remplirCapacitesVoiePeuple();
    remplirDesRecuperation();
    gereVoiesProfil();
}

/********************************************************************
 * Gestion de l'événement "OnChange" de la liste de choix des profils.
 ********************************************************************/
function selProfilOnChange() {
    gereVoiesProfil();
}

/********************************************************************
 Gestion de l'événement "OnChange" de la liste de choix des voies
 du peuple.
 ********************************************************************/
function selVoiePeupleOnChange() {
    remplirCapacitesVoiePeuple();
}

/********************************************************************
 Gestion de l'événement "OnChange" de la liste de choix des voies
 des familles.
 ********************************************************************/
function selVoieFamilleOnChange() {
    remplirCapacitesVoiePeuple();
}

/*************************************************************************
 * Gestion de l'événement "OnChange" de la liste des types de voie
 * du profil.
 * @param {event} event Evénement permettant de retrouver la zone à gérer.
 **************************************************************************/
function selTypeVoieProfilOnChange(event) {
    gereVoieProfil(event.currentTarget.parentNode.parentNode);
}

/********************************************************************
 Gestion de l'événement "OnChange" de la liste de choix des voies
 des profils hybrides.
 * @param {event} event Evénement permettant de retrouver la zone à gérer.
 ********************************************************************/
function selVoieHybrideOnChange(event) {
        // On affiche les capacités de la voie du profil hybride
        let varTabIdVoieProfil = event.currentTarget.value.split(";");
        let varObjVoie = getVoieWithGroupe(decodeURIComponent(varTabIdVoieProfil[1]), decodeURIComponent(varTabIdVoieProfil[0]));
        remplirVoieAvecObjVoie(event.currentTarget.parentNode.parentNode, varObjVoie);
}