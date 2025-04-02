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
    document.getElementById("dlgVoieOK").addEventListener('click', dlgVoieBtnOkOnClick);
}

/*******************************************************************************
 * Affichage de la boite de dialogue de la voie dont la zone est passée en 
 * paramètre.
 * @param {type} parHtmlItemZoneVoie Item contant la zone de la voie (fieldset)
 *******************************************************************************/
function dlgVoieOuverture(parHtmlItemZoneVoie) {
    // Sauvegarde de la zone de voie à traiter
    globalHtmlItemZoneVoie = parHtmlItemZoneVoie;
    
    // Initialisation de la liste des types de voie
    dlgVoieInitSelectTypeVoie();
    
    // Affichage de la fenêtre
    dlgVoie.showModal();
}

/*******************************************************************************
 * Evènement de click sur le bouton de validation ("OK") de la boite de dialogue.
 *******************************************************************************/
function dlgVoieBtnOkOnClick() {
    dlgVoieValidation();
}

/*******************************************************************************
 * Gestion de la validation de la modification.
 ********************************************************************************/
function dlgVoieValidation() {
    dlgVoie.close();
}

/*******************************************************************************
 * Evenement de click sur le bouton de fermeture de la boite de dialogue.
 *******************************************************************************/
function dlgVoieBtnCloseOnClick () {
    dlgVoie.close();
}

/*******************************************************************************
 * Initialise la liste des types de voies en tenant compte de la catégorie
 * de la zone de voie.
 *******************************************************************************/
function dlgVoieInitSelectTypeVoie() {
    // Récupération de la catégorie de voie
    let varCategorieVoie = globalHtmlItemZoneVoie.getAttribute("data-categ-voie");
    
    if(varCategorieVoie==="peuple") {
        dlgVoieInitSelectTypeVoiePeuple();
    }
}

/*******************************************************************************
 * Initialise la liste des type de voies du peuple en y ajoutant les voies
 * de la famille (si elle en a).
 *******************************************************************************/
function dlgVoieInitSelectTypeVoiePeuple() {
    let selTypeVoiePeuple = document.getElementById("DLGVOIE_SEL_TYPE_VOIE");
    let idFamilleCourante = document.getElementById("SEL_FAMILLE").value;
    let tabToutesVoiesPeuple = searchObjectById(dataVoies.groupesVoies, "PEUPLES").voies;
    
    // Vidange de la liste des types de voies du peuple
    selTypeVoiePeuple.innerHTML = "";


    // On rajoute les types standards
    let option = document.createElement('option');
    option.value = "STANDARD";
    option.text = "Peuple";
    selTypeVoiePeuple.add(option);
    option = document.createElement('option');
    option.value = "PERSO";
    option.text = "Personnalisée";
    selTypeVoiePeuple.add(option);
    
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
                    selTypeVoiePeuple.add(option);
                }
            }
        }
    }
    
    // On se positionne sur le type de voie actuel
    selTypeVoiePeuple.value = globalHtmlItemZoneVoie.getElementsByClassName("txtIdTypeVoie")[0].value
}

/*****************************************************************
 * Cette fonction remplie la liste de choix de la voie
 * du peuple en récupérant les voies autorisées pour le peuple
 * sélectionné et les voies autorisées pour la famille selectionnée.
 * @param {item} parZoneVoie Item contenant zone de voie dont
 *                              la liste de choix (SELECT) des voies.
 ******************************************************************/
function initSelectVoiesPeuple(parZoneVoie) {
    let tabVoies = [];
    let peupleCourant = document.getElementById("SEL_PEUPLE").value;
    let tabToutesVoiesPeuple = searchObjectById(dataVoies.groupesVoies, "PEUPLES").voies;

    // Récupération de la liste de choix de le voie
    let varSelectVoie = parZoneVoie.getElementsByClassName("selectVoie")[0];

    // On récupère l'ancienne valeur pour la sélectionner après rééinitialisation
    let varOldIdVoie = varSelectVoie.value;

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
        if (varOldIdVoie === varVoie.id)
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