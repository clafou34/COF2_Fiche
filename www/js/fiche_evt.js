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
    for (let varSelectTypeVoie of document.getElementsByClassName("selectTypeVoie")) {
        varSelectTypeVoie.addEventListener('change', selTypeVoieOnChange);
    }
    for (let varSelVoieHybride of document.getElementsByClassName("selectVoie")) {
        varSelVoieHybride.addEventListener('change', selVoieOnChange);
    }
    for (let varZoneCapacite of document.getElementsByClassName("btnModifCapacite")) {
        varZoneCapacite.addEventListener('click', zoneCapaciteOnClick);
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
    initSelectTypeAttaque();
    remplirAttaques();
    remplirDesRecuperation();
    remplirDefense();
    gereVoies();
}

/********************************************************************
 * Gestion de l'évènement "OnClick" sur une capacité
 * @param {event} event Evénement permettant de retrouver la zone à gérer.
 ********************************************************************/
function zoneCapaciteOnClick(event) {
    // Ouverture de la fenêtre de gestion de la capacité avec l'item HTML de la zone
    dlgCapaciteOuverture(event.currentTarget.parentNode.parentNode);
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
 * Gestion de l'événement "OnChange" de la liste de choix des peuples.
 ********************************************************************/
function selPeupleOnChange() {
    gereVoies();
}

/********************************************************************
 Gestion de l'événement "OnChange" de la liste de choix des familles.
 ********************************************************************/
function selFamilleOnChange() {
    initSelectProfils();
    initSelectTypeVoiePeuple();

    remplirDesRecuperation();
    gereVoies();
}

/********************************************************************
 * Gestion de l'événement "OnChange" de la liste de choix des profils.
 ********************************************************************/
function selProfilOnChange() {
    gereVoiesProfil();
}

/*************************************************************************
 * Gestion de l'événement "OnChange" de la liste des types de voie.
 * @param {event} event Evénement permettant de retrouver la zone à gérer.
 **************************************************************************/
function selTypeVoieOnChange(event) {
    gereVoie(event.currentTarget.parentNode.parentNode);
}

/********************************************************************
 * Gestion de l'événement "OnChange" de la liste de choix des voies dans une zone
 * de voie.
 * @param {event} event Evénement permettant de retrouver la zone à gérer.
 ********************************************************************/
function selVoieOnChange(event) {
        afficheCapacitesVoie(event.currentTarget.parentNode.parentNode);
}