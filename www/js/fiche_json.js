
/*******************************************************************************
 * Récupère les données de la fiche de personnage pour créer un objet qui est
 * retourné.
 * @returns {object} Objet représentant les données de la fiche de personnage.
 *******************************************************************************/
function ficheConstruireJSON() {
    const objPersonnage = new Object();

    // Nom du personnage
    let varObjCommun = new Object();
    varObjCommun.jeu = "COF2";
    varObjCommun.nom_personnage = document.getElementById("TXT_NOM").value;
    objPersonnage.commun = varObjCommun;

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
    objPersonnage.vigueurActuelle = document.getElementById("TXT_PTS_VIGUEUR_ACTUELS").value;
    objPersonnage.vigueurMax = document.getElementById("TXT_PTS_VIGUEUR_MAX").value;

    // Défense
    objPersonnage.defenseAutre = document.getElementById("TXT_DEF_AUTRE").value;

    // Points de chance
    objPersonnage.chanceActuelle = document.getElementById("TXT_PTS_CHANCE_ACTUELS").value;
    objPersonnage.chanceMax = document.getElementById("TXT_PTS_CHANCE_MAX").value;

    // Points de mana
    objPersonnage.manaActuelle = document.getElementById("TXT_PTS_MANA_ACTUELS").value;
    objPersonnage.manaMax = document.getElementById("TXT_PTS_MANA_MAX").value;

    // Dés de récupération
    objPersonnage.recuperationActuelle = document.getElementById("TXT_DES_RECUP_ACTUELS").value;
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

    console.log(JSON.stringify(objPersonnage, null, 2));
    
    return objPersonnage;
}

/*******************************************************************************
 * Initialise la fiche avec l'objet JSON passé en paramètre. Si l'objet n'est pas
 * complet, les valeurs manquantes sont renmplacées par les valeurs par défaut.
 * @param {object} parObjPersonnage Objet JSON contenant les données de la fiche.
 *******************************************************************************/
