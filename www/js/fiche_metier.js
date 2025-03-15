
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
    document.getElementById("lblAgiDefense").innerText = String(varValeurAgi);
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
    document.getElementById("lblDefenseArmure").innerText = String(defArmure);
    // Récupération des autres bonus
    let defAutre = 0;
    let txtDefAutre = document.getElementById("TXT_DEF_AUTRE").value;
    if (!isNaN(txtDefAutre)) {
        defAutre = Number(txtDefAutre);
    }

// Affichage
    document.getElementById("TXT_DEFENSE").value = String(10 + varValeurAgi + defArmure + defAutre);
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
            varDesAttaque = varDesAttaque + document.getElementById("TXT_ATT_CONTACT").value;
        } else if (varTypeAttaque === "DISTANCE") {
            varDesAttaque = varDesAttaque + document.getElementById("TXT_ATT_DISTANCE").value;
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
        document.getElementById("lblAttContactNiv").innerText = varNiveau;
        document.getElementById("lblAttDistanceNiv").innerText = varNiveau;
        document.getElementById("lblAttMagiqueNiv").innerText = varNiveau;
    } else
        console.warn("Impossible de mettre à jour les scores d'attaque car le niveau est invalide.");
    if (!isNaN(document.getElementById("SEL_FOR").value)) {
        varForce = Number(document.getElementById("SEL_FOR").value);
        document.getElementById("lblAttContactFor").innerText = varForce;
    } else
        console.warn("Impossible de mettre à jour les scores d'attaque car la caractéristique FOR est invalide.");
    if (!isNaN(document.getElementById("SEL_AGI").value)) {
        varAgilite = Number(document.getElementById("SEL_AGI").value);
        document.getElementById("lblAttContactAgi").innerText = varAgilite;
    } else
        console.warn("Impossible de mettre à jour les scores d'attaque car la caractéristique AGI est invalide.");
    if (!isNaN(document.getElementById("SEL_VOL").value)) {
        varVolonte = Number(document.getElementById("SEL_VOL").value);
        document.getElementById("lblAttContactVol").innerText = varVolonte;
    } else
        console.warn("Impossible de mettre à jour les scores d'attaque car la caractéristique VOL est invalide.");
    document.getElementById("TXT_ATT_CONTACT").value = varNiveau + varForce;
    document.getElementById("TXT_ATT_DISTANCE").value = varNiveau + varAgilite;
    document.getElementById("TXT_ATT_MAGIQUE").value = varNiveau + varVolonte;
    remplirAttaqueArme();
}


/************************************************************************************
 * Affiche les données d'une voie dans une zone d'affichage d'une voie.
 * @param {object} parZoneVoie : Objet DOM correspondant à la zone (FILDSET) de la 
 *      voie à remplir.
 * @param {array} parTabCapaciteVoie : Tableau contenant les données d'une voie.
 *      Ce tableau doit avoir 5 éléments qui sont des objets de type "capacité"
 *      ayant la structure suivante :
 *          {
 *          "nomCapacite" : "Nom de la capacité";
 *          "textCapacite" : "Contenu de la capacité";
 *          }
 ************************************************************************************/
function remplirCapaciteAvecTabCapacite(parZoneVoie, parTabCapaciteVoie) {
// Récupération des zones (fieldset) de chaque capacité
    let varTabZonesCapacite = parZoneVoie.getElementsByClassName("zoneCapacite");
    let indexCapacite = 0;
    for (let varZoneCapacite of varTabZonesCapacite) {
        if (indexCapacite >= parTabCapaciteVoie.length) {
            break;
        }

        varZoneCapacite.getElementsByClassName("txtRangCapacite")[0].value = parTabCapaciteVoie[indexCapacite].rang;
        varZoneCapacite.getElementsByClassName("txtNomCapacite")[0].value = parTabCapaciteVoie[indexCapacite].nom;
        varZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0].value = parTabCapaciteVoie[indexCapacite].description;
        varZoneCapacite.getElementsByClassName("txtComplementCapacite")[0].value = parTabCapaciteVoie[indexCapacite].complement;
        construireTextCapacite(varZoneCapacite);
        indexCapacite++;
    }
}

