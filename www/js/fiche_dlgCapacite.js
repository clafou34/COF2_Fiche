const dlgCapacite = document.getElementById("dlgCapacite");
let globalHtmlItemZoneCapacite = null;
let globalEstVoiePersonnalisee = false;

function dlgCapaciteOuverture(parHtmlItemZoneCapacite) {
    globalHtmlItemZoneCapacite = parHtmlItemZoneCapacite;
    
    document.getElementById("DLGCAPACITE_TXT_RANG").value = parHtmlItemZoneCapacite.getElementsByClassName("txtRangCapacite")[0].value;
    document.getElementById("DLGCAPACITE_TXT_NOM").value = parHtmlItemZoneCapacite.getElementsByClassName("txtNomCapacite")[0].value;
    document.getElementById("DLGCAPACITE_TXT_DESCRIPTION").value = parHtmlItemZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0].value;
    document.getElementById("DLGCAPACITE_TXT_COMPLEMENT").value = parHtmlItemZoneCapacite.getElementsByClassName("txtComplementCapacite")[0].value;
    dlgCapacite.showModal();
}

function dlgCapaciteHide () {
    dlgCapacite.close();
}
