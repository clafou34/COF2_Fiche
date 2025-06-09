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

/********************************************************************
 * Retourne la voie appartenant au groupe dont l'identifiant est passé en
 * paramètre (parIdGroupe) et dont l'identifiant de voie est parIdVoie.
 * @param {object} parIdVoie : Identifiant de la voie.
 * @param {object} parIdGroupe : Identifiant de groupe de voie.
 ********************************************************************/
function getVoieWithGroupe(parIdVoie, parIdGroupe) {
    // Recherche du groupe
    let varObjGroupe = searchObjectById(dataVoies.groupesVoies, parIdGroupe);
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