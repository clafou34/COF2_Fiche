
/********************************************************************
 Initialisation des listes de choix des caractéristiques
 ********************************************************************/
function initSelectCaracteristiques() {
    let tabElement = document.getElementsByClassName("selectCaract");
    for (let varElement of tabElement) {
        for (let varCaractItem of dataCaracteristiques.items) {
            let opt = document.createElement("option");
            opt.value = varCaractItem.value;
            opt.text = varCaractItem.text;
            if (varCaractItem.value === "0")
                opt.defaultSelected = true;
            varElement.appendChild(opt);
        }
    }
}

/********************************************************************
 Remplissage de la somme des défense.
 ********************************************************************/
function remplirDefense() {
    let varValeurAgi = Number(document.getElementById("SEL_AGI").value);
    document.getElementById("TXT_DEF_AGI").innerText = String(varValeurAgi);
    // Récupération de la somme des armures sélectionnées
    let tabZoneArmure = document.getElementsByClassName("zoneArmure");
    let defArmure = 0;
    for (let varZoneArmure of tabZoneArmure) {
        let varChkArmurePortee = varZoneArmure.querySelector(".chkArmure").checked;
        if (varChkArmurePortee) {
            let varTxtDefArmure = varZoneArmure.querySelector(".txtDefArmure").value;
            if (!isNaN(varTxtDefArmure))
                defArmure = defArmure + Number(varTxtDefArmure);
        }
        ;
    }
    document.getElementById("TXT_DEF_ARMURE").innerText = String(defArmure);
    // Récupération des autres bonus
    let defAutre = 0;
    let txtDefAutre = document.getElementById("TXT_DEF_AUTRE").value;
    if (!isNaN(txtDefAutre)) {
        defAutre = Number(txtDefAutre);
    }

// Affichage
    document.getElementById("TXT_DEF_TOTALE").innerText = String(10 + varValeurAgi + defArmure + defAutre);
}


/********************************************************************
 Initialisation des listes de choix des types d'attaque
 ********************************************************************/
function initSelectTypeAttaque() {
    let tabElement = document.getElementsByClassName("selectTypeAttaque");
    for (let varElement of tabElement) {
        for (let varTypeArme of dataTypeArme.items) {
            let opt = document.createElement("option");
            opt.value = varTypeArme.id;
            opt.text = varTypeArme.text;
            varElement.appendChild(opt);
        }
    }
}

/********************************************************************
 Remplir le niveau d'attaque de chaque arme.
 ********************************************************************/
function remplirAttaqueArme() {
    let tabZoneArme = document.getElementsByClassName("zoneArme");
    for (let varZoneArme of tabZoneArme) {
        let varDesAttaque = " => 1d20 + ";
        let varTypeAttaque = varZoneArme.querySelector(".selectTypeAttaque").value;
        if (varTypeAttaque === "CONTACT") {
            varDesAttaque = varDesAttaque + document.getElementById("TXT_ATT_CONTACT_TOTAL").innerText;
        } else if (varTypeAttaque === "DISTANCE") {
            varDesAttaque = varDesAttaque + document.getElementById("TXT_ATT_DISTANCE_TOTAL").innerText;
        } else
            varDesAttaque = "";
        varZoneArme.querySelector(".txtDesAttaqueArme").innerText = varDesAttaque;
    }
}


/********************************************************************
 Initialisation des scores d'attaque
 ********************************************************************/