function construireTextCapacite(parZoneCapacite) {
    let varValeurRangCapacite = parZoneCapacite.getElementsByClassName("txtRangCapacite")[0].value;
    let varValeurNomCapacite = parZoneCapacite.getElementsByClassName("txtNomCapacite")[0].value;
    let varValeurDescriptionCapacite = parZoneCapacite.getElementsByClassName("txtDescriptionCapacite")[0].value;
    let varComplementCapacite = parZoneCapacite.getElementsByClassName("txtComplementCapacite")[0].value;
    let varTexteDeLaCapacite = "<b>" + varValeurRangCapacite + ". " + varValeurNomCapacite + " : </b>";
    varTexteDeLaCapacite = varTexteDeLaCapacite + varValeurDescriptionCapacite;
    parZoneCapacite.getElementsByClassName("txtCapacite")[0].innerHTML = DOMPurify.sanitize(varTexteDeLaCapacite);
}

/*******************************************************************************
 * Affiche les capacités d'une voie dont l'objet est passés en paramètre dans
 * une zone d'affichage d'une voie.
 * 
 * @param {object} parZoneVoie : Objet DOM correspondant à la zone (FILDSET) de la 
 *      voie à remplir.
 * @param {object} parObjVoie : Objet voie tel que défini dans 
 *      le fichier "voies.js"
 *******************************************************************************/
function remplirCapacitesAvecObjVoie(parZoneVoie, parObjVoie) {
    let varTabCapacite = [];
    varTabCapacite[0] = {
        "rang": parObjVoie.capacite_1.rang,
        "nom": parObjVoie.capacite_1.nom,
        "description": parObjVoie.capacite_1.description,
        "complement": ""};
    varTabCapacite[1] = {
        "rang": parObjVoie.capacite_2.rang,
        "nom": parObjVoie.capacite_2.nom,
        "description": parObjVoie.capacite_2.description,
        "complement": ""};
    varTabCapacite[2] = {
        "rang": parObjVoie.capacite_3.rang,
        "nom": parObjVoie.capacite_3.nom,
        "description": parObjVoie.capacite_3.description,
        "complement": ""};
    varTabCapacite[3] = {
        "rang": parObjVoie.capacite_4.rang,
        "nom": parObjVoie.capacite_4.nom,
        "description": parObjVoie.capacite_4.description,
        "complement": ""};
    varTabCapacite[4] = {
        "rang": parObjVoie.capacite_5.rang,
        "nom": parObjVoie.capacite_5.nom,
        "description": parObjVoie.capacite_5.description,
        "complement": ""};
    remplirCapaciteAvecTabCapacite(parZoneVoie, varTabCapacite);
}

/********************************************************************
 Retourne la voie appartenant au groupe dont l'identifiant est passé en
 paramètre (parIdGroupe) et dont l'identifiant de voie est parIdVoie.
 ********************************************************************/
function getVoieWithGroupe(parIdVoie, parIdGroupe) {
    let varObjGroupe = "";
    // Recherche du groupe
    varObjGroupe = searchObjectById(dataVoies.groupesVoies, parIdGroupe);
    if (varObjGroupe === null) {
        return null;
    }

// Recherche de la voie
    let varObjVoie = searchObjectById(varObjGroupe.voies, parIdVoie);
    if (varObjVoie === null) {
        return null;
    }

    return varObjVoie;
}

/****************************************************************
 Cette fonction remplie la liste de choix des peuples.
 ****************************************************************/
