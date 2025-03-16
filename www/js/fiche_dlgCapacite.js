const dlgCapacite = document.getElementById("dlgCapacite");
let globalHtmlItemZoneCapacite = null;

function dlgCapaciteOuverture(parHtmlItemZoneCapacite) {
    globalHtmlItemZoneCapacite = parHtmlItemZoneCapacite;
    
    if(parHtmlItemZoneCapacite.getElementsByClassName("selectTypeVoie")[0].value==="PERSO") {
        document.getElementById("DLGCAPACITE_TXT_RANG").disabled = false;
        document.getElementById("DLGCAPACITE_TXT_NOM").disabled = false;
    }
    else {
        document.getElementById("DLGCAPACITE_TXT_RANG").disabled = true;
        document.getElementById("DLGCAPACITE_TXT_NOM").disabled = true;
    }
    
    document.getElementById("DLGCAPACITE_TXT_RANG").value = parHtmlItemZoneCapacite.getElementsByClassName("txtRangCapacite")[0].value;
    document.getElementById("DLGCAPACITE_TXT_NOM").value = parHtmlItemZoneCapacite.getElementsByClassName("txtNomCapacite")[0].value;
    document.getElementById("DLGCAPACITE_TXT_DESCRIPTION").value = parHtmlItemZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0].value;
    document.getElementById("DLGCAPACITE_TXT_COMPLEMENT").value = parHtmlItemZoneCapacite.getElementsByClassName("txtComplementCapacite")[0].value;
    dlgCapacite.showModal();
}

function dlgCapaciteHide () {
    dlgCapacite.close();
}