function remplirAttaques() {
    let varNiveau = 0;
    let varForce = 0;
    let varAgilite = 0;
    let varVolonte = 0;
    if (document.getElementById("TXT_NIVEAU").reportValidity()) {
        if (!isNaN(document.getElementById("TXT_NIVEAU").value))
            varNiveau = Number(document.getElementById("TXT_NIVEAU").value);
        // pour l'attaque, le niveau ne peut pas être supérieur à 10 (règle).
        if (varNiveau > 10)
            varNiveau = 10;
        // On rempli les labels des niveaux
        document.getElementById("TXT_ATT_CONTACT_NIV").innerText = varNiveau;
        document.getElementById("TXT_ATT_DISTANCE_NIV").innerText = varNiveau;
        document.getElementById("TXT_ATT_MAGIQUE_NIV").innerText = varNiveau;
    } else
        console.warn("Impossible de mettre à jour les scores d'attaque car le niveau est invalide.");
    if (!isNaN(document.getElementById("SEL_FOR").value)) {
        varForce = Number(document.getElementById("SEL_FOR").value);
        document.getElementById("TXT_ATT_CONTACT_FOR").innerText = varForce;
    } else
        console.warn("Impossible de mettre à jour les scores d'attaque car la caractéristique FOR est invalide.");
    if (!isNaN(document.getElementById("SEL_AGI").value)) {
        varAgilite = Number(document.getElementById("SEL_AGI").value);
        document.getElementById("TXT_ATT_DISTANCE_AGI").innerText = varAgilite;
    } else
        console.warn("Impossible de mettre à jour les scores d'attaque car la caractéristique AGI est invalide.");
    if (!isNaN(document.getElementById("SEL_VOL").value)) {
        varVolonte = Number(document.getElementById("SEL_VOL").value);
        document.getElementById("TXT_ATT_MAGIQUE_VOL").innerText = varVolonte;
    } else
        console.warn("Impossible de mettre à jour les scores d'attaque car la caractéristique VOL est invalide.");
    document.getElementById("TXT_ATT_CONTACT_TOTAL").innerText = (varNiveau + varForce).toString();
    document.getElementById("TXT_ATT_DISTANCE_TOTAL").innerText = (varNiveau + varAgilite).toString();
    document.getElementById("TXT_ATT_MAGIQUE_TOTAL").innerText = (varNiveau + varVolonte).toString();
    remplirAttaqueArme();
}

/*******************************************************************************
 * Rempli le texte visible des toutes les zones de capacité de la zone de voie
 * passée en paramètre.
 * @param {type} parZoneVoie Zone de voie à traiter.
 *******************************************************************************/
function afficherTextCapacitesDeLaVoie(parZoneVoie) {
    // Récupération des zones (fieldset) de chaque capacité
    let varTabZonesCapacite = parZoneVoie.getElementsByClassName("zoneCapacite");

    for (let varZoneCapacite of varTabZonesCapacite) {
        afficherTextCapacite(varZoneCapacite);
    }
}

/*******************************************************************************
 * Rempli le texte visible de la zone de capacité passée en paramètre.
 * @param {type} parZoneCapacite Zone de la capacité à traiter.
 *******************************************************************************/
function afficherTextCapacite(parZoneCapacite) {
    let varValeurRangCapacite = parZoneCapacite.getElementsByClassName("txtRangCapacite")[0].value;
    let varValeurNomCapacite = parZoneCapacite.getElementsByClassName("txtNomCapacite")[0].value;
    let varValeurDescriptionCapacite = parZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0].value;
    let varValeurComplementCapacite = parZoneCapacite.getElementsByClassName("txtComplementCapacite")[0].value;
    
    // Affichage du titre de la capacité
    let varTitreCapacite = "";
    if ((varValeurRangCapacite !== null) && (varValeurRangCapacite !== ""))
        varTitreCapacite = varTitreCapacite + varValeurRangCapacite + ". ";
    if (varValeurNomCapacite !== "")
        varTitreCapacite = varTitreCapacite + varValeurNomCapacite;
    if (varTitreCapacite.length > 0)
        varTitreCapacite = varTitreCapacite + " : ";
    parZoneCapacite.getElementsByClassName("displayTitreCapacite")[0].innerText = varTitreCapacite;


    // Affichage de la description de la capacité
    parZoneCapacite.getElementsByClassName("displayDescriptionCapacite")[0].innerHTML = DOMPurify.sanitize(varValeurDescriptionCapacite);

    // Affichage du commentaire de la capacité
    if (varValeurComplementCapacite.length > 0)
        parZoneCapacite.getElementsByClassName("displayCommentaireCapacite")[0].style.display = "block";
    else
        parZoneCapacite.getElementsByClassName("displayCommentaireCapacite")[0].style.display = "none";
    parZoneCapacite.getElementsByClassName("displayCommentaireCapacite")[0].innerHTML = DOMPurify.sanitize(varValeurComplementCapacite);

}