function initSelectPeuples() {
    let selectPeuple = document.getElementById("SEL_PEUPLE");
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
        document.getElementById("TXT_DES_RECUP").value = varObjFamille.des_de_recup;
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

/*******************************************************************************
 * Rajoute à la liste des type de voie du peuple les voies
 * de la famille (si elle en a).
 *******************************************************************************/
function initSelectTypeVoiePeuple() {
    let selTypeVoiePeuple = document.getElementById("ZONE_VOIE_PEUPLE").getElementsByClassName("selectTypeVoie")[0];
    let idFamilleCourante = document.getElementById("SEL_FAMILLE").value;
    let tabToutesVoiesPeuple = searchObjectById(dataVoies.groupesVoies, "PEUPLES").voies;
    // Vidange de la liste des types de voies du peuple des familles
    for (let varOptTypeVoie of selTypeVoiePeuple.options) {
        if (varOptTypeVoie.getAttribute("data-type-famille") === "oui")
            varOptTypeVoie.remove(varOptTypeVoie.selectedIndex);
    }

// On rajoute les famille dans la liste de choix
    if (idFamilleCourante !== "") {
        let tabIdVoiesDeLaFamille = searchObjectById(dataFamilles.familles, idFamilleCourante).voies; // Tableau des voies de la famille sélectionnée.
        if (tabIdVoiesDeLaFamille === undefined) {
            console.error("La famille " + idFamilleCourante + " n'existe pas ou n'a pas d'attribut \"voies\".");
            return;
        }
        if (tabIdVoiesDeLaFamille.length > 0) {
            // Rajout des voies de la famille dans la liste de choix
            for (let varIdVoie of tabIdVoiesDeLaFamille) {
                let varVoie = searchObjectById(tabToutesVoiesPeuple, varIdVoie);
                if (varVoie !== null) {
                    let option = document.createElement('option');
                    option.text = varVoie.nom;
                    option.value = varVoie.id;
                    option.setAttribute("data-type-famille", "oui");
                    selTypeVoiePeuple.add(option);
                }
            }
        }
    }
}

/*****************************************************************
 * Cette fonction remplie la liste de choix de la voie
 * du peuple en récupérant les voies autorisées pour le peuple
 * sélectionné et les voies autorisées pour la famille selectionnée.
 * @param {item} parSelectVoie Item contenant la liste de choix (SELECT) des voies.
 ******************************************************************/
function initSelectVoiesPeuple(parZoneVoie) {
    let tabVoies = [];
    let peupleCourant = document.getElementById("SEL_PEUPLE").value;
    let tabToutesVoiesPeuple = searchObjectById(dataVoies.groupesVoies, "PEUPLES").voies;
    // Récupération de la liste de choix de le voie
    let varSelectVoie = parZoneVoie.getElementsByClassName("selectVoie")[0];
    // Vidange de la liste des voies de peuple
    while (varSelectVoie.options.length > 0) {
        varSelectVoie.remove(0);
    }

// Récupération des voies du peuple actuellement sélectionné
    if (peupleCourant !== "") {
        let tabIdVoiesDuPeuple = searchObjectById(dataPeuples.peuples, peupleCourant).voies; // Tableau des voies du peuple sélectionné.
        if (tabIdVoiesDuPeuple === undefined) {
            console.error("Le peuple " + peupleCourant + " n'existe pas ou n'a pas d'attribut \"voies\".");
            return;
        }
        if (tabIdVoiesDuPeuple.length > 0) {
            for (let varIdVoie of tabIdVoiesDuPeuple) {
                let varVoie = searchObjectById(tabToutesVoiesPeuple, varIdVoie);
                if (varVoie !== null) {
                    tabVoies.push(varVoie);
                }
            }
        }
    }

// Remplissage de la liste des voies du peuple.
    for (let varVoie of tabVoies) {
        let option = document.createElement('option');
        option.text = varVoie.nom;
        option.value = varVoie.id;
        varSelectVoie.add(option);
    }
}

/*******************************************************************************
 * Rempli les listes de sélection des voies pour les profils hybride.
 * @param {type} parZoneVoie Item contenant la zone de la voie.
 *******************************************************************************/
function initSelectVoiesProfil(parZoneVoie) {
// Récupération du profil actuellement sélectionné
    let varIdProfilCourant = document.getElementById("SEL_PROFIL").value;
    // Récupération de la liste de choix de le voie
    let varSelectVoie = parZoneVoie.getElementsByClassName("selectVoie")[0];
    // Récupération du type de voie
    let varStrTypeVoie = parZoneVoie.getElementsByClassName("selectTypeVoie")[0].value;
    // On commence par vider la liste
    varSelectVoie.innerText = "";
    if (varStrTypeVoie === "STANDARD") {
// Récupération du numéro de la voie de profil
        let varIntNumVoieProfil = Number(parZoneVoie.getAttribute("data-num-voie-profil"));
        // On ajoute le profil comme voie
        let varObjGroupeVoie = searchObjectById(dataVoies.groupesVoies, varIdProfilCourant);
        if (varObjGroupeVoie !== null) {
            let varVoie = varObjGroupeVoie.voies[varIntNumVoieProfil];
            let varOption = document.createElement('option');
            varOption.text = varVoie.nom;
            varOption.value = encodeURIComponent(varIdProfilCourant) + ";" + encodeURIComponent(varVoie.id);
            varSelectVoie.add(varOption);
        } else {
            console.warn("Le détail des voies du profil \"" + varIdProfilCourant + "\" n'a pas été trouvé.");
        }

    } else if (varStrTypeVoie === "HYBRIDE") {
// Pour chaque famille
        for (let varFamille of dataFamilles.familles) {
// Pour chaque profil de la famille
            for (let varProfil of varFamille.profils) {
// On exclu le profil courrant
                if (varProfil.id !== varIdProfilCourant) {
// On ajoute un groupe "Famille => Profil" à la liste de sélection de profil hybride
                    let varOptGroup = document.createElement('optgroup');
                    varOptGroup.setAttribute("label", varFamille.nom + " - " + varProfil.nom);
                    varSelectVoie.add(varOptGroup);
                    // Puis pour chaque voie du profil
                    let varObjGroupeVoie = searchObjectById(dataVoies.groupesVoies, varProfil.id);
                    if (varObjGroupeVoie !== null) {
                        for (let varVoie of varObjGroupeVoie.voies) {
// On ajoute une option dans la liste de sélection.
                            let varOption = document.createElement('option');
                            varOption.text = varVoie.nom;
                            varOption.value = encodeURIComponent(varProfil.id) + ";" + encodeURIComponent(varVoie.id);
                            varSelectVoie.add(varOption);
                        }
                    } else {
                        console.warn("Le détail des voies du profil \"" + varProfil.id + "\" n'a pas été trouvé.");
                    }
                }
            }
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
    }
}

/******************************************************************************
 * Gère l'entête de la zone de voie profil dont l'item (frameset) est
 * passé en paramètre. 
 * @param {type} parZoneVoie Item contenant la zone de la voie de profil.
 ******************************************************************************/
function gereVoieProfil(parZoneVoie) {
// Récupération du type de voie
    let varStrTypeVoie = parZoneVoie.getElementsByClassName("selectTypeVoie")[0].value;
    // Si c'est la voie standard
    if (varStrTypeVoie === "STANDARD") {
// On affiche la liste de choix des voies pour les profils hybrides ert on la rempli
        let varSelVoie = parZoneVoie.getElementsByClassName("selectVoie")[0];
        varSelVoie.style.display = "inline";
        initSelectVoiesProfil(parZoneVoie);
        // On efface la zone de texte contenant le nom de la voie personnalisée
        let varTxtVoiePerso = parZoneVoie.getElementsByClassName("txtVoiePerso")[0];
        varTxtVoiePerso.style.display = "none";
        afficheCapacitesVoieProfil(parZoneVoie);
    } else if (varStrTypeVoie === "HYBRIDE") {
// On affiche la liste de choix des voies pour les profils hybrides ert on la rempli
        let varSelVoie = parZoneVoie.getElementsByClassName("selectVoie")[0];
        varSelVoie.style.display = "inline";
        initSelectVoiesProfil(parZoneVoie);
        // On efface la zone de texte contenant le nom de la voie personnalisée
        let varTxtVoiePerso = parZoneVoie.getElementsByClassName("txtVoiePerso")[0];
        varTxtVoiePerso.style.display = "none";
        afficheCapacitesVoieProfil(parZoneVoie);
    } else if (varStrTypeVoie === "PERSO") {
// On efface la liste de choix des voies pour les profils hybrides
        parZoneVoie.getElementsByClassName("selectVoie")[0].style.display = "none";
        // On affiche la zone de texte contenant le nom de la voie personnalisée
        let varTxtVoiePerso = parZoneVoie.getElementsByClassName("txtVoiePerso")[0];
        varTxtVoiePerso.style.display = "inline";
    }
}

/******************************************************************************
 * Gère l'affichage de la zone de voie de peuple dont l'item (frameset) est
 * passé en paramètre. 
 * @param {type} parZoneVoie Item contenant la zone de la voie de peuple.
 ******************************************************************************/
function gereVoiePeuple(parZoneVoie) {

    // Récupération du type de voie
    let varStrTypeVoie = parZoneVoie.getElementsByClassName("selectTypeVoie")[0].value;
    // Si c'est la voie standard du peuple
    if (varStrTypeVoie === "STANDARD") {
        // On affiche la liste de choix des voies du peuple et on rempli la liste
        let varSelVoie = parZoneVoie.getElementsByClassName("selectVoie")[0];
        varSelVoie.style.display = "inline";
        initSelectVoiesPeuple(parZoneVoie);

        // On efface la zone de texte contenant le nom de la voie personnalisée
        let varTxtVoiePerso = parZoneVoie.getElementsByClassName("txtVoiePerso")[0];
        varTxtVoiePerso.style.display = "none";

        // On affiche les capacité de la voie du peuple
        afficheCapacitesVoiePeuple(parZoneVoie);
    } else if (varStrTypeVoie === "PERSO") {
        // On efface la liste de choix des voies pour les profils hybrides
        parZoneVoie.getElementsByClassName("selectVoie")[0].style.display = "none";
        // On affiche la zone de texte contenant le nom de la voie personnalisée
        let varTxtVoiePerso = parZoneVoie.getElementsByClassName("txtVoiePerso")[0];
        varTxtVoiePerso.style.display = "inline";
    } else { // On est sur une famille
        // On affiche la liste de choix des voies du peuple et on rempli la liste
        let varSelVoie = parZoneVoie.getElementsByClassName("selectVoie")[0];
        varSelVoie.style.display = "inline";
        initSelectVoiesPeuple(parZoneVoie);

        // On efface la zone de texte contenant le nom de la voie personnalisée
        let varTxtVoiePerso = parZoneVoie.getElementsByClassName("txtVoiePerso")[0];
        varTxtVoiePerso.style.display = "none";

        // On affiche les capacité de la voie de la famille
        afficheCapacitesVoiePeuple(parZoneVoie);
    }

}

/*******************************************************************************
 * Affiche les capacités de la zone de voie passée en paramètre en fonction
 * des zones de son entête.
 * @param {type} parZoneVoie Item contenant la zone de la voie.
 *******************************************************************************/
function afficheCapacitesVoie(parZoneVoie) {
    let varCategVoie = parZoneVoie.getAttribute("data-categ-voie");
    if (varCategVoie === "profil") {
        afficheCapacitesVoieProfil(parZoneVoie);
    } else if (varCategVoie === "peuple") {
        afficheCapacitesVoiePeuple(parZoneVoie);
    }
}


/*******************************************************************************
 * Affiche les capacité de la zone de voie de peuple passée en paramètre
 * @param {type} parZoneVoie Item contenant la zone de la voie.
 *******************************************************************************/
function afficheCapacitesVoiePeuple(parZoneVoie) {
    let varIdPeuple = document.getElementById("SEL_PEUPLE").value;
    let varIdVoie = parZoneVoie.getElementsByClassName("selectVoie")[0].value;
    let varStrTypeVoie = parZoneVoie.getElementsByClassName("selectTypeVoie")[0].value;
    let varVoieAAfficher = null;

    // Récupération des données du peuple
    let varObjPeuple = searchObjectById(dataPeuples.peuples, varIdPeuple);
    if (varObjPeuple === null) {
        console.error("Le peuple '" + varIdPeuple + "' n'a pas pu être trouvé dans la collection des données des peuples.");
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
            let varTxtCapacite1 = varVoieAAfficher.capacite_1.description;
            varTxtCapacite1 = varTxtCapacite1 + "<br> <b><u> Capacité du peuple :</u> " + varObjVoiePeuple.capacite_1.nom + " : </b>" + varObjVoiePeuple.capacite_1.description;
            varVoieAAfficher.capacite_1.description = varTxtCapacite1;

            varObjVoiePeuple = varObjVoieFamille;
        } else {
            console.error("La voie de la famille '" + varStrTypeVoie + "' du groupe '" + varObjPeuple.groupe_voies + "' n'a pas été trouvée dans les données des voies.");
            return;
        }
    }

    // On affiche les capacités de la voie standard du profil
    remplirCapacitesAvecObjVoie(parZoneVoie, varVoieAAfficher);
}

/*******************************************************************************
 * Affiche les capacités de la zone de voie de profil passée en paramètre
 * @param {type} parZoneVoie Item contenant la zone de la voie.
 *******************************************************************************/
function afficheCapacitesVoieProfil(parZoneVoie) {
    let varObjVoie = null;
    // Récupération du numéro de la voie de profil
    let varIntNumVoieProfil = Number(parZoneVoie.getAttribute("data-num-voie-profil"));
    // Récupération du type de voie
    let varStrTypeVoie = parZoneVoie.getElementsByClassName("selectTypeVoie")[0].value;

    // Si c'est la voie standard
    if (varStrTypeVoie === "STANDARD") {
        // Récupération du profil actuellement sélectionné
        let varProfilCourant = document.getElementById("SEL_PROFIL").value;

        // On récupère la voie du profil correspondant à l'ordre
        let varObjGroupeVoie = searchObjectById(dataVoies.groupesVoies, varProfilCourant);
        if (varObjGroupeVoie !== null) {
            // On affiche les capacités de la voie standard du profil
            varObjVoie = varObjGroupeVoie.voies[varIntNumVoieProfil];
        } else {
            console.warn("Le détail de la voie du profil \"" + varProfilCourant + "\" n'a pas été trouvé.");
            return;
        }

    } else if (varStrTypeVoie === "HYBRIDE") {
        // On affiche les capacités de la voie du profil hybride
        let varTabIdVoieProfil = parZoneVoie.getElementsByClassName("selectVoie")[0].value.split(";");

        // On affiche la voie sélectionnée
        varObjVoie = getVoieWithGroupe(decodeURIComponent(varTabIdVoieProfil[1]), decodeURIComponent(varTabIdVoieProfil[0]));
    }

    remplirCapacitesAvecObjVoie(parZoneVoie, varObjVoie);
}

/*************************************************************************
 * Fonction recevant un tableau d'objet et qui retourne l'objet
 * dont l'attribut "id" est égal au paramètre "parSearchId".
 * Retourne null si l'objet n'est pas trouvé.
 * 
 * @param {array} parArrayOfObject Tableau d'objet
 * @param {string} parSearchId Identifiant recherché
 * @returns {object} Objet trouvé, ou null si aucun objet trouvé.
 **************************************************************************/
function searchObjectById(parArrayOfObject, parSearchId) {
    let varReturn = null;
    for (let varObject of parArrayOfObject) {
        if (varObject.id === parSearchId) {
            varReturn = varObject; }
    }
    return varReturn;
}