function ficheInitAvecJSON(parObjPersonnage) {
    
    let objPersonnage = parObjPersonnage;

    // Nom du personnage
    if (objPersonnage.commun === undefined)
        document.getElementById("TXT_NOM").value = "";
    else {
        if (objPersonnage.commun.nom_personnage === undefined)
            document.getElementById("TXT_NOM").value = "";
        else
            document.getElementById("TXT_NOM").value = objPersonnage.commun.nom_personnage;
    }

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
        document.getElementById("SEL_FAMILLE").value = objPersonnage.idFamille;
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

    // Zone des caractéristiques
    initSelectCaracteristiques();
    if (objPersonnage.AGI !== undefined)
        document.getElementById("SEL_AGI").value = objPersonnage.AGI;
    else
        document.getElementById("SEL_AGI").value = 0;
    if (objPersonnage.noteAGI !== undefined)
        document.getElementById("TXT_NOTE_AGI").value = objPersonnage.noteAGI;
    else
        document.getElementById("TXT_NOTE_AGI").value = "";
    if (objPersonnage.CON !== undefined)
        document.getElementById("SEL_CON").value = objPersonnage.CON;
    else
        document.getElementById("SEL_CON").value = 0;
    if (objPersonnage.noteCON !== undefined)
        document.getElementById("TXT_NOTE_CON").value = objPersonnage.noteCON;
    else
        document.getElementById("TXT_NOTE_CON").value = "";
    if (objPersonnage.FOR !== undefined)
        document.getElementById("SEL_FOR").value = objPersonnage.FOR;
    else
        document.getElementById("SEL_FOR").value = 0;
    if (objPersonnage.noteFOR !== undefined)
        document.getElementById("TXT_NOTE_FOR").value = objPersonnage.noteFOR;
    else
        document.getElementById("TXT_NOTE_FOR").value = "";
    if (objPersonnage.PER !== undefined)
        document.getElementById("SEL_PER").value = objPersonnage.PER;
    else
        document.getElementById("SEL_PER").value = 0;
    if (objPersonnage.notePER !== undefined)
        document.getElementById("TXT_NOTE_PER").value = objPersonnage.notePER;
    else
        document.getElementById("TXT_NOTE_PER").value = "";
    if (objPersonnage.CHA !== undefined)
        document.getElementById("SEL_CHA").value = objPersonnage.CHA;
    else
        document.getElementById("SEL_CHA").value = 0;
    if (objPersonnage.noteCHA !== undefined)
        document.getElementById("TXT_NOTE_CHA").value = objPersonnage.noteCHA;
    else
        document.getElementById("TXT_NOTE_CHA").value = "";
    if (objPersonnage.INT !== undefined)
        document.getElementById("SEL_INT").value = objPersonnage.INT;
    else
        document.getElementById("SEL_INT").value = 0;
    if (objPersonnage.noteINT !== undefined)
        document.getElementById("TXT_NOTE_INT").value = objPersonnage.noteINT;
    else
        document.getElementById("TXT_NOTE_INT").value = "";
    if (objPersonnage.VOL !== undefined)
        document.getElementById("SEL_VOL").value = objPersonnage.VOL;
    else
        document.getElementById("SEL_VOL").value = 0;
    if (objPersonnage.noteVOL !== undefined)
        document.getElementById("TXT_NOTE_VOL").value = objPersonnage.noteVOL;
    else
        document.getElementById("TXT_NOTE_VOL").value = "";

    // Initiative
    if ((objPersonnage.initiative !== undefined) && (objPersonnage.initiative !== ""))
        document.getElementById("TXT_INITIATIVE").value = objPersonnage.initiative;
    else
        document.getElementById("TXT_INITIATIVE").value = "";


    // Vigueur
    if (objPersonnage.vigueurActuelle !== undefined)
        document.getElementById("TXT_PTS_VIGUEUR_ACTUELS").value = objPersonnage.vigueurActuelle;
    else
        document.getElementById("TXT_PTS_VIGUEUR_ACTUELS").value = "";
    if (objPersonnage.vigueurMax !== undefined)
        document.getElementById("TXT_PTS_VIGUEUR_MAX").value = objPersonnage.vigueurMax;
    else
        document.getElementById("TXT_PTS_VIGUEUR_MAX").value = "";

    // Défense
    if ((objPersonnage.defenseAutre === undefined) || (objPersonnage.defenseAutre === ""))
        document.getElementById("TXT_DEF_AUTRE").value = "0";
    else
        document.getElementById("TXT_DEF_AUTRE").value = objPersonnage.defenseAutre;

    // Points de chance
    if (objPersonnage.chanceActuelle !== undefined)
        document.getElementById("TXT_PTS_CHANCE_ACTUELS").value = objPersonnage.chanceActuelle;
    else
        document.getElementById("TXT_PTS_CHANCE_ACTUELS").value = "";
    if (objPersonnage.chanceMax !== undefined)
        document.getElementById("TXT_PTS_CHANCE_MAX").value = objPersonnage.chanceMax;
    else
        document.getElementById("TXT_PTS_CHANCE_MAX").value = "";

    // Points de mana
    if (objPersonnage.manaActuelle !== undefined)
        document.getElementById("TXT_PTS_MANA_ACTUELS").value = objPersonnage.manaActuelle;
    else
        document.getElementById("TXT_PTS_MANA_ACTUELS").value = "";
    if (objPersonnage.manaMax !== undefined)
        document.getElementById("TXT_PTS_MANA_MAX").value = objPersonnage.manaMax;
    else
        document.getElementById("TXT_PTS_MANA_MAX").value = "";

    // Dés de récupération
    if (objPersonnage.recuperationActuelle !== undefined)
        document.getElementById("TXT_DES_RECUP_ACTUELS").value = objPersonnage.recuperationActuelle;
    else
        document.getElementById("TXT_DES_RECUP_ACTUELS").value = "";
    if (objPersonnage.recuperationMax !== undefined)
        document.getElementById("TXT_DES_RECUP_MAX").value = objPersonnage.recuperationMax;
    else
        document.getElementById("TXT_DES_RECUP_MAX").value = "";
    remplirDesRecuperation();

    // Equipement
    if (objPersonnage.equipement !== undefined)
        document.getElementById("TXT_EQUIPEMENT").value = objPersonnage.equipement;
    else
        document.getElementById("TXT_EQUIPEMENT").value = "";

    // Bourse
    if (objPersonnage.PO !== undefined)
        document.getElementById("TXT_NB_PO").value = objPersonnage.PO;
    else
        document.getElementById("TXT_NB_PO").value = "";
    if (objPersonnage.PA !== undefined)
        document.getElementById("TXT_NB_PA").value = objPersonnage.PA;
    else
        document.getElementById("TXT_NB_PA").value = "";
    if (objPersonnage.PC !== undefined)
        document.getElementById("TXT_NB_PC").value = objPersonnage.PC;
    else
        document.getElementById("TXT_NB_PC").value = "";

    // Armes
    initSelectTypeAttaque();
    if (objPersonnage.armes === undefined) {
        for (let varZoneArme of document.getElementsByClassName("zoneArme")) {
            varZoneArme.getElementsByClassName("txtNomArme")[0].value = "";
            varZoneArme.getElementsByClassName("selectTypeAttaque")[0].value = "";
            varZoneArme.getElementsByClassName("txtDmArme")[0].value = "";
            varZoneArme.getElementsByClassName("txtNoteArme")[0].value = "";
        }
    } else {
        let varIndexArme = 0;
        for (let varZoneArme of document.getElementsByClassName("zoneArme")) {
            if (objPersonnage.armes[varIndexArme] !== undefined) {
                varZoneArme.getElementsByClassName("txtNomArme")[0].value = objPersonnage.armes[varIndexArme].nomArme;
                varZoneArme.getElementsByClassName("selectTypeAttaque")[0].value = objPersonnage.armes[varIndexArme].typeAttaqueArme;
                varZoneArme.getElementsByClassName("txtDmArme")[0].value = objPersonnage.armes[varIndexArme].dmArme;
                varZoneArme.getElementsByClassName("txtNoteArme")[0].value = objPersonnage.armes[varIndexArme].noteArme;
            } else {
                varZoneArme.getElementsByClassName("txtNomArme")[0].value = "";
                varZoneArme.getElementsByClassName("selectTypeAttaque")[0].value = "";
                varZoneArme.getElementsByClassName("txtDmArme")[0].value = "";
                varZoneArme.getElementsByClassName("txtNoteArme")[0].value = "";
            }
            varIndexArme++;
        }
    }

    // Zone des scores d'attaque
    remplirAttaques();

    // Armures
    if (objPersonnage.armures === undefined) {
        for (let varZoneArmure of document.getElementsByClassName("zoneArmure")) {
            varZoneArmure.getElementsByClassName("chkArmure")[0].checked = false;
            varZoneArmure.getElementsByClassName("txtNomArmure")[0].value = "";
            varZoneArmure.getElementsByClassName("txtDefArmure")[0].value = "";
            varZoneArmure.getElementsByClassName("txtAgiArmure")[0].value = "";
        }
    } else {
        let varIndexArmure = 0;
        for (let varZoneArmure of document.getElementsByClassName("zoneArmure")) {
            if (objPersonnage.armures[varIndexArmure] !== undefined) {
                if (objPersonnage.armures[varIndexArmure].selectionArmure === "1")
                    varZoneArmure.getElementsByClassName("chkArmure")[0].checked = true;
                else
                    varZoneArmure.getElementsByClassName("chkArmure")[0].checked = false;
                varZoneArmure.getElementsByClassName("txtNomArmure")[0].value = objPersonnage.armures[varIndexArmure].nomArmure;
                varZoneArmure.getElementsByClassName("txtDefArmure")[0].value = objPersonnage.armures[varIndexArmure].defenseArmure;
                varZoneArmure.getElementsByClassName("txtAgiArmure")[0].value = objPersonnage.armures[varIndexArmure].agiliteMaxArmure;
            } else {
                varZoneArmure.getElementsByClassName("chkArmure")[0].checked = false;
                varZoneArmure.getElementsByClassName("txtNomArmure")[0].value = "";
                varZoneArmure.getElementsByClassName("txtDefArmure")[0].value = "";
                varZoneArmure.getElementsByClassName("txtAgiArmure")[0].value = "";
            }
            varIndexArmure++;
        }
    }
    remplirDefense();


    // Voies
    reinitVoies();
    if (objPersonnage.voies !== undefined) {
        let varIndexVoie = 0;
        for (let varZoneVoie of document.getElementsByClassName("zoneVoie")) {
            if (objPersonnage.voies[varIndexVoie] !== undefined) {
                varZoneVoie.getElementsByClassName("txtIdTypeVoie")[0].value = objPersonnage.voies[varIndexVoie].idTypeVoie;
                varZoneVoie.getElementsByClassName("txtIdGroupeVoie")[0].value = objPersonnage.voies[varIndexVoie].idGroupeVoie;
                varZoneVoie.getElementsByClassName("txtIdVoie")[0].value = objPersonnage.voies[varIndexVoie].idVoie;
                varZoneVoie.getElementsByClassName("txtNomVoie")[0].value = objPersonnage.voies[varIndexVoie].nomVoie;

                let varIndexCapacite = 0;
                for (let varZoneCapacite of varZoneVoie.getElementsByClassName("zoneCapacite")) {
                    if (objPersonnage.voies[varIndexVoie].capacites[varIndexCapacite].selectionCapacite === "1")
                        varZoneCapacite.getElementsByClassName("chkCapacite")[0].checked = true;
                    else
                        varZoneCapacite.getElementsByClassName("chkCapacite")[0].checked = false;
                    varZoneCapacite.getElementsByClassName("txtRangCapacite")[0].value = objPersonnage.voies[varIndexVoie].capacites[varIndexCapacite].rangCapacite;
                    if (objPersonnage.voies[varIndexVoie].idTypeVoie === "PERSO") {
                        varZoneCapacite.getElementsByClassName("txtNomCapacite")[0].value = objPersonnage.voies[varIndexVoie].capacites[varIndexCapacite].nomCapacite;
                        varZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0].value = objPersonnage.voies[varIndexVoie].capacites[varIndexCapacite].descriptionCapacite;
                    } else {
                        varZoneCapacite.getElementsByClassName("txtNomCapacite")[0].value = "";
                        varZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0].value = "";
                    }
                    varZoneCapacite.getElementsByClassName("txtComplementCapacite")[0].value = objPersonnage.voies[varIndexVoie].capacites[varIndexCapacite].complementCapacite;


                    varIndexCapacite++;
                }
            }
            varIndexVoie++;
        }
    }
    gereVoies();

}