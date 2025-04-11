/*
 * Gestion de la boite de dialogue des capacités.
 */

const dlgCapacite = document.getElementById("dlgCapacite");
let globalHtmlItemZoneCapacite = null;

/*******************************************************************************
 * Mise en place des gestionnaires d'évènement pour la boite de dialogue des capacités.
 *******************************************************************************/
function dlgCapaciteInitEventListners() {
    document.getElementById("dlgCapaciteFerme").addEventListener('click', dlgCapaciteBtnCloseOnClick);
    document.getElementById("DLG_CAPACITE_FORM").addEventListener('submit', dlgCapaciteFormOnSubmit);
}

/*******************************************************************************
 * Affichage de la boite de dialogue de modification de la capacité pour la zone
 * passée en paramètre.
 * @param {type} parHtmlItemZoneCapacite Item contant la zone de la capacité (div)
 *******************************************************************************/
function dlgCapaciteOuverture(parHtmlItemZoneCapacite) {
    let varDlgCapaciteDisplayDescription = dlgCapacite.getElementsByClassName("dlgCapaciteDisplayDescription")[0];
    let varDlgCapaciteDisplayRang = dlgCapacite.getElementsByClassName("dlgCapaciteDisplayRang")[0];
    let varDlgCapaciteDisplayNom = dlgCapacite.getElementsByClassName("dlgCapaciteDisplayNom")[0];
    
    globalHtmlItemZoneCapacite = parHtmlItemZoneCapacite;
    
    if(parHtmlItemZoneCapacite.parentNode.getElementsByClassName("txtIdTypeVoie")[0].value==="PERSO") {
        // Affichage du rang modifiable
        document.getElementById("DLGCAPACITE_TXT_RANG").style.display = "inline";
        varDlgCapaciteDisplayRang.style.display = "none";
        document.getElementById("DLGCAPACITE_TXT_RANG").value = parHtmlItemZoneCapacite.getElementsByClassName("txtRangCapacite")[0].value;
        
        // Affichage du nom modifiable
        document.getElementById("DLGCAPACITE_TXT_NOM").style.display = "inline";
        varDlgCapaciteDisplayNom.style.display = "none";
        document.getElementById("DLGCAPACITE_TXT_NOM").value = parHtmlItemZoneCapacite.getElementsByClassName("txtNomCapacite")[0].value;
        
        // Affichage de la description modifiable
        document.getElementById("DLGCAPACITE_TXT_DESCRIPTION").style.display = "inline";
        varDlgCapaciteDisplayDescription.style.display = "none";
        document.getElementById("DLGCAPACITE_TXT_DESCRIPTION").value = parHtmlItemZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0].value;
    }
    else {
        // Affichage du rang non modifiable
        document.getElementById("DLGCAPACITE_TXT_RANG").style.display = "none";
        varDlgCapaciteDisplayRang.style.display = "inline";
        varDlgCapaciteDisplayRang.innerText = parHtmlItemZoneCapacite.getElementsByClassName("txtRangCapacite")[0].value;
        
        // Affichage du nom non modifiable
        document.getElementById("DLGCAPACITE_TXT_NOM").style.display = "none";
        varDlgCapaciteDisplayNom.style.display = "inline";
        varDlgCapaciteDisplayNom.innerText = parHtmlItemZoneCapacite.getElementsByClassName("txtNomCapacite")[0].value;
        
        // Affichage de la description non modifiable
        document.getElementById("DLGCAPACITE_TXT_DESCRIPTION").style.display = "none";
        varDlgCapaciteDisplayDescription.style.display = "inline";
        varDlgCapaciteDisplayDescription.innerHTML = globalHtmlItemZoneCapacite.getElementsByClassName("displayDescriptionCapacite")[0].innerHTML;
    }
    
    document.getElementById("DLGCAPACITE_TXT_COMPLEMENT").value = parHtmlItemZoneCapacite.getElementsByClassName("txtComplementCapacite")[0].value;
    dlgCapacite.showModal();
}

/*******************************************************************************
 * Evenement de click sur le bouton de fermeture de la boite de dialogue.
 *******************************************************************************/
function dlgCapaciteBtnCloseOnClick () {
    dlgCapacite.close();
}

/*******************************************************************************
 * Evènement de validation du formulaire de la boite de dialogue.
 * @param {type} e Evenement capturé.
 *******************************************************************************/
function dlgCapaciteFormOnSubmit(e) {
    e.preventDefault(); // On évite que le processus de validation du formulaire (POST/GET) se réalise.
    dlgCapaciteValidation();
    return false;
}

/*******************************************************************************
 * Gestion de la validation de la modification de la capacité.
 ********************************************************************************/
function dlgCapaciteValidation() {
    let varTypeVoie = globalHtmlItemZoneCapacite.parentNode.getElementsByClassName("txtIdTypeVoie")[0].value;
    let varHtmlItemTxtRang = globalHtmlItemZoneCapacite.getElementsByClassName("txtRangCapacite")[0];
    let varHtmlItemTxtNom = globalHtmlItemZoneCapacite.getElementsByClassName("txtNomCapacite")[0];
    let varHtmlItemTxtDescription = globalHtmlItemZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0];
    let varHtmlItemTxtComplement = globalHtmlItemZoneCapacite.getElementsByClassName("txtComplementCapacite")[0];
    
    if(varTypeVoie === "PERSO") {
        varHtmlItemTxtRang.value = document.getElementById("DLGCAPACITE_TXT_RANG").value;
        varHtmlItemTxtNom.value = document.getElementById("DLGCAPACITE_TXT_NOM").value;
        varHtmlItemTxtDescription.value = document.getElementById("DLGCAPACITE_TXT_DESCRIPTION").value;
    }
    
    varHtmlItemTxtComplement.value = document.getElementById("DLGCAPACITE_TXT_COMPLEMENT").value;
    
    afficherTextCapacite(globalHtmlItemZoneCapacite);
    
    dlgCapacite.close();
}

