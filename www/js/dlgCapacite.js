const dlgCapacite = document.getElementById("dlgCapacite");
let globalHtmlItemZoneCapacite = null;

function dlgCapaciteOuverture(parHtmlItemZoneCapacite) {
    let varDlgCapaciteDisplayDescription = dlgCapacite.getElementsByClassName("dlgCapaciteDisplayDescription")[0];
    let varDlgCapaciteDisplayRang = dlgCapacite.getElementsByClassName("dlgCapaciteDisplayRang")[0];
    let varDlgCapaciteDisplayNom = dlgCapacite.getElementsByClassName("dlgCapaciteDisplayNom")[0];
    
    globalHtmlItemZoneCapacite = parHtmlItemZoneCapacite;
    
    if(parHtmlItemZoneCapacite.parentNode.getElementsByClassName("selectTypeVoie")[0].value==="PERSO") {
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
        // Affichage du non rang modifiable
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

function dlgCapaciteHide () {
    dlgCapacite.close();
}
