/*
 * Gestion de la boite de dialogue des voies.
 */

const dlgVoie = document.getElementById("dlgVoie");
let globalHtmlItemZoneVoie = null;

/*******************************************************************************
 * Mise en place des gestionnaires d'évènement pour la boite de dialogue.
 *******************************************************************************/
function dlgVoieInitEventListners() {
    document.getElementById("dlgVoieFerme").addEventListener('click', dlgVoieBtnCloseOnClick);
    document.getElementById("DLGVOIE_SEL_TYPE_VOIE").addEventListener('change', dlgVoieSelTypeVoieOnChange);
    document.getElementById("DLG_VOIE_FORM").addEventListener('submit', dlgVoieFormOnSubmit);
}

/*******************************************************************************
 * Evènement de validation du formulaire de la boite de dialogue.
 * @param {type} e Evenement capturé.
 *******************************************************************************/
function dlgVoieFormOnSubmit(e) {
    e.preventDefault(); // On évite que le processus de validation du formulaire (POST/GET) se réalise.
    dlgVoieValidation();
    return false;
}

/*******************************************************************************
 * Affichage de la boite de dialogue de la voie dont la zone est passée en 
 * paramètre.
 * @param {type} parHtmlItemZoneVoie Item contant la zone de la voie (fieldset)
 *******************************************************************************/
function dlgVoieOuverture(parHtmlItemZoneVoie) {
    let selTypeVoie = document.getElementById("DLGVOIE_SEL_TYPE_VOIE");
    let txtNomVoie = document.getElementById("DLGVOIE_TXT_NOM");
    
    // Sauvegarde de la zone de voie à traiter
    globalHtmlItemZoneVoie = parHtmlItemZoneVoie;

    // Initialisation de la liste des types de voie
    dlgVoieInitSelectTypeVoie();
    
    // On se positionne sur le type de voie de la zone
    selTypeVoie.value = globalHtmlItemZoneVoie.getElementsByClassName("txtIdTypeVoie")[0].value;


    // Gestion de l'affichage des champs en fonction du type de voie
    dlgVoieGereAffichage();
    
    // Récupération du nom de la voie
    txtNomVoie.value = globalHtmlItemZoneVoie.getElementsByClassName("txtNomVoie")[0].value;

    // Affichage de la fenêtre
    dlgVoie.showModal();
}

/*******************************************************************************
 * Evènement de modification du type de voie.
 *******************************************************************************/
function dlgVoieSelTypeVoieOnChange() {
    // Gestion de l'affichage des champs en fonction du type de voie
    dlgVoieGereAffichage();
}

/*******************************************************************************
 * Gestion de la validation de la modification.
 ********************************************************************************/
function dlgVoieValidation() {
    let selTypeVoie = document.getElementById("DLGVOIE_SEL_TYPE_VOIE");
    let selVoie = document.getElementById("DLGVOIE_SEL_VOIE");
    let txtNomVoie = document.getElementById("DLGVOIE_TXT_NOM");

    // Positionnement du type de la voie
    globalHtmlItemZoneVoie.getElementsByClassName("txtIdTypeVoie")[0].value = selTypeVoie.value;

    // Positionnement du groupe et de l'identifiant de la voie
    let varTabIdVoie = selVoie.value.split(";");
    let varIdVoie = decodeURIComponent(varTabIdVoie[1]);
    let varGroupeVoie = decodeURIComponent(varTabIdVoie[0]);
    globalHtmlItemZoneVoie.getElementsByClassName("txtIdVoie")[0].value = varIdVoie;
    globalHtmlItemZoneVoie.getElementsByClassName("txtIdGroupeVoie")[0].value = varGroupeVoie;

    // Positionnement du nom de la voie
    if (selTypeVoie.value === "PERSO") {
        globalHtmlItemZoneVoie.getElementsByClassName("txtNomVoie")[0].value = txtNomVoie.value;
    } else {
        globalHtmlItemZoneVoie.getElementsByClassName("txtNomVoie")[0].value = selVoie.options[selVoie.selectedIndex].text;
    }

    // Réinitialisation de la zone de la voie
    gereVoie(globalHtmlItemZoneVoie);

    dlgVoie.close();
}

/*******************************************************************************
 * Evenement de click sur le bouton de fermeture de la boite de dialogue.
 *******************************************************************************/
function dlgVoieBtnCloseOnClick() {
    dlgVoie.close();
}

/*******************************************************************************
 * Initialise la liste des types de voies en tenant compte de la catégorie
 * de la zone de voie.
 *******************************************************************************/
