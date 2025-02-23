
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
    document.getElementById("lblAgiDefense").innerHTML = String(varValeurAgi);

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
    document.getElementById("lblDefenseArmure").innerHTML = String(defArmure);

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

        varZoneArme.querySelector(".txtDesAttaqueArme").innerHTML = varDesAttaque;
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
        document.getElementById("lblAttContactNiv").innerHTML = varNiveau;
        document.getElementById("lblAttDistanceNiv").innerHTML = varNiveau;
        document.getElementById("lblAttMagiqueNiv").innerHTML = varNiveau;
    } else
        console.warn("Impossible de mettre à jour les scores d'attaque car le niveau est invalide.");

    if (!isNaN(document.getElementById("SEL_FOR").value)) {
        varForce = Number(document.getElementById("SEL_FOR").value);
        document.getElementById("lblAttContactFor").innerHTML = varForce;
    } else
        console.warn("Impossible de mettre à jour les scores d'attaque car la caractéristique FOR est invalide.");

    if (!isNaN(document.getElementById("SEL_AGI").value)) {
        varAgilite = Number(document.getElementById("SEL_AGI").value);
        document.getElementById("lblAttContactAgi").innerHTML = varAgilite;
    } else
        console.warn("Impossible de mettre à jour les scores d'attaque car la caractéristique AGI est invalide.");

    if (!isNaN(document.getElementById("SEL_VOL").value)) {
        varVolonte = Number(document.getElementById("SEL_VOL").value);
        document.getElementById("lblAttContactVol").innerHTML = varVolonte;
    } else
        console.warn("Impossible de mettre à jour les scores d'attaque car la caractéristique VOL est invalide.");

    document.getElementById("TXT_ATT_CONTACT").value = varNiveau + varForce;
    document.getElementById("TXT_ATT_DISTANCE").value = varNiveau + varAgilite;
    document.getElementById("TXT_ATT_MAGIQUE").value = varNiveau + varVolonte;

    remplirAttaqueArme();
}


/*****************************************************************
 Cette fonction remplie la liste de choix de la voie
 du peuple en récupérant les voies autorisées pour le peuple
 sélectionné et les voies autorisées pour la famille selectionnée.
 *****************************************************************/
function initSelectVoiePeuple() {
    let selVoiePeuple = document.getElementById("SEL_VOIE_PEUPLE");
    let tabVoies = [];
    let peupleCourant = document.getElementById("SEL_PEUPLE").value;
    let tabToutesVoiesPeuple = searchObjectById(dataVoies.groupesVoies, "PEUPLES").voies;

    // Vidange de la liste des voies de peuple
    while (selVoiePeuple.options.length > 0) {
        selVoiePeuple.remove(0);
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
        selVoiePeuple.add(option);
    }
}

/*****************************************************************************************
 Prépare les données pour remplir la zone des données de la voie du peuple.
 *****************************************************************************************/
function remplirCapacitesVoiePeuple() {
    let selVoiePeuple = document.getElementById("SEL_VOIE_PEUPLE");
    let selVoieFamille = document.getElementById("SEL_VOIE_FAMILLE");
    let selFamille = document.getElementById("SEL_FAMILLE");

    // Récupération de la voie du peuple
    let varObjPeuple = searchObjectById(dataPeuples.peuples, selVoiePeuple.value);
    if (varObjPeuple === null) {
        console.error("Le peuple '" + selVoiePeuple.value + "' n'a pas pu être trouvé dans la collection des données des peuples.");
        return;
    }
    let varObjVoiePeuple = getVoieWithGroupe(selVoiePeuple.value, varObjPeuple.groupe_voies);
    if (varObjVoiePeuple === null)
    {
        console.error("La voie '" + selVoiePeuple.value + "' du groupe '" + varObjPeuple.groupe_voies + "' n'a pas été trouvée dans les données des voies.");
        return;
    }

    // Récupération de la voie de la famille (si elle n'est pas vide)
    let varObjVoieFamille = null;
    if (selVoieFamille.value !== "") {
        let varObjFamille = searchObjectById(dataFamilles.familles, selFamille.value);
        if (varObjFamille !== null) {
            varObjVoieFamille = getVoieWithGroupe(selVoieFamille.value, varObjFamille.groupe_voies);
        }
    }

    // Remplissage des zones de la zone de la voie
    let varObjVoieAAfficher = varObjVoiePeuple;
    if (varObjVoieFamille !== null) {
        varObjVoieAAfficher = varObjVoieFamille;
    }

    let varTabVoieAffichable = [];
    let varTxtCapacite1 = varObjVoieAAfficher.capacite_1.description;
    if (varObjVoieFamille !== null) {
        varTxtCapacite1 = varTxtCapacite1 + "<br> <b><u> Capacité du peuple :</u> " + varObjVoiePeuple.capacite_1.nom + " : </b>" + varObjVoiePeuple.capacite_1.description;
    }

    varTabVoieAffichable[0] = {"nomCapacite": varObjVoieAAfficher.capacite_1.nom, "textCapacite": varTxtCapacite1};
    varTabVoieAffichable[1] = {"nomCapacite": varObjVoieAAfficher.capacite_2.nom, "textCapacite": varObjVoieAAfficher.capacite_2.description};
    varTabVoieAffichable[2] = {"nomCapacite": varObjVoieAAfficher.capacite_3.nom, "textCapacite": varObjVoieAAfficher.capacite_3.description};
    varTabVoieAffichable[3] = {"nomCapacite": varObjVoieAAfficher.capacite_4.nom, "textCapacite": varObjVoieAAfficher.capacite_4.description};
    varTabVoieAffichable[4] = {"nomCapacite": varObjVoieAAfficher.capacite_5.nom, "textCapacite": varObjVoieAAfficher.capacite_5.description};
    remplirVoie("ZONE_VOIE_PEUPLE", varTabVoieAffichable);

}

