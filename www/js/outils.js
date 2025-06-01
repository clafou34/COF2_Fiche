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