/*******************************************************************************
 * Initialise les champs des capacités d'une voie avec les données de l'objet
 * voie passé en paramètre.
 * 
 * @param {object} parZoneVoie : Objet DOM correspondant à la zone (FILDSET) de la 
 *      voie à remplir.
 * @param {object} parObjVoie : Objet voie tel que défini dans 
 *      le fichier "voies.js"
 *******************************************************************************/
function initZonesCapacitesAvecObjVoie(parZoneVoie, parObjVoie) {
    // Récupération des zones (fieldset) de chaque capacité
    let varTabZonesCapacite = parZoneVoie.getElementsByClassName("zoneCapacite");

    // Parcours de toutes les zones de capacité
    let indexCapacite = 0;
    for (let varZoneCapacite of varTabZonesCapacite) {
        if ((indexCapacite >= varTabZonesCapacite.length) || (indexCapacite >= parObjVoie.capacites.length)) {
            break;
        }

        varZoneCapacite.getElementsByClassName("txtRangCapacite")[0].value = parObjVoie.capacites[indexCapacite].rang;
        varZoneCapacite.getElementsByClassName("txtNomCapacite")[0].value = parObjVoie.capacites[indexCapacite].nom;
        varZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0].value = parObjVoie.capacites[indexCapacite].description;
        indexCapacite++;
    }
}

/*******************************************************************************
 * Vide les champs des capacités d'une voie .
 * 
 * @param {object} parZoneVoie : Objet DOM correspondant à la zone (FILDSET) de la 
 *      voie à vider.
 *******************************************************************************/
function videZonesCapacites(parZoneVoie) {
    // Récupération des zones (fieldset) de chaque capacité
    let varTabZonesCapacite = parZoneVoie.getElementsByClassName("zoneCapacite");

    // Parcours de toutes les zones de capacité
    let indexCapacite = 0;
    for (let varZoneCapacite of varTabZonesCapacite) {
        if ((indexCapacite >= varTabZonesCapacite.length)) {
            break;
        }

        varZoneCapacite.getElementsByClassName("txtRangCapacite")[0].value = "";
        varZoneCapacite.getElementsByClassName("txtNomCapacite")[0].value = "";
        varZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0].value = "";
        indexCapacite++;
    }
}

/****************************************************************
 Cette fonction remplie la liste de choix des peuples.
 ****************************************************************/
function initSelectPeuples() {
    let selectPeuple = document.getElementById("SEL_PEUPLE");

    // Vidange des options existantes
    selectPeuple.innerHTML = "";

    // Remplissage de la liste des peuples
    for (let varPeuple of dataPeuples.peuples) {
        let option = document.createElement('option');
        option.text = varPeuple.nom;
        option.value = varPeuple.id;
        selectPeuple.add(option);
    }

}

/********************************************************************
 Cette fonction initialise la liste de valeur des familles.
 *********************************************************************/
function initSelectFamille() {
    let selFamille = document.getElementById("SEL_FAMILLE");

    // Vidange des options existantes
    selFamille.innerHTML = "";

    // Remplissage de la liste des familles
    for (let family of dataFamilles.familles) {
        let option = document.createElement('option');
        option.text = family.nom;
        option.value = family.id;
        selFamille.add(option);
    }
}


/********************************************************************
 Rempli le dés de récupération à partir de la famille sélectionnée.
 ********************************************************************/
function remplirDesRecuperation() {
    let selFamille = document.getElementById("SEL_FAMILLE");
    let varObjFamille = searchObjectById(dataFamilles.familles, selFamille.value);
    if (varObjFamille !== null) {
        document.getElementById("TXT_DES_RECUP").innerText = varObjFamille.des_de_recup;
    }

}

/********************************************************************
 Initialisation de la liste des profils à partir de la famille
 sélectionnée.
 ********************************************************************/
function initSelectProfils() {
    let selectProfile = document.getElementById("SEL_PROFIL");
    // Remove all existing options
    while (selectProfile.options.length > 0) {
        selectProfile.remove(0);
    }

    let currentFamily = searchObjectById(dataFamilles.familles, document.getElementById("SEL_FAMILLE").value);
    if (currentFamily !== null) {
        for (let profil of currentFamily.profils) {
            let option = document.createElement('option');
            option.text = profil.nom;
            option.value = profil.id;
            selectProfile.add(option);
        }
    }
}