/************************************************************************************
 Affiche les données d'une voie dans une zone d'affichage d'une voie.
 - parIdZoneVoie : Identifiant d'un "fieldset" correspondant à la structure HTML de la voie.
 - parTabVoieAffichable : Tableau contenant les données d'une voie. Ce tableau doit avoir 5 éléments qui
 sont des objets de type "capacité" ayant la structure suivante :
 {
 "textCapacite" : "Contenu de la capacité";
 }
 ************************************************************************************/
function remplirVoie(parIdZoneVoie, parTabVoieAffichable) {
    // Récupération des zones (fieldset) de chaque capacité
    let varTabZonesVoie = document.getElementById(parIdZoneVoie).getElementsByClassName("zoneCapacite");

    let indexVoie = 0;
    for (let varZoneVoie of varTabZonesVoie) {
        let varTexteDeLaVoie;
        if (indexVoie >= parTabVoieAffichable.length) {
            break;
        }
        varTexteDeLaVoie = "<b>" + String(indexVoie + 1) + ". " + parTabVoieAffichable[indexVoie].nomCapacite + " : </b>";
        varTexteDeLaVoie = varTexteDeLaVoie + parTabVoieAffichable[indexVoie].textCapacite;
        varZoneVoie.getElementsByClassName("txtCapacite")[0].innerHTML = varTexteDeLaVoie;
        indexVoie++;
    }

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
    if (currentFamily != null) {
        for (let profil of currentFamily.profils) {
            let option = document.createElement('option');
            option.text = profil.nom;
            option.value = profil.id;
            selectProfile.add(option);
        }
    }
}

/********************************************************************
 Initialisation de la liste des la voie de peuple qui dépend de la
 famille.
 ********************************************************************/
function initSelectVoiesFamille() {
    let selVoieFamille = document.getElementById("SEL_VOIE_FAMILLE");
    let tabVoies = [];
    let idFamilleCourante = document.getElementById("SEL_FAMILLE").value;
    let tabToutesVoiesPeuple = searchObjectById(dataVoies.groupesVoies, "PEUPLES").voies;

    // Vidange de la liste des voies de famille
    while (selVoieFamille.options.length > 0) {
        selVoieFamille.remove(0);
    }

    let option = document.createElement('option');
    option.text = "";
    option.value = "";
    selVoieFamille.add(option);


    // Récupération des voies de la famille actuellement sélectionnée.
    if (idFamilleCourante !== "") {
        let tabIdVoiesDeLaFamille = searchObjectById(dataFamilles.familles, idFamilleCourante).voies; // Tableau des voies de la famille sélectionnée.
        if (tabIdVoiesDeLaFamille === undefined) {
            console.error("La famille " + idFamilleCourante + " n'existe pas ou n'a pas d'attribut \"voies\".");
            return;
        }
        if (tabIdVoiesDeLaFamille.length > 0) {
            for (let varIdVoie of tabIdVoiesDeLaFamille) {
                let varVoie = searchObjectById(tabToutesVoiesPeuple, varIdVoie);
                if (varVoie !== null) {
                    tabVoies.push(varVoie);
                }
            }

            // Remplissage de la liste des voies de la famille.
            for (let varVoie of tabVoies) {
                let option = document.createElement('option');
                option.text = varVoie.nom;
                option.value = varVoie.id;
                selVoieFamille.add(option);
            }

            // Affichage de la liste
            selVoieFamille.style.display = "inline";
        } else {
            // Effacement de la liste
            selVoieFamille.style.display = "none";
        }
    }
}


/*******************************************************************************
 * Rempli les listes de sélection des voies hybrides.
 * @param {item} parSelectVoieHybride Item contenant la liste de choix (SELECT) des profils.
 *******************************************************************************/
