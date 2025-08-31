

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
    if (varIdFichier === null) {
        console.error("Impossible de récupérer l'identifiant du fichier dans la variable 'fiche_courante' du sessionStorage. Initialisation de la fiche abandonnée.");
        return;
    }

    // Récupération des données
    let strDonneesFiche = fichier_getDonnees(varIdFichier);
    if (strDonneesFiche === null) {
        console.error("Impossible de récupérer les données du fichier. Initialisation de la fiche abandonnée.");
        return;
    }
    let objDonneesFiche = {};
    if (strDonneesFiche !== "")
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

    // Peuple
    if (objPersonnage.idPeuple !== undefined)
        document.getElementById("TXT_PEUPLE").innerText = searchObjectById(dataPeuples.peuples, objPersonnage.idPeuple).nom;
    else
        document.getElementById("TXT_PEUPLE").innerText = "";

    // Niveau
    if (objPersonnage.niveau !== undefined)
        document.getElementById("TXT_NIVEAU").innerText = objPersonnage.niveau;
    else
        document.getElementById("TXT_NIVEAU").innerText = "";

    // Famille et Profil
    let varObjFamille = null;
    let varObjProfil = null;
    if (objPersonnage.idFamille !== undefined) {
        varObjFamille = searchObjectById(dataFamilles.familles, objPersonnage.idFamille);
        document.getElementById("TXT_FAMILLE").innerText = varObjFamille.nom;

        if (objPersonnage.idProfil !== undefined) {
            varObjProfil = searchObjectById(varObjFamille.profils, objPersonnage.idProfil);
            document.getElementById("TXT_PROFIL").innerText = varObjProfil.nom;
        } else
            document.getElementById("TXT_PROFIL").innerText = "";
    } else {
        document.getElementById("TXT_FAMILLE").innerText = "";
        document.getElementById("TXT_PROFIL").innerText = "";
    }

    // Idéal héroïque
    if (objPersonnage.idealHeroique !== undefined)
        document.getElementById("TXT_IDEAL").innerText = objPersonnage.idealHeroique;
    else
        document.getElementById("TXT_IDEAL").innerText = "";

    // Travers
    if (objPersonnage.travers !== undefined)
        document.getElementById("TXT_TRAVERS").innerText = objPersonnage.travers;
    else
        document.getElementById("TXT_TRAVERS").innerText = "";

    // Caractéristiques
    if (objPersonnage.AGI !== undefined)
        document.getElementById("TXT_AGI").innerText = (parseInt(objPersonnage.AGI) > 0 ? "+" + objPersonnage.AGI : objPersonnage.AGI);
    else
        document.getElementById("TXT_AGI").innerText = "";
    if (objPersonnage.noteAGI !== undefined)
        document.getElementById("TXT_NOTE_AGI").innerText = objPersonnage.noteAGI;
    else
        document.getElementById("TXT_NOTE_AGI").innerText = "";

    if (objPersonnage.CON !== undefined)
        document.getElementById("TXT_CON").innerText = (parseInt(objPersonnage.CON) > 0 ? "+" + objPersonnage.CON : objPersonnage.CON);
    else
        document.getElementById("TXT_CON").innerText = "";
    if (objPersonnage.noteCON !== undefined)
        document.getElementById("TXT_NOTE_CON").innerText = objPersonnage.noteCON;
    else
        document.getElementById("TXT_NOTE_CON").innerText = "";

    if (objPersonnage.FOR !== undefined)
        document.getElementById("TXT_FOR").innerText = (parseInt(objPersonnage.FOR) > 0 ? "+" + objPersonnage.FOR : objPersonnage.FOR);
    else
        document.getElementById("TXT_FOR").innerText = "";
    if (objPersonnage.noteFOR !== undefined)
        document.getElementById("TXT_NOTE_FOR").innerText = objPersonnage.noteFOR;
    else
        document.getElementById("TXT_NOTE_FOR").innerText = "";

    if (objPersonnage.PER !== undefined)
        document.getElementById("TXT_PER").innerText = (parseInt(objPersonnage.PER) > 0 ? "+" + objPersonnage.PER : objPersonnage.PER);
    else
        document.getElementById("TXT_PER").innerText = "";
    if (objPersonnage.notePER !== undefined)
        document.getElementById("TXT_NOTE_PER").innerText = objPersonnage.notePER;
    else
        document.getElementById("TXT_NOTE_PER").innerText = "";

    if (objPersonnage.CHA !== undefined)
        document.getElementById("TXT_CHA").innerText = (parseInt(objPersonnage.CHA) > 0 ? "+" + objPersonnage.CHA : objPersonnage.CHA);
    else
        document.getElementById("TXT_CHA").innerText = "";
    if (objPersonnage.noteCHA !== undefined)
        document.getElementById("TXT_NOTE_CHA").innerText = objPersonnage.noteCHA;
    else
        document.getElementById("TXT_NOTE_CHA").innerText = "";

    if (objPersonnage.INT !== undefined)
        document.getElementById("TXT_INT").innerText = (parseInt(objPersonnage.INT) > 0 ? "+" + objPersonnage.INT : objPersonnage.INT);
    else
        document.getElementById("TXT_INT").innerText = "";
    if (objPersonnage.noteINT !== undefined)
        document.getElementById("TXT_NOTE_INT").innerText = objPersonnage.noteINT;
    else
        document.getElementById("TXT_NOTE_INT").innerText = "";

    if (objPersonnage.VOL !== undefined)
        document.getElementById("TXT_VOL").innerText = (parseInt(objPersonnage.VOL) > 0 ? "+" + objPersonnage.VOL : objPersonnage.VOL);
    else
        document.getElementById("TXT_VOL").innerText = "";
    if (objPersonnage.noteVOL !== undefined)
        document.getElementById("TXT_NOTE_VOL").innerText = objPersonnage.noteVOL;
    else
        document.getElementById("TXT_NOTE_VOL").innerText = "";

    // Description
    if (objPersonnage.description !== undefined)
        document.getElementById("TXT_DESCRIPTION").innerText = objPersonnage.description;
    else
        document.getElementById("TXT_DESCRIPTION").innerText = "";

    // Attaque
    document.getElementById("TXT_ATT_CONTACT_NIV").innerText = document.getElementById("TXT_NIVEAU").innerText;
    document.getElementById("TXT_ATT_CONTACT_FOR").innerText = document.getElementById("TXT_FOR").innerText;
    if(isNaN(parseInt(document.getElementById("TXT_NIVEAU").innerText)))
        document.getElementById("TXT_ATT_CONTACT_TOTAL").innerText = "";
    else {
        let varAttContactTotal = parseInt(document.getElementById("TXT_NIVEAU").innerText) + parseInt(document.getElementById("TXT_FOR").innerText);
        document.getElementById("TXT_ATT_CONTACT_TOTAL").innerText = (varAttContactTotal > 0 ? "+" + varAttContactTotal : varAttContactTotal);
    }
    document.getElementById("TXT_ATT_DISTANCE_NIV").innerText = document.getElementById("TXT_NIVEAU").innerText;
    document.getElementById("TXT_ATT_DISTANCE_AGI").innerText = document.getElementById("TXT_AGI").innerText;
    if(isNaN(parseInt(document.getElementById("TXT_NIVEAU").innerText)))
        document.getElementById("TXT_ATT_DISTANCE_TOTAL").innerText = "";
    else {
        let varAttDistanceTotal = parseInt(document.getElementById("TXT_NIVEAU").innerText) + parseInt(document.getElementById("TXT_AGI").innerText);
        document.getElementById("TXT_ATT_DISTANCE_TOTAL").innerText = (varAttDistanceTotal > 0 ? "+" + varAttDistanceTotal : varAttDistanceTotal);
    }
    document.getElementById("TXT_ATT_MAGIQUE_NIV").innerText = document.getElementById("TXT_NIVEAU").innerText;
    document.getElementById("TXT_ATT_MAGIQUE_VOL").innerText = document.getElementById("TXT_VOL").innerText;
    if(isNaN(parseInt(document.getElementById("TXT_NIVEAU").innerText)))
        document.getElementById("TXT_ATT_MAGIQUE_TOTAL").innerText;
    else {
        let varAttMagiqueTotal = parseInt(document.getElementById("TXT_NIVEAU").innerText) + parseInt(document.getElementById("TXT_VOL").innerText);
        document.getElementById("TXT_ATT_MAGIQUE_TOTAL").innerText = (varAttMagiqueTotal > 0 ? "+" + varAttMagiqueTotal : varAttMagiqueTotal);
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

    // Défense
    let varDefTotal = 0;
    if ((objPersonnage.defenseAutre !== undefined) && (objPersonnage.defenseAutre !== "")) {
        document.getElementById("TXT_DEF_AUTRE").innerText = objPersonnage.defenseAutre;
        varDefTotal = varDefTotal + parseInt(objPersonnage.defenseAutre);
    } else
        document.getElementById("TXT_DEF_AUTRE").innerText = "";
    if ((objPersonnage.AGI !== undefined) && (objPersonnage.AGI !== "")) {
        document.getElementById("TXT_DEF_AGI").innerText = objPersonnage.AGI;
        varDefTotal = varDefTotal + parseInt(objPersonnage.AGI);
    } else
        document.getElementById("TXT_DEF_AGI").innerText = "";
    let varDefArmure = 0;
    for (let varObjArmure of objPersonnage.armures) {
        if (varObjArmure.selectionArmure === "1") {
            varDefArmure = varDefArmure + parseInt(varObjArmure.defenseArmure);
        }
    }
    document.getElementById("TXT_DEF_ARMURE").innerText = varDefArmure;

    varDefTotal = varDefTotal + varDefArmure + 10;
    document.getElementById("TXT_DEF_TOTAL").innerText = varDefTotal;


    // Points de chance
    if (objPersonnage.chanceActuelle !== undefined)
        document.getElementById("TXT_PTS_CHANCE_ACTUELS").innerText = objPersonnage.chanceActuelle;
    else
        document.getElementById("TXT_PTS_CHANCE_ACTUELS").innerText = "";
    if (objPersonnage.chanceMax !== undefined)
        document.getElementById("TXT_PTS_CHANCE_MAX").innerText = objPersonnage.chanceMax;
    else
        document.getElementById("TXT_PTS_CHANCE_MAX").innerText = "";

    // Points de mana
    if (objPersonnage.manaActuelle !== undefined)
        document.getElementById("TXT_PTS_MANA_ACTUELS").innerText = objPersonnage.manaActuelle;
    else
        document.getElementById("TXT_PTS_MANA_ACTUELS").innerText = "";
    if (objPersonnage.manaMax !== undefined)
        document.getElementById("TXT_PTS_MANA_MAX").innerText = objPersonnage.manaMax;
    else
        document.getElementById("TXT_PTS_MANA_MAX").innerText = "";

    // Dés de récupération
    if (objPersonnage.recuperationActuelle !== undefined)
        document.getElementById("TXT_DES_RECUP_ACTUELS").innerText = objPersonnage.recuperationActuelle;
    else
        document.getElementById("TXT_DES_RECUP_ACTUELS").innerText = "";
    if (objPersonnage.recuperationMax !== undefined)
        document.getElementById("TXT_DES_RECUP_MAX").innerText = objPersonnage.recuperationMax;
    else
        document.getElementById("TXT_DES_RECUP_MAX").innerText = "";
    if (objPersonnage.idFamille !== undefined)
        document.getElementById("TXT_DES_RECUP").innerText = searchObjectById(dataFamilles.familles, objPersonnage.idFamille).des_de_recup;
    else
        document.getElementById("TXT_DES_RECUP").innerText = "";

    // Description
    if (objPersonnage.equipement !== undefined)
        document.getElementById("TXT_EQUIPEMENT").innerText = objPersonnage.equipement;
    else
        document.getElementById("TXT_EQUIPEMENT").innerText = "";

    // Bourse
    if (objPersonnage.PO !== undefined)
        document.getElementById("TXT_NB_PO").innerText = objPersonnage.PO;
    else
        document.getElementById("TXT_NB_PO").innerText = "";
    if (objPersonnage.PA !== undefined)
        document.getElementById("TXT_NB_PA").innerText = objPersonnage.PA;
    else
        document.getElementById("TXT_NB_PA").innerText = "";
    if (objPersonnage.PC !== undefined)
        document.getElementById("TXT_NB_PC").innerText = objPersonnage.PC;
    else
        document.getElementById("TXT_NB_PC").innerText = "";

    // Armes
    let varTabLigneArme = document.querySelectorAll("div#tableauArmes > div");
    let indexArme = 0;
    for (let varLigneArme of varTabLigneArme) {
        let varTabValeurCase = varLigneArme.querySelectorAll("div.valeur_case > span:first-child");
        if (objPersonnage.armes[indexArme] !== undefined) {
            varTabValeurCase[0].innerText = objPersonnage.armes[indexArme].nomArme;
            let varTxtValeurAttaque = "1d20";
            if (objPersonnage.armes[indexArme].typeAttaqueArme === "CONTACT")
                varTxtValeurAttaque = varTxtValeurAttaque + (varAttContactTotal >= 0 ? "+" + varAttContactTotal : varAttContactTotal);
            else if (objPersonnage.armes[indexArme].typeAttaqueArme === "DISTANCE")
                varTxtValeurAttaque = varTxtValeurAttaque + (varAttDistanceTotal >= 0 ? "+" + varAttDistanceTotal : varAttDistanceTotal);
            else
                varTxtValeurAttaque = "";
            varTabValeurCase[1].innerText = varTxtValeurAttaque;
            varTabValeurCase[2].innerText = objPersonnage.armes[indexArme].dmArme;
            varTabValeurCase[3].innerText = objPersonnage.armes[indexArme].noteArme;
        }
        indexArme++;
    }


    // Armures
    let varTabLigneArmure = document.querySelectorAll("div#tableauArmures > .case2");
    let indexArmure = 0;
    for (let varLigneArmure of varTabLigneArmure) {
        let varTabValeurCase = varLigneArmure.querySelectorAll("div.grille_case > div.valeur_case > span:first-child");
        if (objPersonnage.armures[indexArmure] !== undefined) {
            varTabValeurCase[0].innerText = objPersonnage.armures[indexArmure].nomArmure;
            varTabValeurCase[1].innerText = (objPersonnage.armures[indexArmure].selectionArmure === "1" ? "X" : "");
            varTabValeurCase[2].innerText = (objPersonnage.armures[indexArmure].defenseArmure > 0 ? "+" + objPersonnage.armures[indexArmure].defenseArmure : objPersonnage.armures[indexArmure].defenseArmure);
            varTabValeurCase[3].innerText = objPersonnage.armures[indexArmure].agiliteMaxArmure;
        }
        indexArmure++;
    }
    
    // Voies
    let varTabZoneVoie = document.querySelectorAll(".zoneVoie");
    let indexVoie=0;
    for (let varZoneVoie of varTabZoneVoie) {
        let varTxtNomVoie = varZoneVoie.getElementsByClassName("txtNomVoie")[0];
        let varTxtTypeVoie = varZoneVoie.getElementsByClassName("txtTypeVoie")[0];
        
        varTxtNomVoie.innerText = objPersonnage.voies[indexVoie].nomVoie;
        if(objPersonnage.voies[indexVoie].idTypeVoie === "HYBRIDE") {
            varTxtTypeVoie.innerText = "HYBRIDE";
            remplirZoneCapaciteStandard(varZoneVoie,objPersonnage.voies[indexVoie]);
        }
        else if (objPersonnage.voies[indexVoie].idTypeVoie === "PERSO") {
            varTxtTypeVoie.innerText = "PERSO";
            remplirZoneCapacitePerso(varZoneVoie,objPersonnage.voies[indexVoie]);
        }
        else if (objPersonnage.voies[indexVoie].idTypeVoie === "STANDARD") {
            varTxtTypeVoie.innerText = "";
            remplirZoneCapaciteStandard(varZoneVoie,objPersonnage.voies[indexVoie]);
        }
        else if (objPersonnage.idFamille !== undefined) {// on est sur une famille
            let varObjFamille = searchObjectById(dataFamilles.familles, objPersonnage.idFamille);
            if (varObjFamille !== null) {
                let varIdGroupeVoieFamille = varObjFamille.groupe_voies;
                let varObjGroupeVoie = searchObjectById(dataVoies.groupesVoies, varIdGroupeVoieFamille);
                let varObjVoieFamille = searchObjectById(varObjGroupeVoie.voies, objPersonnage.voies[indexVoie].idTypeVoie);
                varTxtTypeVoie.innerText = varObjVoieFamille.nom;
            }
            remplirZoneCapaciteFamille(varZoneVoie,objPersonnage.voies[indexVoie]);
        }
        else
            varTxtTypeVoie.innerText = "";
        
        indexVoie++;
    }

}

