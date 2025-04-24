
function ficheSauve() {
    const objPersonnage = new Object();
    
    // Nom du personnage
    objPersonnage.nom = document.getElementById("TXT_NOM").value;

    // Zone de la personnalité
    objPersonnage.idPeuple = document.getElementById("SEL_PEUPLE").value;
    objPersonnage.niveau = document.getElementById("TXT_NIVEAU").value;
    objPersonnage.idFamille = document.getElementById("SEL_FAMILLE").value;
    objPersonnage.idProfil = document.getElementById("SEL_PROFIL").value;
    objPersonnage.idealHeroique = document.getElementById("TXT_IDEAL").value;
    objPersonnage.travers = document.getElementById("TXT_TRAVERS").value;
    objPersonnage.description = document.getElementById("TXT_DESCRIPTION").value;

    // Zone des caractéristiques
    objPersonnage.AGI = document.getElementById("SEL_AGI").value;
    objPersonnage.noteAGI = document.getElementById("TXT_NOTE_AGI").value;
    objPersonnage.CON = document.getElementById("SEL_CON").value;
    objPersonnage.noteCON = document.getElementById("TXT_NOTE_CON").value;
    objPersonnage.FOR = document.getElementById("SEL_FOR").value;
    objPersonnage.noteFOR = document.getElementById("TXT_NOTE_FOR").value;
    objPersonnage.PER = document.getElementById("SEL_PER").value;
    objPersonnage.notePER = document.getElementById("TXT_NOTE_PER").value;
    objPersonnage.CHA = document.getElementById("SEL_CHA").value;
    objPersonnage.noteCHA = document.getElementById("TXT_NOTE_CHA").value;
    objPersonnage.INT = document.getElementById("SEL_INT").value;
    objPersonnage.noteINT = document.getElementById("TXT_NOTE_INT").value;
    objPersonnage.VOL = document.getElementById("SEL_VOL").value;
    objPersonnage.noteVOL = document.getElementById("TXT_NOTE_VOL").value;

    // Initiative
    objPersonnage.initiative = document.getElementById("TXT_INITIATIVE").value;

    // Vigueur
    objPersonnage.vigueurUtilisee = document.getElementById("TXT_PTS_VIGUEUR_UTILISES").value;
    objPersonnage.vigueurMax = document.getElementById("TXT_PTS_VIGUEUR_MAX").value;

    // Défense
    objPersonnage.defenseAutre = document.getElementById("TXT_DEF_AUTRE").value;

    // Points de chance
    objPersonnage.chanceUtilisee = document.getElementById("TXT_PTS_CHANCE_UTILISES").value;
    objPersonnage.chanceMax = document.getElementById("TXT_PTS_CHANCE_MAX").value;

    // Points de mana
    objPersonnage.manaUtilisee = document.getElementById("TXT_PTS_MANA_UTILISES").value;
    objPersonnage.manaMax = document.getElementById("TXT_PTS_MANA_MAX").value;

    // Dés de récupération
    objPersonnage.recuperationUtilisee = document.getElementById("TXT_DES_RECUP_UTILISES").value;
    objPersonnage.recuperationMax = document.getElementById("TXT_DES_RECUP_MAX").value;

    // Equipement
    objPersonnage.equipement = document.getElementById("TXT_EQUIPEMENT").value;

    // Bourse
    objPersonnage.PO = document.getElementById("TXT_NB_PO").value;
    objPersonnage.PA = document.getElementById("TXT_NB_PA").value;
    objPersonnage.PC = document.getElementById("TXT_NB_PC").value;

    // Armes
    objPersonnage.armes = [];
    for (let varZoneArme of document.getElementsByClassName("zoneArme")) {
        let varObjArme = new Object();
        varObjArme.nomArme = varZoneArme.getElementsByClassName("txtNomArme")[0].value;
        varObjArme.typeAttaqueArme = varZoneArme.getElementsByClassName("selectTypeAttaque")[0].value;
        varObjArme.dmArme = varZoneArme.getElementsByClassName("txtDmArme")[0].value;
        varObjArme.noteArme = varZoneArme.getElementsByClassName("txtNoteArme")[0].value;
        objPersonnage.armes.push(varObjArme);
    }

    // Armures
    objPersonnage.armures = [];
    for (let varZoneArmure of document.getElementsByClassName("zoneArmure")) {
        let varObjArmure = new Object();
        if (varZoneArmure.getElementsByClassName("chkArmure")[0].checked)
            varObjArmure.selectionArmure = "1";
        else
            varObjArmure.selectionArmure = "0";
        varObjArmure.nomArmure = varZoneArmure.getElementsByClassName("txtNomArmure")[0].value;
        varObjArmure.defenseArmure = varZoneArmure.getElementsByClassName("txtDefArmure")[0].value;
        varObjArmure.agiliteMaxArmure = varZoneArmure.getElementsByClassName("txtAgiArmure")[0].value;
        objPersonnage.armures.push(varObjArmure);
    }

    // Voies
    objPersonnage.voies = [];
    for (let varZoneVoie of document.getElementsByClassName("zoneVoie")) {
        let varObjVoie = new Object();
        varObjVoie.idTypeVoie = varZoneVoie.getElementsByClassName("txtIdTypeVoie")[0].value;
        varObjVoie.idGroupeVoie = varZoneVoie.getElementsByClassName("txtIdGroupeVoie")[0].value;
        varObjVoie.idVoie = varZoneVoie.getElementsByClassName("txtIdVoie")[0].value;
        varObjVoie.nomVoie = varZoneVoie.getElementsByClassName("txtNomVoie")[0].value;

        varObjVoie.capacites = [];
        for (let varZoneCapacite of varZoneVoie.getElementsByClassName("zoneCapacite")) {
            let varObjCapacite = new Object();
            if (varZoneCapacite.getElementsByClassName("chkCapacite")[0].checked)
                varObjCapacite.selectionCapacite = "1";
            else
                varObjCapacite.selectionCapacite = "0";
            varObjCapacite.rangCapacite = varZoneCapacite.getElementsByClassName("txtRangCapacite")[0].value;
            if (varObjVoie.idTypeVoie === "PERSO") {
                varObjCapacite.nomCapacite = varZoneCapacite.getElementsByClassName("txtNomCapacite")[0].value;
                varObjCapacite.descriptionCapacite = varZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0].value;
            } else { // Pour les voies non personnalisées, on récupèrera le nom et la description de référence.
                varObjCapacite.nomCapacite = "";
                varObjCapacite.descriptionCapacite = "";
            }
            varObjCapacite.complementCapacite = varZoneCapacite.getElementsByClassName("txtComplementCapacite")[0].value;
            varObjVoie.capacites.push(varObjCapacite);
        }

        objPersonnage.voies.push(varObjVoie);
    }

    sessionStorage.setItem("ficheCOF2", JSON.stringify(objPersonnage));

    //console.log(JSON.stringify(objPersonnage, null, 2));
}