function dlgVoieInitSelectTypeVoie() {
    // Récupération de la catégorie de voie
    let varCategorieVoie = globalHtmlItemZoneVoie.getAttribute("data-categ-voie");

    if (varCategorieVoie === "peuple") {
        dlgVoieInitSelectTypeVoiePeuple();
    }
    else if (varCategorieVoie === "profil") {
        dlgVoieInitSelectTypeVoieProfil();
    }
    else if (varCategorieVoie === "prestige") {
        dlgVoieInitSelectTypeVoiePrestige();
    }
}

/*******************************************************************************
 * Initialise la liste des type de voies du peuple en y ajoutant les voies
 * de la famille (si elle en a).
 *******************************************************************************/
function dlgVoieInitSelectTypeVoiePeuple() {
    let selTypeVoie = document.getElementById("DLGVOIE_SEL_TYPE_VOIE");
    let idFamilleCourante = document.getElementById("SEL_FAMILLE").value;
    let tabToutesVoiesPeuple = searchObjectById(dataVoies.groupesVoies, "PEUPLES").voies;

    // Vidange de la liste des types de voies
    selTypeVoie.innerHTML = "";


    // On rajoute les types standards
    let option = document.createElement('option');
    option.value = "STANDARD";
    option.text = "Peuple";
    selTypeVoie.add(option);
    option = document.createElement('option');
    option.value = "PERSO";
    option.text = "Personnalisée";
    selTypeVoie.add(option);

    // On rajoute les voies de la familles dans la liste de choix
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
                    option = document.createElement('option');
                    option.text = varVoie.nom;
                    option.value = varVoie.id;
                    selTypeVoie.add(option);
                }
            }
        }
    }

    
}

/*******************************************************************************
 * Initialise la liste des types de voies du profil.
 *******************************************************************************/
function dlgVoieInitSelectTypeVoieProfil() {
    let selTypeVoie = document.getElementById("DLGVOIE_SEL_TYPE_VOIE");
    
    // Vidange de la liste des types de voies
    selTypeVoie.innerHTML = "";
    
    // On rajoute les types standards
    let option = document.createElement('option');
    option.value = "STANDARD";
    option.text = "Profil";
    selTypeVoie.add(option);
    option = document.createElement('option');
    option.value = "HYBRIDE";
    option.text = "Hybride";
    selTypeVoie.add(option);
    option = document.createElement('option');
    option.value = "PERSO";
    option.text = "Personnalisée";
    selTypeVoie.add(option);

}

/*******************************************************************************
 * Initialise la liste des types de voies de prestige.
 *******************************************************************************/
function dlgVoieInitSelectTypeVoiePrestige() {
    let selTypeVoie = document.getElementById("DLGVOIE_SEL_TYPE_VOIE");
    
    // Vidange de la liste des types de voies
    selTypeVoie.innerHTML = "";
    
    // On rajoute les types standards
    let option = document.createElement('option');
    option.value = "PERSO";
    option.text = "Personnalisée";
    selTypeVoie.add(option);
}

/*******************************************************************************
 * Initialise la liste des voies en tenant compte du type de la voie.
 *******************************************************************************/
function dlgVoieInitSelectVoie() {
    // Récupération de la catégorie de voie
    let varCategorieVoie = globalHtmlItemZoneVoie.getAttribute("data-categ-voie");

    if (varCategorieVoie === "peuple") {
        initSelectVoiesPeuple();
    }
    else if (varCategorieVoie === "profil") {
        initSelectVoiesProfil();
    }
}

/*****************************************************************
 * Cette fonction remplie la liste de choix de la voie
 * du peuple en récupérant les voies autorisées pour le peuple
 * sélectionné et les voies autorisées pour la famille selectionnée.
 ******************************************************************/
