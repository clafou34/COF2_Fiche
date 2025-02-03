/**************************************************************************
 *
 *  Ce fichier contient les capacité des voies. Les voies sont regroupées
 *  en groupes correspondant aux peuples ou aux profils.
 *
 **************************************************************************/
let dataVoies = {
  "groupesVoies" : [

          /** Pattern d'une voie
          {
          "id" : "",
          "nom" : "", // Nom de la voie sans le "Voie de ..."
          "capacite_1" : {
            "nom" : "",
            "description" : "",
            },
          "capacite_2" : {
            "nom" : "",
            "description" : "",
            },
          "capacite_3" : {
            "nom" : "",
            "description" : "",
            },
          "capacite_4" : {
            "nom" : "",
            "description" : "",
            },
          "capacite_5" : {
            "nom" : "",
            "description" : "",
            }
          },
           **/
/***************************************************************************
 Voies des peuples
 ****************************************************************************/
    {
      "id": "VOIES_PEUPLES",
      "voies": [
        {
          "id": "DEMI_ORC",
          "nom": "DEMI‐ORC",
          "capacite_1": {
            "nom": "Impressionnant",
            "description": "Le demi‐orc gagne un bonus de +3 à tous les tests d’intimidation. De plus, dans" +
              " le noir total, le demi‐orc voit comme dans la pénombre jusqu’à 30 m.",
          },
          "capacite_2": {
            "nom": "Talent pour la violence",
            "description": "Le joueur choisit une capacité de rang 1 de n’importe quelle voie de barbare ou" +
              " de guerrier.",
          },
          "capacite_3": {
            "nom": "Critique brutal",
            "description": "Le demi‐orc augmente de 1 point la zone de critique sur une attaque au contact" +
              " (19‐20 au d20) et ajoute +1d4° aux DM en cas de critique.",
          },
          "capacite_4": {
            "nom": "Attaque sanglante (L)",
            "description": "Le demi‐orc réalise une attaque de contact qui provoque une hémorragie. En plus" +
              " des DM normaux, l’attaque produit un saignement qui inflige à la victime 1d4° DM à chaque" +
              " round suivant jusqu’à ce que la cible soit soignée (tout effet de soins ou une action limitée" +
              " utilisée à cet effet). On ne peut pas cumuler plusieurs effets de saignement.",
          },
          "capacite_5": {
            "nom": "Colosse",
            "description": "Le demi‐orc augmente ses valeurs de FOR et de CON de +1.",
          }
        },

        {
          "id": "ELFE_HAUT",
          "nom": "ELFE HAUT",
          "capacite_1": {
            "nom": "Lumière intérieure",
            "description": "Pour un elfe, l’obscurité de la nuit sous la lumière des étoiles est considérée" +
              " comme de la pénombre. De plus, il gagne un bonus de +3 à tous les tests d’érudition (INT) et" +
              " artistiques (CHA).",
          },
          "capacite_2": {
            "nom": "Force d’âme",
            "description": "L’elfe est immunisé à la peur et au sommeil magique. De plus, il obtient un bonus" +
              " égal à son rang lorsqu’il doit faire un test opposé d’attaque magique pour résister à un sort.",
          },
          "capacite_3": {
            "nom": "Talent pour la magie",
            "description": "Le joueur choisit une capacité de rang 1 de n’importe quelle voie de magicien" +
              " ou d’ensorceleur. Il peut utiliser cette capacité en armure sans pénalité (mais pas une" +
              " capacité qui offre un bonus de DEF). À la place, il peut choisir une capacité de rang 2," +
              " mais ne doit alors pas porter d’armure pour lancer le sort.",
          },
          "capacite_4": {
            "nom": "Immortel",
            "description": "L’elfe n’a besoin que de la moitié du repos, de la nourriture ou de la boisson" +
              " d’un humain normal pour être en pleine forme. Il est immunisé aux effets des poisons" +
              " et des maladies.",
          },
          "capacite_5": {
            "nom": "Supériorité elfique",
            "description": "L’elfe augmente sa valeur de VOL de +1 et sa valeur d’INT ou de CHA de +1.",
          }
        },

        {
          "id": "ELFE_SYLVAIN",
          "nom": "ELFE SYLVAIN", // Nom de la voie sans le "Voie de ..."
          "capacite_1": {
            "nom": "Lumière des étoiles",
            "description": "Pour un elfe sylvain, l’obscurité de la nuit sous la lumière des étoiles est" +
              " considérée comme de la pénombre. De plus, l’elfe gagne un bonus de +3 à tous les tests" +
              " de survie en forêt (escalade, discrétion, chasse, etc.).",
          },
          "capacite_2": {
            "nom": "Enfant de la forêt",
            "description": "Le joueur choisit une capacité de rang 1 de n’importe quelle voie de druide" +
              " ou de rôdeur. Il peut utiliser cette capacité en armure jusqu’à l’armure de cuir renforcé" +
              " sans pénalité.",
          },
          "capacite_3": {
            "nom": "Archer émérite",
            "description": "L’elfe augmente de 1 la zone de critique lors qu’il utilise un arc (19‐20 au d20)" +
              " et ajoute +1d4° aux DM en cas de critique. Il sait utiliser les arcs courts, quel que soit" +
              " son profil.",
          },
          "capacite_4": {
            "nom": "Flèche sanglante (L)",
            "description": "L’elfe fait une attaque à distance qui provoque une hémorragie. En plus des" +
              " DM normaux, la flèche produit un effet de saignement qui inflige à la victime 1d4° DM à" +
              " chaque round suivant jusqu’à ce que la cible soit soignée (tout effet de soins ou une" +
              " action limitée utilisée à cet effet). On ne peut cumuler plusieurs effets de saignement.",
          },
          "capacite_5": {
            "nom": "Supériorité elfique",
            "description": "L’elfe augmente ses valeurs d’AGI et PER de +1.",
          }
        },

        {
          "id": "GNOME",
          "nom": "GNOME", // Nom de la voie sans le "Voie de ..."
          "capacite_1": {
            "nom": "Don étrange",
            "description": "Le gnome possède un talent inné pour les sciences, qu’elles soient occultes ou" +
              " plus ordinaires. Il gagne un bonus de +3 à tous les tests scientifiques (INT) et il choisit" +
              " une capacité de rang 1 d’ensorceleur. S’il porte une armure, il ne peut pas utiliser ce sort" +
              " plus d’une fois par jour (il doit payer le coût en PM de façon normale). Dans le noir total," +
              " le gnome voit comme dans la pénombre jusqu’à 10 m.",
          },
          "capacite_2": {
            "nom": "Petit pote",
            "description": "Le gnome est un compagnon sympathique et difficile à considérer comme dangereux" +
              " ou malintentionné. Il gagne +3 à tous les tests d’interaction sociale sauf pour intimider." +
              " Il gagne aussi 1 point de chance.",
          },
          "capacite_3": {
            "nom": "Insignifiant",
            "description": "Le gnome sait comment échapper aux attaques des grandes créatures comme les" +
              " géants. Il gagne un bonus de +2 en DEF contre les créatures de taille grande ou supérieure." +
              " Ce bonus passe à +3 au rang 5.",
          },
          "capacite_4": {
            "nom": "Merveille technologique",
            "description": "Le gnome sait utiliser les arbalètes (et les armes à poudre si votre MJ autorise" +
              " leur usage), quel que soit son profil. Il ajoute son AGI aux DM qu’il inflige avec ces armes.",
          },
          "capacite_5": {
            "nom": "Bonne nature",
            "description": "Le gnome augmente ses valeurs de CON et de CHA de +1.",
          }
        },

        {
          "id": "HALFELIN",
          "nom": "HALFELIN", // Nom de la voie sans le "Voie de ..."
          "capacite_1": {
            "nom": "Petite taille",
            "description": "Le halfelin obtient un bonus de +1 en DEF et de +3 à tous les tests de discrétion" +
              " ainsi qu’à tous les tests effectués pour subtiliser quelque chose (pickpocket, vol à l’étalage," +
              " etc.). En revanche, un halfelin ne peut pas utiliser à une main une arme dont les DM dépassent" +
              " 1d6 (épée courte, masse, etc., mais pas rapière). Il lui faut utiliser les deux mains pour les" +
              " armes qui infligent 1d8 à 1d10 de DM (épée longue) et il lui est interdit d’utiliser les armes" +
              " qui infligent plus de 1d10 DM. Il ne peut pas utiliser d’arc long ni d’arbalète lourde.",
          },
          "capacite_2": {
            "nom": "Résistance légendaire",
            "description": "Le halfelin obtient un bonus égal à son rang à tous les tests opposés d’attaque" +
              " magique effectués pour résister à un sort.",
          },
          "capacite_3": {
            "nom": "Bon pour le moral",
            "description": "Un halfelin qui mange bien est un halfelin heureux. À chaque repas (jusqu’à 4" +
              " fois par jour, espacés d’au moins 3 h) au cours duquel le personnage boit et mange des mets" +
              " de qualité et en quantité, il récupère 1d4° PV.",
          },
          "capacite_4": {
            "nom": "Petit veinard",
            "description": "Le halfelin gagne 1 PC supplémentaire. De plus, il peut esquiver une attaque de" +
              " son choix par combat (avant d’avoir pris connaissance des DM, mais pas un critique).",
          },
          "capacite_5": {
            "nom": "Vif et bien nourri",
            "description": "Le halfelin augmente ses valeurs d’AGI et de CON de +1.",
          }
        },

        {
          "id": "HUMAIN",
          "nom": "HUMAIN", // Nom de la voie sans le "Voie de ..."
          "capacite_1": {
            "nom": "Diversité",
            "description": "Un humain obtient un bonus de +3 aux tests de deux domaines associés à son origine" +
              " géographique ou sociale (Montagnard ==> escalade et résistance au froid; Citadin ==> commerce et" +
              " résistance aux maladie; Campagnard ==> météorologie et équitation; Riverain ==> natation et navigation" +
              " Sauvage ==> chasser et pister; Nomade ==> orientation et résistance à la chaleur ou au froid)." +
              " Remarque : Le MJ peut proposer d'autres origines. De plus, il gagne 1 PC supplémentaire. ",
          },
          "capacite_2": {
            "nom": "Instinct de survie",
            "description": "Une fois par combat, lorsqu’une attaque devrait amener l’humain à 0 PV, les DM qu’elle" +
              " inflige sont divisés par 2 (minimum 1). Après avoir bénéficié de cette capacité, l’humain gagne" +
              " pour le reste du combat un bonus de +2 en DEF.",
          },
          "capacite_3": {
            "nom": "Touche‐à‐tout",
            "description": "Le personnage obtient une capacité de rang 1 ou 2 de n’importe quel profil au choix du" +
              " joueur. Si la capacité est de rang 2 ou accorde un bonus de DEF, il doit respecter les limitations" +
              " d’armure.",
          },
          "capacite_4": {
            "nom": "Loup parmi les loups",
            "description": "Une fois par round, l’humain gagne +1d4° aux DM qu’il inflige lorsqu’il combat un" +
              " adversaire humanoïde de taille moyenne. Ce bonus ne s’applique qu’aux DM initiaux d’une attaque," +
              " pas aux DM sur la durée.",
          },
          "capacite_5": {
            "nom": "Polyvalence",
            "description": "Le personnage augmente sa caractéristique la plus faible de +1 et sa Volonté de +1.",
          }
        },

        {
          "id": "NAIN",
          "nom": "NAIN", // Nom de la voie sans le "Voie de ..."
          "capacite_1": {
            "nom": "Habitant des tunnels",
            "description": "Dans le noir total, le nain voit comme dans la pénombre jusqu’à 30 m. De plus," +
              " il obtient un bonus de +3 à tous les tests en rapport avec la pierre, l’architecture ou" +
              " les mines ainsi qu’avec les passages secrets et les pièges dans les murs et les parois rocheuses.",
          },
          "capacite_2": {
            "nom": "Haches et marteaux",
            "description": "Le nain gagne un bonus de +1 en attaque et aux DM lorsqu’il utilise une hache ou" +
              " un marteau de guerre. Il sait utiliser ces armes, quel que soit son profil.",
          },
          "capacite_3": {
            "nom": "Résistance à la magie",
            "description": "Une fois par jour, le nain peut choisir d’ignorer les effets d’un sort qui le prend" +
              " pour cible (mais pas un sort de zone). Les créatures dont le niveau (NC) est au moins égal au" +
              " double du nain ignorent cette capacité.",
          },
          "capacite_4": {
            "nom": "Fils du roc",
            "description": "Le nain réduit tous les DM subis de 2 points (mais il subit toujours au moins 1 DM" +
              " par attaque reçue). La réduction passe à 3 au niveau 10. Elle est cumulable avec d’autres sources" +
              " de réduction des DM comme la peau d’acier du barbare.",
          },
          "capacite_5": {
            "nom": "Ténacité",
            "description": "Le nain augmente ses valeurs de CON et de VOL de +1.",
          }
        },

        {
          "id": "MAGE",
          "nom": "MAGE", // Nom de la voie sans le "Voie de ..."
          "capacite_1": {
            "nom": "Occultisme",
            "description": "Le mage conserve sa capacité de peuple de rang 1. De plus, il ajoute son rang + 2" +
              " aux tests de connaissance et d’érudition en rapport avec la magie.",
          },
          "capacite_2": {
            "nom": "Maîtrise de la magie (L)*",
            "description": "Le mage peut détecter la présence de magie (y compris la présence d’objets magiques)" +
              " dans un rayon de 10 m. Un test d’INT difficulté [10 + rang du sort] permet de déterminer la" +
              " fonction générale de l’enchantement. Il peut aussi tenter de dissiper un sort non permanent" +
              " d’un rang maximal égal à ceux qu’il est capable de lancer en emportant un test opposé d’attaque" +
              " magique contre l’auteur du sort.",
          },
          "capacite_3": {
            "nom": "Tour de magie (G)*",
            "description": "Le mage peut réaliser un tour de magie (portée 10 m) par round en action gratuite" +
              " sans dépenser aucun PM. Par exemple, fermer une porte à distance, éteindre ou allumer une" +
              " bougie en claquant des doigts. Il ne peut réaliser aucune action qui nécessite une valeur" +
              " de caractéristique supérieure à 0 (par exemple, s’il faut au moins +1 ou un test de FOR pour" +
              " pousser une porte lourde, ce sort ne permet pas de la fermer). Cette capacité ne peut produire" +
              " aucun DM direct. De plus, le mage gagne +1 en DEF et +2 PM (en plus de celui gagné avec cette" +
              " capacité ; au total, en apprenant ce sort, le mage acquiert donc 3 PM d’un coup).",
          },
          "capacite_4": {
            "nom": "Esprit supérieur",
            "description": "Le mage augmente son INT et sa VOL de +1. Désormais, il obtient un dé bonus aux" +
              " tests d’INT.",
          },
          "capacite_5": {
            "nom": "Tempête de mana",
            "description": "Lorsqu’il lance un sort, le mage peut augmenter les DM de +1d4° (en cas de DM sur" +
              " la durée, une seule fois) en payant +1 PM pour un sort à cible unique ou +3 PM pour un sort" +
              " de zone (Explosion de feu, Foudre, etc.).",
          }
        }
      ]
    }


  ]
}