/******************************************************************************
 * Gère les entêtes de toutes les zones de voie et initialise
 * les listes de choix en fonction du personnage.
 ******************************************************************************/
function gereVoies() {
    // Récupération des toutes les zones de voie
    let varTabZoneVoie = document.getElementsByClassName("zoneVoie");

    // Pour chaque zone de voie
    for (let varZoneVoie of varTabZoneVoie) {
        gereVoie(varZoneVoie);
    }
}

/******************************************************************************
 * Gère l'entête de la zone de voie dont l'item (frameset) est
 * passé en paramètre. 
 * @param {type} parZoneVoie Item contenant la zone de la voie.
 ******************************************************************************/
function gereVoie(parZoneVoie) {
    let varCategVoie = parZoneVoie.getAttribute("data-categ-voie");
    if (varCategVoie === "profil") {
        gereVoieProfil(parZoneVoie);
    } else if (varCategVoie === "peuple") {
        gereVoiePeuple(parZoneVoie);
    } else if (varCategVoie === "prestige") {
        gereVoiePrestige(parZoneVoie);
    }
}

/******************************************************************************
 * Gère l'entête de la zone de voie de prestige dont l'item (frameset) est
 * passé en paramètre. 
 * @param {type} parZoneVoie Item contenant la zone de la voie de prestige.
 ******************************************************************************/
function gereVoiePrestige(parZoneVoie) {

    // Récupération du type de voie
    let varTxtIdTypeVoie = parZoneVoie.getElementsByClassName("txtIdTypeVoie")[0];
    let varTxtNomVoie = parZoneVoie.getElementsByClassName("txtNomVoie")[0];

    if (varTxtIdTypeVoie.value === "PERSO") {
        //videZonesCapacites(parZoneVoie);

        // On affiche le nom de la voie
        parZoneVoie.getElementsByClassName("lblNomVoie")[0].innerText = varTxtNomVoie.value;
        parZoneVoie.getElementsByClassName("lblTypeVoie")[0].innerText = "PERSO";
    }

    // Affichage des capacités avec les champs remplis
    afficherTextCapacitesDeLaVoie(parZoneVoie);
}

/******************************************************************************
 * Gère l'entête de la zone de voie profil dont l'item (frameset) est
 * passé en paramètre. 
 * @param {type} parZoneVoie Item contenant la zone de la voie de profil.
 ******************************************************************************/
function gereVoieProfil(parZoneVoie) {
    // Récupération des champs à gérer
    let varTxtIdTypeVoie = parZoneVoie.getElementsByClassName("txtIdTypeVoie")[0];
    let varTxtNomVoie = parZoneVoie.getElementsByClassName("txtNomVoie")[0];


    // Si les champs sont vides, on initialise avec la voie par défaut
    if (varTxtIdTypeVoie.value === "") {
        reinitVoieProfil(parZoneVoie);
    }

    // Récupération du type de voie
    let varStrTypeVoie = varTxtIdTypeVoie.value;

    // On affiche le nom de la voie
    parZoneVoie.getElementsByClassName("lblNomVoie")[0].innerText = varTxtNomVoie.value;

    // Si c'est la voie standard
    if (varStrTypeVoie === "STANDARD") {
        initZonesCapacitesVoieProfil(parZoneVoie);
        parZoneVoie.getElementsByClassName("lblTypeVoie")[0].innerText = "";
    } else if (varStrTypeVoie === "HYBRIDE") {
        initZonesCapacitesVoieProfil(parZoneVoie);
        parZoneVoie.getElementsByClassName("lblTypeVoie")[0].innerText = "HYBRIDE";
    } else if (varStrTypeVoie === "PERSO") {
        parZoneVoie.getElementsByClassName("lblTypeVoie")[0].innerText = "PERSO";
    }

    // Affichage des capacités avec les champs remplis
    afficherTextCapacitesDeLaVoie(parZoneVoie);
}

