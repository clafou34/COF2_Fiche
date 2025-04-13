
function ficheToObject() {
    const objPersonnage = new Object();
    
    objPersonnage.nom = document.getElementById("TXT_NOM").value;
    
    // Zone de la personnalité
    objPersonnage.idPeuple = document.getElementById("SEL_PEUPLE").value;
    objPersonnage.niveau = document.getElementById("SEL_PEUPLE").value;
    objPersonnage.idFamille = document.getElementById("SEL_FAMILLE").value;
    objPersonnage.idProfil = document.getElementById("SEL_PROFIL").value;
    objPersonnage.idealHeroique = document.getElementById("TXT_IDEAL").value;
    objPersonnage.travers = document.getElementById("TXT_TRAVERS").value;
    objPersonnage.description = document.getElementById("TXT_DESCRIPTION").value;
    
    // Zone des caractéristiques
    objPersonnage.AGI = document.getElementById("SEL_AGI").value;
    objPersonnage.noteAGI = document.getElementById("TXT_NOTE_AGI").value;
    objPersonnage.CON = document.getElementById("SEL_CON").value;
    objPersonnage.noteCON = document.getElementById("TXT_NOTE_CON").value;
    objPersonnage.FOR = document.getElementById("SEL_FOR").value;
    objPersonnage.noteFOR = document.getElementById("TXT_NOTE_FOR").value;
    objPersonnage.PER = document.getElementById("SEL_PER").value;
    objPersonnage.notePER = document.getElementById("TXT_NOTE_PER").value;
    objPersonnage.CHA = document.getElementById("SEL_CHA").value;
    objPersonnage.noteCHA = document.getElementById("TXT_NOTE_CHA").value;
    objPersonnage.INT = document.getElementById("SEL_INT").value;
    objPersonnage.noteINT = document.getElementById("TXT_NOTE_INT").value;
    objPersonnage.VOL = document.getElementById("SEL_VOL").value;
    objPersonnage.noteVOL = document.getElementById("TXT_NOTE_VOL").value;
    
    // Initiative
    objPersonnage.initiative = document.getElementById("TXT_INITIATIVE").value;
    
    // Vigueur
    objPersonnage.vigueurUtilisee = document.getElementById("TXT_PTS_VIGUEUR_UTILISES").value;
    objPersonnage.vigueurMax = document.getElementById("TXT_PTS_VIGUEUR_MAX").value;
    
    // Défense
    objPersonnage.defenseAutre= document.getElementById("TXT_DEF_AUTRE").value;
    
    console.log(JSON.stringify(objPersonnage, null, 2));
}