function remplirZoneCapaciteFamille(parZoneVoie, parObjVoieJson) {
    let indexCapacite = 0;
    let varTabObjCapacite = parObjVoieJson.capacites;

    // On récupère la voie standard du peuple
    let varObjVoiePeuple = getVoieWithGroupe(parObjVoieJson.idVoie, parObjVoieJson.idGroupeVoie);
    if (varObjVoiePeuple === null) {
        console.warn("Le détail de la voie de peuple \"" + parObjVoieJson.idVoie + "\" n'a pas été trouvé.");
        return;
    }

    // On récupère la voie de la famille
    let varObjVoieFamille = getVoieWithGroupe(parObjVoieJson.idTypeVoie, parObjVoieJson.idGroupeVoie);
    if (varObjVoieFamille === null) {
        console.warn("Le détail de la voie de famille \"" + parObjVoieJson.idTypeVoie + "\" n'a pas été trouvé.");
        return;
    }


    for(let varZoneCapacite of parZoneVoie.getElementsByClassName("zoneCapacite")) {
        let varChkCapacite = varZoneCapacite.getElementsByClassName("selectionCapacite")[0];
        let varTxtTitreCapacite = varZoneCapacite.getElementsByClassName("txtTitreCapacite")[0];
        let varTxtDescriptionCapacite = varZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0];
        let varTxtComplementCapacite = varZoneCapacite.getElementsByClassName("txtComplementCapacite")[0];
        
        if(varTabObjCapacite[indexCapacite].selectionCapacite === "1") {
                varChkCapacite.innerText="X";
            }
            
        let varTitreCapacite="";
        if(varObjVoieFamille.capacites[indexCapacite].rang!=="")
            varTitreCapacite = varTitreCapacite + varObjVoieFamille.capacites[indexCapacite].rang + ". ";
        varTitreCapacite = varTitreCapacite + varObjVoieFamille.capacites[indexCapacite].nom;
        if(varTitreCapacite!=="") 
            varTitreCapacite = varTitreCapacite + " : ";
        varTxtTitreCapacite.innerText = varTitreCapacite;
        
        let varDescriptionCapacite = varObjVoieFamille.capacites[indexCapacite].description;
        if(indexCapacite === 0) {
            varDescriptionCapacite = varDescriptionCapacite + "<br> <b><u> Capacité du peuple :</u> " + varObjVoiePeuple.capacites[indexCapacite].nom + " </b>: " + varObjVoiePeuple.capacites[indexCapacite].description;
        }
        varTxtDescriptionCapacite.innerHTML = varDescriptionCapacite;
            
        varTxtComplementCapacite.innerText = varTabObjCapacite[indexCapacite].complementCapacite;
        
        indexCapacite++;
    }

}


