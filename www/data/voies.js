/**************************************************************************
 *
 *  Ce fichier contient les capacité des voies. Les voies sont regroupées
 *  en groupes correspondant aux peuples ou aux profils.
 *
 **************************************************************************/
let dataVoies = {
    "groupesVoies": [

        /** Pattern d'une voie
         {
         "id" : "",
         "nom" : "", // Nom de la voie sans le "Voie de ..."
         "capacite_1" : {
         "nom" : "",
         "description" : ""
         },
         "capacite_2" : {
         "nom" : "",
         "description" : ""
         },
         "capacite_3" : {
         "nom" : "",
         "description" : ""
         },
         "capacite_4" : {
         "nom" : "",
         "description" : ""
         },
         "capacite_5" : {
         "nom" : "",
         "description" : ""
         }
         },
         **/
        /***************************************************************************
         Voies des peuples
         ****************************************************************************/
        {
            "id": "PEUPLES",
            "voies": [
                {
                    "id": "DEMI_ORC",
                    "nom": "DEMI‐ORC",
                    "capacite_1": {
                        "nom": "Impressionnant",
                        "description": "Le demi‐orc gagne un bonus de +3 à tous les tests d’intimidation. De plus, dans" +
                                " le noir total, le demi‐orc voit comme dans la pénombre jusqu’à 30 m."
                    },
                    "capacite_2": {
                        "nom": "Talent pour la violence",
                        "description": "Le joueur choisit une capacité de rang 1 de n’importe quelle voie de barbare ou" +
                                " de guerrier."
                    },
                    "capacite_3": {
                        "nom": "Critique brutal",
                        "description": "Le demi‐orc augmente de 1 point la zone de critique sur une attaque au contact" +
                                " (19‐20 au d20) et ajoute +1d4° aux DM en cas de critique."
                    },
                    "capacite_4": {
                        "nom": "Attaque sanglante (L)",
                        "description": "Le demi‐orc réalise une attaque de contact qui provoque une hémorragie. En plus" +
                                " des DM normaux, l’attaque produit un saignement qui inflige à la victime 1d4° DM à chaque" +
                                " round suivant jusqu’à ce que la cible soit soignée (tout effet de soins ou une action limitée" +
                                " utilisée à cet effet). On ne peut pas cumuler plusieurs effets de saignement."
                    },
                    "capacite_5": {
                        "nom": "Colosse",
                        "description": "Le demi‐orc augmente ses valeurs de FOR et de CON de +1."
                    }
                },
                {
                    "id": "ELFE_HAUT",
                    "nom": "ELFE HAUT",
                    "capacite_1": {
                        "nom": "Lumière intérieure",
                        "description": "Pour un elfe, l’obscurité de la nuit sous la lumière des étoiles est considérée" +
                                " comme de la pénombre. De plus, il gagne un bonus de +3 à tous les tests d’érudition (INT) et" +
                                " artistiques (CHA)."
                    },
                    "capacite_2": {
                        "nom": "Force d’âme",
                        "description": "L’elfe est immunisé à la peur et au sommeil magique. De plus, il obtient un bonus" +
                                " égal à son rang lorsqu’il doit faire un test opposé d’attaque magique pour résister à un sort."
                    },
                    "capacite_3": {
                        "nom": "Talent pour la magie",
                        "description": "Le joueur choisit une capacité de rang 1 de n’importe quelle voie de magicien" +
                                " ou d’ensorceleur. Il peut utiliser cette capacité en armure sans pénalité (mais pas une" +
                                " capacité qui offre un bonus de DEF). À la place, il peut choisir une capacité de rang 2," +
                                " mais ne doit alors pas porter d’armure pour lancer le sort."
                    },
                    "capacite_4": {
                        "nom": "Immortel",
                        "description": "L’elfe n’a besoin que de la moitié du repos, de la nourriture ou de la boisson" +
                                " d’un humain normal pour être en pleine forme. Il est immunisé aux effets des poisons" +
                                " et des maladies."
                    },
                    "capacite_5": {
                        "nom": "Supériorité elfique",
                        "description": "L’elfe augmente sa valeur de VOL de +1 et sa valeur d’INT ou de CHA de +1."
                    }
                },
                {
                    "id": "ELFE_SYLVAIN",
                    "nom": "ELFE SYLVAIN",
                    "capacite_1": {
                        "nom": "Lumière des étoiles",
                        "description": "Pour un elfe sylvain, l’obscurité de la nuit sous la lumière des étoiles est" +
                                " considérée comme de la pénombre. De plus, l’elfe gagne un bonus de +3 à tous les tests" +
                                " de survie en forêt (escalade, discrétion, chasse, etc.)."
                    },
                    "capacite_2": {
                        "nom": "Enfant de la forêt",
                        "description": "Le joueur choisit une capacité de rang 1 de n’importe quelle voie de druide" +
                                " ou de rôdeur. Il peut utiliser cette capacité en armure jusqu’à l’armure de cuir renforcé" +
                                " sans pénalité."
                    },
                    "capacite_3": {
                        "nom": "Archer émérite",
                        "description": "L’elfe augmente de 1 la zone de critique lors qu’il utilise un arc (19‐20 au d20)" +
                                " et ajoute +1d4° aux DM en cas de critique. Il sait utiliser les arcs courts, quel que soit" +
                                " son profil."
                    },
                    "capacite_4": {
                        "nom": "Flèche sanglante (L)",
                        "description": "L’elfe fait une attaque à distance qui provoque une hémorragie. En plus des" +
                                " DM normaux, la flèche produit un effet de saignement qui inflige à la victime 1d4° DM à" +
                                " chaque round suivant jusqu’à ce que la cible soit soignée (tout effet de soins ou une" +
                                " action limitée utilisée à cet effet). On ne peut cumuler plusieurs effets de saignement."
                    },
                    "capacite_5": {
                        "nom": "Supériorité elfique",
                        "description": "L’elfe augmente ses valeurs d’AGI et PER de +1."
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
                                " le gnome voit comme dans la pénombre jusqu’à 10 m."
                    },
                    "capacite_2": {
                        "nom": "Petit pote",
                        "description": "Le gnome est un compagnon sympathique et difficile à considérer comme dangereux" +
                                " ou malintentionné. Il gagne +3 à tous les tests d’interaction sociale sauf pour intimider." +
                                " Il gagne aussi 1 point de chance."
                    },
                    "capacite_3": {
                        "nom": "Insignifiant",
                        "description": "Le gnome sait comment échapper aux attaques des grandes créatures comme les" +
                                " géants. Il gagne un bonus de +2 en DEF contre les créatures de taille grande ou supérieure." +
                                " Ce bonus passe à +3 au rang 5."
                    },
                    "capacite_4": {
                        "nom": "Merveille technologique",
                        "description": "Le gnome sait utiliser les arbalètes (et les armes à poudre si votre MJ autorise" +
                                " leur usage), quel que soit son profil. Il ajoute son AGI aux DM qu’il inflige avec ces armes."
                    },
                    "capacite_5": {
                        "nom": "Bonne nature",
                        "description": "Le gnome augmente ses valeurs de CON et de CHA de +1."
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
                                " qui infligent plus de 1d10 DM. Il ne peut pas utiliser d’arc long ni d’arbalète lourde."
                    },
                    "capacite_2": {
                        "nom": "Résistance légendaire",
                        "description": "Le halfelin obtient un bonus égal à son rang à tous les tests opposés d’attaque" +
                                " magique effectués pour résister à un sort."
                    },
                    "capacite_3": {
                        "nom": "Bon pour le moral",
                        "description": "Un halfelin qui mange bien est un halfelin heureux. À chaque repas (jusqu’à 4" +
                                " fois par jour, espacés d’au moins 3 h) au cours duquel le personnage boit et mange des mets" +
                                " de qualité et en quantité, il récupère 1d4° PV."
                    },
                    "capacite_4": {
                        "nom": "Petit veinard",
                        "description": "Le halfelin gagne 1 PC supplémentaire. De plus, il peut esquiver une attaque de" +
                                " son choix par combat (avant d’avoir pris connaissance des DM, mais pas un critique)."
                    },
                    "capacite_5": {
                        "nom": "Vif et bien nourri",
                        "description": "Le halfelin augmente ses valeurs d’AGI et de CON de +1."
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
                                " Remarque : Le MJ peut proposer d'autres origines. De plus, il gagne 1 PC supplémentaire. "
                    },
                    "capacite_2": {
                        "nom": "Instinct de survie",
                        "description": "Une fois par combat, lorsqu’une attaque devrait amener l’humain à 0 PV, les DM qu’elle" +
                                " inflige sont divisés par 2 (minimum 1). Après avoir bénéficié de cette capacité, l’humain gagne" +
                                " pour le reste du combat un bonus de +2 en DEF."
                    },
                    "capacite_3": {
                        "nom": "Touche‐à‐tout",
                        "description": "Le personnage obtient une capacité de rang 1 ou 2 de n’importe quel profil au choix du" +
                                " joueur. Si la capacité est de rang 2 ou accorde un bonus de DEF, il doit respecter les limitations" +
                                " d’armure."
                    },
                    "capacite_4": {
                        "nom": "Loup parmi les loups",
                        "description": "Une fois par round, l’humain gagne +1d4° aux DM qu’il inflige lorsqu’il combat un" +
                                " adversaire humanoïde de taille moyenne. Ce bonus ne s’applique qu’aux DM initiaux d’une attaque," +
                                " pas aux DM sur la durée."
                    },
                    "capacite_5": {
                        "nom": "Polyvalence",
                        "description": "Le personnage augmente sa caractéristique la plus faible de +1 et sa Volonté de +1."
                    }
                },
                {
                    "id": "NAIN",
                    "nom": "NAIN", // Nom de la voie sans le "Voie de ..."
                    "capacite_1": {
                        "nom": "Habitant des tunnels",
                        "description": "Dans le noir total, le nain voit comme dans la pénombre jusqu’à 30 m. De plus," +
                                " il obtient un bonus de +3 à tous les tests en rapport avec la pierre, l’architecture ou" +
                                " les mines ainsi qu’avec les passages secrets et les pièges dans les murs et les parois rocheuses."
                    },
                    "capacite_2": {
                        "nom": "Haches et marteaux",
                        "description": "Le nain gagne un bonus de +1 en attaque et aux DM lorsqu’il utilise une hache ou" +
                                " un marteau de guerre. Il sait utiliser ces armes, quel que soit son profil."
                    },
                    "capacite_3": {
                        "nom": "Résistance à la magie",
                        "description": "Une fois par jour, le nain peut choisir d’ignorer les effets d’un sort qui le prend" +
                                " pour cible (mais pas un sort de zone). Les créatures dont le niveau (NC) est au moins égal au" +
                                " double du nain ignorent cette capacité."
                    },
                    "capacite_4": {
                        "nom": "Fils du roc",
                        "description": "Le nain réduit tous les DM subis de 2 points (mais il subit toujours au moins 1 DM" +
                                " par attaque reçue). La réduction passe à 3 au niveau 10. Elle est cumulable avec d’autres sources" +
                                " de réduction des DM comme la peau d’acier du barbare."
                    },
                    "capacite_5": {
                        "nom": "Ténacité",
                        "description": "Le nain augmente ses valeurs de CON et de VOL de +1."
                    }
                },
                {
                    "id": "MAGE",
                    "nom": "MAGE", // Nom de la voie sans le "Voie de ..."
                    "capacite_1": {
                        "nom": "Occultisme",
                        "description": "Le mage conserve sa capacité de peuple de rang 1. De plus, il ajoute son rang + 2" +
                                " aux tests de connaissance et d’érudition en rapport avec la magie."
                    },
                    "capacite_2": {
                        "nom": "Maîtrise de la magie (L)*",
                        "description": "Le mage peut détecter la présence de magie (y compris la présence d’objets magiques)" +
                                " dans un rayon de 10 m. Un test d’INT difficulté [10 + rang du sort] permet de déterminer la" +
                                " fonction générale de l’enchantement. Il peut aussi tenter de dissiper un sort non permanent" +
                                " d’un rang maximal égal à ceux qu’il est capable de lancer en emportant un test opposé d’attaque" +
                                " magique contre l’auteur du sort."
                    },
                    "capacite_3": {
                        "nom": "Tour de magie (G)*",
                        "description": "Le mage peut réaliser un tour de magie (portée 10 m) par round en action gratuite" +
                                " sans dépenser aucun PM. Par exemple, fermer une porte à distance, éteindre ou allumer une" +
                                " bougie en claquant des doigts. Il ne peut réaliser aucune action qui nécessite une valeur" +
                                " de caractéristique supérieure à 0 (par exemple, s’il faut au moins +1 ou un test de FOR pour" +
                                " pousser une porte lourde, ce sort ne permet pas de la fermer). Cette capacité ne peut produire" +
                                " aucun DM direct. De plus, le mage gagne +1 en DEF et +2 PM (en plus de celui gagné avec cette" +
                                " capacité ; au total, en apprenant ce sort, le mage acquiert donc 3 PM d’un coup)."
                    },
                    "capacite_4": {
                        "nom": "Esprit supérieur",
                        "description": "Le mage augmente son INT et sa VOL de +1. Désormais, il obtient un dé bonus aux" +
                                " tests d’INT."
                    },
                    "capacite_5": {
                        "nom": "Tempête de mana",
                        "description": "Lorsqu’il lance un sort, le mage peut augmenter les DM de +1d4° (en cas de DM sur" +
                                " la durée, une seule fois) en payant +1 PM pour un sort à cible unique ou +3 PM pour un sort" +
                                " de zone (Explosion de feu, Foudre, etc.)."
                    }
                }
            ]
        },
        /***************************************************************************
         Voies de l'arquebusier
         ****************************************************************************/
        {
            "id": "ARQUEBUSIER",
            "voies": [
                {
                    "id": "ARTILLEUR",
                    "nom": "ARTILLEUR",
                    "capacite_1": {
                        "nom": "Mécanismes",
                        "description": "L'arquebusier ajoute son rang + 2 à tous les tests visant à réparer ou à comprendre " +
                                "des mécanismes (cela inclut le fait de désamorcer des pièges mécaniques et de manipuler " +
                                "des armes de siège). Il obtient un dé bonus à tous les tests d'attaque avec des armes de " +
                                "siège (baliste, couleuvrine, canon, trébuchet, catapulte, etc.)."
                    },
                    "capacite_2": {
                        "nom": "Arme à répétition",
                        "description": "L’arquebusier modifie jusqu’à deux armes de son choix pour les doter de chargeurs. " +
                                "La capacité du chargeur est égale à [2 + INT] et elle augmente de 1 projectile supplémentaire " +
                                "chaque fois que le personnage atteint le rang 3 dans une voie d’arquebusier. Chaque chargeur " +
                                "doit être ensuite rechargé au rythme d’une action limitée (L) par projectile."
                    },
                    "capacite_3": {
                        "nom": "Tir de barrage (L)",
                        "description": "L’arquebusier surveille une zone de 20 m de large face à lui. Si une créature se déplace " +
                                "dans cette zone avant son prochain tour, il peut faire une attaque à distance. En cas de succès " +
                                "la victime choisit entre deux possibilités : soit elle subit le double des dommages, soit elle " +
                                "termine son tour et son déplacement à l’endroit de l’attaque et ne subit pas de dommages. " +
                                "L’arquebusier peut effectuer un tir de barrage sur plusieurs créatures durant le round, tant " +
                                "qu’il n’a pas besoin de recharger."
                    },
                    "capacite_4": {
                        "nom": "Canon double",
                        "description": "L’arquebusier peut bricoler ses armes à poudre (mais pas une couleuvrine) pour les doter " +
                                "d’un second canon. Il double le dé de DM de l’arme (mais pas les dés bonus ni les bonus). Il " +
                                "doit recharger chaque canon individuellement (un canon double consomme 2 projectiles). En cas de " +
                                "critique le dé est triplé (au lieu de ×4). Ce type d’arme possède une double détente et il reste " +
                                "possible de décharger un seul canon à la fois."
                    },
                    "capacite_5": {
                        "nom": "Couleuvrine (L)",
                        "description": "L’arquebusier obtient une couleuvrine (un petit canon portatif). Sur un test d’attaque à " +
                                "distance réussi (dé bonus), la couleuvrine inflige [5d4° + INT] DM à une portée de 100 m. Il faut " +
                                "ensuite deux rounds (L) pour la recharger. C’est une arme encombrante et il est impossible de " +
                                "transporter plus d’une couleuvrine."
                    }
                },
                {
                    "id": "EXPLOSIFS",
                    "nom": "EXPLOSIFS",
                    "capacite_1": {
                        "nom": "Tir de grenaille (L)",
                        "description": "L’arquebusier sait réaliser un mélange de poudre et de grenaille. Quand il charge " +
                                "une arme à poudre, il peut choisir d’utiliser ce mélange à la place d’une munition normale " +
                                "(il doit l’annoncer au moment où il charge). Lorsqu’il tire cette munition (L), il fait un " +
                                "seul test d’attaque contre toutes les cibles lui faisant face dans un cône de 10 m de long " +
                                "et sur 5 m de large. Toutes les cibles dont il atteint la DEF subissent la moitié des " +
                                "DM habituels. De plus, le personnage ajoute son rang + 2 à tous les tests d’artificier (par " +
                                "exemple pour fabriquer et tirer des feux d’artifice)."
                    },
                    "capacite_2": {
                        "nom": "Démolition",
                        "description": "L’arquebusier peut préparer un explosif qui lui permet de démolir facilement des " +
                                "structures. Il lui faut 3 rounds complets pour préparer et poser son explosif. Celui‐ci " +
                                "inflige à la structure [3d4° + INT] DM et ignore la moitié de sa RD (et seulement 2d4° DM " +
                                "dans un rayon de 2 m). Chaque jour, l’arquebusier peut utiliser un nombre de charges " +
                                "explosives égal au rang dans la voie. Ces charges permettent indifféremment d’utiliser les " +
                                "capacités Démolition, Piège explosif ou Boulet explosif."
                    },
                    "capacite_3": {
                        "nom": "Poudre puissante",
                        "description": "L’arquebusier sait préparer une poudre plus puissante, il ajoute +10 m à la portée " +
                                "et +1 aux DM des armes à poudre. Le bonus aux DM augmente de +1 à chaque fois que le " +
                                "personnage atteint le rang 5 dans une voie d’arquebusier. De plus, sa poudre est magique et " +
                                "elle permet à ses projectiles d’affecter les créatures immunisées aux armes non magiques."
                    },
                    "capacite_4": {
                        "nom": "Piège explosif (L)",
                        "description": "Il faut 1 min à l’arquebusier pour installer un piège qui explose dans un rayon de 5 m " +
                                "en infligeant [5d4° + INT] DM de feu (test d’AGI difficulté 15 pour ne subir que la moitié " +
                                "des DM). Le piège est déclenché à l’intrusion de toute créature dans une zone d’un à deux " +
                                "mètres autour du piège. Une créature peut détecter le piège avec un test d’INT difficulté " +
                                "[15 + INT de l’arquebusier] avant de le déclencher."
                    },
                    "capacite_5": {
                        "nom": "Boulet explosif (L)",
                        "description": "L’arquebusier sait fabriquer et lancer de petites boules de métal garnies de poudre et " +
                                "d’une portée de 20 m qui explosent dans un rayon de 5 m en infligeant [4d4° + INT] DM perforants, " +
                                "divisés par 2 pour les victimes qui réussissent un test d’AGI difficulté 10. Ceux qui ratent le " +
                                "test sont de plus aveuglés un round par le flash lumineux de l’explosion."
                    }
                },
                {
                    "id": "MERCENAIRE",
                    "nom": "MERCENAIRE",
                    "capacite_1": {
                        "nom": "Pilier de bar",
                        "description": "L’arquebusier obtient un bonus égal à son rang + 2 aux tests d’interaction sociale " +
                                "dans les tavernes ou les auberges (renseignement, négociation, séduction, etc.) ainsi que " +
                                "pour résister aux effets de l’alcool. De plus, il inflige 1d4° DM à mains nues (non létal) " +
                                "et il divise par 2 tous les DM non létaux qu’on lui inflige."
                    },
                    "capacite_2": {
                        "nom": "Mort ou vif (L)",
                        "description": "L’arquebusier effectue une attaque au contact ou à distance (avec l’arme en main). " +
                                "Si l’attaque est réussie, il inflige ses DM habituels (mais peut choisir d’infliger des DM " +
                                "temporaires) et il choisit entre désarmer, renverser ou affaiblir (1d4 rounds) un adversaire " +
                                "dont le NC est inférieur au rang atteint dans la voie. Si l’attaque est une réussite critique, " +
                                "il peut choisir de cumuler deux effets."
                    },
                    "capacite_3": {
                        "nom": "Combattant aguerri",
                        "description": "L’arquebusier choisit une capacité de rang 1 de son choix de guerrier, de voleur (armure " +
                                "de cuir) ou de rôdeur (armure de cuir renforcé). Il gagne aussi +1 en DEF."
                    },
                    "capacite_4": {
                        "nom": "Constitution héroïque",
                        "description": "L’arquebusier augmente sa valeur de CON de +1 et il obtient un dé bonus aux tests de CON."
                    },
                    "capacite_5": {
                        "nom": "Combat de masse",
                        "description": "Si le combat implique au moins 10 créatures actives (en comptant l’arquebusier et ses " +
                                "alliés), l’arquebusier obtient, au choix, une action"
                    }
                },
                {
                    "id": "PISTOLERO",
                    "nom": "PISTOLERO",
                    "capacite_1": {
                        "nom": "Plus vite que son ombre",
                        "description": "Si son arme à poudre est chargée et tenue en main, l’arquebusier peut tirer avec " +
                                "un bonus de +5 à son Initiative. De plus, il ne subit plus de dé malus lorsqu’il tire avec une " +
                                "arme à poudre ou une arbalète en étant engagé en combat au contact (sauf avec la couleuvrine)."
                    },
                    "capacite_2": {
                        "nom": "Ajuster le tir",
                        "description": "Après avoir raté une attaque à distance, l’arquebusier déclare qu’il s’agissait " +
                                "d’un tir de réglage. Il obtient +5 sur le test de sa prochaine attaque à distance, si " +
                                "son prochain tir vise la même cible avant la fin du prochain round."
                    },
                    "capacite_3": {
                        "nom": "Tir double (L)",
                        "description": "L’arquebusier est capable de tirer simultanément avec une pétoire (ou une arbalète " +
                                "de poing) dans chaque main avec un malus de ‐2 à chaque attaque. S’il décharge ses deux " +
                                "armes sur la même cible, il ne subit aucun malus."
                    },
                    "capacite_4": {
                        "nom": "Agilité héroïque",
                        "description": "L’arquebusier augmente sa valeur d’AGI de +1 et il obtient un dé bonus aux tests d’AGI."
                    },
                    "capacite_5": {
                        "nom": "As de la gâchette",
                        "description": "Lors d’une attaque à distance avec une arme à poudre ou une arbalète, s’il obtient un " +
                                "résultat d’attaque supérieur ou égal à la DEF de son adversaire +10 points, l’arquebusier " +
                                "obtient un bonus de +2d4° aux DM de son attaque."
                    }
                },
                {
                    "id": "PRECISION",
                    "nom": "PRÉCISION",
                    "capacite_1": {
                        "nom": "Joli coup",
                        "description": "L’arquebusier ignore la pénalité appliquée pour une couverture partielle de sa " +
                                "cible (‐2 au test devient aucun malus) et réduit la pénalité pour une couverture " +
                                "importante à ‐2 (au lieu de ‐5)."
                    },
                    "capacite_2": {
                        "nom": "Défaut dans la cuirasse (A)",
                        "description": "L’arquebusier utilise une action d’attaque pour trouver le point faible de son " +
                                "adversaire et le viser. Au prochain round*, il réalise ses attaques à distance sur cette " +
                                "cible contre une DEF de [10 + AGI de la cible] et il peut ignorer sa résistance aux DM " +
                                "ou sa réduction des DM (sauf si cette dernière est acquise parce que la cible est " +
                                "immatérielle : ombre, fantôme, etc.). <br>* Si l’arquebusier utilise la capacité Combat de " +
                                "masse pour son action d’attaque en début de round, alors la capacité s’applique seulement " +
                                "aux tirs du round en cours."
                    },
                    "capacite_3": {
                        "nom": "Tir précis",
                        "description": "L’arquebusier inflige des critiques sur 19‐20 sur ses attaques avec une arme à " +
                                "distance. La plage de critique passe à 18‐20 à partir du rang 5."
                    },
                    "capacite_4": {
                        "nom": "Tireur d’élite (L)",
                        "description": "L’arquebusier prend le temps d’ajuster une cible au loin (distance minimum de 10 m). " +
                                "Il double la portée de son arme et ajoute +2d4° aux DM. Il ne peut pas utiliser cette " +
                                "capacité s’il est au contact d’un adversaire ou dans une position instable (par exemple " +
                                "dans un véhicule)."
                    },
                    "capacite_5": {
                        "nom": "Tir fatal (L)",
                        "description": "S’il tire sur une créature dont le niveau (NC) est inférieur à la moitié du sien " +
                                "(arrondi au supérieur), l’arquebusier peut faire un test d’INT difficulté [10 + NC de la " +
                                "créature]. En cas de réussite, elle est morte. Dans tous les autres cas, elle subit les " +
                                "DM normaux."
                    }
                }
            ]
        },

        /***************************************************************************
         Voies de l'arquebusier
         ****************************************************************************/
        {
            "id": "BARDE",
            "voies": [
                {
                    "id": "ESCRIME",
                    "nom": "ESCRIME",
                    "capacite_1": {
                        "nom": "Précision",
                        "description": "Le barde peut remplacer sa FOR par son AGI pour ses tests d’attaque au contact " +
                                "(mais pas aux DM) lorsqu’il emploie une arme légère à une main (les armes légères sont " +
                                "la dague, l’épée courte et la rapière)."
                    },
                    "capacite_2": {
                        "nom": "Feinte (L)",
                        "description": "Le barde effectue une attaque fictive pour déséquilibrer son adversaire et réalise " +
                        "ensuite une attaque mortelle. Faites un test opposé de CHA contre la PER de votre adversaire à ce " +
                        "round. Au round suivant, vous obtenez un bonus en attaque égal au double de votre rang dans la voie " +
                        "de l’escrime (+4 au rang 2, par exemple) sur votre première attaque au contact contre cet adversaire " +
                        "et, si votre feinte a réussi, +2d4° aux DM."
                    },
                    "capacite_3": {
                        "nom": "Intelligence du combat (M)",
                        "description": "Une fois par combat, le barde peut au choix désarmer, renverser ou aveugler pour une " +
                                "durée de 1 round un adversaire dont le NC est inférieur au sien en emportant un test opposé " +
                                "d’INT. S’il a réussi une feinte contre cet adversaire à son tour précédent, il bénéficie d’un " +
                                "bonus de +5 au test d’INT."
                    },
                    "capacite_4": {
                        "nom": "Attaque flamboyante (L)",
                        "description": "Le style de combat du barde est flamboyant et surprenant : Il effectue une attaque de " +
                                "contact avec une arme légère et obtient un bonus d’attaque et de DM égal à son CHA (en plus " +
                                "de sa FOR ou de son AGI)."
                    },
                    "capacite_5": {
                        "nom": "Botte mortelle",
                        "description": "Lors d’une attaque au contact avec une arme légère, s’il obtient un résultat d’attaque " +
                                "supérieur ou égal à (la DEF de son adversaire + 10 points), le barde obtient un bonus de " +
                                "+2d4° aux DM de son attaque (les dés bonus ne sont jamais multipliés en cas de critique)."
                    }
                },
            ]
        }

    ]
};