function ficheLire() {
    let jsonPersonnage = sessionStorage.getItem("ficheCOF2");
    let objPersonnage = new Object();

    if (jsonPersonnage !== null)
        objPersonnage = JSON.parse(jsonPersonnage);

    // Nom du personnage
    if (objPersonnage.nom === undefined)
        document.getElementById("TXT_NOM").value = "";
    else
        document.getElementById("TXT_NOM").value = objPersonnage.nom;
    
    // Zone de la personnalité
    initSelectPeuples();
    if (objPersonnage.idPeuple !== undefined)
        document.getElementById("SEL_PEUPLE").value = objPersonnage.idPeuple;
    if (objPersonnage.niveau !== undefined)
        document.getElementById("TXT_NIVEAU").value = objPersonnage.niveau;
    else
        document.getElementById("TXT_NIVEAU").value = "1";
    initSelectFamille();
    if (objPersonnage.idFamille !== undefined)
        document.getElementById("SEL_FAMILLE").value= objPersonnage.idFamille;
    initSelectProfils();
    if (objPersonnage.idProfil !== undefined)
        document.getElementById("SEL_PROFIL").value = objPersonnage.idProfil;
    if (objPersonnage.idealHeroique !== undefined)
        document.getElementById("TXT_IDEAL").value = objPersonnage.idealHeroique;
    else
        document.getElementById("TXT_IDEAL").value = "";
    if (objPersonnage.travers !== undefined)
        document.getElementById("TXT_TRAVERS").value = objPersonnage.travers;
    else
        document.getElementById("TXT_TRAVERS").value = "";
    if (objPersonnage.description !== undefined)
        document.getElementById("TXT_DESCRIPTION").value = objPersonnage.description;
    else
        document.getElementById("TXT_DESCRIPTION").value = "";
}