function remplirZoneCapaciteStandard(parZoneVoie, parObjVoieJson) {
    let indexCapacite = 0;
    let varTabObjCapacite = parObjVoieJson.capacites;

    // On récupère la voie
    let varObjVoie = getVoieWithGroupe(parObjVoieJson.idVoie, parObjVoieJson.idGroupeVoie);
    if (varObjVoie === null) {
        console.warn("Le détail de la voie \"" + parObjVoieJson.idVoie + "\" n'a pas été trouvé.");
        return;
    }

    for(let varZoneCapacite of parZoneVoie.getElementsByClassName("zoneCapacite")) {
        let varChkCapacite = varZoneCapacite.getElementsByClassName("selectionCapacite")[0];
        let varTxtTitreCapacite = varZoneCapacite.getElementsByClassName("txtTitreCapacite")[0];
        let varTxtDescriptionCapacite = varZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0];
        let varTxtComplementCapacite = varZoneCapacite.getElementsByClassName("txtComplementCapacite")[0];
        
        if(varTabObjCapacite[indexCapacite].selectionCapacite === "1") {
                varChkCapacite.innerText="X";
            }
            
        let varTitreCapacite="";
        if(varObjVoie.capacites[indexCapacite].rang!=="")
            varTitreCapacite = varTitreCapacite + varObjVoie.capacites[indexCapacite].rang + ". ";
        varTitreCapacite = varTitreCapacite + varObjVoie.capacites[indexCapacite].nom;
        if(varTitreCapacite!=="") 
            varTitreCapacite = varTitreCapacite + " : ";
        varTxtTitreCapacite.innerText = varTitreCapacite;
        
        varTxtDescriptionCapacite.innerText = varObjVoie.capacites[indexCapacite].description;
            
        varTxtComplementCapacite.innerText = varTabObjCapacite[indexCapacite].complementCapacite;
        
        indexCapacite++;
    }

}