/******************************************************************************
 * Gère l'affichage de la zone de voie de peuple dont l'item (frameset) est
 * passé en paramètre. 
 * @param {type} parZoneVoie Item contenant la zone de la voie de peuple.
 ******************************************************************************/
function gereVoiePeuple(parZoneVoie) {
    // Récupération des champs à gérer
    let varTxtIdTypeVoie = parZoneVoie.getElementsByClassName("txtIdTypeVoie")[0];
    let varTxtNomVoie = parZoneVoie.getElementsByClassName("txtNomVoie")[0];


    // Si les champs sont vides, on initialise avec la voie par défaut du peuple
    if (varTxtIdTypeVoie.value === "") {
        reinitVoiePeuple(parZoneVoie);
    }
    
    // Récupération du type de voie
    let varStrTypeVoie = varTxtIdTypeVoie.value;

    // Si c'est la voie standard du peuple
    if (varStrTypeVoie === "STANDARD") {
        // On affiche les capacités de la voie du peuple
        initZonesCapacitesVoiePeuple(parZoneVoie);

        // On affiche le nom de la voie du peuple
        parZoneVoie.getElementsByClassName("lblNomVoie")[0].innerText = varTxtNomVoie.value;
        parZoneVoie.getElementsByClassName("lblTypeVoie")[0].innerText = "";
    } else if (varStrTypeVoie === "PERSO") {
        // On affiche le nom de la voie personnalisée
        parZoneVoie.getElementsByClassName("lblNomVoie")[0].innerText = varTxtNomVoie.value;
        parZoneVoie.getElementsByClassName("lblTypeVoie")[0].innerText = "PERSO";
    } else { // On est sur une famille
        // On affiche les capacités de la voie de la famille
        initZonesCapacitesVoiePeuple(parZoneVoie);

        // On affiche le nom de la voie précédé du nom de la voie de la famille
        let varIdFamille = document.getElementById("SEL_FAMILLE").value;
        let varObjFamille = searchObjectById(dataFamilles.familles, varIdFamille);
        if (varObjFamille !== null) {
            let varIdGroupeVoieFamille = varObjFamille.groupe_voies;
            let varObjGroupeVoie = searchObjectById(dataVoies.groupesVoies, varIdGroupeVoieFamille);
            let varObjVoieFamille = searchObjectById(varObjGroupeVoie.voies, parZoneVoie.getElementsByClassName("txtIdTypeVoie")[0].value);

            parZoneVoie.getElementsByClassName("lblNomVoie")[0].innerText = varTxtNomVoie.value;
            parZoneVoie.getElementsByClassName("lblTypeVoie")[0].innerText = varObjVoieFamille.nom;
        }
        else
            console.warn("Impossible de récupérer la voie du peuple, car la famille n'est pas correctement renseignée.");
    }

    // Affichage des capacités avec les champs remplis
    afficherTextCapacitesDeLaVoie(parZoneVoie);
}

/*******************************************************************************
 * Initialise les zones de capacités de la zone de voie passée en paramètre
 * en fonction de son entête.
 * @param {type} parZoneVoie Item contenant la zone de la voie.
 *******************************************************************************/
function initZonesCapacites(parZoneVoie) {
    let varCategVoie = parZoneVoie.getAttribute("data-categ-voie");
    if (varCategVoie === "profil") {
        initZonesCapacitesVoieProfil(parZoneVoie);
    } else if (varCategVoie === "peuple") {
        initZonesCapacitesVoiePeuple(parZoneVoie);
    }
}


/*******************************************************************************
 * Initialise les capacités de la zone de voie de peuple passée en paramètre
 * @param {type} parZoneVoie Item contenant la zone de la voie.
 *******************************************************************************/