function initSelectVoiesHybride(parSelectVoieHybride) {
    // Récupération du profil actuellement sélectionné
    let varProfilCourant = document.getElementById("SEL_PROFIL").value;

    // On commence par vider la liste
    parSelectVoieHybride.innerHTML = "";

    // Pour chaque famille
    for (let varFamille of dataFamilles.familles) {
        // Pour chaque profil de la famille
        for (let varProfil of varFamille.profils) {
            // On exclu le profil courrant
            if (varProfil.id !== varProfilCourant) {
                // On ajoute un groupe "Famille => Profil" à la liste de sélection de profil hybride
                let varOptGroup = document.createElement('optgroup');
                varOptGroup.setAttribute("label", varFamille.nom + " - " + varProfil.nom);
                parSelectVoieHybride.add(varOptGroup);

                // Puis pour chaque voie du profil
                let varDetailProfil = searchObjectById(dataVoies.groupesVoies, varProfil.id);
                if (varDetailProfil !== null) {
                    for (let varVoie of varDetailProfil.voies) {
                        // On ajoute une option dans la liste de sélection.
                        let varOption = document.createElement('option');
                        varOption.text = varVoie.nom;
                        varOption.value = varVoie.id;
                        parSelectVoieHybride.add(varOption);
                    }
                } else {
                    console.warn("Le détail des voies du profil \"" + varProfil.id + "\" n'a pas été trouvé.");
                }
            }
        }
    }
}

/******************************************************************************
 * Gère l'affichage de tous les zones de voie de profil.
 ******************************************************************************/
function gereTypesVoieProfil() {
    // Récupération des toutes les zones de voie
    let varTabZoneVoie = document.getElementsByClassName("zoneVoieProfil");

    // Pour chaque zone de voie
    for (let varZoneVoie of varTabZoneVoie) {
        gereTypeVoieProfil(varZoneVoie);
    }
}

/******************************************************************************
 * Gère l'affichage de la zone de voie de profil dont l'item (frameset) est
 * passé en paramètre. 
 * @param {type} parZoneVoie Item contenant la zone de la voie.
 ******************************************************************************/
function gereTypeVoieProfil(parZoneVoie) {
    // Récupération du type de voie du profil
    let varStrTypeVoieProfil = parZoneVoie.getElementsByClassName("selectTypeVoieProfil")[0].value;
    
    // Récupération du numéro de la voie de profil
    let varIntNumVoieProfil = Number(parZoneVoie.getAttribute("data-num-voie-profil"));
    console.log("gereTypeVoieProfil varIntNumVoieProfil = " + varIntNumVoieProfil);

    // Si c'est la voie par défaut du profil
    if (varStrTypeVoieProfil === "PROFIL") {
        // On n'affiche pas la liste de choix des voies pour les profils hybrides
        parZoneVoie.getElementsByClassName("selectVoieHybride")[0].style.display = "none";
        
        // On affiche la zone de texte contenant le nom de la voie en non modifiable
        let varTxtVoieProfil = parZoneVoie.getElementsByClassName("txtVoieProfil")[0];
        varTxtVoieProfil.style.display = "inline";
        varTxtVoieProfil.disabled = true;
        
        // Récupération du profil actuellement sélectionné
        let varProfilCourant = document.getElementById("SEL_PROFIL").value;
        
        // On récupère la voie du profil correspondant à l'ordre
        let varObjGroupeVoie = searchObjectById(dataVoies.groupesVoies, varProfilCourant);
        varTxtVoieProfil.value = varObjGroupeVoie.voies[varIntNumVoieProfil].nom;
        
    } else if (varStrTypeVoieProfil === "HYBRIDE") {
        // On affiche la liste de choix des voies pour les profils hybrides
        parZoneVoie.getElementsByClassName("selectVoieHybride")[0].style.display = "inline";

        // On efface la zone de texte contenant le nom de la voie
        let varTxtVoieProfil = parZoneVoie.getElementsByClassName("txtVoieProfil")[0];
        varTxtVoieProfil.style.display = "none";
        
        // On rempli la liste de selection des voies hybrides
        initSelectVoiesHybride(parZoneVoie.getElementsByClassName("selectVoieHybride")[0]);

    } else if (varStrTypeVoieProfil === "PERSO") {
        // On n'affiche pas la liste de choix des voies pour les profils hybrides
        parZoneVoie.getElementsByClassName("selectVoieHybride")[0].style.display = "none";

        // On affiche la zone de texte contenant le nom de la voie en modifiable
        let varTxtVoieProfil = parZoneVoie.getElementsByClassName("txtVoieProfil")[0];
        varTxtVoieProfil.style.display = "inline";
        varTxtVoieProfil.disabled = false;

    }
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

