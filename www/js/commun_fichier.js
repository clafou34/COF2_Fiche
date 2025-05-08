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

/*******************************************************************************
 * Créé un fichier avec le nom passé en paramètre. Si aucun nom n'est passé
 * en paramètre, un nom par défaut est affecté à partir d'un timestamp.
 * @param {string} parNomFichier Nom du fichier (peut être vide au null)
 * @returns {string} Chaine de caractère représentant l'identifiant du fichier.
 *******************************************************************************/
function fichier_creer(parNomFichier) {
    const varDateMaintenant = new Date();
    
    console.log("fichier_creer : " + String(varDateMaintenant.getFullYear()) 
            + String(varDateMaintenant.getMonth()).padStart(2,"0")
            + String(varDateMaintenant.getDate()).padStart(2,"0")
            );
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
    
}

/*******************************************************************************
 * Retroune la liste des fichiers dans un tableau dont chaque case est un objet
 * contenant les metadonnées d'un fichier.
 * @returns {array of metadonnées}
 *******************************************************************************/
function fichier_list() {
    
}