function initZonesCapacitesVoiePeuple(parZoneVoie) {
    let varIdPeuple = document.getElementById("SEL_PEUPLE").value;
    let varIdVoie = parZoneVoie.getElementsByClassName("txtIdVoie")[0].value;
    let varStrTypeVoie = parZoneVoie.getElementsByClassName("txtIdTypeVoie")[0].value;
    let varVoieAAfficher = null;

    // Récupération des données du peuple
    let varObjPeuple = searchObjectById(dataPeuples.peuples, varIdPeuple);
    if (varObjPeuple === null) {
        console.warn("Le peuple '" + varIdPeuple + "' n'a pas pu être trouvé dans la collection des données des peuples.");
        return;
    }

    // Récupération de la voie du peuple
    let varObjVoiePeuple = getVoieWithGroupe(varIdVoie, varObjPeuple.groupe_voies);
    if (varObjVoiePeuple === null) {
        console.error("La voie '" + varIdVoie + "' du groupe '" + varObjPeuple.groupe_voies + "' n'a pas été trouvée dans les données des voies.");
        return;
    }
    varVoieAAfficher = varObjVoiePeuple;


    // Si le type de voie correspond à une voie de famille.
    if ((varStrTypeVoie !== "STANDARD") && (varStrTypeVoie !== "PERSO")) {
        // Récupération des données de la famille.
        let varObjVoieFamille = null;

        // Récupération de la voie de la famille
        varObjVoieFamille = getVoieWithGroupe(varStrTypeVoie, varObjPeuple.groupe_voies);
        if (varObjVoieFamille !== null) {
            varVoieAAfficher = structuredClone(varObjVoieFamille);
            // Calcul du texte de la capacité 1 de la famille
            let varTxtCapacite1 = varVoieAAfficher.capacites[0].description;
            varTxtCapacite1 = varTxtCapacite1 + "<br> <b><u> Capacité du peuple :</u> " + varObjVoiePeuple.capacites[0].nom + " : </b>" + varObjVoiePeuple.capacites[0].description;
            varVoieAAfficher.capacites[0].description = varTxtCapacite1;

            varObjVoiePeuple = varObjVoieFamille;
        } else {
            console.error("La voie de la famille '" + varStrTypeVoie + "' du groupe '" + varObjPeuple.groupe_voies + "' n'a pas été trouvée dans les données des voies.");
            return;
        }
    }

    // On affiche les capacités de la voie standard du profil
    initZonesCapacitesAvecObjVoie(parZoneVoie, varVoieAAfficher);
    afficherTextCapacitesDeLaVoie(parZoneVoie);
}

/*******************************************************************************
 * Affiche les capacités de la zone de voie de profil passée en paramètre
 * @param {type} parZoneVoie Item contenant la zone de la voie.
 *******************************************************************************/
function initZonesCapacitesVoieProfil(parZoneVoie) {
    let varObjVoie = null;
    // Récupération du numéro de la voie de profil
    let varIntNumVoieProfil = Number(parZoneVoie.getAttribute("data-num-voie-profil"));
    // Récupération du type de voie
    let varStrTypeVoie = parZoneVoie.getElementsByClassName("txtIdTypeVoie")[0].value;

    // Si c'est la voie standard
    if (varStrTypeVoie === "STANDARD") {
        // Récupération du profil actuellement sélectionné
        let varProfilCourant = document.getElementById("SEL_PROFIL").value;

        // On récupère la voie du profil correspondant à l'ordre
        let varObjGroupeVoie = searchObjectById(dataVoies.groupesVoies, varProfilCourant);
        if (varObjGroupeVoie !== null) {
            // On affiche les capacités de la voie standard du profil
            varObjVoie = varObjGroupeVoie.voies[varIntNumVoieProfil - 1];
        } else {
            console.warn("Le détail de la voie du profil \"" + varProfilCourant + "\" n'a pas été trouvé.");
            return;
        }

    } else if (varStrTypeVoie === "HYBRIDE") {
        // On affiche la voie sélectionnée
        varObjVoie = getVoieWithGroupe(parZoneVoie.getElementsByClassName("txtIdVoie")[0].value, parZoneVoie.getElementsByClassName("txtIdGroupeVoie")[0].value);
    }

    initZonesCapacitesAvecObjVoie(parZoneVoie, varObjVoie);
}

/*******************************************************************************
 * Initialise les zones de voie avec les valeurs par défaut si elles ne sont pas
 * personnalisées.
 *******************************************************************************/
