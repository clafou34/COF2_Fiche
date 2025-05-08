
function gestionInitEventListners() {
    document.getElementById("BTN_CREER").addEventListener('click', gestionBtnCreerOnClick);
}

function gestionBodyOnLoad() {
    gestionInitEventListners();

    gestionChargeListe();
}

/*******************************************************************************
 * Gestion de l'événement de click sur le bouton de création d'une fiche.
 *******************************************************************************/
function gestionBtnCreerOnClick() {
    fichier_creer("");

    gestionChargeListe();
}

/*******************************************************************************
 * Affichage de la liste à partir du contenu du tableau des fichiers.
 *******************************************************************************/
function gestionChargeListe() {
    let varTabFichiers = fichier_list();
    let varTableBody = document.querySelector("#LIST_FICHIER > tbody");

    // On vide la table
    varTableBody.innerHTML = "";

    for (let varFichier of varTabFichiers) {
        var row = varTableBody.insertRow(0);
        cell1 = row.insertCell(0);
        cell1.innerText = varFichier.nom;
        cell2 = row.insertCell(1);
        cell2.innerText = varFichier.dateModif;
        cell3 = row.insertCell(2);
        cell3.innerHTML = "<button class=\"btnSuppr\" type=\"button\" onclick=\"gestionBtnDeleteOnClick('" + varFichier.identifiant + "')\"></button>";
        console.log("#" + varFichier.identifiant + "#");
    }
}

/*******************************************************************************
 * Gestion de l'événement de click sur le bouton de suppression.
 * @param {string} parIdFichier Identifiant du fichier à supprimer.
 *******************************************************************************/
function gestionBtnDeleteOnClick(parIdFichier) {
    fichier_delete(parIdFichier);
    gestionChargeListe();
}