function initSelectVoiesPeuple() {
    let tabVoies = [];
    let peupleCourant = document.getElementById("SEL_PEUPLE").value;
    let varObjPeupleCourant = undefined;
    let tabToutesVoiesPeuple = searchObjectById(dataVoies.groupesVoies, "PEUPLES").voies;

    // Récupération de la liste de choix de le voie
    let varSelectVoie = document.getElementById("DLGVOIE_SEL_VOIE");

    // On récupère la valeur actuellement affichée
    let varOldIdVoie = encodeURIComponent(globalHtmlItemZoneVoie.getElementsByClassName("txtIdGroupeVoie")[0].value) + ";" + encodeURIComponent(globalHtmlItemZoneVoie.getElementsByClassName("txtIdVoie")[0].value);

    // Vidange de la liste des voies de peuple
    while (varSelectVoie.options.length > 0) {
        varSelectVoie.remove(0);
    }

    // Récupération des voies du peuple actuellement sélectionné
    if (peupleCourant !== "") {
        // Récupération de l'objet du peuple courant
        varObjPeupleCourant = searchObjectById(dataPeuples.peuples, peupleCourant);
        if (varObjPeupleCourant === undefined) {
            console.error("Le peuple " + peupleCourant + " n'existe pas.");
            return;
        }
    }

    // Récupération du groupe de voie du peuple courant
    let varGroupePeupleCourant = varObjPeupleCourant.groupe_voies;

    // Récupération de la liste des voies autorisées pour le peuple courant
    let tabIdVoiesDuPeuple = varObjPeupleCourant.voies;
    if (tabIdVoiesDuPeuple.length > 0) {
        for (let varIdVoie of tabIdVoiesDuPeuple) {
            let varVoie = searchObjectById(tabToutesVoiesPeuple, varIdVoie);
            if (varVoie !== null) {
                tabVoies.push(varVoie);
            }
        }
    }

    // Remplissage de la liste des voies du peuple.
    for (let varVoie of tabVoies) {
        let option = document.createElement('option');
        option.text = varVoie.nom;
        option.value = encodeURIComponent(varGroupePeupleCourant) + ";" + encodeURIComponent(varVoie.id);
        if (varOldIdVoie === option.value)
            option.selected = true;
        varSelectVoie.add(option);
    }

    // S'il n'y a qu'une option, on désactive la liste
    if (varSelectVoie.length === 1) {
        varSelectVoie.disabled = true;
    } else {
        varSelectVoie.disabled = false;
    }
}

/*******************************************************************************
 * Rempli les listes de sélection des voies pour les profils. Si la liste
 * ne contient qu'une valeur, elle est desactivée.
 *******************************************************************************/
function initSelectVoiesProfil() {
    // Récupération du profil actuellement sélectionné
    let varIdProfilCourant = document.getElementById("SEL_PROFIL").value;

    // Récupération de la liste de choix de le voie
    let varSelectVoie = document.getElementById("DLGVOIE_SEL_VOIE");

    // On récupère la valeur actuellement affichée
    let varOldIdVoie = encodeURIComponent(globalHtmlItemZoneVoie.getElementsByClassName("txtIdGroupeVoie")[0].value) + ";" + encodeURIComponent(globalHtmlItemZoneVoie.getElementsByClassName("txtIdVoie")[0].value);

    // Récupération du type de voie
    let varStrTypeVoie = document.getElementById("DLGVOIE_SEL_TYPE_VOIE").value;

    // On commence par vider la liste
    varSelectVoie.innerText = "";
    if (varStrTypeVoie === "STANDARD") {
        // Récupération du numéro de la voie de profil
        let varIntNumVoieProfil = Number(globalHtmlItemZoneVoie.getAttribute("data-num-voie-profil"));

        // On ajoute le profil comme voie
        let varObjGroupeVoie = searchObjectById(dataVoies.groupesVoies, varIdProfilCourant);
        if (varObjGroupeVoie !== null) {
            let varVoie = varObjGroupeVoie.voies[varIntNumVoieProfil - 1];
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
                            if (varOption.value === varOldIdVoie)
                                varOption.selected = true;
                            varSelectVoie.add(varOption);
                        }
                    } else {
                        console.warn("Le détail des voies du profil \"" + varProfil.id + "\" n'a pas été trouvé.");
                    }
                }
            }
        }
    }

    // S'il n'y a qu'une option, on désactive la liste
    if (varSelectVoie.length === 1) {
        varSelectVoie.disabled = true;
    } else {
        varSelectVoie.disabled = false;
    }
}

/*******************************************************************************
 * Défini les champs à afficher en fonction du type de voie sélectionné.
 *******************************************************************************/
function dlgVoieGereAffichage() {
    let selTypeVoie = document.getElementById("DLGVOIE_SEL_TYPE_VOIE");
    let txtNomVoie = document.getElementById("DLGVOIE_TXT_NOM");
    let selVoie = document.getElementById("DLGVOIE_SEL_VOIE");

    if (selTypeVoie.value === "PERSO") {
        // Affichage du texte de la voir       
        txtNomVoie.style.display = "inline";

        // Effacement de la liste de selection de la voie
        selVoie.style.display = "none";
    } else {
        // Effacement du texte de la voie
        txtNomVoie.style.display = "none";

        // Remplissage de la liste des voies
        dlgVoieInitSelectVoie();

        // Affichage de la liste de selection de la voie
        selVoie.style.display = "inline";
    }
}