function remplirZoneCapacitePerso(parZoneVoie, parObjVoieJson) {
        let indexCapacite = 0;
        let varTabObjCapacitePerso = parObjVoieJson.capacites;
        
        for(let varZoneCapacite of parZoneVoie.getElementsByClassName("zoneCapacite")) {
            let varChkCapacite = varZoneCapacite.getElementsByClassName("selectionCapacite")[0];    
            let varTxtTitreCapacite = varZoneCapacite.getElementsByClassName("txtTitreCapacite")[0];
            let varTxtDescriptionCapacite = varZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0];
            let varTxtComplementCapacite = varZoneCapacite.getElementsByClassName("txtComplementCapacite")[0];
            
            if(varTabObjCapacitePerso[indexCapacite].selectionCapacite === "1") {
                varChkCapacite.innerText="X";
            }
        
            let varTitreCapacite="";
            if(varTabObjCapacitePerso[indexCapacite].rangCapacite!=="")
                varTitreCapacite = varTitreCapacite + varTabObjCapacitePerso[indexCapacite].rangCapacite + ". ";
            varTitreCapacite = varTitreCapacite + varTabObjCapacitePerso[indexCapacite].nomCapacite;
            if(varTitreCapacite!=="") 
                varTitreCapacite = varTitreCapacite + " : ";
            
            varTxtTitreCapacite.innerText = varTitreCapacite;
            varTxtDescriptionCapacite.innerText = varTabObjCapacitePerso[indexCapacite].descriptionCapacite;
            varTxtComplementCapacite.innerText = varTabObjCapacitePerso[indexCapacite].complementCapacite;
            
            indexCapacite++;
        }
    
    
}