function reinitVoies() {
    // Récupération des toutes les zones de voie
    let varTabZoneVoie = document.getElementsByClassName("zoneVoie");

    // Pour chaque zone de voie
    for (let varZoneVoie of varTabZoneVoie) {
        let varCategVoie = varZoneVoie.getAttribute("data-categ-voie");
        if (varCategVoie === "profil") {
            reinitVoieProfil(varZoneVoie);
        } else if (varCategVoie === "peuple") {
            reinitVoiePeuple(varZoneVoie);
        } else if (varCategVoie === "prestige") {
            reinitVoiePrestige(varZoneVoie);
        }
    }
}


/****************************************************************************
 * Initialise la voie du peuple avec la valeur par défaut seulement si elle
 * n'est pas déjà personnalisée.
 * @param {object} parZoneVoie Zone de la voie de peuple à réinitialiser.
 *****************************************************************************/
function reinitVoiePeuple(parZoneVoie) {
    let varTxtIdGroupeVoie = parZoneVoie.getElementsByClassName("txtIdGroupeVoie")[0];
    let varTxtIdVoie = parZoneVoie.getElementsByClassName("txtIdVoie")[0];
    let varTxtNomVoie = parZoneVoie.getElementsByClassName("txtNomVoie")[0];
    let varTxtIdTypeVoie = parZoneVoie.getElementsByClassName("txtIdTypeVoie")[0];

    if (varTxtIdTypeVoie.value !== "PERSO") {
        // Récupération du peuple actuellement sélectionné
        let varIdPeupleCourant = document.getElementById("SEL_PEUPLE").value;

        // Récupération des voies standards du peuple
        let varObjPeuple = searchObjectById(dataPeuples.peuples, varIdPeupleCourant);
        if (varObjPeuple !== null) {
            let varTabVoiesPeuple = varObjPeuple.voies;

            // On prend le type STANDARD par défaut
            varTxtIdTypeVoie.value = "STANDARD";

            // On prend le groupe de voie correspondant au peuple
            varTxtIdGroupeVoie.value = varObjPeuple.groupe_voies;

            // On récupère la première voie compatible avec le peuple
            let varObjGroupeVoies = searchObjectById(dataVoies.groupesVoies, varObjPeuple.groupe_voies);
            let varObjVoie = searchObjectById(varObjGroupeVoies.voies, varTabVoiesPeuple[0]);
            varTxtIdVoie.value = varObjVoie.id;
            varTxtNomVoie.value = varObjVoie.nom;
        } else {
            console.warn("Impossible d'initialiser la voie du peuple, car le peuple courant n'en a pas.");
        }
    }
}

/*******************************************************************************
 * Initialise la voie du peuple avec la valeur par défaut seulement si elle
 * n'est pas déjà personnalisée.
 * @param {type} parZoneVoie Zone dans laquelle la voie est à initialiser.
 *******************************************************************************/
function reinitVoieProfil(parZoneVoie) {
    let varTxtIdGroupeVoie = parZoneVoie.getElementsByClassName("txtIdGroupeVoie")[0];
    let varTxtIdVoie = parZoneVoie.getElementsByClassName("txtIdVoie")[0];
    let varTxtNomVoie = parZoneVoie.getElementsByClassName("txtNomVoie")[0];
    let varTxtIdTypeVoie = parZoneVoie.getElementsByClassName("txtIdTypeVoie")[0];

    if (varTxtIdTypeVoie.value !== "PERSO") {
        // Récupération du numéro de la voie de profil
        let varIntNumVoieProfil = Number(parZoneVoie.getAttribute("data-num-voie-profil"));

        // Récupération de la famille actuellement sélectionnée
        let varIdFamilleCourante = document.getElementById("SEL_FAMILLE").value;
        let varObjFamille = searchObjectById(dataFamilles.familles, varIdFamilleCourante);

        if (varObjFamille !== null) {
            // Récupération du profil actuellement sélectionné
            let varIdProfilCourant = document.getElementById("SEL_PROFIL").value;
            let varObjProfil = searchObjectById(varObjFamille.profils, varIdProfilCourant);

            // On récupère le groupe de voies du profil
            let varObjGroupeVoies = searchObjectById(dataVoies.groupesVoies, varObjProfil.groupe_voies);

            // On prend le type STANDARD par défaut
            varTxtIdTypeVoie.value = "STANDARD";

            // On prend le groupe de voie correspondant au profil
            varTxtIdGroupeVoie.value = varObjProfil.groupe_voies;

            // On prend la voie correspondant au numéro de la voie de profil
            let varObjVoie = varObjGroupeVoies.voies[varIntNumVoieProfil - 1];
            varTxtIdVoie.value = varObjVoie.id;
            varTxtNomVoie.value = varObjVoie.nom;
        } else
            console.warn("Impossible d'initailiser les voies de profil, car la famille sélectionnée n'a pas correctement renseignée.");
    }

}

