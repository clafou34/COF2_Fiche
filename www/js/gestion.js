
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
    let varIdFichier = fichier_creer("");

    gestionOuvrirFiche(varIdFichier);
}

/*******************************************************************************
 * Affichage de la liste à partir du contenu du tableau des fichiers.
 *******************************************************************************/
function gestionChargeListe() {
    let varTabFichiers = fichier_list();
    let varTableBody = document.querySelector("#FICHIERS > tbody");
    let varContenuListe = document.getElementById("CONTENU_LISTE");
    let varMessageVide = document.getElementById("MSG_VIDE");

    // On vide la table
    varTableBody.innerHTML = "";

    if (varTabFichiers.length > 0) {
        for (let varFichier of varTabFichiers) {
            var row = varTableBody.insertRow(0);
            // Ajout de la première colonne
            cell1 = row.insertCell(0);
            lien1 = document.createElement("A");
            lien1.innerText = varFichier.nom;
            lien1.title = "Ouvrir la fiche";
            lien1.href = "#";
            lien1.classList.add("lienOuvrir");
            lien1.addEventListener('click', function (e) {
                gestionBtnOpenOnClick(varFichier.identifiant);
                e.stopPropagation();
            });
            div1 = document.createElement("div");
            div1.innerText = "Modif : " + varFichier.dateModif;
            cell1.addEventListener('click', function (e) {
                gestionBtnOpenOnClick(varFichier.identifiant);
                e.stopPropagation();
            });
            cell1.appendChild(lien1);
            cell1.appendChild(div1);


            // Ajout de la 2ème colonne
            cell2 = row.insertCell(1);
            btnSuppr = document.createElement("BUTTON");
            btnSuppr.classList.add("btnSuppr");
            btnSuppr.title = "Suppression de la fiche";
            btnSuppr.addEventListener('click', function (e) {
                gestionBtnDeleteOnClick(varFichier.identifiant);
                e.stopPropagation();
            });
            cell2.addEventListener('click', function (e) {
                gestionBtnDeleteOnClick(varFichier.identifiant);
                e.stopPropagation();
            });
            cell2.appendChild(btnSuppr);
        }
        
        varContenuListe.style.display = "block";
        varMessageVide.style.display = "none";
    }
    else {
            varContenuListe.style.display = "none";
            varMessageVide.style.display = "block";
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

/*******************************************************************************
 * Gestion de l'événement de click sur une fiche de la liste.
 * @param {string} parIdFichier Identifiant de la fiche sur laquelle le click a
 * eu lieu.
 *******************************************************************************/
function gestionBtnOpenOnClick(parIdFichier) {
    gestionOuvrirFiche(parIdFichier);
}


/*******************************************************************************
 * Ouvre la fiche de personnage avec les données du fichier dont l'identifiant
 * est passé en paramètre. Le nom du fichier à ouvrir est positionné dans la variable
 * "fiche_courante" du sessionStorage.
 * @param {string} parIdFichier Identifiant du fichier pour lequel il faut
 * ouvrir la fiche.
 *******************************************************************************/
function gestionOuvrirFiche(parIdFichier) {
    sessionStorage.setItem("fiche_courante", parIdFichier);
    window.location.href = "fiche.html";
}
