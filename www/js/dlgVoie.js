/*
 * Gestion de la boite de dialogue des voies.
 */

const dlgVoie = document.getElementById("dlgVoie");

/*******************************************************************************
 * Mise en place des gestionnaires d'évènement pour la boite de dialogue.
 *******************************************************************************/
function dlgVoieInitEventListners() {
    document.getElementById("dlgVoieFerme").addEventListener('click', dlgVoieBtnCloseOnClick);
    document.getElementById("dlgVoieOK").addEventListener('click', dlgVoieBtnOkOnClick);
}

/*******************************************************************************
 * Affichage de la boite de dialogue de la voie dont la zone est passée en 
 * paramètre.
 * @param {type} parHtmlItemZoneVoie Item contant la zone de la voie (fieldset)
 *******************************************************************************/
function dlgVoieOuverture(parHtmlItemZoneVoie) {
    dlgVoie.showModal();
}

/*******************************************************************************
 * Evènement de click sur le bouton de validation ("OK") de la boite de dialogue.
 *******************************************************************************/
function dlgVoieBtnOkOnClick() {
    dlgVoieValidation();
}

/*******************************************************************************
 * Gestion de la validation de la modification.
 ********************************************************************************/
function dlgVoieValidation() {
    dlgVoie.close();
}

/*******************************************************************************
 * Evenement de click sur le bouton de fermeture de la boite de dialogue.
 *******************************************************************************/
function dlgVoieBtnCloseOnClick () {
    dlgVoie.close();
}