/*******************************************************************************
 * Initialise la voie du peuple avec la valeur par défaut seulement si elle
 * n'est pas déjà personnalisée.
 * @param {type} parZoneVoie Zone dans laquelle la voie est à initialiser.
 *******************************************************************************/
function reinitVoiePrestige(parZoneVoie) {
    let varTxtIdGroupeVoie = parZoneVoie.getElementsByClassName("txtIdGroupeVoie")[0];
    let varTxtIdVoie = parZoneVoie.getElementsByClassName("txtIdVoie")[0];
    let varTxtNomVoie = parZoneVoie.getElementsByClassName("txtNomVoie")[0];
    let varTxtIdTypeVoie = parZoneVoie.getElementsByClassName("txtIdTypeVoie")[0];

    varTxtIdTypeVoie.value = "PERSO";
    varTxtIdGroupeVoie.value = "";
    varTxtIdVoie.value = "";
    varTxtNomVoie.value = ".";
}

/*******************************************************************************
 * Initialise la fiche avec les données du fichier dont l'identifiant est dans
 * la variable "fiche_courante" du sessionStorage.
 *******************************************************************************/
function ficheLecture() {
    // Récupération de l'identifiant du fichier.
    let varIdFichier = sessionStorage.getItem("fiche_courante");
    if(varIdFichier===null) {
        console.error("Impossible de récupérer l'identifiant du fichier dans la variable 'fiche_courante' du sessionStorage. Initialisation de la fiche abandonnée.");
        return;
    }
    
    // Récupération des métadonnées du fichier
    let varStrMetaDonnees = fichier_getMeta(varIdFichier);
    if(varStrMetaDonnees===null) {
        console.error("Impossible de récupérer les métadonnées du fichier. Initialisation de la fiche abandonnée.");
        return;        
    }
    
    // Récupération des données
    let strDonneesFiche = fichier_getDonnees(varIdFichier);
    if(strDonneesFiche===null) {
        console.error("Impossible de récupérer les données du fichier. Initialisation de la fiche abandonnée.");
        return;        
    }
    let objDonneesFiche = {};
    if(strDonneesFiche!=="")
        objDonneesFiche = JSON.parse(strDonneesFiche);
    
    // Initialisation de la fiche.
    ficheInitAvecJSON(objDonneesFiche);
}

/*******************************************************************************
 * Gestion de la sauvegarde de la fiche.
 *******************************************************************************/
function ficheSauvegarde() {
    // Récupération de l'identifiant du fichier.
    let varIdFichier = sessionStorage.getItem("fiche_courante");
    if(varIdFichier===null) {
        console.error("Impossible de récupérer l'identifiant du fichier dans la variable 'fiche_courante' du sessionStorage. Sauvegarde abandonnées.");
        return;
    }
    
    // Récupération de l'objet contenant les données de la fiche.
    let varObjDonnees = ficheConstruireJSON();
    
    // Transformation de l'objet en chaine de caractère.
    let varStrDonnees = JSON.stringify(varObjDonnees);
    
    // Sauvegarde des données
    fichier_setDonnees(varIdFichier, varStrDonnees);
    
    // Modification du nom de la fiche avec le nom du personnage
    fichier_setNom(varIdFichier, varObjDonnees.commun.nom_personnage);
    
}

/*******************************************************************************
 * Ouverture de la page d'impression
 *******************************************************************************/
function ficheImpression() {
    window.open("impression.html");
}

/*******************************************************************************
 * Sortie de la fiche sans enregistrer.
 *******************************************************************************/
function ficheQuitter() {
    window.location.href = "index.html";
}