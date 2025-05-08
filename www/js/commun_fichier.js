/* 
 * Script permettant de gérer un fichier (avec ses données et ses metadonnées)
 * 
 * Les méta données d'un fichier sont représentées par un objet ayant la structure suivante :
 *  {
 *      "identifiant": "______",
 *      "nom": "_______",
 *      "dateModif": "jj/mm/aaaa hh:mm:ss",
 *      "dateCreat": "jj/mm/aaaa hh:mm:ss"
 *  }
 *  
 *  Les metadonnées de tous les fichiers sont stockées dans un tableau sérialisé
 *  et persisté dans la variable "COF2_fichiers" du localstorage.
 *  
 *  Chaque données d'un fichier est stocké dans une variable du localstorage dont
 *  le nom est "COF2_fichier_[identifiant du fichier]".
 */

/*******************************************************************************************
 * Retourne une chaine de 23 caractères qui peut être considérée comme un identifant unique.
 * @returns {String} Identifiant unique.
 *******************************************************************************************/
function fichier_getNewID() {
    const varDateMaintenant = new Date();
    
    let varId = String(varDateMaintenant.getFullYear()) 
            + String(varDateMaintenant.getMonth()).padStart(2,"0")
            + String(varDateMaintenant.getDate()).padStart(2,"0")
            + "_" + String(varDateMaintenant.getHours()).padStart(2,"0")
            + String(varDateMaintenant.getMinutes()).padStart(2,"0")
            + String(varDateMaintenant.getSeconds()).padStart(2,"0")
            + "." + String(varDateMaintenant.getMilliseconds()).padStart(3,"0")
            + "_" + String(Math.floor(Math.random() * 1000)).padStart(3,"0");
    
    return varId;
}

/*******************************************************************************
 * Retourne l'heure courante au format "dd/mm/yyyy hh:mm:ss" dans une chaine de
 * caractères.
 * @returns {String} Heure courante
 *******************************************************************************/
function fichier_getTempsCourant() {
    const varDateMaintenant = new Date();
    
    let varCurDate = String(
            String(varDateMaintenant.getDate()).padStart(2,"0")
            + "/" + String(varDateMaintenant.getMonth()).padStart(2,"0")
            + "/" + String(varDateMaintenant.getFullYear())
            + " " + String(varDateMaintenant.getHours()).padStart(2,"0")
            + ":" + String(varDateMaintenant.getMinutes()).padStart(2,"0")
            + ":" + String(varDateMaintenant.getSeconds()).padStart(2,"0"));
    
    return varCurDate;
}

/*******************************************************************************
 * Créé un fichier avec le nom passé en paramètre. Si aucun nom n'est passé
 * en paramètre, un nom par défaut est affecté à partir d'un timestamp.
 * @param {string} parNomFichier Nom du fichier (peut être vide au null)
 * @returns {string} Chaine de caractère représentant l'identifiant du fichier.
 *******************************************************************************/
function fichier_creer(parNomFichier) {
    let varHeure = fichier_getTempsCourant();
    let varIdFichier = fichier_getNewID();
    let varNomFichier = "";

    let varTabMetaFichier = [];
    try {
        varTabMetaFichier = JSON.parse(localStorage.getItem("COF2_fichiers"));
    }
    catch(err) {
        varTabMetaFichier = [];
    }
    
    
    if(parNomFichier === null)
        varNomFichier = varIdFichier;
    else if (parNomFichier === "") 
        varNomFichier = varIdFichier;
    else
        varNomFichier = parNomFichier;
    
    let varObjMetaFichier = {
        identifiant:varIdFichier,
        nom:varNomFichier,
        dateModif:varHeure,
        dateCreat:varHeure};
    
    varTabMetaFichier.push(varObjMetaFichier);
    
    localStorage.setItem("COF2_fichiers",JSON.stringify(varTabMetaFichier));
}


/********************************************************************************
 * Récupère les méta données du fichier dont l'identifiant est passé en paramètre.
 * @param {string} parIdFichier Identifiant du fichier pour lequel il faut récupérer
 * les métas données.
 * @returns {object} Objet représentant les méta données du fichier.
 *******************************************************************************/
function fichier_getMeta(parIdFichier) {
    
}

/*******************************************************************************
 * Modifie le nom du fichier dont l'identifiant est passé en paramètre.
 * @param {string} parIdFichier Identifiant du fichier pour lequel on modifie le nom.
 * @param {string} parStrNom Nouveau nom du fichier
 * @returns {boolean} True si la mise à jour s'est bien passée, sinon False.
 *******************************************************************************/
function fichier_setNom(parIdFichier, parStrNom) {
    
}

/*******************************************************************************
 * Récupère les données du fichier dont l'identifiant est passé en paramètre. 
 * Les données sont représentées dans une chaine de caractères.
 * @param {string} parIdFichier Identifiant du fichier pour lequel on veut
 * récupérer les données.
 * @returns {string} Chaine de caractères représentant les données
 *******************************************************************************/
function fichier_getDonnees(parIdFichier) {
    
}

/*******************************************************************************
 * Stocke les données passées en paramètre dans le fichier dont l'identifiant est
 * fourni.
 * @param {string} parIdFichier Fichier pour lequel les données sont à modifier.
 * @param {string} parStrDonnees Contenu des données à stocker.
 * @returns {boolean} True si la mise à jour s'est bien passée, sinon False.
 *******************************************************************************/
function fichier_setDonnees(parIdFichier, parStrDonnees) {
    
}

/*******************************************************************************
 * Supprime le fichier dont l'identifiant est passé en parmaètre.
 * @param {string} parIdFichier Identifiant du fichier à supprimer.
 * @returns {boolean} True si la suppression s'est bien passée et False sinon.
 *******************************************************************************/
function fichier_delete(parIdFichier) {
    
    // Récupération du tableau des fichiers.
    let varTabMetaFichier = [];
    try {
        varTabMetaFichier = JSON.parse(localStorage.getItem("COF2_fichiers"));
    }
    catch(err) {
        varTabMetaFichier = [];
    }
    
    // Recherche de l'élément à supprimer
    let elementTrouve=false;
    let indexElement=0;
    for(let varObjFichier of varTabMetaFichier) {
        console.log("#" + varObjFichier.identifiant + "##" + parIdFichier + "#");
        if(varObjFichier.identifiant===parIdFichier) {
            elementTrouve=true;
            break;
        }
        indexElement++;
    }
    
    // Si l'élément à supprimer a été trouvé, on le supprime
    if(elementTrouve) {
        varTabMetaFichier.splice(indexElement,1);
        
        // Sauvegarde du tableau du fichier
        localStorage.setItem("COF2_fichiers",JSON.stringify(varTabMetaFichier));
        
        //Suppression des données
        sessionStorage.removeItem("COF2_fichier_" + parIdFichier);
    }
    else {
        console.warn("Le fichier " + parIdFichier + " n'a pas pu être supprimé, car il n'existe pas dans le tableau des fichiers.");
    }
    
    
}

/*******************************************************************************
 * Retourne la liste des fichiers dans un tableau dont chaque case est un objet
 * contenant les metadonnées d'un fichier.
 * @returns {array of metadonnées} Tableau des métadonnées des fichiers.
 *******************************************************************************/
function fichier_list() {
    let varTabMetaFichier = [];

    try {
        varTabMetaFichier = JSON.parse(localStorage.getItem("COF2_fichiers"));
    }
    catch(err) {
        varTabMetaFichier = [];
    }

    
    return varTabMetaFichier;
}