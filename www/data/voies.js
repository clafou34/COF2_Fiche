/**************************************************************************
 *
 *  Ce fichier contient les capacité des voies. Les voies sont regroupées
 *  en groupes correspondant aux peuples ou aux profils.
 *
 **************************************************************************/
let dataVoies = {
    "groupesVoies": [
        /***************************************************************************
         Voies des peuples
         ****************************************************************************/
        {
            "id": "PEUPLES",
            "voies": [
                {
                    "id": "DEMI_ORC",
                    "nom": "DEMI-ORC",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Impressionnant",
                            "description": "Le demi‐orc gagne un bonus de +3 à tous les tests d’intimidation. De plus, dans" +
                                    " le noir total, le demi‐orc voit comme dans la pénombre jusqu’à 30 m."
                        },
                        {
                            "rang": "2",
                            "nom": "Talent pour la violence",
                            "description": "Le joueur choisit une capacité de rang 1 de n’importe quelle voie de barbare ou" +
                                    " de guerrier."
                        },
                        {
                            "rang": "3",
                            "nom": "Critique brutal",
                            "description": "Le demi‐orc augmente de 1 point la zone de critique sur une attaque au contact" +
                                    " (19‐20 au d20) et ajoute +1d4° aux DM en cas de critique."
                        },
                        {
                            "rang": "4",
                            "nom": "Attaque sanglante (L)",
                            "description": "Le demi‐orc réalise une attaque de contact qui provoque une hémorragie. En plus" +
                                    " des DM normaux, l’attaque produit un saignement qui inflige à la victime 1d4° DM à chaque" +
                                    " round suivant jusqu’à ce que la cible soit soignée (tout effet de soins ou une action limitée" +
                                    " utilisée à cet effet). On ne peut pas cumuler plusieurs effets de saignement."
                        },
                        {
                            "rang": "5",
                            "nom": "Colosse",
                            "description": "Le demi‐orc augmente ses valeurs de FOR et de CON de +1."
                        }
                    ]
                },
                {
                    "id": "ELFE_HAUT",
                    "nom": "ELFE HAUT",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Lumière intérieure",
                            "description": "Pour un elfe, l’obscurité de la nuit sous la lumière des étoiles est considérée" +
                                    " comme de la pénombre. De plus, il gagne un bonus de +3 à tous les tests d’érudition (INT) et" +
                                    " artistiques (CHA)."
                        },
                        {
                            "rang": "2",
                            "nom": "Force d’âme",
                            "description": "L’elfe est immunisé à la peur et au sommeil magique. De plus, il obtient un bonus" +
                                    " égal à son rang lorsqu’il doit faire un test opposé d’attaque magique pour résister à un sort."
                        },
                        {
                            "rang": "3",
                            "nom": "Talent pour la magie",
                            "description": "Le joueur choisit une capacité de rang 1 de n’importe quelle voie de magicien" +
                                    " ou d’ensorceleur. Il peut utiliser cette capacité en armure sans pénalité (mais pas une" +
                                    " capacité qui offre un bonus de DEF). À la place, il peut choisir une capacité de rang 2," +
                                    " mais ne doit alors pas porter d’armure pour lancer le sort."
                        },
                        {
                            "rang": "4",
                            "nom": "Immortel",
                            "description": "L’elfe n’a besoin que de la moitié du repos, de la nourriture ou de la boisson" +
                                    " d’un humain normal pour être en pleine forme. Il est immunisé aux effets des poisons" +
                                    " et des maladies."
                        },
                        {
                            "rang": "5",
                            "nom": "Supériorité elfique",
                            "description": "L’elfe augmente sa valeur de VOL de +1 et sa valeur d’INT ou de CHA de +1."
                        }
                    ]
                },
                {
                    "id": "ELFE_SYLVAIN",
                    "nom": "ELFE SYLVAIN",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Lumière des étoiles",
                            "description": "Pour un elfe sylvain, l’obscurité de la nuit sous la lumière des étoiles est" +
                                    " considérée comme de la pénombre. De plus, l’elfe gagne un bonus de +3 à tous les tests" +
                                    " de survie en forêt (escalade, discrétion, chasse, etc.)."
                        },
                        {
                            "rang": "2",
                            "nom": "Enfant de la forêt",
                            "description": "Le joueur choisit une capacité de rang 1 de n’importe quelle voie de druide" +
                                    " ou de rôdeur. Il peut utiliser cette capacité en armure jusqu’à l’armure de cuir renforcé" +
                                    " sans pénalité."
                        },
                        {
                            "rang": "3",
                            "nom": "Archer émérite",
                            "description": "L’elfe augmente de 1 la zone de critique lors qu’il utilise un arc (19‐20 au d20)" +
                                    " et ajoute +1d4° aux DM en cas de critique. Il sait utiliser les arcs courts, quel que soit" +
                                    " son profil."
                        },
                        {
                            "rang": "4",
                            "nom": "Flèche sanglante (L)",
                            "description": "L’elfe fait une attaque à distance qui provoque une hémorragie. En plus des" +
                                    " DM normaux, la flèche produit un effet de saignement qui inflige à la victime 1d4° DM à" +
                                    " chaque round suivant jusqu’à ce que la cible soit soignée (tout effet de soins ou une" +
                                    " action limitée utilisée à cet effet). On ne peut cumuler plusieurs effets de saignement."
                        },
                        {
                            "rang": "5",
                            "nom": "Supériorité elfique",
                            "description": "L’elfe augmente ses valeurs d’AGI et PER de +1."
                        }
                    ]
                },
                {
                    "id": "GNOME",
                    "nom": "GNOME", // Nom de la voie sans le "Voie de ..."
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Don étrange",
                            "description": "Le gnome possède un talent inné pour les sciences, qu’elles soient occultes ou" +
                                    " plus ordinaires. Il gagne un bonus de +3 à tous les tests scientifiques (INT) et il choisit" +
                                    " une capacité de rang 1 d’ensorceleur. S’il porte une armure, il ne peut pas utiliser ce sort" +
                                    " plus d’une fois par jour (il doit payer le coût en PM de façon normale). Dans le noir total," +
                                    " le gnome voit comme dans la pénombre jusqu’à 10 m."
                        },
                        {
                            "rang": "2",
                            "nom": "Petit pote",
                            "description": "Le gnome est un compagnon sympathique et difficile à considérer comme dangereux" +
                                    " ou malintentionné. Il gagne +3 à tous les tests d’interaction sociale sauf pour intimider." +
                                    " Il gagne aussi 1 point de chance."
                        },
                        {
                            "rang": "3",
                            "nom": "Insignifiant",
                            "description": "Le gnome sait comment échapper aux attaques des grandes créatures comme les" +
                                    " géants. Il gagne un bonus de +2 en DEF contre les créatures de taille grande ou supérieure." +
                                    " Ce bonus passe à +3 au rang 5."
                        },
                        {
                            "rang": "4",
                            "nom": "Merveille technologique",
                            "description": "Le gnome sait utiliser les arbalètes (et les armes à poudre si votre MJ autorise" +
                                    " leur usage), quel que soit son profil. Il ajoute son AGI aux DM qu’il inflige avec ces armes."
                        },
                        {
                            "rang": "5",
                            "nom": "Bonne nature",
                            "description": "Le gnome augmente ses valeurs de CON et de CHA de +1."
                        }
                    ]
                },
                {
                    "id": "HALFELIN",
                    "nom": "HALFELIN",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Petite taille",
                            "description": "Le halfelin obtient un bonus de +1 en DEF et de +3 à tous les tests de discrétion" +
                                    " ainsi qu’à tous les tests effectués pour subtiliser quelque chose (pickpocket, vol à l’étalage," +
                                    " etc.). En revanche, un halfelin ne peut pas utiliser à une main une arme dont les DM dépassent" +
                                    " 1d6 (épée courte, masse, etc., mais pas rapière). Il lui faut utiliser les deux mains pour les" +
                                    " armes qui infligent 1d8 à 1d10 de DM (épée longue) et il lui est interdit d’utiliser les armes" +
                                    " qui infligent plus de 1d10 DM. Il ne peut pas utiliser d’arc long ni d’arbalète lourde."
                        },
                        {
                            "rang": "2",
                            "nom": "Résistance légendaire",
                            "description": "Le halfelin obtient un bonus égal à son rang à tous les tests opposés d’attaque" +
                                    " magique effectués pour résister à un sort."
                        },
                        {
                            "rang": "3",
                            "nom": "Bon pour le moral",
                            "description": "Un halfelin qui mange bien est un halfelin heureux. À chaque repas (jusqu’à 4" +
                                    " fois par jour, espacés d’au moins 3 h) au cours duquel le personnage boit et mange des mets" +
                                    " de qualité et en quantité, il récupère 1d4° PV."
                        },
                        {
                            "rang": "4",
                            "nom": "Petit veinard",
                            "description": "Le halfelin gagne 1 PC supplémentaire. De plus, il peut esquiver une attaque de" +
                                    " son choix par combat (avant d’avoir pris connaissance des DM, mais pas un critique)."
                        },
                        {
                            "rang": "5",
                            "nom": "Vif et bien nourri",
                            "description": "Le halfelin augmente ses valeurs d’AGI et de CON de +1."
                        }
                    ]
                },
                {
                    "id": "HUMAIN",
                    "nom": "HUMAIN", // Nom de la voie sans le "Voie de ..."
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Diversité",
                            "description": "Un humain obtient un bonus de +3 aux tests de deux domaines associés à son origine" +
                                    " géographique ou sociale (Montagnard ==> escalade et résistance au froid; Citadin ==> commerce et" +
                                    " résistance aux maladie; Campagnard ==> météorologie et équitation; Riverain ==> natation et navigation" +
                                    " Sauvage ==> chasser et pister; Nomade ==> orientation et résistance à la chaleur ou au froid)." +
                                    " Remarque : Le MJ peut proposer d'autres origines. De plus, il gagne 1 PC supplémentaire. "
                        },
                        {
                            "rang": "2",
                            "nom": "Instinct de survie",
                            "description": "Une fois par combat, lorsqu’une attaque devrait amener l’humain à 0 PV, les DM qu’elle" +
                                    " inflige sont divisés par 2 (minimum 1). Après avoir bénéficié de cette capacité, l’humain gagne" +
                                    " pour le reste du combat un bonus de +2 en DEF."
                        },
                        {
                            "rang": "3",
                            "nom": "Touche‐à‐tout",
                            "description": "Le personnage obtient une capacité de rang 1 ou 2 de n’importe quel profil au choix du" +
                                    " joueur. Si la capacité est de rang 2 ou accorde un bonus de DEF, il doit respecter les limitations" +
                                    " d’armure."
                        },
                        {
                            "rang": "4",
                            "nom": "Loup parmi les loups",
                            "description": "Une fois par round, l’humain gagne +1d4° aux DM qu’il inflige lorsqu’il combat un" +
                                    " adversaire humanoïde de taille moyenne. Ce bonus ne s’applique qu’aux DM initiaux d’une attaque," +
                                    " pas aux DM sur la durée."
                        },
                        {
                            "rang": "5",
                            "nom": "Polyvalence",
                            "description": "Le personnage augmente sa caractéristique la plus faible de +1 et sa Volonté de +1."
                        }
                    ]
                },
                {
                    "id": "NAIN",
                    "nom": "NAIN", // Nom de la voie sans le "Voie de ..."
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Habitant des tunnels",
                            "description": "Dans le noir total, le nain voit comme dans la pénombre jusqu’à 30 m. De plus," +
                                    " il obtient un bonus de +3 à tous les tests en rapport avec la pierre, l’architecture ou" +
                                    " les mines ainsi qu’avec les passages secrets et les pièges dans les murs et les parois rocheuses."
                        },
                        {
                            "rang": "2",
                            "nom": "Haches et marteaux",
                            "description": "Le nain gagne un bonus de +1 en attaque et aux DM lorsqu’il utilise une hache ou" +
                                    " un marteau de guerre. Il sait utiliser ces armes, quel que soit son profil."
                        },
                        {
                            "rang": "3",
                            "nom": "Résistance à la magie",
                            "description": "Une fois par jour, le nain peut choisir d’ignorer les effets d’un sort qui le prend" +
                                    " pour cible (mais pas un sort de zone). Les créatures dont le niveau (NC) est au moins égal au" +
                                    " double du nain ignorent cette capacité."
                        },
                        {
                            "rang": "4",
                            "nom": "Fils du roc",
                            "description": "Le nain réduit tous les DM subis de 2 points (mais il subit toujours au moins 1 DM" +
                                    " par attaque reçue). La réduction passe à 3 au niveau 10. Elle est cumulable avec d’autres sources" +
                                    " de réduction des DM comme la peau d’acier du barbare."
                        },
                        {
                            "rang": "5",
                            "nom": "Ténacité",
                            "description": "Le nain augmente ses valeurs de CON et de VOL de +1."
                        }
                    ]
                },
                {
                    "id": "MAGE",
                    "nom": "MAGE", // Nom de la voie sans le "Voie de ..."
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Occultisme",
                            "description": "Le mage conserve sa capacité de peuple de rang 1. De plus, il ajoute son rang + 2" +
                                    " aux tests de connaissance et d’érudition en rapport avec la magie."
                        },
                        {
                            "rang": "2",
                            "nom": "Maîtrise de la magie (L)*",
                            "description": "Le mage peut détecter la présence de magie (y compris la présence d’objets magiques)" +
                                    " dans un rayon de 10 m. Un test d’INT difficulté [10 + rang du sort] permet de déterminer la" +
                                    " fonction générale de l’enchantement. Il peut aussi tenter de dissiper un sort non permanent" +
                                    " d’un rang maximal égal à ceux qu’il est capable de lancer en emportant un test opposé d’attaque" +
                                    " magique contre l’auteur du sort."
                        },
                        {
                            "rang": "3",
                            "nom": "Tour de magie (G)*",
                            "description": "Le mage peut réaliser un tour de magie (portée 10 m) par round en action gratuite" +
                                    " sans dépenser aucun PM. Par exemple, fermer une porte à distance, éteindre ou allumer une" +
                                    " bougie en claquant des doigts. Il ne peut réaliser aucune action qui nécessite une valeur" +
                                    " de caractéristique supérieure à 0 (par exemple, s’il faut au moins +1 ou un test de FOR pour" +
                                    " pousser une porte lourde, ce sort ne permet pas de la fermer). Cette capacité ne peut produire" +
                                    " aucun DM direct. De plus, le mage gagne +1 en DEF et +2 PM (en plus de celui gagné avec cette" +
                                    " capacité ; au total, en apprenant ce sort, le mage acquiert donc 3 PM d’un coup)."
                        },
                        {
                            "rang": "4",
                            "nom": "Esprit supérieur",
                            "description": "Le mage augmente son INT et sa VOL de +1. Désormais, il obtient un dé bonus aux" +
                                    " tests d’INT."
                        },
                        {
                            "rang": "5",
                            "nom": "Tempête de mana",
                            "description": "Lorsqu’il lance un sort, le mage peut augmenter les DM de +1d4° (en cas de DM sur" +
                                    " la durée, une seule fois) en payant +1 PM pour un sort à cible unique ou +3 PM pour un sort" +
                                    " de zone (Explosion de feu, Foudre, etc.)."
                        }
                    ]
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
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Mécanismes",
                            "description": "L'arquebusier ajoute son rang + 2 à tous les tests visant à réparer ou à comprendre " +
                                    "des mécanismes (cela inclut le fait de désamorcer des pièges mécaniques et de manipuler " +
                                    "des armes de siège). Il obtient un dé bonus à tous les tests d'attaque avec des armes de " +
                                    "siège (baliste, couleuvrine, canon, trébuchet, catapulte, etc.)."
                        },
                        {
                            "rang": "2",
                            "nom": "Arme à répétition",
                            "description": "L’arquebusier modifie jusqu’à deux armes de son choix pour les doter de chargeurs. " +
                                    "La capacité du chargeur est égale à [2 + INT] et elle augmente de 1 projectile supplémentaire " +
                                    "chaque fois que le personnage atteint le rang 3 dans une voie d’arquebusier. Chaque chargeur " +
                                    "doit être ensuite rechargé au rythme d’une action limitée (L) par projectile."
                        },
                        {
                            "rang": "3",
                            "nom": "Tir de barrage (L)",
                            "description": "L’arquebusier surveille une zone de 20 m de large face à lui. Si une créature se déplace " +
                                    "dans cette zone avant son prochain tour, il peut faire une attaque à distance. En cas de succès " +
                                    "la victime choisit entre deux possibilités : soit elle subit le double des dommages, soit elle " +
                                    "termine son tour et son déplacement à l’endroit de l’attaque et ne subit pas de dommages. " +
                                    "L’arquebusier peut effectuer un tir de barrage sur plusieurs créatures durant le round, tant " +
                                    "qu’il n’a pas besoin de recharger."
                        },
                        {
                            "rang": "4",
                            "nom": "Canon double",
                            "description": "L’arquebusier peut bricoler ses armes à poudre (mais pas une couleuvrine) pour les doter " +
                                    "d’un second canon. Il double le dé de DM de l’arme (mais pas les dés bonus ni les bonus). Il " +
                                    "doit recharger chaque canon individuellement (un canon double consomme 2 projectiles). En cas de " +
                                    "critique le dé est triplé (au lieu de ×4). Ce type d’arme possède une double détente et il reste " +
                                    "possible de décharger un seul canon à la fois."
                        },
                        {
                            "rang": "5",
                            "nom": "Couleuvrine (L)",
                            "description": "L’arquebusier obtient une couleuvrine (un petit canon portatif). Sur un test d’attaque à " +
                                    "distance réussi (dé bonus), la couleuvrine inflige [5d4° + INT] DM à une portée de 100 m. Il faut " +
                                    "ensuite deux rounds (L) pour la recharger. C’est une arme encombrante et il est impossible de " +
                                    "transporter plus d’une couleuvrine."
                        }
                    ]
                },
                {
                    "id": "EXPLOSIFS",
                    "nom": "EXPLOSIFS",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Tir de grenaille (L)",
                            "description": "L’arquebusier sait réaliser un mélange de poudre et de grenaille. Quand il charge " +
                                    "une arme à poudre, il peut choisir d’utiliser ce mélange à la place d’une munition normale " +
                                    "(il doit l’annoncer au moment où il charge). Lorsqu’il tire cette munition (L), il fait un " +
                                    "seul test d’attaque contre toutes les cibles lui faisant face dans un cône de 10 m de long " +
                                    "et sur 5 m de large. Toutes les cibles dont il atteint la DEF subissent la moitié des " +
                                    "DM habituels. De plus, le personnage ajoute son rang + 2 à tous les tests d’artificier (par " +
                                    "exemple pour fabriquer et tirer des feux d’artifice)."
                        },
                        {
                            "rang": "2",
                            "nom": "Démolition",
                            "description": "L’arquebusier peut préparer un explosif qui lui permet de démolir facilement des " +
                                    "structures. Il lui faut 3 rounds complets pour préparer et poser son explosif. Celui‐ci " +
                                    "inflige à la structure [3d4° + INT] DM et ignore la moitié de sa RD (et seulement 2d4° DM " +
                                    "dans un rayon de 2 m). Chaque jour, l’arquebusier peut utiliser un nombre de charges " +
                                    "explosives égal au rang dans la voie. Ces charges permettent indifféremment d’utiliser les " +
                                    "capacités Démolition, Piège explosif ou Boulet explosif."
                        },
                        {
                            "rang": "3",
                            "nom": "Poudre puissante",
                            "description": "L’arquebusier sait préparer une poudre plus puissante, il ajoute +10 m à la portée " +
                                    "et +1 aux DM des armes à poudre. Le bonus aux DM augmente de +1 à chaque fois que le " +
                                    "personnage atteint le rang 5 dans une voie d’arquebusier. De plus, sa poudre est magique et " +
                                    "elle permet à ses projectiles d’affecter les créatures immunisées aux armes non magiques."
                        },
                        {
                            "rang": "4",
                            "nom": "Piège explosif (L)",
                            "description": "Il faut 1 min à l’arquebusier pour installer un piège qui explose dans un rayon de 5 m " +
                                    "en infligeant [5d4° + INT] DM de feu (test d’AGI difficulté 15 pour ne subir que la moitié " +
                                    "des DM). Le piège est déclenché à l’intrusion de toute créature dans une zone d’un à deux " +
                                    "mètres autour du piège. Une créature peut détecter le piège avec un test d’INT difficulté " +
                                    "[15 + INT de l’arquebusier] avant de le déclencher."
                        },
                        {
                            "rang": "5",
                            "nom": "Boulet explosif (L)",
                            "description": "L’arquebusier sait fabriquer et lancer de petites boules de métal garnies de poudre et " +
                                    "d’une portée de 20 m qui explosent dans un rayon de 5 m en infligeant [4d4° + INT] DM perforants, " +
                                    "divisés par 2 pour les victimes qui réussissent un test d’AGI difficulté 10. Ceux qui ratent le " +
                                    "test sont de plus aveuglés un round par le flash lumineux de l’explosion."
                        }
                    ]
                },
                {
                    "id": "MERCENAIRE",
                    "nom": "MERCENAIRE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Pilier de bar",
                            "description": "L’arquebusier obtient un bonus égal à son rang + 2 aux tests d’interaction sociale " +
                                    "dans les tavernes ou les auberges (renseignement, négociation, séduction, etc.) ainsi que " +
                                    "pour résister aux effets de l’alcool. De plus, il inflige 1d4° DM à mains nues (non létal) " +
                                    "et il divise par 2 tous les DM non létaux qu’on lui inflige."
                        },
                        {
                            "rang": "2",
                            "nom": "Mort ou vif (L)",
                            "description": "L’arquebusier effectue une attaque au contact ou à distance (avec l’arme en main). " +
                                    "Si l’attaque est réussie, il inflige ses DM habituels (mais peut choisir d’infliger des DM " +
                                    "temporaires) et il choisit entre désarmer, renverser ou affaiblir (1d4 rounds) un adversaire " +
                                    "dont le NC est inférieur au rang atteint dans la voie. Si l’attaque est une réussite critique, " +
                                    "il peut choisir de cumuler deux effets."
                        },
                        {
                            "rang": "3",
                            "nom": "Combattant aguerri",
                            "description": "L’arquebusier choisit une capacité de rang 1 de son choix de guerrier, de voleur (armure " +
                                    "de cuir) ou de rôdeur (armure de cuir renforcé). Il gagne aussi +1 en DEF."
                        },
                        {
                            "rang": "4",
                            "nom": "Constitution héroïque",
                            "description": "L’arquebusier augmente sa valeur de CON de +1 et il obtient un dé bonus aux tests de CON."
                        },
                        {
                            "rang": "5",
                            "nom": "Combat de masse",
                            "description": "Si le combat implique au moins 10 créatures actives (en comptant l’arquebusier et ses " +
                                    "alliés), l’arquebusier obtient, au choix, une action"
                        }
                    ]
                },
                {
                    "id": "PISTOLERO",
                    "nom": "PISTOLERO",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Plus vite que son ombre",
                            "description": "Si son arme à poudre est chargée et tenue en main, l’arquebusier peut tirer avec " +
                                    "un bonus de +5 à son Initiative. De plus, il ne subit plus de dé malus lorsqu’il tire avec une " +
                                    "arme à poudre ou une arbalète en étant engagé en combat au contact (sauf avec la couleuvrine)."
                        },
                        {
                            "rang": "2",
                            "nom": "Ajuster le tir",
                            "description": "Après avoir raté une attaque à distance, l’arquebusier déclare qu’il s’agissait " +
                                    "d’un tir de réglage. Il obtient +5 sur le test de sa prochaine attaque à distance, si " +
                                    "son prochain tir vise la même cible avant la fin du prochain round."
                        },
                        {
                            "rang": "3",
                            "nom": "Tir double (L)",
                            "description": "L’arquebusier est capable de tirer simultanément avec une pétoire (ou une arbalète " +
                                    "de poing) dans chaque main avec un malus de ‐2 à chaque attaque. S’il décharge ses deux " +
                                    "armes sur la même cible, il ne subit aucun malus."
                        },
                        {
                            "rang": "4",
                            "nom": "Agilité héroïque",
                            "description": "L’arquebusier augmente sa valeur d’AGI de +1 et il obtient un dé bonus aux tests d’AGI."
                        },
                        {
                            "rang": "5",
                            "nom": "As de la gâchette",
                            "description": "Lors d’une attaque à distance avec une arme à poudre ou une arbalète, s’il obtient un " +
                                    "résultat d’attaque supérieur ou égal à la DEF de son adversaire +10 points, l’arquebusier " +
                                    "obtient un bonus de +2d4° aux DM de son attaque."
                        }
                    ]
                },
                {
                    "id": "PRECISION",
                    "nom": "PRÉCISION",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Joli coup",
                            "description": "L’arquebusier ignore la pénalité appliquée pour une couverture partielle de sa " +
                                    "cible (‐2 au test devient aucun malus) et réduit la pénalité pour une couverture " +
                                    "importante à ‐2 (au lieu de ‐5)."
                        },
                        {
                            "rang": "2",
                            "nom": "Défaut dans la cuirasse (A)",
                            "description": "L’arquebusier utilise une action d’attaque pour trouver le point faible de son " +
                                    "adversaire et le viser. Au prochain round*, il réalise ses attaques à distance sur cette " +
                                    "cible contre une DEF de [10 + AGI de la cible] et il peut ignorer sa résistance aux DM " +
                                    "ou sa réduction des DM (sauf si cette dernière est acquise parce que la cible est " +
                                    "immatérielle : ombre, fantôme, etc.). <br>* Si l’arquebusier utilise la capacité Combat de " +
                                    "masse pour son action d’attaque en début de round, alors la capacité s’applique seulement " +
                                    "aux tirs du round en cours."
                        },
                        {
                            "rang": "3",
                            "nom": "Tir précis",
                            "description": "L’arquebusier inflige des critiques sur 19‐20 sur ses attaques avec une arme à " +
                                    "distance. La plage de critique passe à 18‐20 à partir du rang 5."
                        },
                        {
                            "rang": "4",
                            "nom": "Tireur d’élite (L)",
                            "description": "L’arquebusier prend le temps d’ajuster une cible au loin (distance minimum de 10 m). " +
                                    "Il double la portée de son arme et ajoute +2d4° aux DM. Il ne peut pas utiliser cette " +
                                    "capacité s’il est au contact d’un adversaire ou dans une position instable (par exemple " +
                                    "dans un véhicule)."
                        },
                        {
                            "rang": "5",
                            "nom": "Tir fatal (L)",
                            "description": "S’il tire sur une créature dont le niveau (NC) est inférieur à la moitié du sien " +
                                    "(arrondi au supérieur), l’arquebusier peut faire un test d’INT difficulté [10 + NC de la " +
                                    "créature]. En cas de réussite, elle est morte. Dans tous les autres cas, elle subit les " +
                                    "DM normaux."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies du barde
         ****************************************************************************/
        {
            "id": "BARDE",
            "voies": [
                {
                    "id": "ESCRIME",
                    "nom": "ESCRIME",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Précision",
                            "description": "Le barde peut remplacer sa FOR par son AGI pour ses tests d’attaque au contact " +
                                    "(mais pas aux DM) lorsqu’il emploie une arme légère à une main (les armes légères sont " +
                                    "la dague, l’épée courte et la rapière)."
                        },
                        {
                            "rang": "2",
                            "nom": "Feinte (L)",
                            "description": "Le barde effectue une attaque fictive pour déséquilibrer son adversaire et réalise " +
                                    "ensuite une attaque mortelle. Faites un test opposé de CHA contre la PER de votre adversaire à ce " +
                                    "round. Au round suivant, vous obtenez un bonus en attaque égal au double de votre rang dans la voie " +
                                    "de l’escrime (+4 au rang 2, par exemple) sur votre première attaque au contact contre cet adversaire " +
                                    "et, si votre feinte a réussi, +2d4° aux DM."
                        },
                        {
                            "rang": "3",
                            "nom": "Intelligence du combat (M)",
                            "description": "Une fois par combat, le barde peut au choix désarmer, renverser ou aveugler pour une " +
                                    "durée de 1 round un adversaire dont le NC est inférieur au sien en emportant un test opposé " +
                                    "d’INT. S’il a réussi une feinte contre cet adversaire à son tour précédent, il bénéficie d’un " +
                                    "bonus de +5 au test d’INT."
                        },
                        {
                            "rang": "4",
                            "nom": "Attaque flamboyante (L)",
                            "description": "Le style de combat du barde est flamboyant et surprenant : Il effectue une attaque de " +
                                    "contact avec une arme légère et obtient un bonus d’attaque et de DM égal à son CHA (en plus " +
                                    "de sa FOR ou de son AGI)."
                        },
                        {
                            "rang": "5",
                            "nom": "Botte mortelle",
                            "description": "Lors d’une attaque au contact avec une arme légère, s’il obtient un résultat d’attaque " +
                                    "supérieur ou égal à (la DEF de son adversaire + 10 points), le barde obtient un bonus de " +
                                    "+2d4° aux DM de son attaque (les dés bonus ne sont jamais multipliés en cas de critique)."
                        }
                    ]
                },
                {
                    "id": "MUSICIEN",
                    "nom": "MUSICIEN",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Chant des héros (L)*",
                            "description": "Le barde peut chanter et inspirer ses compagnons, tous ses alliés à portée de voix " +
                                    "et lui obtiennent un bonus de +1 à tous leurs tests pendant un nombre de minutes égal à " +
                                    "sa valeur de CHA. Pendant toute la durée du sort, il fredonne (action gratuite qui ne " +
                                    "l’empêche pas de lancer d’autres sorts de barde). Le bonus passe à +2 au rang 5. En plus " +
                                    "de ce sort, le barde ajoute son rang + 2 aux tests pour jouer d’un instrument de musique " +
                                    "ou chanter."
                        },
                        {
                            "rang": "2",
                            "nom": "Chant de réconfort (L)*",
                            "description": "Le barde chante ou joue de la musique pendant toute la durée d’une récupération " +
                                    "rapide (30 min). Le barde et ses alliés dans un rayon de 10 m, récupèrent 1d4° PV. Les " +
                                    "soins passent à 2d4° au rang 4."
                        },
                        {
                            "rang": "3",
                            "nom": "Attaque sonore (A)*",
                            "description": "Le barde pousse un cri dont les effets sont dévastateurs (ou produit un son avec " +
                                    "un instrument à cette même fin). Il inflige [2d4° + CHA] DM à toutes les cibles dans un " +
                                    "cône de 10 m (de long et de large). Les cibles peuvent diviser les DM par 2 si elles " +
                                    "réussissent un test de CON difficulté [10 + CHA du barde]."
                        },
                        {
                            "rang": "4",
                            "nom": "Zone de silence (A)*",
                            "description": "Le barde crée une zone de silence fixe de 5 m de diamètre, jusqu’à une portée de " +
                                    "30 m, pendant un nombre de minutes égal à sa valeur de CHA. Tous les sons émis dans " +
                                    "cette sphère sont annulés. Dans cette zone, il faut réussir un test d’INT difficulté " +
                                    "10 pour lancer un sort."
                        },
                        {
                            "rang": "5",
                            "nom": "Danse irrésistible (A)*",
                            "description": "Le barde joue une gigue endiablée aux effets magiques. S’il réussit un test " +
                                    "d’attaque magique opposé contre sa cible (portée 10 m), celle‐ci se met à danser pendant " +
                                    "[1d4° + CHA] rounds, elle subit un dé malus aux tests d’attaque et ‐5 en DEF. Si la cible " +
                                    "est d’un niveau (NC) supérieur ou égal au barde, elle ne danse qu’un seul round."
                        }
                    ]
                },
                {
                    "id": "SALTIMBANQUE",
                    "nom": "SALTIMBANQUE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Acrobate",
                            "description": "Le barde ajoute son rang + 2 à tous les tests qu’il effectue pour réaliser des " +
                                    "acrobaties, tenir en équilibre, faire des sauts ou de l’escalade."
                        },
                        {
                            "rang": "2",
                            "nom": "Grâce féline",
                            "description": "Le barde gagne son CHA en Initiative et +1 en DEF (+2 au rang 4). De plus, le " +
                                    "barde ajoute son rang + 2 aux tests de danse, de mime ou de jonglerie."
                        },
                        {
                            "rang": "3",
                            "nom": "Lanceur de couteau (G)",
                            "description": "Une fois par round, en plus de ses autres actions, le barde peut lancer un " +
                                    "couteau sur une cible à distance (portée 10 m) en réussissant un test d’attaque à " +
                                    "distance. Cette attaque occasionne [1d4 + AGI] DM. Il peut exécuter cette action sans " +
                                    "pénalité, même s’il est engagé en combat au contact avec un autre adversaire. Les " +
                                    "DM passent à 1d4° au rang 5."
                        },
                        {
                            "rang": "4",
                            "nom": "Liberté d’action",
                            "description": "Le barde est immunisé à la peur et à tous les sorts qui asservissent l’esprit " +
                                    "(possession, charme), il est immunisé aux états ralenti et immobilisé."
                        },
                        {
                            "rang": "5",
                            "nom": "Esquive acrobatique (G)",
                            "description": "Une fois par round, le barde peut réaliser une esquive en réussissant un test " +
                                    "d’attaque à distance contre une difficulté égale au résultat obtenu par son adversaire, " +
                                    "lors de son attaque. En cas de réussite, le barde ne subit aucun DM. Si cette attaque " +
                                    "était un critique, il subit tout de même des DM normaux (il annule donc l’effet " +
                                    "critique « dommages doublés »)."
                        }
                    ]
                },
                {
                    "id": "SEDUCTION",
                    "nom": "SÉDUCTION",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Charmant",
                            "description": "Le barde ajoute son rang + 2 aux tests effectués pour séduire, convaincre, mentir " +
                                    "ou baratiner. Désormais, il peut dépenser 1 point de chance pour améliorer l’action d’un " +
                                    "compagnon en vue, ce PC permet d’ajouter [1d4° + CHA] sur le résultat du test (au lieu " +
                                    "de +10)."
                        },
                        {
                            "rang": "2",
                            "nom": "Dentelles et rapière",
                            "description": "Le barde ne met pas d’armure, cela ne sied point en société. Sa seule armure est " +
                                    "la dentelle, sa seule défense, la rapière. Lorsqu’il ne porte aucune armure, le barde " +
                                    "ajoute son CHA en DEF (en plus de son AGI), toutefois ce bonus ne peut pas dépasser le " +
                                    "rang atteint dans la voie."
                        },
                        {
                            "rang": "3",
                            "nom": "Baratineur de génie",
                            "description": "Si le barde peut passer 10 minutes avec un humanoïde dont le niveau est inférieur " +
                                    "ou égal à 1 (NC 1), il peut dépenser un 1 PC pour le charmer. La cible répond " +
                                    "favorablement à vos requêtes dans la limite de ce que ferait un ami et ce lien peut se " +
                                    "renforcer avec le temps. Si vous ne partagez pas une langue commune, cela vous coûte 2 PC."
                        },
                        {
                            "rang": "4",
                            "nom": "Charisme héroïque",
                            "description": "Le barde augmente sa valeur de CHA de +1. Désormais, il obtient un dé bonus aux " +
                                    "tests de CHA. De plus, le barde peut désormais utiliser son CHA au lieu de sa VOL pour " +
                                    "calculer le nombre de PM dont il dispose."
                        },
                        {
                            "rang": "5",
                            "nom": "Suggestion (A)*",
                            "description": "Le barde peut suggérer une action à une créature en réussissant un test opposé " +
                                    "d’attaque magique. En cas de réussite, la créature fera tout son possible pour satisfaire " +
                                    "cette demande pendant 1 heure ou jusqu’à avoir réussi. Elle évitera les actions " +
                                    "suicidaires (ce qui lui donnerait immédiatement un test d’INT difficulté 10 pour échapper " +
                                    "au sort). Le sort ne peut pas affecter une créature de niveau supérieur ou égal à celui du " +
                                    "lanceur."
                        }
                    ]
                },
                {
                    "id": "VAGABOND",
                    "nom": "VAGABOND",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Rumeurs et légendes",
                            "description": "À force de voyager, le barde possède une culture générale très vaste, il ajoute " +
                                    "son rang + 2 aux tests d’INT pour se « souvenir » d’une information historique, politique, " +
                                    "géographique ou occulte ou encore pour identifier un objet magique difficulté " +
                                    "(25 – (2 x niveau de magie de l’objet))."
                        },
                        {
                            "rang": "2",
                            "nom": "Éclectique",
                            "description": "Le barde obtient un bonus de +1 à tous les tests de compétence (absolument tous, de " +
                                    "se cacher dans les ombres jusqu’à forger une épée, en passant par traduire une langue " +
                                    "ancienne). Ce bonus ne peut se cumuler à aucun autre bonus de compétence sauf celui du " +
                                    "rang 1 de la voie de peuple. Il augmente de +1 chaque fois qu’il atteint le rang 4 dans " +
                                    "une voie de barde."
                        },
                        {
                            "rang": "3",
                            "nom": "Attirail",
                            "description": "Le barde possède toutes sortes de choses dans son sac ou ses poches. En dépensant 1 " +
                                    "PC, il peut sortir un objet improbable qu’il avait sur lui, mais qui n’est pas inscrit sur " +
                                    "sa fiche de PJ, par exemple un livre de poésie, une bouteille d’un excellent vin, un jouet " +
                                    "pour enfant, un os pour le chien, une lettre de recommandation, etc. (pour une valeur " +
                                    "maximale de 10 pa). Il peut aussi bricoler un objet avec trois bouts de ficelles et un " +
                                    "clou (système D)."
                        },
                        {
                            "rang": "4",
                            "nom": "Compréhension des langues (A)*",
                            "description": "Ce sort permet au barde de lire, écrire et parler une langue vivante étrangère. " +
                                    "Le sort a une durée maximale de CHA heures, mais il peut aussi être lancé sur un allié au " +
                                    "contact et dans ce cas, il ne dure que CHA minutes. À partir du rang 5, il peut aussi " +
                                    "déchiffrer une inscription dans une langue morte."
                        },
                        {
                            "rang": "5",
                            "nom": "Déguisement (A)*",
                            "description": "Ce sort permet au barde de prendre l’apparence de n’importe quelle humanoïde de " +
                                    "taille à peu près équivalente (avec une marge d’environ 50 cm). S’il veut imiter une " +
                                    "personne en particulier, il lui faudra réussir un test de CHA difficulté 15 (20 s’il ne " +
                                    "la connaît pas mais l’a seulement vue, 10 s’il la connaît très bien). Le sort a une durée " +
                                    "maximale de CHA heures, mais il peut aussi être lancé sur un allié au contact et dans ce " +
                                    "cas, il ne dure que CHA minutes."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies du rôdeur
         ****************************************************************************/
        {
            "id": "RODEUR",
            "voies": [
                {
                    "id": "ARCHER",
                    "nom": "ARCHER",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Archer émérite",
                            "description": "Le rôdeur ajoute sa PER aux DM qu’il inflige à l’arc et +1 par rang dans la voie " +
                                    "en initiative. Le joueur peut souhaiter une variante de cette capacité s’appliquant aux " +
                                    "armes de jet (dague, hachette, javelot) plutôt qu’à l’arc (rebaptisez‐la voie du lancer). " +
                                    "Dans ce cas, le PJ ajoute sa FOR aux DM qu’il inflige et double la portée de jet (pas de " +
                                    "bonus d’Init.). Par ailleurs, toutes les capacités de la voie qui suivent s’appliquent aux " +
                                    "armes de jet plutôt qu’à l’arc."
                        },
                        {
                            "rang": "2",
                            "nom": "Tir chirurgical",
                            "description": "Le rôdeur peut tirer sur une cible engagée en mêlée sans pénalité (mais pas sur une " +
                                    "cible à couvert). Il ne risque jamais de toucher un allié, même en cas d’échec critique."
                        },
                        {
                            "rang": "3",
                            "nom": "Dans le mille",
                            "description": "Pour une attaque à distance, le rôdeur peut choisir de s’imposer un dé malus en " +
                                    "attaque. Si elle est réussie, il ajoute 2d4° aux DM. Cette capacité peut être utilisée avec " +
                                    "Tir rapide ou Flèche de mort par exemple. Transformez cette capacité en action limitée (L) " +
                                    "pour obtenir +3d4° aux DM au lieu de 2d4°."
                        },
                        {
                            "rang": "4",
                            "nom": "Tir rapide (L)",
                            "description": "Le rôdeur peut faire deux attaques à distance pendant son tour avec un malus de ‐2."
                        },
                        {
                            "rang": "5",
                            "nom": "Flèche de mort (L)",
                            "description": "Vous obtenez un dé bonus en attaque à distance et vous ajoutez 1d4° aux DM. Au lieu " +
                                    "du dé bonus et de +1d4° aux DM, vous pouvez infliger un état préjudiciable de votre choix " +
                                    "parmi aveuglé, affaibli, ralenti ou immobilisé pendant 1 round à une cible d’un NC inférieur " +
                                    "au vôtre. Vous ne pouvez infliger chaque état préjudiciable qu’une seule fois par combat. <br> " +
                                    "Note : Si le MJ le permet, cette voie peut être déclinée pour une autre catégorie d’arme à " +
                                    "distance : arbalètes, armes à poudre, etc. <br>Conseil aux joueurs : utilisez plutôt Flèche de " +
                                    "mort contre une cible avec une haute DEF et Tir rapide contre des cibles multiples et une " +
                                    "faible DEF."
                        }
                    ]
                },
                {
                    "id": "COMPAGNON_ANIMAL",
                    "nom": "COMPAGNON ANIMAL",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Le loup",
                            "description": "Le rôdeur obtient un loup pour compagnon animal. En combat, le loup attaque en même temps " +
                                    "que le rôdeur. Le loup comprend des ordres simples comme : garde, reste, apporte, attaque, etc. <br> " +
                                    "<b>AGI</b> +1; <b>CON</b> +1*; <b>FOR</b> +2; <b>PER</b> +2*; <b>CHA</b> -2; <b>INT</b> -3; <b>VOL</b> +2; " +
                                    "<b>DEF</b> [12 + rang dans la voie]; <b>PV</b> [niv. du rôdeur × 4]; <b>INIT</b> [Init. du rôdeur]; " +
                                    "<b>Attaque au contact</b> [attaque magique du rôdeur]; <b>DM</b> 1d4+2"
                        },
                        {
                            "rang": "2",
                            "nom": "Travail d’équipe",
                            "description": "Lorsque le loup et le rôdeur sont au contact, le loup obtient un dé bonus en attaque " +
                                    "et le rôdeur obtient un dé bonus aux tests effectués pour pister ou pour éviter d’être " +
                                    "surpris (Vigilance)."
                        },
                        {
                            "rang": "3",
                            "nom": "Lien empathique (L)",
                            "description": "Le rôdeur peut communiquer avec son loup par télépathie et le guérir à distance en " +
                                    "dépensant ses propres PV (1 PV du rôdeur pour 1 PV octroyé au loup, sans limitation de " +
                                    "quantité) au prix d’une action limitée."
                        },
                        {
                            "rang": "4",
                            "nom": "Loup alpha",
                            "description": "Le loup du rôdeur devient un spécimen particulièrement puissant. <br> " +
                                    "<b>CON</b> +3*; <b>FOR</b> +5; <b>DEF</b> 18; <b>PV</b> [Niveau × 5]; <b>DM</b> 1d4°+5 "
                        },
                        {
                            "rang": "5",
                            "nom": "Tactiques de meute",
                            "description": "Lorsque le loup attaque la même cible que le rôdeur, il obtient un bonus de 1d4° aux " +
                                    "DM. Chaque fois que le rôdeur dépense 1 PV pour soigner son loup, le loup récupère 2 PV. " +
                                    "De plus, le rôdeur et son loup augmentent leur DEF de +1 chaque fois que le personnage " +
                                    "atteint le rang 5 dans une voie de rôdeur (celle‐ci incluse)."
                        }
                    ]
                },
                {
                    "id": "SURVIE",
                    "nom": "SURVIE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Survie",
                            "description": "Le rôdeur ajoute son rang + 2 à tous les tests d’escalade et de survie en milieu " +
                                    "naturel (s’orienter, trouver un abri et de la nourriture, etc.) dont les tests de " +
                                    "récupération effectués chaque nuit. Lorsqu’il dort en milieu naturel, s’il dépense 1 " +
                                    "dé de récupération (DR), il guérit 1d4° PV supplémentaire (en plus de [DR max + 1⁄2 niveau])."
                        },
                        {
                            "rang": "2",
                            "nom": "Nature nourricière",
                            "description": "Une fois par jour, si le rôdeur passe 1d6 h en milieu naturel sauvage (pas dans un " +
                                    "champ), il trouve de quoi nourrir une personne par rang pour une journée et, s’il réussit un " +
                                    "test de PER (Survie) difficulté 10, il trouve des plantes médicinales pour soigner 1d4° PV " +
                                    "par rang. Les plantes doivent être utilisées immédiatement (10 min de préparation et autant " +
                                    "pour faire effet) et les dés peuvent être répartis sur plusieurs patients."
                        },
                        {
                            "rang": "3",
                            "nom": "Grand pas (G)",
                            "description": "En milieu naturel, le rôdeur obtient +1 en DEF (ce bonus passe à +2 au rang 5) et 10 m " +
                                    "de déplacement en action gratuite (à son tour de jeu). Enfin, il n’est pas gêné par les " +
                                    "terrains difficiles naturels, mais il n’obtient pas alors de déplacement supplémentaire."
                        },
                        {
                            "rang": "4",
                            "nom": "Constitution héroïque",
                            "description": "Le rôdeur augmente sa valeur de CON de +1. Désormais, il obtient un dé bonus aux " +
                                    "tests de CON."
                        },
                        {
                            "rang": "5",
                            "nom": "Increvable (L)",
                            "description": "Une fois par combat, lorsqu’il tombe à 0PV, le rôdeur peut récupérer [4d4° + CON] PV " +
                                    "au début de son prochain tour. Lorsqu’il se relève, il bénéficie d’un bonus de +5 en DEF " +
                                    "pendant 1 round et il se débarrasse de tous les états préjudiciables non permanents qui " +
                                    "l’affectent."
                        }
                    ]
                },
                {
                    "id": "TRAQUEUR",
                    "nom": "TRAQUEUR",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Éclaireur",
                            "description": "En milieu naturel, le rôdeur ajoute son rang + 2 à ses tests de discrétion et de " +
                                    "vigilance ainsi qu’aux tests pour pister. De plus, le rôdeur peut remplacer le bonus de +1 " +
                                    "PC de la famille des aventuriers par un bonus de +1 DR si le joueur le souhaite."
                        },
                        {
                            "rang": "2",
                            "nom": "Attaque éclair (L)",
                            "description": "Le rôdeur peut effectuer une attaque au contact très rapide. Il ajoute son AGI en " +
                                    "attaque et aux DM pour cette attaque. À partir du rang 5, cette attaque peut être associée à " +
                                    "10 m de déplacement."
                        },
                        {
                            "rang": "3",
                            "nom": "Chasseur émérite",
                            "description": "Le rôdeur obtient +1d4° aux DM de ses attaques au contact ou à distance lorsqu’il " +
                                    "combat des animaux (même géants). Chaque fois qu’il atteint le rang 5 dans une voie de rôdeur, " +
                                    "il peut choisir un ennemi juré contre lequel il obtient le même avantage parmi les goblinoïdes, " +
                                    "les géants, les dragons, les morts‐vivants, les insectes*, les démons. <br> * arthropodes inclus."
                        },
                        {
                            "rang": "4",
                            "nom": "Perception héroïque",
                            "description": "Le rôdeur augmente sa valeur de PER de +1.Désormais, il obtient un dé bonus aux tests de PER."
                        },
                        {
                            "rang": "5",
                            "nom": "Repli (L)",
                            "description": "En milieu naturel, le rôdeur se déplace de 30 m en s’éloignant de ses ennemis. Le joueur " +
                                    "fait un test d’AGI difficulté 10, en cas de succès, il disparaît de la vue de ses poursuivants. " +
                                    "Il peut s’éloigner ou rester caché sans risque d’être retrouvé ou rattrapé. Si le terrain est " +
                                    "découvert (désert, plaine), la difficulté passe à 15."
                        }
                    ]
                },
                {
                    "id": "COMBAT_2_ARMES",
                    "nom": "COMBAT À DEUX ARMES",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Attaque à suivre (G)",
                            "description": "Une fois par round, lorsqu’il rate une attaque de sa main principale, le rôdeur peut " +
                                    "porter une attaque en action gratuite de son autre main avec une arme parmi dague (dague de " +
                                    "lancer), hachette (hache de lancer) ou épée courte. S’il utilise une arme à une main en dehors " +
                                    "de cette liste, il subit un dé malus sur cette attaque."
                        },
                        {
                            "rang": "2",
                            "nom": "Parade croisée",
                            "description": "Le rôdeur obtient un bonus de +1 en DEF lorsqu’il combat avec une arme dans chaque " +
                                    "main. Ce bonus passe à +2 au rang 5 de la voie. Au début de son tour, s’il renonce à toute " +
                                    "attaque de la main secondaire, il double ce bonus jusqu’à son prochain tour."
                        },
                        {
                            "rang": "3",
                            "nom": "Droite ‐ gauche (G)",
                            "description": "Une fois par round, lorsqu’il attaque de sa main principale, le rôdeur obtient aussi une " +
                                    "attaque de sa main secondaire en action gratuite. Si la cible n’est pas la même que celle de la main " +
                                    "principale, il subit un dé malus au test. Cette capacité se substitue à Attaque à suivre."
                        },
                        {
                            "rang": "4",
                            "nom": "Combattant héroïque",
                            "description": "Le rôdeur augmente sa valeur d’AGI de +1 et obtient un dé bonus aux tests d’AGI (lancer " +
                                    "deux d20 et conserver le plus haut résultat). Plutôt qu’augmenter son AGI, le personnage " +
                                    "peut choisir d’augmenter sa valeur de FOR de +1 (pas de dé bonus aux tests) et peut désormais " +
                                    "attaquer avec la même arme dans la main secondaire sans subir de dé malus (par exemple deux " +
                                    "épées longues)."
                        },
                        {
                            "rang": "5",
                            "nom": "Double peine",
                            "description": "Si les deux armes du rôdeur atteignent la même cible lors d’un même tour, le personnage " +
                                    "obtient un effet d’enchaînement qui ajoute 1d4° DM à l’une des deux attaques de son choix."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies du voleur
         ****************************************************************************/
        {
            "id": "VOLEUR",
            "voies": [
                {
                    "id": "ASSASSIN",
                    "nom": "ASSASSIN",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Discrétion",
                            "description": "Le voleur ajoute son rang + 2 à tous les tests de discrétion, de déguisement ou " +
                                    "pour cacher une arme sur lui. Il apprend le langage silencieux à base de signe des voleurs " +
                                    "(argotien) et enfin il obtient un dé bonus en attaque lorsqu’il attaque un adversaire surpris."
                        },
                        {
                            "rang": "2",
                            "nom": "Attaque sournoise (L)",
                            "description": "Une fois par round, quand il attaque un adversaire surpris ou de dos** avec une arme " +
                                    "légère, le voleur inflige +2d4° DM supplémentaires. Les DM infligés par cette capacité " +
                                    "augmentent de 1d4° à chaque fois qu’il atteint le rang 4 dans une voie de voleur (pour un " +
                                    "maximum de 7d4°). Cette capacité nécessite l’utilisation d’une arme légère (dague, " +
                                    "éventuellement lancée, épée courte, rapière) dans tous les autres cas, le bonus aux DM " +
                                    "est divisé par deux (cela comprend les armes à distance). <br> " +
                                    "** Attaquer de dos : lorsque le voleur attaque la même créature qu’un allié au contact " +
                                    "de cette cible, on considère qu’il peut attaquer celle‐ci de dos (sauf si la cible peut " +
                                    "se placer dos à un obstacle infranchissable)."
                        },
                        {
                            "rang": "3",
                            "nom": "Attaque par surprise (A)",
                            "description": "Contre un adversaire surpris, le voleur peut réaliser une attaque sournoise en " +
                                    "utilisant une action d’attaque plutôt qu’une action limitée et il augmente les DM de " +
                                    "son attaque sournoise de 2d4°."
                        },
                        {
                            "rang": "4",
                            "nom": "Disparition (M)",
                            "description": "Une fois par combat, le voleur peut disparaître dans un flash lumineux et un " +
                                    "nuage de fumée. Aucun adversaire ne peut l’attaquer pendant qu’il a disparu, mais il " +
                                    "peut subir des DM de zone. Il ne réapparaît qu’au début de son prochain tour à une " +
                                    "distance maximale de 20 m de sa position initiale. À ce moment, si le voleur a " +
                                    "l’initiative, il peut réaliser une attaque sournoise."
                        },
                        {
                            "rang": "5",
                            "nom": "Ouverture mortelle (L)",
                            "description": "Une fois par combat, le voleur obtient une réussite critique automatique " +
                                    "contre la cible de son choix. Il profite donc d’une réussite automatique, des dommages " +
                                    "multipliés par 2 prévus dans ce cas et d’une attaque sournoise (dont les DM ne sont " +
                                    "pas doublés)."
                        }
                    ]
                },
                {
                    "id": "AVENTURIER",
                    "nom": "AVENTURIER",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Baratin",
                            "description": "Le voleur ajoute son rang + 2 aux tests destinés à baratiner, séduire, négocier, " +
                                    "mentir ou pour trouver un objet au marché noir. De plus, il devient capable d’utiliser " +
                                    "les parchemins ou les baguettes magiques en réussissant un test d’attaque magique (L) " +
                                    "contre une difficulté de (10 + (2 x rang du sort inscrit)). En cas d’échec, le sort " +
                                    "n’est pas lancé et le voleur peut faire une nouvelle tentative."
                        },
                        {
                            "rang": "2",
                            "nom": "Provocation (L)",
                            "description": "Le voleur maîtrise l’art de se rendre désagréable, voire insupportable. S’il " +
                                    "emporte un test opposé de CHA contre INT d’un adversaire humanoïde à moins de 10 m, il " +
                                    "force la cible à l’attaquer à son prochain tour. À ce moment‐là, si le voleur est au " +
                                    "contact, il peut riposter par une attaque de contact gratuite pour laquelle il bénéficie " +
                                    "au choix d’une attaque sournoise ou d’un bonus de 1d4° aux DM."
                        },
                        {
                            "rang": "3",
                            "nom": "Souplesse du félin",
                            "description": "Le voleur possède une démarche et une façon de se déplacer à la fois élégante, " +
                                    "féline et souple. Il ajoute +2 en DEF et en Initiative. Ce bonus passe à +3 au rang 5. " +
                                    "Il lui faut seulement une action de mouvement pour se relever."
                        },
                        {
                            "rang": "4",
                            "nom": "Charisme héroïque",
                            "description": "Le voleur augmente sa valeur de CHA de +1.Désormais, il obtient un dé bonus aux " +
                                    "tests de CHA."
                        },
                        {
                            "rang": "5",
                            "nom": "Attaque paralysante (L)",
                            "description": "Une fois par combat, le voleur peut, en réussissant une attaque de contact, " +
                                    "paralyser un adversaire humanoïde de douleur. La cible ne subit aucun DM, mais elle " +
                                    "est immobilisée pendant 1d4 rounds ou, si son NC est inférieur à la moitié du niveau " +
                                    "du voleur, elle est paralysée. De plus, le voleur peut désormais utiliser au choix " +
                                    "l’attaque sournoise (s’il détient cette capacité) ou infliger +1d4° DM contre tout " +
                                    "adversaire immobilisé ou paralysé."
                        }
                    ]
                },
                {
                    "id": "DEPLACEMENT",
                    "nom": "DÉPLACEMENT",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Agile",
                            "description": "Le voleur ajoute son rang + 2 à tous tests liés à un déplacement (esquive, saut, " +
                                    "course, équilibre, escalade, se glisser entre des barreaux ou échapper à une créature qui " +
                                    "l’agrippe). De plus, il bénéficie d’un bonus de +1 en DEF et en Initiative. Ce bonus " +
                                    "passe à +2 au rang 3 et +3 au rang 5."
                        },
                        {
                            "rang": "2",
                            "nom": "Réflexes félins",
                            "description": "Le voleur divise par 2 tous les DM de chute. De plus, une fois par combat, il " +
                                    "obtient une action de mouvement supplémentaire à son tour. Au rang 5, il peut réaliser " +
                                    "cet exploit 2 fois par combat (mais pas plus d’une fois par round)."
                        },
                        {
                            "rang": "3",
                            "nom": "Acrobaties (G)",
                            "description": "Une fois par round, si le voleur réussit un test d’AGI difficulté 15, il peut " +
                                    "effectuer une acrobatie pour franchir un obstacle (qui peut être un adversaire) ou " +
                                    "attaquer de dos un adversaire au contact. Il peut alors au choix utiliser l’attaque " +
                                    "sournoise ou infliger +1d4° DM."
                        },
                        {
                            "rang": "4",
                            "nom": "Agilité héroïque",
                            "description": "Le voleur augmente sa valeur d’AGI de +1. Désormais, il obtient un dé bonus aux " +
                                    "tests d’AGI."
                        },
                        {
                            "rang": "5",
                            "nom": "Esquive de la magie (G)",
                            "description": "Une fois par round, lorsqu’un sort qui inflige des DM physiques (feu, froid, " +
                                    "projectile magique, etc.) le prend pour cible (y compris un sort de zone ou l’affectant " +
                                    "en plus de la personne visée), le voleur peut effectuer un test d’attaque à distance " +
                                    "opposé à un test d’attaque magique du lanceur sort. S’il réussit, il échappe au sort. " +
                                    "S’il échoue, il subit les DM normaux."
                        }
                    ]
                },
                {
                    "id": "ROUBLARD",
                    "nom": "ROUBLARD",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Doigts agiles",
                            "description": "Le voleur ajoute son rang + 2 aux tests liés à la précision manuelle (crocheter " +
                                    "une serrure, désamorcer un piège, pickpocket...) ainsi qu’aux tests pour évaluer un " +
                                    "objet précieux (joyaux, bijoux, etc.). De plus il obtient +1 aux DM des attaques à " +
                                    "distance avec les dagues et couteaux. Ce bonus passe à +2 au rang 3 de la voie et " +
                                    "+3 au rang 5."
                        },
                        {
                            "rang": "2",
                            "nom": "Aux aguets",
                            "description": "Le voleur ajoute son rang + 2 aux tests effectués pour fouiller une pièce à la " +
                                    "recherche d’un trésor, détecter un piège (même magique), un passage secret ou même une " +
                                    "embuscade (Vigilance). De plus, il divise par 2 les DM infligés par des pièges."
                        },
                        {
                            "rang": "3",
                            "nom": "Feindre la mort (G)",
                            "description": "Une fois par combat, le voleur peut feindre la mort après avoir reçu une blessure " +
                                    "(même à 0 PV). Il peut ainsi passer pour mort aussi longtemps qu’il le souhaite et un test " +
                                    "d’INT difficulté 20 est nécessaire pour révéler la supercherie. Lorsqu’il décide de se " +
                                    "relever (action gratuite), le voleur récupère immédiatement 1d4° PV et s’il est au contact " +
                                    "d’un adversaire, celui‐ci est surpris. Un adversaire qui a déjà été victime de cette " +
                                    "stratégie du voleur lors d’un précédent combat ne se laisse pas surprendre une seconde " +
                                    "fois (sauf si son INT est de ‐4)."
                        },
                        {
                            "rang": "4",
                            "nom": "Expert en criminalité",
                            "description": "Le voleur obtient un dé bonus sur tous les tests de recherche d’indice (Trouver une " +
                                    "preuve [PER], Faire une déduction [INT] et Obtenir un aveu [CHA]) ainsi que pour tous les " +
                                    "tests réalisés pour brouiller des pistes, réaliser de faux indices ou de faux documents. De " +
                                    "plus, lorsqu’il est dans un lieu, s’il dépense 1 PC, le MJ devra lui donner un indice qui " +
                                    "lui a échappé jusque‐là. S’il n’y a pas d’indice, le PC n’est pas dépensé."
                        },
                        {
                            "rang": "5",
                            "nom": "Maître du poison",
                            "description": "Le voleur peut utiliser 3 doses de poison par jour sans risque de s’empoisonner " +
                                    "lui‐même. Une dose permet d’enduire une dague, une flèche ou un carreau pour infliger " +
                                    "+2d4° DM supplémentaire et demande un test de CON difficulté (10 + INT du voleur) ou une " +
                                    "cible vivante est affaiblie pour le reste du combat. Alternativement, une dose peut être " +
                                    "versée dans les aliments pour une personne ; si la cible rate son test de CON, elle sombre " +
                                    "dans l’inconscience pour 2d6 min (4d6 min pour 2 doses, etc.)."
                        }
                    ]
                },
                {
                    "id": "SPADASSIN",
                    "nom": "SPADASSIN",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Attaque en finesse",
                            "description": "Le voleur ajoute son AGI à son Init. et peut remplacer sa FOR par son AGI pour ses " +
                                    "tests d’attaque au contact (mais pas aux DM) lorsqu’il utilise une arme légère à une main " +
                                    "(dague, épée courte ou rapière). Enfin, il obtient un bonus égal à son rang + 2 aux tests " +
                                    "d’intimidation."
                        },
                        {
                            "rang": "2",
                            "nom": "Esquive fatale (G)",
                            "description": "Une fois par combat, le voleur peut esquiver une attaque et s’arranger pour que " +
                                    "celle‐ci affecte un autre adversaire à son contact. Comparez le test d’attaque à la " +
                                    "DEF de la nouvelle cible pour savoir si celle‐ci subit des DM. Cette capacité ne peut " +
                                    "pas être utilisée si le voleur n’a qu’un seul adversaire au contact et jamais contre une " +
                                    "réussite critique (un critique touche toujours sa cible)."
                        },
                        {
                            "rang": "3",
                            "nom": "Frappe chirurgicale",
                            "description": "Par sa science de l’escrime (et de la fourberie), le voleur augmente ses chances de " +
                                    "faire des coups critiques avec une arme légère de 2 points (ainsi, au lieu de 20, le " +
                                    "critique standard est obtenu entre 18 et 20). Toutefois, la valeur minimale requise pour " +
                                    "obtenir un critique ne peut être inférieure à 16."
                        },
                        {
                            "rang": "4",
                            "nom": "Ambidextrie (G)",
                            "description": "Avec sa main gauche, le voleur peut effectuer une attaque au contact gratuite avec " +
                                    "une dague ou une épée courte à chaque round. Cette attaque ne peut pas bénéficier des " +
                                    "avantages d’une attaque sournoise."
                        },
                        {
                            "rang": "5",
                            "nom": "Botte secrète",
                            "description": "Lorsque le voleur obtient un critique sur le dé d’une attaque au contact de sa main " +
                                    "principale avec une arme légère (mais pas sur une ouverture mortelle), il inflige à sa " +
                                    "cible un état préjudiciable au choix parmi affaibli, aveuglé, étourdi, immobilisé ou " +
                                    "ralenti pendant 1 round. Vous ne pouvez infliger chaque état préjudiciable qu’une seule " +
                                    "fois par combat. Alternativement, le voleur peut choisir que l’attaque devienne une attaque " +
                                    "sournoise dont les DM s’ajoutent au critique (au lieu d’infliger un état préjudiciable)."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies du barbare
         ****************************************************************************/
        {
            "id": "BARBARE",
            "voies": [
                {
                    "id": "BRUTE",
                    "nom": "BRUTE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Argument de taille",
                            "description": "Le barbare ajoute sa FOR à son maximum de PV ainsi qu’à ses tests de CHA et à ceux " +
                                    "de ses alliés au contact pour les tests de négociation, de persuasion ou d’intimidation. " +
                                    "Allez savoir pourquoi, sa simple présence donne de la force aux arguments de ses alliés..."
                        },
                        {
                            "rang": "2",
                            "nom": "Tour de force (G)",
                            "description": "Le barbare peut temporairement décupler ses ressources physiques pour faire usage " +
                                    "d’une force prodigieuse. Il obtient un bonus de +10 sur un test de FOR (pas un jet de DM " +
                                    "ou un test d’attaque), mais cela lui coûte 1d4° PV (à décider avant de lancer les dés). " +
                                    "Enfin, le barbare peut désormais porter une chemise de mailles et utiliser toutes les " +
                                    "capacités des voies de barbare auparavant autorisées avec une armure de cuir renforcé."
                        },
                        {
                            "rang": "3",
                            "nom": "Attaque brutale (L)",
                            "description": "Le barbare effectue une puissante attaque au contact qui inflige +1d4° aux " +
                                    "DM. À la place, il peut choisir de s’imposer un malus de ‐3 au test d’attaque pour " +
                                    "obtenir +2d4° aux DM. Sur une attaque brutale réussie, il peut sacrifier 1d4° DM pour " +
                                    "faire reculer de 3 m un adversaire de NC inférieur au rang atteint dans la voie, ou " +
                                    "sacrifier 2d4° DM pour le renverser."
                        },
                        {
                            "rang": "4",
                            "nom": "Force héroïque",
                            "description": "Le barbare augmente sa FOR de +1. Désormais, il obtient un dé bonus aux tests de FOR."
                        },
                        {
                            "rang": "5",
                            "nom": "Briseur d’os",
                            "description": "Le barbare augmente de 1 point les chances d’obtenir un critique sur les attaques " +
                                    "au contact (par exemple 19‐20 au lieu de 20). Lorsqu’il obtient un critique sur une attaque " +
                                    "au contact, en plus des DM doublés, la cible est étourdie pendant 1 round. Enfin, le barbare " +
                                    "peut désormais porter une cotte de mailles et utiliser toutes les capacités des voies de " +
                                    "barbare auparavant autorisées avec une chemise de mailles."
                        }
                    ]
                },
                {
                    "id": "PAGNE",
                    "nom": "PAGNE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Vigueur",
                            "description": "Le barbare est un athlète capable de prouesses physiques extraordinaires, il ajoute " +
                                    "son rang +2 aux tests de course, de saut ou d’escalade. De plus, il gagne 1 PV " +
                                    "supplémentaire par rang atteint dans la voie."
                        },
                        {
                            "rang": "2",
                            "nom": "Peau de pierre",
                            "description": "Le barbare est particulièrement endurci, il encaisse les coups plutôt que de les " +
                                    "esquiver. Il peut choisir de remplacer son AGI par sa CON pour calculer sa DEF (la limitation " +
                                    "du bonus maximal en fonction de l’armure portée s’applique toujours, mais cette fois elle " +
                                    "s’applique à la CON). Autrement (si son AGI est supérieure ou égale à sa CON), il reçoit +1 " +
                                    "en DEF et ce bonus passe à +2 au rang 4."
                        },
                        {
                            "rang": "3",
                            "nom": "Tatouages",
                            "description": "Le barbare possède un tatouage magique qui améliore ses performances physiques ou " +
                                    "mentales. Au choix : Taureau (+3 aux tests de FOR), ours (+3 aux tests de CON), panthère " +
                                    "(+3 aux tests d’AGI), chouette (+3 aux tests de PER), loup (+3 aux tests de CHA), renard " +
                                    "(+3 aux tests d’INT) ou serpent (+3 aux tests de VOL). De plus, lorsqu’il subit l’état étourdi, " +
                                    "il est seulement ralenti."
                        },
                        {
                            "rang": "4",
                            "nom": "Constitution héroïque",
                            "description": "Le barbare augmente sa valeur de CON de +1 et obtient un dé bonus aux tests de CON."
                        },
                        {
                            "rang": "5",
                            "nom": "Peau d’acier",
                            "description": "Le barbare ne sent plus la douleur et ignore les égratignures, il réduit tous les DM " +
                                    "subis de 3 points (RD 3). Une attaque lui inflige toujours au minimum 1 DM."
                        }
                    ]
                },
                {
                    "id": "POURFENDEUR",
                    "nom": "POURFENDEUR",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Réflexes éclair",
                            "description": "Le barbare ajoute son rang + 2 à tous les tests d’AGI destinés à esquiver (Explosion " +
                                    "de feu, souffle, pièges, etc.). De plus, il gagne +3 en Init. et +1 en DEF. Le bonus de DEF " +
                                    "passe à +2 au rang 5."
                        },
                        {
                            "rang": "2",
                            "nom": "Charge (L)",
                            "description": "Le barbare se déplace en ligne droite entre 5 m et 10 m et effectue une attaque au " +
                                    "contact avec un dé bonus et +1d4° aux DM. Il ne peut pas lancer une charge s’il est au " +
                                    "contact d’un adversaire."
                        },
                        {
                            "rang": "3",
                            "nom": "Enchaînement",
                            "description": "Chaque fois que le barbare réduit un adversaire à 0 PV avec une attaque de contact, " +
                                    "il bénéficie d’une action d’attaque gratuite sur un autre adversaire à son contact. Enchaînement " +
                                    "ne peut pas être cumulé à un déchaînement d’acier ou une attaque tourbillon."
                        },
                        {
                            "rang": "4",
                            "nom": "Déchaînement d’acier (L)",
                            "description": "Le barbare parcourt 10 m en ligne droite en dépassant autant d’ennemis qu’il le souhaite. " +
                                    "Il porte une attaque avec un malus de ‐2 à chaque adversaire sur son passage. Il doit traverser " +
                                    "l’espace occupé par ceux‐ci pour porter un coup, mais il ne peut terminer son déplacement à un " +
                                    "endroit occupé par un ennemi."
                        },
                        {
                            "rang": "5",
                            "nom": "Attaque tourbillon (L)",
                            "description": "Une fois par combat, le barbare tourne sur lui‐même en assénant des attaques à toutes " +
                                    "les cibles au contact. Il inflige automatiquement des DM correspondant à l’arme utilisée (plus " +
                                    "tous les bonus habituels) à toutes les cibles dans un rayon de 5 m autour de lui."
                        }
                    ]
                },
                {
                    "id": "PRIMITIF",
                    "nom": "PRIMITIF",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Proche de la nature",
                            "description": "Le barbare ajoute son rang + 2 à ses tests de survie (dont les tests de récupération) et " +
                                    "de discrétion en milieu naturel. De plus, il gagne 1 PV supplémentaire."
                        },
                        {
                            "rang": "2",
                            "nom": "Armure de vent",
                            "description": "Lorsqu’il ne porte aucune armure, le barbare peut se relever par une action de mouvement " +
                                    "et il obtient +2 en DEF. Ce bonus passe à +3 au rang 5. S’il porte une armure, il gagne " +
                                    "seulement +1 en DEF."
                        },
                        {
                            "rang": "3",
                            "nom": "Vigilance",
                            "description": "Le barbare possède des sens très affûtés, il est difficile de le surprendre, il ajoute " +
                                    "son rang + 2 à tous les tests effectués pour détecter les pièges mécaniques, magiques (ses " +
                                    "poils se hérissent) ou les embuscades. Il devient immunisé aux Attaques sournoises d’un voleur " +
                                    "ou à toute capacité similaire d’une créature de niveau inférieur au sien."
                        },
                        {
                            "rang": "4",
                            "nom": "Résistance à la magie (G)",
                            "description": "Le barbare devient capable de résister à la magie. Lorsqu’il est la cible d’un sort, " +
                                    "une fois par round, il peut faire un test d’attaque magique (dés malus si hybride) opposé " +
                                    "à celui du sort (si le sort n’en demande pas, faites‐en tout de même un à cette occasion). " +
                                    "En cas de réussite, il n’en subit pas les effets."
                        },
                        {
                            "rang": "5",
                            "nom": "Vitalité débordante",
                            "description": " Le barbare guérit à une vitesse presque surnaturelle. Tant que son niveau actuel " +
                                    "de PV est compris entre 1 et un tiers de son maximum, il récupère 1d4° PV par heure, de " +
                                    "nuit comme de jour."
                        }
                    ]
                },
                {
                    "id": "RAGE",
                    "nom": "RAGE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Cri de guerre (G)",
                            "description": "Une fois par combat, le barbare pousse un hurlement qui effraie ses adversaires " +
                                    "dans un rayon de 10 m. Les adversaires dont la FOR est inférieure à celle du barbare " +
                                    "subissent un dé malus à leurs tests d’attaque au contact durant leur prochain tour. " +
                                    "De plus, le barbare est sans peur, il ajoute son rang + 2 à tous les tests de VOL " +
                                    "destinés à résister à la peur."
                        },
                        {
                            "rang": "2",
                            "nom": "Défier la mort",
                            "description": "Une fois par combat, lorsque le barbare subit des DM d’une attaque qui devrait " +
                                    "l’amener à 0 PV, il peut réaliser un test de CON difficulté 10. En cas de réussite, il " +
                                    "conserve 1 PV. S’il est enragé, la réussite est automatique."
                        },
                        {
                            "rang": "3",
                            "nom": "Rage du berserk (L)",
                            "description": "Une fois par jour, le barbare entre dans une rage berserk pour le reste du combat, " +
                                    "ce qui le rend particulièrement dangereux. Il obtient +1d4° DM sur ses attaques au contact, " +
                                    " mais il subit ‐2 en DEF et ne peut fuir de son propre gré ou attaquer à distance. Enfin, " +
                                    "il obtient un dé bonus pour tous les tests de VOL. S’il veut stopper la rage avant d’avoir " +
                                    "éliminé tous les ennemis sur le terrain, le barbare doit réussir un test de VOL difficulté " +
                                    "15 (un seul essai, à la fin de son tour). S’il devient inconscient, la rage cesse. Le " +
                                    "personnage peut entrer en rage une fois de plus par jour pour chaque capacité de rang 4 " +
                                    "qu’il atteint dans une voie de barbare."
                        },
                        {
                            "rang": "4",
                            "nom": "Même pas mal",
                            "description": "Une fois par combat, le barbare peut ignorer les DM d’un coup critique (il ne subit " +
                                    "aucun DM) et il peut alors immédiatement entrer en Rage par une action gratuite."
                        },
                        {
                            "rang": "5",
                            "nom": "Furie du berserk (L)",
                            "description": "Au lieu de la Rage du berserk, le barbare peut entrer en Furie du berserk, mais " +
                                    "cela consomme deux utilisations de la rage. Cet état est similaire à la rage, mais le " +
                                    "barbare ajoute 2d4° aux DM (au lieu de 1d4°) et subit ‐4 en DEF. La difficulté du test pour " +
                                    "mettre prématurément fin à la furie est égale à 20."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies du chevalier
         ****************************************************************************/
        {
            "id": "CHEVALIER",
            "voies": [
                {
                    "id": "CAVALIER",
                    "nom": "CAVALIER",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Fidèle monture",
                            "description": "Le chevalier possède une fidèle monture (voir page suivante), un cheval de guerre " +
                                    "bien dressé qui comprend les ordres simples. À cheval, il peut ajouter un déplacement de " +
                                    "10 m avant ou après une action normale (par exemple, parcourir 10 m et réaliser une " +
                                    "action limitée). La monture n’attaque que si elle est elle‐même attaquée au contact par " +
                                    "une créature. De plus, le chevalier ajoute son rang + 2 aux tests d’équitation et de " +
                                    "dressage. <br>" +
                                    "<b>FIDELE MONTURE</b> : <b>AGI</b> +0 <b>CON</b> +4* <b>FOR</b> +5 <b>PER</b> +0 " +
                                    "<b>CHA</b> +0 <b>INT</b> ‐2 <b>VOL</b> +2 <b>Défense</b> [12 + rang] <b>Points de vigueur</b> " +
                                    "[10 + Niveau × 4] <b>Initiative</b> [Init. du chevalier] <b>Attaque Ruade</b> +5 " +
                                    "<b>DM</b> 1d4°+5 <br>La monture peut être soignée comme un personnage et elle récupère " +
                                    "1d8+4 PV par nuit. Si la fidèle monture meurt, le chevalier en récupère une au niveau " +
                                    "suivant. Selon son peuple, un personnage peut obtenir une monture différente ayant les mêmes " +
                                    "caractéristiques : yack ou sanglier (nain), cerf ou orignal (elfe)."
                        },
                        {
                            "rang": "2",
                            "nom": "Cavalier émérite",
                            "description": "Lorsqu’il est en selle, le chevalier gagne un bonus de +1 aux DM de ses attaques " +
                                    "au contact, et sa monture obtient une DEF égale à celle du chevalier. Monter ou descendre " +
                                    "de cheval est désormais une action gratuite. Le bonus aux DM passe à +2 au rang 5."
                        },
                        {
                            "rang": "3",
                            "nom": "Charge (L)",
                            "description": "À cheval, le chevalier peut effectuer un déplacement de 10 à 20 m en ligne droite " +
                                    "et faire une attaque de contact placée au moment de son choix. Le joueur obtient un dé " +
                                    "bonus au test d’attaque et ajoute 1d4° aux DM. Si une créature s’interpose pour bloquer " +
                                    "la charge du chevalier, elle doit réussir un test de FOR difficulté 20 ou être contrainte " +
                                    "de céder le passage en subissant 1d4° DM. Si elle réussit ce test, la Charge est bloquée " +
                                    "et le tour du chevalier se termine."
                        },
                        {
                            "rang": "4",
                            "nom": "Monture magique",
                            "description": "Le chevalier obtient une monture magique, qui peut apparaître et disparaître depuis " +
                                    "un autre plan à volonté. Il peut l’invoquer à tout moment (c’est une action limitée) et " +
                                    "elle apparaît alors pour se mettre à son service. Lorsqu’il la laisse au moins une heure " +
                                    "dans son plan d’origine, elle guérit l’ensemble de ses PV."
                        },
                        {
                            "rang": "5",
                            "nom": "Monture fantastique",
                            "description": "Le chevalier obtient une monture puissante (cheval de guerre lourd, ours, félin " +
                                    "géant, etc.). <b>Init.</b> [Init. du chevalier], <b>DEF</b> 20, <b>PV</b> [10 + niveau du " +
                                    "chevalier × 6], <b>Ruade ou morsure</b> [attaque magique], <b>DM</b> 2d4°+5. La valeur " +
                                    "exacte des caractéristiques peut varier " +
                                    "selon la créature. Lorsqu’il est en selle, le chevalier peut faire attaquer sa monture une " +
                                    "fois par round en action gratuite. À partir du niveau 9, le chevalier peut obtenir une " +
                                    "monture volante (pégase, griffon, hippogriffe, etc.) si le MJ l’autorise (il devra vérifier " +
                                    "qu’une monture volante n’entre pas en contradiction avec les aventures prévues). Dans ce " +
                                    "cas, en vol, la monture couvre une distance de 20 m par action de mouvement, mais ses PV " +
                                    "sont seulement égaux à [10 + niveau × 5]."
                        }
                    ]
                },
                {
                    "id": "GUERRE",
                    "nom": "GUERRE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Armure sur mesure",
                            "description": "L’armure du chevalier est parfaitement ajustée, aussi il n’ajoute que la moitié de " +
                                    "sa DEF à la difficulté des tests pour lesquels l’armure inflige une pénalité. De plus, " +
                                    "lorsqu’il porte une armure lourde (plaque ou plaque complète), il obtient un bonus de +1 en " +
                                    "DEF à chaque fois qu’il atteint le rang 5 dans une voie de chevalier."
                        },
                        {
                            "rang": "2",
                            "nom": "Encaisser un coup (M)",
                            "description": "Le chevalier se place de façon à dévier un coup sur son armure. Jusqu’à son tour au " +
                                    "round suivant, il peut retrancher la valeur de DEF de son armure (bonus de magie inclus si " +
                                    "elle est enchantée) aux DM d’une seule attaque au contact qu’il subit (minimum 1 DM). Au " +
                                    "rang 5, il peut ajouter son bonus de bouclier (là aussi, bonus de magie inclus et cumulable " +
                                    "au bonus d’armure). Le chevalier ne peut pas être étourdi ou renversé par une attaque qu’il " +
                                    "a décidé d’encaisser."
                        },
                        {
                            "rang": "3",
                            "nom": "Frappe du justicier (L)",
                            "description": "Lorsque le chevalier réalise cette attaque au contact, si le test d’attaque est un " +
                                    "échec, il inflige tout de même 1⁄2 DM à sa cible. Un résultat de 1 au d20 n’inflige aucun DM."
                        },
                        {
                            "rang": "4",
                            "nom": "Force héroïque",
                            "description": "Le chevalier augmente sa FOR de +1. Désormais, il obtient un dé bonus aux tests de FOR."
                        },
                        {
                            "rang": "5",
                            "nom": "Mon armure est une arme (G)",
                            "description": "Une fois par combat, le chevalier peut donner un coup avec son armure (gantelet, " +
                                    "heaume, spallière, etc.) en action gratuite. Il inflige automatiquement [1d4° + FOR] DM, " +
                                    "et si la FOR de la cible est inférieure à celle du chevalier, elle est (au choix du chevalier) " +
                                    "renversée ou étourdie pour 1 round ou recule de 3 m."
                        }
                    ]
                },
                {
                    "id": "PREUX",
                    "nom": "PREUX",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Ignorer la douleur (G)",
                            "description": "Une fois par combat, le chevalier peut noter à part les DM subis par une attaque " +
                                    "(mais pas un critique). Il ne subira les DM que lorsque le combat sera terminé. De plus " +
                                    "le héros gagne un bonus égal à rang + 2 pour haranguer et convaincre les foules (au moins " +
                                    "15 individus)."
                        },
                        {
                            "rang": "2",
                            "nom": "Piqûres d’insectes",
                            "description": "Le chevalier obtient une réduction des DM (RD) des attaques à distance (arcs, " +
                                    "arbalètes, lances, etc.) qui dépend de l’armure qu’il porte. Armure de plaques (complète " +
                                    "ou non) RD 3, armure intermédiaire (Chemise ou cotte de mailles) RD 2, armure de cuir " +
                                    "(simple ou renforcée) RD 1. Les DM infligés par une attaque sont toujours au minimum d’un point."
                        },
                        {
                            "rang": "3",
                            "nom": "Laissez‐le‐moi",
                            "description": "Le chevalier met un point d’honneur à combattre le leader ennemi. Lorsqu’il peut " +
                                    "aisément être identifié dans un groupe d’au moins 4 créatures, le chevalier lui inflige +1d4° " +
                                    "DM par attaque au contact. Chaque fois que le chevalier inflige des DM à une créature de " +
                                    "cette façon, la créature doit réussir un test d’INT difficulté 15 ou elle ne peut pas attaquer " +
                                    "d’autre adversaire que lui à son prochain tour."
                        },
                        {
                            "rang": "4",
                            "nom": "Charisme héroïque",
                            "description": "Le chevalier augmente son CHA de +1. Désormais, il obtient un dé bonus aux tests de CHA."
                        },
                        {
                            "rang": "5",
                            "nom": "Seul contre tous",
                            "description": "Le chevalier sait faire face à de nombreux adversaires. Lorsque au moins 3 adversaires " +
                                    "l’attaquent au contact à ce round, il obtient une action d’attaque (A) supplémentaire à ce round."
                        }
                    ]
                },
                {
                    "id": "MENEUR_HOMMES",
                    "nom": "MENEUR D’HOMMES",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Sans peur",
                            "description": "Le chevalier est immunisé aux effets de peur et il offre un bonus égal à son CHA aux " +
                                    "tests de tous ses alliés contre ce type d’effet. De plus, le chevalier ajoute son rang + 2 " +
                                    "aux tests de stratégie et de tactique militaire ou pour commander une troupe."
                        },
                        {
                            "rang": "2",
                            "nom": "Intercepter (G)",
                            "description": "Une fois par round, le chevalier peut encaisser une attaque au contact ou à distance à " +
                                    "la place d’un allié à son contact. Il utilise sa DEF plutôt que celle de la cible initiale et " +
                                    "retranche son rang dans la voie aux DM (en cas de synergie avec la capacité Piqûres d’insectes " +
                                    "ou encaisser un coup, la réduction des DM se cumule). Le joueur doit annoncer son intention " +
                                    "d’intercepter avant de connaître le résultat de l’attaque."
                        },
                        {
                            "rang": "3",
                            "nom": "Exemplaire (G)",
                            "description": "Une fois par round, le chevalier donne un dé bonus à un allié qui attaque un adversaire " +
                                    "à son contact. Le dé bonus doit être attribué avant de lancer les dés."
                        },
                        {
                            "rang": "4",
                            "nom": "Charge fantastique (G)",
                            "description": "Une fois par combat, lorsque le chevalier déclare l’utilisation de cette capacité, " +
                                    "tous ses alliés en vue et lui obtiennent 10 m de déplacement supplémentaire au début de leur " +
                                    "tour puis un dé bonus et +1d4° DM à toutes leurs attaques. Ne se cumule ni avec exemplaire " +
                                    "ni avec ordre de bataille."
                        },
                        {
                            "rang": "5",
                            "nom": "Ordre de bataille (G)",
                            "description": "Le chevalier donne des ordres tactiques pertinents au cœur de la bataille. Une fois " +
                                    "par round, il octroie une action supplémentaire gratuite à un allié en vue (une action de " +
                                    "mouvement ou une action d’attaque, mais pas une action limitée). Chaque allié ne peut " +
                                    "profiter d’un ordre de bataille qu’une seule fois par combat."
                        }
                    ]
                },
                {
                    "id": "NOBLESSE",
                    "nom": "NOBLESSE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Éduqué",
                            "description": "Le chevalier sait lire et écrire, et apprend à parler une langue supplémentaire. " +
                                    "De plus, il ajoute son rang + 2 à tous les tests d’histoire, d’héraldique et de géographie " +
                                    "ainsi qu’aux tests pour savoir se comporter dans la haute société."
                        },
                        {
                            "rang": "2",
                            "nom": "Écuyer",
                            "description": "Le chevalier dispose d’un écuyer à son service (<b>Init.</b> [chevalier], <b>DEF</b> [10 + rang], " +
                                    "<b>PV</b> [niveau × 4], <b>Att</b> [attaque magique], <b>DM</b> 1d4°+1). Il est absolument loyal à son maître, " +
                                    "il s’occupe de sa monture et de son équipement, prépare le campement, panse les blessures, " +
                                    "etc. Grâce à l’écuyer, les armes du chevalier sont parfaitement affûtées et il augmente de " +
                                    "1 point les chances d’obtenir un critique sur les attaques au contact (par exemple, 19‐20 au " +
                                    "lieu de 20). De plus, le chevalier, sa monture et jusqu’à CHA alliés récupèrent 1d4° PV " +
                                    "supplémentaires après chaque récupération complète s’ils profitent des services de l’écuyer. " +
                                    "Si l’écuyer vient à mourir, le chevalier en prendra un autre à son service au niveau suivant."
                        },
                        {
                            "rang": "3",
                            "nom": "Autorité naturelle",
                            "description": "Le chevalier ajoute son rang + 2 aux tests réalisés pour donner des ordres ou " +
                                    "intimider. De plus, le noble chevalier reçoit la formation nécessaire au port de l’armure " +
                                    "de plaque complète (DEF +7). Désormais, il peut utiliser toutes les capacités des voies " +
                                    "de chevalier* en portant cette armure. <br> * Pour un profil hybride de combattant, cette " +
                                    "capacité permet d’augmenter le niveau d’armure d’un cran pour toutes les autres voies de " +
                                    "combattant : jusqu’à l’armure de plaque pour les voies de guerrier et jusqu’à la " +
                                    "chemise de mailles pour les voies de barbare."
                        },
                        {
                            "rang": "4",
                            "nom": "Massacrer la piétaille",
                            "description": "Le chevalier ajoute +1d4° aux DM contre la piétaille. S’il y a au moins 4 créatures " +
                                    "aux statistiques semblables impliquées dans le combat, elles sont assimilées à de la " +
                                    "piétaille (même si leur nombre est par la suite réduit à moins de 4 au cours du combat). " +
                                    "Les cavaliers ne sont jamais considérés comme de la piétaille."
                        },
                        {
                            "rang": "5",
                            "nom": "Formation d’élite",
                            "description": "Le chevalier possède les moyens et la culture nécessaires pour obtenir une " +
                                    "formation dans n’importe quel domaine qui lui sied. Choisissez une capacité de rang " +
                                    "1 à 3 dans n’importe quel profil issu de la famille des combattants ou des " +
                                    "aventuriers. De plus, le chevalier choisit une caractéristique ; désormais, il " +
                                    "obtient un dé bonus lors des tests en rapport avec celle‐ci."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies du guerrier
         ****************************************************************************/
        {
            "id": "GUERRIER",
            "voies": [
                {
                    "id": "BOUCLIER",
                    "nom": "BOUCLIER",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Protéger un allié (G)",
                            "description": "S’il n’est pas surpris, le guerrier peut " +
                                    "accorder un bonus de DEF de +2 à un allié à son contact contre " +
                                    "une attaque par round. Il doit annoncer son intention avant de " +
                                    "connaître le résultat de l’attaque. De plus, vous ajoutez votre " +
                                    "rang + 2 à tous les tests destinés à éviter d’être surpris."
                        },
                        {
                            "rang": "2",
                            "nom": "Parer un coup (M)",
                            "description": "Le guerrier utilise une action de mouvement pour se mettre " +
                                    "en posture défensive. Il peut alors essayer de parer une attaque à " +
                                    "tout moment avant son prochain tour. Il doit faire un test d’attaque " +
                                    "au contact (il peut remplacer la FOR par l’AGI pour ce test) en " +
                                    "opposition au test de l’attaque au contact ou à distance réussie " +
                                    "par son adversaire. S’il l’emporte, l’attaque adverse est bloquée " +
                                    "par le bouclier. Il ne subit aucun DM sauf si la créature est de " +
                                    "taille énorme ou colossale, auquel cas, il subit tout de même la " +
                                    "moitié des DM. À partir du rang 5, le guerrier peut utiliser cette " +
                                    "capacité en action gratuite (toujours une fois par round), mais dans " +
                                    "ce cas, il subit un dé malus au test opposé."
                        },
                        {
                            "rang": "3",
                            "nom": "Défense au bouclier",
                            "description": "Le guerrier obtient un bonus de +1 en DEF lorsqu’il manie un " +
                                    "bouclier. Ce bonus passe à +2 au rang 5. De plus, lorsqu’il tient " +
                                    "son bouclier en main, il retranche son rang à tous les DM des attaques " +
                                    "de zone (sorts d'Explosion de feu, mains brûlantes, foudre, etc. et " +
                                    "aux souffles) sauf s’il est surpris."
                        },
                        {
                            "rang": "4",
                            "nom": "Absorber un sort",
                            "description": "Lorsqu’il s’est préparé à parer un coup, le guerrier peut " +
                                    "décider à la place d’absorber un sort. S’il réussit un test d’attaque " +
                                    "au contact (il peut remplacer la FOR par l’AGI pour ce test) opposé " +
                                    "à un test d’attaque magique du lanceur de sort, le sort est absorbé " +
                                    "par le bouclier et n’a aucun effet sur le guerrier (mais s’il s’agit " +
                                    "d’un sort de zone, les autres cibles sont affectées normalement)."
                        },
                        {
                            "rang": "5",
                            "nom": "Renvoi de sort (G)",
                            "description": "Le guerrier peut décider de renvoyer un sort qu’il vient " +
                                    "d’absorber grâce à sa capacité \"Absorber un sort\". Au lieu d’être " +
                                    "annulé, le sort absorbé est immédiatement retourné contre son " +
                                    "expéditeur : le lanceur du sort subit alors les effets de sa propre " +
                                    "attaque ! Cet effet ne fonctionne pas contre les sorts de zone."
                        }
                    ]
                },
                {
                    "id": "COMBAT",
                    "nom": "COMBAT",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Vivacité",
                            "description": "Le guerrier gagne +3 en Initiative et aux tests d’AGI ou de FOR " +
                                    "pour éviter d’être immobilisé ou renversé. De plus, une fois par " +
                                    "combat, il obtient une action de mouvement supplémentaire à son tour."
                        },
                        {
                            "rang": "2",
                            "nom": "Manœuvre",
                            "description": "Le guerrier obtient un dé bonus lorsqu’il exécute une manœuvre " +
                                    "en combat. "
                        },
                        {
                            "rang": "3",
                            "nom": "Attaque puissante",
                            "description": "Le guerrier peut choisir de s’imposer un dé malus sur une attaque " +
                                    "au contact et il ajoute +2d4° aux DM. Cette capacité peut être utilisée " +
                                    "avec \"Double attaque\", \"Attaque circulaire\" ou \"Attaque parfaite\". " +
                                    "Transformez cette capacité en action limitée (L) pour obtenir +3d4° aux " +
                                    "DM au lieu de +2d4°."
                        },
                        {
                            "rang": "4",
                            "nom": "Double attaque (L)",
                            "description": "Le guerrier fait deux attaques au contact durant son tour avec un " +
                                    "malus de ‐2."
                        },
                        {
                            "rang": "5",
                            "nom": "Attaque circulaire (L)",
                            "description": "Le guerrier peut faire une attaque au contact avec un malus de ‐2 " +
                                    "contre chaque adversaire engagé au contact avec lui (il fait un test " +
                                    "d’attaque pour chaque adversaire)."
                        }
                    ]
                },
                {
                    "id": "MAITRE_ARMES",
                    "nom": "MAÎTRE D’ARMES",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Armes de prédilection",
                            "description": "Le guerrier choisit une catégorie d’armes de prédilection parmi " +
                                    "épées, haches, masses, lances (épieu, lance, pique) et enfin armes de " +
                                    "jet (dague de lancer, javelot, etc.), et il gagne +1 en attaque lorsqu’il " +
                                    "l’utilise une arme de cette catégorie. De plus, vous ajoutez votre " +
                                    "rang + 2 à tous les tests destinés à estimer la valeur d’une arme ou " +
                                    "la réputation martiale d’un adversaire."
                        },
                        {
                            "rang": "2",
                            "nom": "Science du critique",
                            "description": "Le guerrier augmente de 1 point les chances d’obtenir un critique " +
                                    "sur les attaques effectuées avec une arme de prédilection (par exemple, " +
                                    "19‐20 au lieu de 20)."
                        },
                        {
                            "rang": "3",
                            "nom": "Spécialisation",
                            "description": "Lorsque le guerrier emploie une arme de prédilection, il gagne un " +
                                    "bonus de +1 DM. Chaque fois que le personnage atteint le rang 5 dans " +
                                    "une voie de guerrier, il peut choisir une nouvelle catégorie d’arme de " +
                                    "prédilection (il gagne les avantages des rangs 1 à 3) ou décider " +
                                    "d’augmenter de +1 le bonus aux DM d’une catégorie qu’il connaît déjà " +
                                    "(pour un maximum de +6 pour un guerrier ayant atteint le rang 5 dans " +
                                    "les cinq voies)."
                        },
                        {
                            "rang": "4",
                            "nom": "Attaque parfaite (L)",
                            "description": "Vous obtenez un dé bonus en attaque au contact (ou à distance pour " +
                                    "une arme de lancer) et ajoutez +1d4° DM. Vous devez utiliser une arme de " +
                                    "prédilection. Éventuellement, le guerrier peut choisir de ne pas infliger " +
                                    "les DM de son attaque parfaite pour désarmer une cible dont le NC est " +
                                    "inférieur à son bonus de DM de spécialisation."
                        },
                        {
                            "rang": "5",
                            "nom": "Riposte (G)",
                            "description": "Lorsqu’un adversaire rate une attaque de contact contre lui, le " +
                                    "personnage obtient immédiatement une attaque au contact contre cet " +
                                    "adversaire. Le personnage ne peut obtenir qu’une seule attaque supplémentaire " +
                                    "de cette façon à chaque round et si plusieurs adversaires le ratent, il " +
                                    "choisit contre lequel il effectue la riposte."
                        }
                    ]
                },
                {
                    "id": "RESISTANCE",
                    "nom": "RÉSISTANCE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Robustesse",
                            "description": "Le guerrier augmente sa valeur maximale de PV de rang + 2. De plus, " +
                                    "vous ajoutez votre rang + 2 à tous les tests destinés à résister aux efforts " +
                                    "physiques, à la chaleur ou au froid (conditions naturelles)."
                        },
                        {
                            "rang": "2",
                            "nom": "Résilient",
                            "description": "Désormais, il suffit de 10 min au guerrier pour bénéficier des effets " +
                                    "d’une récupération rapide (au lieu de 30 min) et cela passe à 5 min au " +
                                    "rang 4 de la voie. De plus, le guerrier obtient un bonus égal au rang atteint " +
                                    "dans la voie pour tous les tests destinés à résister aux états étourdi et affaibli."
                        },
                        {
                            "rang": "3",
                            "nom": "Armure lourde",
                            "description": "Au choix le guerrier gagne +1 en DEF ou il apprend à porter l’armure de " +
                                    "plaque (DEF +6) et désormais, il peut utiliser toutes les capacités de guerrier " +
                                    "avec cette armure."
                        },
                        {
                            "rang": "4",
                            "nom": "Constitution héroïque",
                            "description": "Le guerrier augmente sa CON de +1. Désormais, il obtient un dé bonus aux " +
                                    "tests de CON."
                        },
                        {
                            "rang": "5",
                            "nom": "Dur à cuire",
                            "description": "Le guerrier gagne +1 en DEF et, une fois par combat, lorsqu’il tombe à " +
                                    "0 PV, il peut encore agir un round avant de tomber inconscient. De plus, il " +
                                    "ne subit plus de dé malus lorsqu’il est immobilisé et lorsqu’il est étourdi ; " +
                                    "il peut encore attaquer, mais avec un dé malus."
                        }
                    ]
                },
                {
                    "id": "SOLDAT",
                    "nom": "SOLDAT",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Teigneux (G)",
                            "description": "Une fois par round, si une créature à votre contact tente de s’éloigner " +
                                    "de vous, vous obtenez une attaque au contact en action gratuite contre elle. " +
                                    "De plus vous ajoutez votre rang + 2 aux tests destinés à résister à l’alcool et " +
                                    "à la privation de nourriture ou de sommeil."
                        },
                        {
                            "rang": "2",
                            "nom": "Prouesse (G)",
                            "description": "Le guerrier réussit souvent des exploits physiques hors‐norme. Une fois " +
                                    "par round, vous pouvez sacrifier 1d4° PV pour obtenir +5 sur un test de FOR ou de " +
                                    "CON. Vous pouvez annoncer l’utilisation de cette capacité après avoir pris " +
                                    "connaissance du résultat du test de caractéristique."
                        },
                        {
                            "rang": "3",
                            "nom": "Piqûre de rappel (G)",
                            "description": "Vous n’admettez pas qu’un adversaire vous ignore. Une fois par round, si " +
                                    "un adversaire à votre contact attaque une autre créature que vous, vous obtenez " +
                                    "une attaque en action gratuite contre lui. Si l’INT de cet adversaire est " +
                                    "négative et que vous lui infligez des DM sur cette attaque, il vous prend " +
                                    "automatiquement pour cible lors de sa prochaine attaque."
                        },
                        {
                            "rang": "4",
                            "nom": "Force héroïque",
                            "description": "Le guerrier augmente sa FOR de +1. Désormais, il obtient un dé bonus aux " +
                                    "tests de FOR."
                        },
                        {
                            "rang": "5",
                            "nom": "Rempart",
                            "description": "Vous pouvez désormais utiliser \"Teigneux\" contre un nombre d’adversaires " +
                                    "égal à votre AGI + 2 à chaque round. Si vous réussissez cette attaque, le " +
                                    "déplacement de votre adversaire est stoppé à l’endroit où vous l’avez attaqué. " +
                                    "De plus vous gagnez +1 en DEF."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies de l'ensorceleur
         ****************************************************************************/
        {
            "id": "ENSORCELEUR",
            "voies": [
                {
                    "id": "AIR",
                    "nom": "AIR",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Murmures dans le vent (G)*",
                            "description": "L’ensorceleur chuchote un message d’une dizaine de mots qui voyage jusqu’à son destinataire. " +
                                    "Il peut entendre sa réponse immédiatement. La portée est de CHA × 100 m et le personnage doit connaître la " +
                                    "cible ou la voir. En plus de ce sort, l’ensorceleur gagne un bonus permanent de +1 en Init. et en DEF, " +
                                    "car parfois une bourrasque venue de nulle part vient gêner son attaquant, dévier un projectile ou lui permettre " +
                                    "d’entendre un adversaire."
                        },
                        {
                            "rang": "2",
                            "nom": "Sous tension (M)*",
                            "description": "L’ensorceleur se charge d’énergie électrique pour CHA minutes. Pendant toute la durée " +
                                    "du sort, une créature qui le blesse par une attaque de contact ou le touche reçoit une " +
                                    "décharge infligeant 1d4° DM. De plus, il peut utiliser une action d’attaque à chaque " +
                                    "round pour délivrer une décharge électrique (test d’attaque magique contre DEF de la " +
                                    "cible, portée 10 m) infligeant [1d4°+CHA] DM."
                        },
                        {
                            "rang": "3",
                            "nom": "Télékinésie (A)*",
                            "description": "L’ensorceleur peut déplacer dans les airs un objet inerte (qui n’est pas tenu par " +
                                    "un adversaire) ou une cible volontaire (par exemple lui‐même) dont le poids n’excède pas " +
                                    "50 kg par rang, à une portée de 20 m et pendant CHA minutes. L’objet peut être maintenu " +
                                    "en l’air ou déplacé de 5 m par action de mouvement. Il est possible de faire tomber un " +
                                    "objet sur une cible surprise (test d’attaque magique, DM 1d6 par tranche de 50 kg)."
                        },
                        {
                            "rang": "4",
                            "nom": "Foudre (A)*",
                            "description": "L’ensorceleur produit un éclair sur une ligne de 10 m. Toutes les créatures sur " +
                                    "la trajectoire subissent [4d4°+CHA] DM ou seulement la moitié pour celles qui réussissent " +
                                    "un test d’AGI difficulté [10 + CHA]."
                        },
                        {
                            "rang": "5",
                            "nom": "Forme éthérée (L)*",
                            "description": "L’ensorceleur et tout son équipement deviennent translucides et intangibles pendant " +
                                    "CHA minutes. Sous cette forme, il peut passer à travers murs et obstacles et ne peut subir " +
                                    "aucun DM physiques (même infligés par une arme magique), ni en infliger, ni lancer de " +
                                    "sorts. Il n’est pas affecté par la gravité et peut se déplacer dans toutes les directions. " +
                                    "Il est stoppé par les barrières magiques et ne peut pas passer à travers les êtres vivants."
                        }
                    ]
                },
                {
                    "id": "DIVINATION",
                    "nom": "DIVINATION",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Divination (L)*",
                            "description": "S’il emporte un test opposé d’attaque magique contre une créature de NC inférieur à " +
                                    "son niveau (portée 10 m), l’ensorceleur devine son nom d’usage, son métier et quelques " +
                                    "autres renseignements, tous de notoriété publique (si la cible agit sous couverture, ce " +
                                    "sont les informations qui concernent la couverture que l’ensorceleur apprend). Si la cible " +
                                    "du sort est volontaire et qu’il lit les lignes de sa main, il n’y a pas besoin de test et " +
                                    "l’ensorceleur peut utiliser ce sort sur une créature de NC supérieur ou égal à son niveau. " +
                                    "En plus de ce sort, l’ensorceleur gagne +1 en Init. et en DEF. Ce bonus augmente de +1 au rang " +
                                    "3 de la voie et de +1 chaque fois que le personnage atteint le rang 5 dans une voie d’ensorceleur."
                        },
                        {
                            "rang": "2",
                            "nom": "Détection de l’invisible (L)*",
                            "description": "Pendant CHA minutes, l’ensorceleur détecte les créatures invisibles (le sort révèle " +
                                    "une silhouette, mais pas l’apparence exacte de la créature) ou cachées à moins de 20 m et " +
                                    "si un sort de Clairvoyance affecte l’endroit. Aveuglé (par magie ou dans l’obscurité), ce " +
                                    "sort lui permet de détecter les créatures présentes (et donc d’attaquer sans malus), mais " +
                                    "pas de distinguer son environnement."
                        },
                        {
                            "rang": "3",
                            "nom": "Clairvoyance (A)*",
                            "description": "L’ensorceleur peut voir et entendre à distance ce qui se passe dans un lieu qu’il " +
                                    "connaît (pas de limite de portée) ou juste derrière une porte qu’il touche pendant CHA " +
                                    "rounds (action limitée à chaque round). Les créatures présentes ont droit à un test de " +
                                    "PER difficulté [12 + CHA de l’ensorceleur] : en cas de réussite, elles se sentent observées."
                        },
                        {
                            "rang": "4",
                            "nom": "Perception héroïque",
                            "description": "L’ensorceleur augmente sa valeur de PER de +1. Désormais, il obtient un dé bonus aux " +
                                    "tests de PER, et il ajoute sa PER au nombre de PM dont il bénéficie."
                        },
                        {
                            "rang": "5",
                            "nom": "Prescience",
                            "description": "Une fois par combat, au début du round, le joueur peut décider qu’il a eu une vision " +
                                    "des différents futurs possibles. Il bénéficie d’un bonus de +10 en attaque, en Défense " +
                                    "et à tous les tests de PER pour tout le round, il divise tous les DM subis par 2 et il peut " +
                                    "choisir d’agir à n’importe quel moment dans le round, sans considération d’initiative."
                        }
                    ]
                },
                {
                    "id": "ENVOUTEUR",
                    "nom": "ENVOÛTEUR",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Injonction (A)*",
                            "description": "L’ensorceleur donne un ordre simple (mais pas suicidaire) de deux ou trois mots que " +
                                    "la cible doit pouvoir comprendre. S’il réussit un test opposé d’attaque magique contre une " +
                                    "cible à une portée de 20 m, la victime doit exécuter l’ordre pendant son prochain tour. " +
                                    "En plus de ce sort, l’ensorceleur ajoute son rang + 2 aux tests de persuasion ou de séduction. " +
                                    "Si la victime resiste, elle est immunisée 24h."
                        },
                        {
                            "rang": "2",
                            "nom": "Sommeil (L)*",
                            "description": "Une fois par combat, l’ensorceleur vise une zone de 10 m de diamètre à une portée " +
                                    "maximale de 20 m. Le sort affecte jusqu’à [1d4° + CHA] créatures vivantes de NC inférieur à 1. " +
                                    "Le sort affecte les créatures de NC inférieur à 2 au rang 4 puis à 3 au rang 5. Les créatures " +
                                    "perdent conscience pendant CHA minutes. Il est possible de les réveiller en les cognant " +
                                    "violemment (action d’attaque, 1 DM). " +
                                    "Si la victime resiste, elle est immunisée 24h."
                        },
                        {
                            "rang": "3",
                            "nom": "Confusion (A)*",
                            "description": "En réussissant un test opposé d’attaque magique contre sa cible (portée 20 m), " +
                                    "l’ensorceleur désoriente sa victime pendant CHA rounds. Au tour de la victime, celui qui " +
                                    "l’incarne lance 1d6 : sur <b>1‐3</b> la victime n’agit pas, sur <b>4‐6</b> elle attaque la créature la " +
                                    "plus proche (au hasard). À la fin de son tour, elle peut mettre fin au sort prématurément en " +
                                    "réussissant un <b>test de VOL difficulté [12 + CHA de l’ensorceleur].</b> " +
                                    "Si la victime resiste, elle est immunisée 24h."
                        },
                        {
                            "rang": "4",
                            "nom": "Amitié (L)*",
                            "description": "Si l’ensorceleur réussit un test opposé d’attaque magique (portée 10 m) contre une cible " +
                                    "humanoïde de niveau ou NC inférieur au sien, celle‐ci se comporte comme un ami de longue " +
                                    "date tant qu’elle n’est pas attaquée. La victime peut résister au sort avec un test de VOL " +
                                    "difficulté [10 + CHA de l’ensorceleur] une fois par jour après chaque récupération complète. " +
                                    "Si la cible est d’un niveau au moins égal au niveau du lanceur de sort, ce dernier obtient " +
                                    "seulement un dé bonus à tous les tests de CHA qu’il effectue contre la victime pendant 10 min." +
                                    "Si la victime resiste, elle est immunisée 24h."
                        },
                        {
                            "rang": "5",
                            "nom": "Domination (A)*",
                            "description": "En réussissant un test opposé d’attaque magique contre une cible de niveau ou NC " +
                                    "inférieur au sien (portée 20 m), l’ensorceleur prend contrôle de sa cible pendant CHA minutes. " +
                                    "Son propre corps devient inactif et s’écroule au sol. Si la créature meurt pendant la domination, " +
                                    "l’ensorceleur réintègre son corps et subit 1d4° DM. Si la cible est d’un niveau trop élevé, il " +
                                    "peut la forcer à faire une seule action de son choix (mouvement ou attaque) ; ensuite, il est " +
                                    "éjecté et subit 1d4° DM." +
                                    "Si la victime resiste, elle est immunisée 24h."
                        }
                    ]
                },
                {
                    "id": "ILLUSIONS",
                    "nom": "ILLUSIONS",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Mirage (L)*",
                            "description": "L’ensorceleur crée une illusion visuelle et sonore immobile d’une durée de CHA minutes. " +
                                    "Le volume maximal de l’illusion est de 2 m de côté par rang dans la voie (portée 50 m). À " +
                                    "partir du rang 4, l’illusion peut être animée, mais dans ce cas sa durée est exprimée en rounds. " +
                                    "En plus de ce sort, l’ensorceleur ajoute son rang + 2 aux tests de supercherie ou à tout test " +
                                    "qui lui servirait à mentir."
                        },
                        {
                            "rang": "2",
                            "nom": "Image décalée (M)*",
                            "description": "L’ensorceleur crée des images décalées qui se superposent à sa silhouette pendant " +
                                    "[1d4 + CHA] rounds. Lorsqu’une attaque au contact ou à distance le touche, l’ensorceleur " +
                                    "lance 1d6 : sur 5‐6, il ne subit pas les DM."
                        },
                        {
                            "rang": "3",
                            "nom": "Sort illusoire (A)*",
                            "description": "L’ensorceleur lance un sort d’attaque qui n’est qu’une illusion. Il inflige [3d4°+CHA] " +
                                    "DM contre une seule cible ou [2d4°+CHA] DM contre un maximum de cibles égal au rang atteint. " +
                                    "Le joueur peut décrire la nature du sort à sa guise (une Explosion de feu, une nuée de criquets, " +
                                    "une lance de glace, etc.), son imagination demeurant sa seule limite. Chaque cible peut faire " +
                                    "un test de PER difficulté [10 + CHA de l’ensorceleur] pour ne subir aucun DM. Les créatures " +
                                    "sans esprit (créatures artificielles, certaines plantes et morts‐vivants) sont immunisées à " +
                                    "ce sort. Les PV perdus de cette façon se récupèrent normalement."
                        },
                        {
                            "rang": "4",
                            "nom": "Imitation (A)*",
                            "description": "Pendant CHA minutes, l’ensorceleur peut prendre l’apparence d’une créature de taille " +
                                    "proche de la sienne (+ ou – 50 cm) qu’il voit au moment de l’incantation. Une créature qui " +
                                    "touche l’ensorceleur se rend compte que quelque chose ne va pas et a le droit à un test " +
                                    "d’INT difficulté [10 + CHA de l’ensorceleur] pour voir à travers l’illusion."
                        },
                        {
                            "rang": "5",
                            "nom": "Exécution mentale (A)*",
                            "description": "Ce sort invoque les pires terreurs d’une créature humanoïde vivante et lui fait " +
                                    "croire à sa propre mort. L’ensorceleur doit faire un test opposé d’attaque magique contre " +
                                    "sa cible (portée 20 m). En cas de succès la victime tombe à 0 PV ou si la cible est de " +
                                    "niveau supérieur ou égal à l’ensorceleur, elle est étourdie (‐5 DEF et pas d’action) pendant " +
                                    "1 round. Une créature ne peut être la cible de ce sort qu’une fois par jour. Les créatures " +
                                    "sans esprit (créatures artificielles, certaines plantes et certains morts‐vivants) sont " +
                                    "immunisées à ce sort."
                        }
                    ]
                },
                {
                    "id": "INVOCATION",
                    "nom": "INVOCATION",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Choc (A)*",
                            "description": "Si l’ensorceleur réussit un test d’attaque magique réussi contre la DEF de son " +
                                    "adversaire situé à une portée de 20 m, il lui inflige [1d4° + CHA] DM. Si la cible a un " +
                                    "NC inférieur au rang atteint par l’ensorceleur dans la voie, elle doit réussir un test de " +
                                    "FOR difficulté 10 pour ne pas être renversée."
                        },
                        {
                            "rang": "2",
                            "nom": "Serviteur invisible (L)*",
                            "description": "Ce sort crée une force invisible pendant CHA minutes. Le serviteur peut effectuer à " +
                                    "distance des tâches simples ne nécessitant pas de test de réussite avec une AGI et une INT " +
                                    "de +0 et une FOR égale au CHA de l’ensorceleur (portée 20 m). Il peut par exemple rapporter " +
                                    "un objet ou actionner un levier, voire faire la vaisselle. Le serviteur invisible se déplace " +
                                    "à la même vitesse que l’ensorceleur, ne pèse rien, ne parle pas, n’a pas vraiment d’existence " +
                                    "et peut se déplacer dans toutes les directions. Concevez‐le davantage comme une force qui " +
                                    "obéit aux injonctions télépathiques de son créateur que comme une créature. Il n’attaque pas et " +
                                    "ne peut pas être combattu, mais il peut être dissipé grâce au sort de maîtrise de la magie."
                        },
                        {
                            "rang": "3",
                            "nom": "Arme de mana (A)*",
                            "description": "Le sort crée une lame d’énergie lumineuse pendant [rang] rounds. Dès le premier " +
                                    "round et à chaque round suivant, l’ensorceleur peut lui ordonner d’attaquer une cible de " +
                                    "son choix à portée (action gratuite, portée 20 m). La lame doit réussir un test d’attaque " +
                                    "magique contre la DEF de l’adversaire. Elle inflige [1d4° + CHA] DM en cas de réussite. " +
                                    "L’ensorceleur ne peut maintenir actif qu’un seul sort d’arme de mana à la fois."
                        },
                        {
                            "rang": "4",
                            "nom": "Porte dimensionnelle (A)*",
                            "description": "L’ensorceleur se téléporte lui‐même et jusqu’à un allié par point de CHA à une distance " +
                                    "maximale de 60 m. Le lieu d’arrivée doit être en vue."
                        },
                        {
                            "rang": "5",
                            "nom": "Mur de mana (A)*",
                            "description": "L’ensorceleur crée un mur de force invisible et indestructible (portée 10 m, maximum " +
                                    "5 m de haut et 10 m de long, vertical, sans coudes), ou bien un hémisphère de 3 m de rayon " +
                                    "centré sur lui‐même, tous les deux immobiles. Le sort dure CHA minutes. Aucune matière ni " +
                                    "force ne peut passer à travers le mur de force. En revanche, les attaques mentales ne sont " +
                                    "pas stoppées et une porte dimensionnelle (ou une téléportation) permet de le franchir."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies du forgesort
         ****************************************************************************/
        {
            "id": "FORGESORT",
            "voies": [
                {
                    "id": "ARTEFACTS",
                    "nom": "ARTEFACTS",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Bâton de mage",
                            "description": "Lorsqu’il utilise son bâton, le forgesort inflige [1d4°+INT] DM magiques. " +
                                    "À partir du rang 3, au prix d’une action limitée, il peut utiliser sa valeur d’attaque " +
                                    "magique pour une attaque au contact et il inflige [2d4°+INT] DM dans un éclair d’énergie " +
                                    "! Si le forgesort fait l’acquisition d’un bâton magique, les bonus de celui‐ci s’ajouteront " +
                                    "normalement à l’attaque et aux DM (de même pour le bonus de feu de la voie du métal)."
                        },
                        {
                            "rang": "2",
                            "nom": "Ouverture ‐ fermeture (M)*",
                            "description": "Le forgesort peut ouvrir une porte fermée à clef en la touchant, il doit " +
                                    "réussir un test d’attaque magique contre la difficulté pour la crocheter. Il peut " +
                                    "aussi sceller une porte ou un coffre pour INT minutes. Seul un mot de commande " +
                                    "qu’il choisit permet d’ouvrir l’objet. Celui‐ci peut toujours être brisé par la " +
                                    "force, mais il bénéficie d’un bonus de +5 en solidité et en RD pour toute la durée " +
                                    "du sort. À partir du rang 4, le forgesort peut rendre ce sort permanent en " +
                                    "sacrifiant une gemme d’une valeur de 100 pa et en prolongeant l’incantation par " +
                                    "un rituel de 10 min."
                        },
                        {
                            "rang": "3",
                            "nom": "Sac sans fond",
                            "description": "Le forgesort possède un sac magique dans lequel il peut entreposer 50 kg " +
                                    "de matériel par rang dans la voie, tandis que le sac semble toujours peser un " +
                                    "kilogramme. Le sac ne fonctionne pas si on tente d’y mettre une créature vivante. " +
                                    "Le sac est de plus capable de fournir au forgesort les objets qu’il désire. Une " +
                                    "fois par heure, il peut en retirer un ou plusieurs objets dont la valeur totale " +
                                    "ne dépasse pas 25 pa, le poids 50 kg, la circonférence 1 m et le volume 1 m3. Ces " +
                                    "objets ont hélas la propriété de disparaître au bout d’une heure. De ce fait, " +
                                    "la nourriture magique retirée du sac ne nourrit pas vraiment celui qui la consomme."
                        },
                        {
                            "rang": "4",
                            "nom": "Frappe des arcanes (A)*",
                            "description": "Le forgesort frappe le sol de son bâton et provoque une onde dévastatrice " +
                                    "dans un rayon de 10 m autour de lui. Toutes les créatures dans la zone subissent " +
                                    "automatiquement [3d4°+INT] DM et doivent réussir un test de FOR difficulté " +
                                    "[10 + INT] pour ne pas être renversées."
                        },
                        {
                            "rang": "5",
                            "nom": "Artefact étrange (L)",
                            "description": "Le forgesort crée un artefact qu’il est le seul à pouvoir utiliser et dont " +
                                    "la description est laissée au soin du joueur. L’artefact permet d’utiliser les " +
                                    "capacités de rang 5 suivantes chacune une fois par jour au prix d’une action " +
                                    "limitée : Téléportation (voie de la magie universelle, magicien), Interruption " +
                                    "du temps (voie de la magie protectrice, magicien), Forme éthérée (voie de l’air, " +
                                    "ensorceleur), Prescience (voie de la divination, ensorceleur). À chaque utilisation, " +
                                    "le joueur doit lancer 1d6 : sur un résultat de 1 ou 2, l’artefact ne fonctionne " +
                                    "pas, le forgesort doit réparer l’artefact lors d’une récupération rapide avant de " +
                                    "pouvoir faire une nouvelle tentative de ce pouvoir (il peut tenter d’utiliser les " +
                                    "autres pouvoirs normalement)."
                        }
                    ]
                },
                {
                    "id": "ÉLIXIRS",
                    "nom": "ELIXIRS",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Fortifiant (L)",
                            "description": "Un breuvage qui guérit immédiatement 1d4° PV et permet de gagner un dé bonus " +
                                    "aux trois prochains tests effectués dans une période de 30 min. En plus de cette " +
                                    "recette, grâce à ses études, le forgesort ajoute son rang + 2 aux tests d’alchimie " +
                                    "et de chimie ou pour identifier une potion (test difficulté 10 + rang du sort). " +
                                    "Les élixirs doivent être préparée le matin et s'ils ne sont pas utilisés le jour même sont perdus."
                        },
                        {
                            "rang": "2",
                            "nom": "Feu grégeois (L)",
                            "description": "Le forgesort lance la fiole à une distance maximale de 10 m (réussite " +
                                    "automatique). Le contenu explose dans un rayon de 3 m en infligeant 2d4° DM. Un " +
                                    "test d’AGI difficulté [10 + INT du forgesort] réussi permet aux victimes de " +
                                    "diviser les DM par deux. Les DM passent à 3d4° au rang 4 et 4d4° au rang 5. " +
                                    "Les élixirs doivent être préparée le matin et s'ils ne sont pas utilisés le jour même sont perdus."
                        },
                        {
                            "rang": "3",
                            "nom": "Élixir de guérison (L)",
                            "description": "Le forgesort peut préparer un élixir qui soigne [2d4°+INT] PV au bout d’une " +
                                    "minute ou guérit un empoisonnement de manière instantanée. " +
                                    "Les élixirs doivent être préparée le matin et s'ils ne sont pas utilisés le jour même sont perdus."
                        },
                        {
                            "rang": "4",
                            "nom": "Élixirs mineurs (L)",
                            "description": "Le forgesort apprend à préparer des élixirs parmi Forme gazeuse, Maîtrise des " +
                                    "éléments, Chute ralentie (voies de magicien) et Masque mortuaire (voie de sorcier). Il " +
                                    "choisit un nombre d’élixirs égal à sa valeur d’INT (pour un maximum de 4). " +
                                    "Les élixirs doivent être préparée le matin et s'ils ne sont pas utilisés le jour même sont perdus."
                        },
                        {
                            "rang": "5",
                            "nom": "Élixirs majeurs (L)",
                            "description": "Le forgesort apprend à préparer des élixirs parmi Invisibilité, Vol, Accélération " +
                                    "(voies de magicien) et Masque du prédateur (voie de druide). Il choisit un nombre d’élixirs " +
                                    "égal à sa valeur d’INT (pour un maximum de 4). Ces préparations comptent pour deux élixirs. " +
                                    "Les élixirs doivent être préparée le matin et s'ils ne sont pas utilisés le jour même sont perdus."
                        }
                    ]
                },
                {
                    "id": "METAL",
                    "nom": "MÉTAL",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Morsure de la forge (M)*",
                            "description": "Au prix d’une action de mouvement, le forgesort peut enflammer son bâton ou son " +
                                    "marteau pendant INT minutes et ajoute +2 DM de feu sur les attaques au contact réalisées " +
                                    "avec cette arme. Ce bonus augmente de +1 chaque fois que le personnage atteint le rang 4 " +
                                    "dans une voie de forgesort. L’arme s’éteint immédiatement s’il la lâche. En plus de ce sort, " +
                                    "le forgesort ajoute son rang + 2 aux tests d’orfèvrerie ou de forge."
                        },
                        {
                            "rang": "2",
                            "nom": "Métal brûlant (M)*",
                            "description": "Le forgesort doit réussir un test opposé d’attaque magique (portée 20 m) pour faire " +
                                    "chauffer un objet métallique porté par sa cible pendant [1d4+INT] rounds. S’il s’agit d’une " +
                                    "arme, elle inflige 1 DM par round à son porteur et un malus de ‐2 aux tests d’attaque. S’il " +
                                    "s’agit d’une armure, elle inflige 1d4° DM par round à son porteur (au tour du forgesort). " +
                                    "La victime peut se débarrasser précipitamment de son armure au prix d’une action limitée " +
                                    "(elle perd le bonus de DEF associé ; dans le cas d’un adversaire, le MJ devra évaluer ce montant)."
                        },
                        {
                            "rang": "3",
                            "nom": "Magnétisme (A)*",
                            "description": "Le forgesort contrôle le magnétisme autour de lui pendant INT minutes. Il obtient un " +
                                    "bonus de +2 en DEF contre les attaques des armes métalliques (au contact ou à distance). " +
                                    "De plus, il divise par deux les DM de tous les projectiles à pointes métalliques (flèches, " +
                                    "carreaux, armes de lancer, etc.)."
                        },
                        {
                            "rang": "4",
                            "nom": "Métal hurlant (A)*",
                            "description": "Sur un test opposé d’attaque magique réussi (portée 10 m), le forgesort déforme une " +
                                    "pièce d’équipement métallique portée par sa cible. Une arme devient inutilisable et bonne " +
                                    "pour le rebut, une armure impose l’utilisation d’un dé malus à tous les tests d’attaque et " +
                                    "d’AGI de son porteur. La victime peut se débarrasser de son armure au prix d’une action " +
                                    "limitée. Si l’objet est magique, le sort ne fait effet que pendant un seul round (et ne peut " +
                                    "pas être renouvelé). Appliqué à une structure (par exemple, une porte blindée), ce sort inflige " +
                                    "3d4° DM en divisant par deux sa RD."
                        },
                        {
                            "rang": "5",
                            "nom": "Endurer",
                            "description": "Le forgesort est habitué aux travaux et à la chaleur de la forge. Il divise par deux " +
                                    "tous les DM de feu subis et augmente sa CON de +1. Désormais, il obtient un dé bonus aux tests " +
                                    "de CON. Finalement, il peut ajouter sa valeur de CON au nombre de PM qu’il obtient."
                        }
                    ]
                },
                {
                    "id": "GOLEM",
                    "nom": "GOLEM",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Grosse tête",
                            "description": "Le forgesort remplace la force brutale par un peu de réflexion. Il peut effectuer un " +
                                    "test d’INT au lieu d’un test de FOR (par exemple, il utilise un levier pour déplacer une " +
                                    "lourde charge). De plus, au premier niveau, il peut ajouter son INT à ses PV à la place de " +
                                    "sa CON s’il le souhaite. Il ajoute son rang + 2 à tous les tests de bricolage ou de science."
                        },
                        {
                            "rang": "2",
                            "nom": "Golem",
                            "description": "Le golem est une créature humanoïde fabriquée par le forgesort pour lui servir de " +
                                    "serviteur et de garde du corps. Il comprend des ordres simples, comme suivre, attaquer, " +
                                    "monter la garde, mais il est incapable d’actions complexes ou nécessitant une motricité " +
                                    "fine (comme de la couture par exemple !). <br>" +
                                    "<span style=\"text-decoration: underline;\">GOLEM => CRÉATURE NON VIVANTE</span> : " +
                                    "<b>AGI</b>:‐1 <b>CON</b>:+10 <b>FOR</b>:+1 <b>PER</b>:‐3 <b>CHA</b>:‐4 " +
                                    "<b>INT</b>:‐3 <b>VOL</b>:+4 <b>Défense</b>:[10 + rang dans la voie] " +
                                    "<b>Points de vigueur</b>:[niv. du forgesort × 5] <b>Initiative</b>:[Init. du forgesort] " +
                                    "<b>Attaque</b>:[attaque magique du forgesort] <b>DM</b>:1d4°+1<br>" +
                                    "PARTICULARITE : <ul>" +
                                    "<li><b>Soigner un golem</b> : le golem ne guérit pas naturellement, mais le forgesort " +
                                    "peut le réparer au rythme de [1d6 par rang + INT] PV par heure.</li> " +
                                    "<li><b>Golem à 0 PV</b> : si le golem est réduit à 0 PV, il cesse de fonctionner, mais le " +
                                    "forgesort peut le réparer. </li>" +
                                    "<li><b>Mort d’un golem</b> : si le golem est détruit ou perdu, le forgesort peut en " +
                                    "construire un nouveau en 1d6 + 3 jours (+1d6 jours par amélioration de golem " +
                                    "supérieur). Un forgesort peut utiliser tous les matériaux à sa disposition dans " +
                                    "son environnement, par exemple pierre et bois s’il est dans une forêt.</li></ul>"
                        },
                        {
                            "rang": "3",
                            "nom": "Protecteur (G)",
                            "description": "Une fois par round, s’il est au contact d’un personnage, le golem peut s’interposer " +
                                    "et subir les DM d’une attaque à sa place."
                        },
                        {
                            "rang": "4",
                            "nom": "Statuette (A)*",
                            "description": "Le forgesort transforme son golem en statuette d’une douzaine de centimètres de " +
                                    "haut, recouverte de runes. Sous forme de statuette, le golem ne peut pas agir, mais il " +
                                    "bénéficie d’une RD 10. À tout moment, le forgesort peut utiliser une action de mouvement " +
                                    "pour jeter la figurine au sol et lui rendre sa taille normale et toutes ses fonctions."
                        },
                        {
                            "rang": "5",
                            "nom": "Golem supérieur",
                            "description": "Le forgesort peut améliorer son golem en choisissant une option parmi les " +
                                    "suivantes. Le joueur peut choisir une option différente supplémentaire à chaque " +
                                    "fois qu’il atteint le rang 5 dans une voie de forgesort.<br> " +
                                    "<b>Armure</b> : +5 en DEF. " +
                                    "| <b>Forme de félin</b> : +3 en AGI et en DEF, dé bonus en AGI. " +
                                    "| <b>Baliste</b> : portée 20 m, [1d4°+AGI] DM." +
                                    "| <b>Grande taille</b> : +2 PV par niveau et +1 en FOR et DM. " +
                                    "| <b>Vol</b> : des « sauts » de 40 m en action limitée. " +
                                    "| <b>Cerveau amélioré</b> : +2 en INT, PER et CHA, doué de parole. " +
                                    "| <b>Puissant</b> : +2 en FOR et aux DM, dé bonus en FOR. " +
                                    "| <b>Arme à deux mains</b> : +1d4° aux DM au contact."
                        }
                    ]
                },
                {
                    "id": "RUNES",
                    "nom": "RUNES",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Runes de défense",
                            "description": "Le forgesort inscrit des runes de protection sur l’ensemble de son équipement et " +
                                    "parfois jusque sur sa peau. Il obtient un bonus de +2 en DEF. Ce bonus augmente de +1 au " +
                                    "rang 3 puis au rang 5. S’il possède un golem, il peut inscrire les runes sur celui‐ci avec " +
                                    "le même effet. <br> " +
                                    "PROFIL HYBRIDE : Exceptionnellement, un profil hybride peut utiliser cette capacité avec une " +
                                    "armure qu’il est capable de porter, supérieure à l’armure de cuir, bien que, dans ce cas, " +
                                    "le bonus de DEF soit alors divisé par deux (+1 en DEF au rang 1, +2 au rang 4). Bien que " +
                                    "cette capacité ne soit pas considérée comme un sort, elle requiert au moins +1 en INT pour " +
                                    "être apprise, comme toutes les runes de forgesort."
                        },
                        {
                            "rang": "2",
                            "nom": "Rune de puissance (L)*",
                            "description": "Le forgesort enchante une arme pour 24 h. Une fois par combat, celle‐ci peut d’infliger " +
                                    "les DM maximaux sur une attaque au contact ou à distance. Les dés bonus ne sont pas maximisés " +
                                    "(attaque sournoise ou puissante, rage, etc.). Le joueur doit annoncer l’utilisation de la rune " +
                                    "avant de lancer les dés de DM."
                        },
                        {
                            "rang": "3",
                            "nom": "Rune de protection (A)*",
                            "description": "Le forgesort enchante une armure (ou des vêtements) pour 24 h. Une fois par jour, " +
                                    "celle‐ci permet d’ignorer les dommages d’une attaque que le personnage subit (au contact, " +
                                    "magique ou à distance). Si l’attaque est un critique, le personnage subit tout de même les " +
                                    "DM normaux (non‐critique). Pour activer la rune, le personnage doit être conscient et ne " +
                                    "pas être surpris (action gratuite). Le joueur doit activer la rune avant de connaître le " +
                                    "montant des DM."
                        },
                        {
                            "rang": "4",
                            "nom": "Rune d’énergie (A)*",
                            "description": "Le forgesort enchante un bijou pour une durée de 24 h. Une fois par combat, celui‐ci " +
                                    "permet d’obtenir un d20 bonus sur un test de son choix déterminé au moment où l’effet est " +
                                    "utilisé : test d’attaque ou de caractéristique."
                        },
                        {
                            "rang": "5",
                            "nom": "Rune de garde*",
                            "description": "En réalisant un rituel de 10 min, le forgesort inscrit des runes invisibles au sol. Il " +
                                    "protège une zone allant jusqu’à 10 m de diamètre pendant 12 h. À chaque fois qu’une créature " +
                                    "(de taille au moins très petite) pénètre dans la zone protégée, le sort produit un effet choisi " +
                                    "(voir ci‐après) au moment où le sort est lancé. Les créatures présentes dans la zone pendant " +
                                    "le rituel ne déclenchent pas le sort. Ce sort peut aussi être utilisé sur une porte ou un coffre. " +
                                    "Il est automatiquement lancé avec la règle de concentration et coûte seulement 3 PM pour être " +
                                    "lancé. <br> " +
                                    "<b>Alarme</b> : un puissant gong retentit et la cible est étourdie pendant 1 round à moins de " +
                                    "réussir un test de CON difficulté 15. <br> " +
                                    "<b>Feu</b> : [3d4°+INT] DM de feu (un autre élément peut être choisi parmi foudre, froid, acide)."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies du magicien
         ****************************************************************************/
        {
            "id": "MAGICIEN",
            "voies": [
                {
                    "id": "MAGIE_DES_ARCANES",
                    "nom": "MAGIE DES ARCANES",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Projectile de mana (A)*",
                            "description": "Le magicien choisit une cible visible située à moins de 30 m et lance sur elle " +
                                    "un projectile d’énergie ésotérique pure, déformant la trame de la réalité. La " +
                                    "cible subit automatiquement 1d4° DM. Si le joueur obtient le résultat maximal sur " +
                                    "son dé de dommages, il peut le relancer et ajouter le nouveau résultat (une seule fois). " +
                                    "Les DM du projectile de mana augmentent de +1 chaque fois que le personnage atteint le " +
                                    "rang 4 dans une voie de magicien jusqu’à un maximum égal à sa valeur d’INT."
                        },
                        {
                            "rang": "2",
                            "nom": "Lévitation (M)*",
                            "description": "Le magicien peut se déplacer verticalement de 5 m par action de mouvement vers " +
                                    "le haut ou de 10 m vers le bas pendant INT minutes. Rester en vol stationnaire à la " +
                                    "même hauteur demande une action de mouvement."
                        },
                        {
                            "rang": "3",
                            "nom": "Forme gazeuse (A)*",
                            "description": "Le magicien prend la consistance d’un gaz pendant 1 min. Il se déplace au ras du " +
                                    "sol (s’il chute, il le fait au ralenti) à une vitesse de 5 m par action de mouvement (M). " +
                                    "Il peut s’introduire par les plus petits interstices (comme sous une porte), mais ne peut " +
                                    "utiliser aucune capacité. Sous cette forme, les armes ordinaires ne lui infligent aucun " +
                                    "DM, mais la magie et les armes magiques l’affectent normalement."
                        },
                        {
                            "rang": "4",
                            "nom": "Accélération (A)*",
                            "description": "Le magicien voit son métabolisme s’accélérer pendant [1d4°+INT] rounds. Il reçoit " +
                                    "immédiatement une action de mouvement supplémentaire, puis une action de mouvement " +
                                    "supplémentaire à chaque round. À son tour, il peut choisir de sacrifier cette action " +
                                    "de mouvement pour obtenir au choix +3 en DEF pendant un round ou ‐1 PM sur le lancement " +
                                    "d’un sort à ce round. Il est possible de cumuler cette réduction de ‐1 PM avec une " +
                                    "Concentration (L). Par exemple, une Désintégration lancée de cette façon coûtera " +
                                    "5 – 2 – 1 = 2 PM."
                        },
                        {
                            "rang": "5",
                            "nom": "Désintégration (A)*",
                            "description": "Le magicien projette un rayon mortel dont la portée est de 20 m et qui annule " +
                                    "la cohésion de la matière, ne laissant derrière lui qu’un amas de poussière. Un test " +
                                    "d’attaque magique réussi contre la DEF de la cible inflige [5d4°+INT] DM. Si le magicien " +
                                    "vise un objet porté par une créature, le test d’attaque subit un dé malus. Les objets " +
                                    "magiques sont insensibles à ce sort et les objets normaux (jusqu’à 100 kg) sont réduits " +
                                    "en poussière. Une créature réduite à 0 PV par ce sort est proprement désintégrée, ne " +
                                    "laissant aucun cadavre derrière elle ! (Ses objets magiques sont épargnés)."
                        }
                    ]
                },
                {
                    "id": "MAGIE_DESTRUCTRICE",
                    "nom": "MAGIE DESTRUCTRICE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Arc de feu (A)*",
                            "description": "Des flammes jaillissent des doigts tendus du magicien. Jusqu’à 3 cibles au " +
                                    "contact subissent [1d4°+INT] DM, les cibles peuvent faire un test d’AGI difficulté " +
                                    "[10 + INT] pour ne subir que la moitié des DM. Les DM passent à 2d4° au rang 4."
                        },
                        {
                            "rang": "2",
                            "nom": "Saper les forces (A)*",
                            "description": "Le magicien choisit une cible vivante située à une distance maximum de 10 m. " +
                                    "S’il réussit un test opposé d’attaque magique, la cible subit un malus de ‐2 à ses " +
                                    "tests de FOR, d’attaque au contact et aux DM, jusqu’à la fin du combat. Le sort n’est " +
                                    "pas cumulable plusieurs fois sur la même cible."
                        },
                        {
                            "rang": "3",
                            "nom": "Flèche de feu (A)*",
                            "description": "Le magicien choisit une cible située à moins de 30 m. Si son attaque magique " +
                                    "réussit (contre DEF), la cible subit [3d4°+INT] DM. Chaque round de combat suivant, " +
                                    "le feu inflige 1d6 DM supplémentaires. Sur un résultat de 1 ou 2, le sort prend fin. " +
                                    "Les DM sur la durée ne sont pas cumulables si le sort est lancé plusieurs fois."
                        },
                        {
                            "rang": "4",
                            "nom": "Explosion de feu (A)*",
                            "description": "Le magicien choisit un point situé à moins de 30 m. Toutes les créatures " +
                                    "(y compris le magicien et ses compagnons) se trouvant dans un rayon de 5 m autour " +
                                    "de ce point subissent [4d4°+INT] DM et peuvent effectuer un test d’AGI difficulté " +
                                    "[10 + INT] pour ne subir que la moitié des DM."
                        },
                        {
                            "rang": "5",
                            "nom": "Appel de la foudre (A)*",
                            "description": ""
                        }
                    ]
                },
                {
                    "id": "MAGIE_ELEMENTAIRE",
                    "nom": "MAGIE ÉLÉMENTAIRE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Asphyxie (A)*",
                            "description": "Si le magicien réussit un test opposé d’attaque magique (avec une portée de 20 m), " +
                                    "la créature ciblée est privée d’air. La victime étouffe progressivement et subit 1d4° " +
                                    "DM par round pendant INT rounds. Les créatures qui ne respirent pas (morts‐vivants, " +
                                    "créatures artificielles) sont immunisées à ce sort. En revanche, les réductions de " +
                                    "dommages (voie du colosse, par exemple) ne s’appliquent pas."
                        },
                        {
                            "rang": "2",
                            "nom": "Maîtrise des éléments (M)*",
                            "description": "Le magicien retranche son rang + 2 à tous les DM de feu, de froid, d’électricité " +
                                    "ou d’acide subis pendant INT minutes. De plus, pendant la durée du sort, lorsqu’il lance " +
                                    "un sort d’un élément, le magicien peut échanger un élément contre un autre (par exemple, " +
                                    "une explosion de froid ou une flèche acide)."
                        },
                        {
                            "rang": "3",
                            "nom": "Arme élémentaire (A) ou (L)*",
                            "description": "Le magicien peut enchanter, en la touchant, une arme au contact ou à distance pour " +
                                    "INT minutes. S’il s’agit de son arme, l’incantation est une action d’attaque (A) ; si " +
                                    "elle appartient à autrui, c’est une action limitée (L). Si l’arme change de main, le " +
                                    "sort prend fin. L’arme inflige +1d4° DM de feu, de froid, d’électricité ou d’acide en plus " +
                                    "des DM habituels. Le magicien doit choisir l’élément au moment de l’incantation. Tant " +
                                    "qu’il tient l’arme élémentaire en main, les sorts basés sur cet élément lui coûtent 1 " +
                                    "PM de moins pour être lancés (par exemple, Mains brûlantes ou Explosion de feu s’il a " +
                                    "enflammé son bâton). Ce sort ne fait aucun effet sur une arme qui bénéficie déjà d’un " +
                                    "bonus élémentaire aux DM."
                        },
                        {
                            "rang": "4",
                            "nom": "Respiration aquatique (A)*",
                            "description": "Le magicien peut respirer sous l’eau pendant 10 minutes. Cette capacité peut " +
                                    "être étendue à un compagnon par point d’INT."
                        },
                        {
                            "rang": "5",
                            "nom": "Armure de pierre (A)*",
                            "description": "Pendant I NT minutes, le magicien retranche 5 points à tous les DM subis. Le " +
                                    "sort prend fin dès qu’il a absorbé [niveau du magicien × 3] DM. Cette réduction se cumule " +
                                    "à celle offerte par la Maîtrise des éléments. Armure de pierre est incompatible avec le " +
                                    "sort Déphasage (voie de la magie protectrice), il y met fin immédiatement."
                        }
                    ]
                },
                {
                    "id": "MAGIE_PROTECTRICE",
                    "nom": "MAGIE PROTECTRICE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Armure de mana (M)*",
                            "description": "Le magicien fait apparaître une protection magique chatoyante qui recouvre son " +
                                    "corps et produit des étincelles à chaque fois qu’il encaisse un coup. Pendant INT " +
                                    "minutes, la DEF du magicien augmente de +3. Cette valeur passe à +4 lorsque le personnage " +
                                    "atteint le rang 3 dans la voie et augmente de +1 supplémentaire chaque fois que le " +
                                    "personnage atteint le rang 5 dans une voie de magicien (ou dans la voie du mage). Ce " +
                                    "sort ne se cumule jamais à une armure (il est considéré comme une armure)."
                        },
                        {
                            "rang": "2",
                            "nom": "Chute ralentie (G)*",
                            "description": "Le magicien peut désigner un nombre de cibles maximal (dont lui‐même) égal à son " +
                                    "INT à une portée de 10 m, même en dehors de son tour. Les cibles peuvent chuter de " +
                                    "n’importe quelle hauteur sans subir de dommages. En cas de chute inattendue, le magicien " +
                                    "doit faire un test d’INT difficulté 15 pour chacun de ses compagnons afin d’avoir le " +
                                    "temps de lancer le sort (réussite automatique sur lui‐même)."
                        },
                        {
                            "rang": "3",
                            "nom": "Déphasage (A)*",
                            "description": "Pendant [1d4°+INT] rounds, le corps du magicien se désincarne par intermittence, " +
                                    "son image se brouille et tous les DM des attaques de contact ou à distance qu’il subit " +
                                    "et qu’il inflige sont divisés par 2. Les DM des sorts ne sont pas réduits. Un personnage " +
                                    "sous l’effet d’un sort d’armure de pierre ne peut se déphaser."
                        },
                        {
                            "rang": "4",
                            "nom": "Cercle de protection (A)*",
                            "description": "Le magicien peut tracer un cercle sur le sol (environ 2 m de diamètre) afin de " +
                                    "se protéger et d’inclure à sa protection un nombre de personnes égal à son INT. Une " +
                                    "fois par round, lorsqu’un sort prend pour cible un personnage protégé, le magicien " +
                                    "fait un test d’attaque magique opposé avec l’auteur du sort. Si le test est réussi, " +
                                    "le sort adverse est annulé et n’a aucun effet. De plus, toutes les créatures invoquées " +
                                    "(élémentaires, démons) et les morts‐vivants qui veulent attaquer une créature dans le " +
                                    "cercle subissent un dé malus en attaque. Si le magicien sort du cercle, le sort est dissipé."
                        },
                        {
                            "rang": "5",
                            "nom": "Interruption du temps (A)*",
                            "description": "Après avoir lancé ce sort, le personnage bénéficie d’INT rounds complets hors du " +
                                    "temps durant lesquels il peut utiliser des sorts ou des objets (potions) sur lui‐même. " +
                                    "Il ne peut interagir avec son environnement, ni se déplacer, seulement utiliser son " +
                                    "propre équipement ou ses capacités sur lui‐même."
                        }
                    ]
                },
                {
                    "id": "MAGIE_UNIVERSELLE",
                    "nom": "MAGIE UNIVERSELLE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Lumière (L)*",
                            "description": "Le magicien désigne un objet à moins de 10 m. Celui‐ci produit de la lumière " +
                                    "dans un rayon de 10 m pendant INT heures. Cette source de lumière n’émet pas de " +
                                    "chaleur. Une fois par combat, le magicien peut lancer ce sort sur les yeux d’une " +
                                    "créature dont le NC ne dépasse pas le rang atteint dans la voie. S’il réussit un " +
                                    "test opposé d’attaque magique, elle est aveuglée pendant 1 round."
                        },
                        {
                            "rang": "2",
                            "nom": "Familier (A)*",
                            "description": "Le magicien choisit un petit animal (écureuil, corbeau, chat, dragonnet). " +
                                    "Il peut utiliser les sens de son familier (voir par ses yeux, entendre ce qu’il " +
                                    "entend, etc.) et communiquer avec lui à distance illimitée. Il gagne +2 en Initiative " +
                                    "et en DEF lorsque son familier est en vue. S’il est réduit à 0 PV, le familier " +
                                    "disparaît dans un nuage de fumée et le personnage perd 1d4° PV en contrecoup. Toutefois, " +
                                    "le maître pourra à nouveau invoquer son familier dès qu’il aura terminé une récupération " +
                                    "complète (c’est toujours le même animal qui apparaît). Le familier récupère tous les " +
                                    "PV perdus après une récupération rapide. <br>" +
                                    "<span style=\"text-decoration: underline;\">FAMILIER</span> : <b>AGI</b>:+3* " +
                                    "<b>CON</b>:0 <b>FOR</b>:‐4 <b>PER</b>:+2 <b>CHA</b>:‐2 <b>INT</b>:‐2 <b>VOL</b>:+2 " +
                                    "<b>Défense</b>:[13 + rang dans la voie] <b>Points de vigueur</b>:[niveau du magicien] " +
                                    "<b>Initiative</b>:[Init. du magicien]. <br> " +
                                    "Un familier est une créature trop petite pour attaquer et infliger des dommages."
                        },
                        {
                            "rang": "3",
                            "nom": "Invisibilité (A)* ou (L)*",
                            "description": "Le magicien se rend invisible pendant [1d4°+INT] minutes. Une fois invisible, " +
                                    "personne ne peut plus détecter sa présence ou lui porter d’attaque directe. Si le " +
                                    "magicien attaque, il redevient visible. À partir du rang 5, le magicien peut lancer " +
                                    "ce sort sur un allié au prix d’une action limitée."
                        },
                        {
                            "rang": "4",
                            "nom": "Vol (A)*",
                            "description": "Le magicien peut voler pendant [2d4°+INT] minutes. Sa vitesse de déplacement est " +
                                    "la même qu’au sol. Il peut rester en vol stationnaire s’il le désire et cela est une " +
                                    "action gratuite."
                        },
                        {
                            "rang": "5",
                            "nom": "Téléportation (L)*",
                            "description": "Une fois par jour, le magicien disparaît et réapparaît à un autre endroit situé " +
                                    "à moins de (niveau x INT) kilomètres. Le lieu d’arrivée doit être soit en vue, soit " +
                                    "parfaitement connu par le magicien. Le magicien peut emmener avec lui un allié à partir " +
                                    "du niveau 10, un deuxième au niveau 13, un troisième au niveau 16 et enfin un quatrième " +
                                    "au niveau 19."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies du sorcier
         ****************************************************************************/
        {
            "id": "SORCIER",
            "voies": [
                {
                    "id": "DEMON",
                    "nom": "DÉMON",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Malédiction (M) ou (L)*",
                            "description": "Le sorcier effectue un test opposé d’attaque magique contre une " +
                                    "cible à moins de 20 m. En cas de succès, si l’incantation était une " +
                                    "action de mouvement (M), la victime subit un dé malus à son prochain " +
                                    "test. Si l’incantation était une action limitée (L), le dé malus " +
                                    "s’applique à ses 3 prochains tests. Dans tous les cas, la cible ne " +
                                    "peut subir les effets de ce sort qu’une fois par combat."
                        },
                        {
                            "rang": "2",
                            "nom": "Beauté de la succube (L)*",
                            "description": "Le sorcier acquiert une beauté fascinante pour INT minutes. Il gagne un " +
                                    "dé bonus aux tests de CHA ainsi qu’une attaque de contact nécessitant un test " +
                                    "d’attaque magique (contre DEF, action d’attaque), qui inflige [1d4°+INT] DM. " +
                                    "Le sorcier récupère autant de PV (sans dépasser son maximum de PV) que la cible " +
                                    "en a perdu."
                        },
                        {
                            "rang": "3",
                            "nom": "Pacte démoniaque (G)",
                            "description": "Le sorcier sacrifie 1d4° PV et gagne immédiatement +INT sur le résultat " +
                                    "d’un d20 qu’il vient de lancer ou en DEF contre une attaque (avant de savoir si " +
                                    "une attaque touche). De plus, il ajoute désormais sa VOL au nombre de dés de " +
                                    "récupération (DR) qu’il possède."
                        },
                        {
                            "rang": "4",
                            "nom": "Aspect du démon (A)*",
                            "description": "Le sorcier prend l’apparence d’un démon ailé pendant INT minutes. Il gagne " +
                                    "un dé bonus en attaque au contact et +5 en DEF et à tous les tests physiques " +
                                    "(FOR, AGI, CON), mais il ne peut pas utiliser d’arme (ni les arts martiaux). Il " +
                                    "peut faire deux attaques de griffes à [1d4°+INT] DM à chaque tour, en action limitée " +
                                    "(une seule en action d’attaque) et il peut voler de 10 m par action de mouvement. " +
                                    "Note : Ne se cumule pas avec la Beauté de la succube."
                        },
                        {
                            "rang": "5",
                            "nom": "Invocation d’un démon (L)*",
                            "description": "En sacrifiant 1d4° PV, le sorcier invoque un démon à son service pour INT " +
                                    "minutes. Ce démon possède l’apparence d’un humanoïde musclé d’environ 2,30 m doté " +
                                    "d’une épée et d’ailes de chauve‐souris. Le démon divise par deux tous les DM non " +
                                    "magiques subis, les sorts et les armes magiques lui infligent des DM normaux. Il est " +
                                    "capable de voler à une vitesse équivalente à un déplacement normal. Lorsque le sorcier " +
                                    "atteint le niveau 15, le démon devient capable d’attaquer deux fois à son tour, au prix " +
                                    "d’une action limitée.<br>" +
                                    "<span style=\"text-decoration: underline;\">DÉMON</span> : <b>AGI</b>:+2 <b>CON</b>:+4* " +
                                    "<b>FOR</b>:+5* <b>PER</b>:+2 <b>CHA</b>:+0 <b>INT</b>:+2 <b>VOL</b>:+4 <b>Défense</b>:18 " +
                                    "<b>Points de vigueur</b>:[niveau du sorcier × 5] <b>Initiative</b>:[Init. du sorcier] " +
                                    "<b>Attaque au contact</b>:[attaque magique du sorcier] <b>DM</b> 2d4°+5"
                        }
                    ]
                },
                {
                    "id": "MORT",
                    "nom": "MORT",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Siphon des âmes",
                            "description": "Une fois par round, lorsqu’une créature humanoïde vivante meurt à moins de 20 m " +
                                    "du sorcier, il récupère NC PV (arrondis à 1 pour NC 1⁄2). À partir du rang 3, si la " +
                                    "créature est de NC supérieur à 4, il peut choisir de récupérer 1 PM au lieu des PV."
                        },
                        {
                            "rang": "2",
                            "nom": "Masque mortuaire (M)*",
                            "description": "Le sorcier prend l’apparence de la mort pendant INT minutes. Il est alors " +
                                    "considéré non‐vivant et devient immunisé à la plupart des pouvoirs des morts‐vivants " +
                                    "(drain de vigueur et affaiblissement, paralysie de la goule, etc.). De plus, ceux‐ci " +
                                    "le prennent pour l’un des leurs. Il divise par deux tous les DM de froid. Il ne peut " +
                                    "pas bénéficier de soins tant qu’il est sous l’effet de ce sort. <br> " +
                                    "Note : Les créatures non vivantes sont infatigables, ne respirent pas et sont immunisées " +
                                    "aux maladies, aux poisons et à la plupart des attaques qui demandent un test de CON. " +
                                    "Elles voient dans le noir comme dans de la pénombre à une distance de 30 m."
                        },
                        {
                            "rang": "3",
                            "nom": "Baiser du vampire (A)*",
                            "description": "Ce sort nécessite la réussite d’un test opposé d’attaque magique (portée 30 m). " +
                                    "La victime subit [2d4°+INT] DM et le sorcier récupère autant de PV (sans dépasser son " +
                                    "maximum de PV). Note : Ne fonctionne pas sur une créature non vivante (golem, élémentaires, " +
                                    "morts‐vivants...)."
                        },
                        {
                            "rang": "4",
                            "nom": "Peur (A) ou (L)*",
                            "description": "Le sorcier effectue un test opposé d’attaque magique contre une cible " +
                                    "<span style=\"text-decoration: underline;\">vivante</span> (portée 20 m). S’il l’emporte, " +
                                    "la victime fuit aussi loin du sorcier que possible pendant INT rounds (il lui faut " +
                                    "généralement autant de temps pour revenir !). Les créatures dont le NC est supérieur " +
                                    "ou égal au niveau du sorcier ne fuient qu’un seul round. Le sorcier peut choisir de " +
                                    "lancer ce sort en action limitée et toutes les créatures à son contact sont affectées " +
                                    "(faire un test d’attaque magique par adversaire)."
                        },
                        {
                            "rang": "5",
                            "nom": "Briser les cœurs (A)*",
                            "description": "Le sorcier fait mine d’arracher le cœur de sa victime, puis de broyer dans sa " +
                                    "main (l’image du cœur de la victime apparaît dans la main du sorcier). Il doit faire " +
                                    "un test opposé d’attaque magique contre une cible vivante (portée 20 m) et, en cas de " +
                                    "réussite, il inflige [5d4°+INT] DM, la moitié en cas de test raté. Ce sort ne peut " +
                                    "affecter une même cible qu’une seule fois par combat. Note : Ne fonctionne pas sur " +
                                    "une créature non vivante (golem, élémentaires, morts‐vivants...)."
                        }
                    ]
                },
                {
                    "id": "OUTRE_TOMBE",
                    "nom": "OUTRE‐TOMBE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Un pied dans la tombe (A)*",
                            "description": "Le sorcier désigne une cible vivante à portée (10 m) et doit réussir un test opposé " +
                                    "d’attaque magique. En cas de succès, la cible ressent une douleur intense à l’emplacement " +
                                    "du cœur, elle subit [1d4°+INT] DM et, si elle rate un test de CON difficulté 10, l’état " +
                                    "ralenti durant 1 round."
                        },
                        {
                            "rang": "2",
                            "nom": "Armure d’os",
                            "description": "Le sorcier peut désormais porter une armure d’os (souvent camouflée sous une robe) " +
                                    "qui lui offre un bonus de +3 en DEF et n’empêche pas l’utilisation des capacités de sorcier. " +
                                    "Son bonus de DEF augmente de +1 chaque fois que le personnage atteint le rang 4 dans " +
                                    "une voie de sorcier. Le sorcier doit confectionner cette armure lui‐même à partir " +
                                    "d’ossements et l’entretenir par magie 10 min chaque jour."
                        },
                        {
                            "rang": "3",
                            "nom": "Animation des morts (L)*",
                            "description": "Le sorcier anime le cadavre d’un humanoïde de taille moyenne, décédé depuis moins " +
                                    "d’INT jours. Le zombie comprend les ordres « Attaquer », « Suivre », « Garder » et " +
                                    "« Pas bouger ». Le sorcier peut contrôler un seul zombie, plus un zombie chaque fois " +
                                    "qu’il atteint le rang 5 dans une voie de sorcier. Un zombie réduit à 0 PV tombe en poussière.<br>" +
                                    "<span style=\"text-decoration: underline;\">ZOMBIE</span> : <b>AGI</b>:‐1 <b>CON</b>:+1 " +
                                    "<b>FOR</b>:+2 <b>PER</b>:‐2 <b>CHA</b>:‐4 <b>INT</b>:‐4 <b>VOL</b>:+6 <b>Défense</b>:10 " +
                                    "<b>Points de vigueur</b>:[10 + niveau] <b>Initiative</b>:8 " +
                                    "<b>Attaque au contact</b>:[attaque magique du sorcier] <b>DM</b>:1d4°+2 <br>" +
                                    "Le zombie se déplace de 5 m par action de mouvement."
                        },
                        {
                            "rang": "4",
                            "nom": "Ensevelissement (L)*",
                            "description": "Une fois par combat, si le sorcier réussit un test opposé d’attaque magique " +
                                    "(portée 20 m), des mains squelettiques surgissent sous les pieds d’une cible de taille moyenne " +
                                    "ou inférieure et l’enterrent vivante. Tant qu’elle est ensevelie, elle subit 2d4° DM par " +
                                    "round, ne peut agir ni être la cible d’attaques extérieures. À son tour, elle peut tenter de " +
                                    "sortir de terre en réussissant un test de FOR ou d’AGI (au choix de la cible) difficulté 15 " +
                                    "au prix d’une action limitée. Si elle tombe à 0 PV, elle reste enterrée et décède au tour " +
                                    "suivant. Chaque personne qui creuse pour l’aider lui octroie un bonus de +2 sur son test " +
                                    "(maximum +10)."
                        },
                        {
                            "rang": "5",
                            "nom": "Armée des morts (L)*",
                            "description": "Une fois par jour, le sorcier peut invoquer d’innombrables squelettes qui émergent " +
                                    "du sol pour attaquer ses ennemis pendant [niveau du sorcier] rounds. Tous les adversaires " +
                                    "situés dans un rayon de 10 m autour du sorcier subissent automatiquement 2d4° DM par round. " +
                                    "Les squelettes se déplacent avec le sorcier, mais tous les déplacements dans cette zone " +
                                    "(même ceux du sorcier) sont divisés par deux."
                        }
                    ]
                },
                {
                    "id": "SANG",
                    "nom": "SANG",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Saignements (A)*",
                            "description": "Le sorcier doit réussir un test d’attaque magique (portée 10 m) contre une difficulté " +
                                    "de [10 + CON de la cible]. Du sang s’écoule de la bouche, du nez, des oreilles et même des yeux " +
                                    "de la victime, qui subit 1d4° DM par round pendant INT rounds."
                        },
                        {
                            "rang": "2",
                            "nom": "Sang mordant (M)*",
                            "description": "Pendant INT minutes, le sang du sorcier se transforme en un acide qui gicle lorsqu’il " +
                                    "subit une blessure. Chaque fois qu’un ennemi au contact le blesse, ce dernier subit 1d4° DM d’acide."
                        },
                        {
                            "rang": "3",
                            "nom": "Exsangue",
                            "description": "Le corps du sorcier devient cadavérique. Il gagne +2 en DEF et ce bonus passe à +3 au " +
                                    "rang 5 (Si le personnage porte une armure autre qu’une armure d’os de sorcier, le bonus est " +
                                    "réduit de 1 point, donc +1 DEF et +2 DEF au rang 5). De plus, lorsqu’il tombe à 0 PV, il peut " +
                                    "continuer à agir, mais avec un dé malus à tous ses tests. S’il subit encore au moins 1 DM, il " +
                                    "sombre dans l’inconscience."
                        },
                        {
                            "rang": "4",
                            "nom": "Rituel de sang (A)*",
                            "description": "Le sorcier s’ouvre les veines et sacrifie 1d4° PV pour cibler une créature vivante " +
                                    "(portée 20 m), la victime saigne à la moindre blessure. Tous les DM infligés à la cible par " +
                                    "des armes tranchantes ou perçantes (griffes et crocs inclus) augmentent de +1d4° pendant INT rounds."
                        },
                        {
                            "rang": "5",
                            "nom": "Lien de sang (A)*",
                            "description": "En réussissant un test opposé d’attaque magique (portée 20 m), le sorcier tisse un lien " +
                                    "avec sa victime. Pendant INT minutes, la moitié des DM reçus par le sorcier sont également " +
                                    "subis par la cible (les DM infligés au sorcier ne sont pas pour autant réduits) et le sorcier " +
                                    "peut lui lancer un sort sans la voir (si elle est à portée)."
                        }
                    ]
                },
                {
                    "id": "SOMBRE_MAGIE",
                    "nom": "SOMBRE MAGIE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Ténèbres (L)*",
                            "description": "Le sorcier invoque une zone fixe de ténèbres magiques, de 10 m de diamètre, à une " +
                                    "portée de 20 m pour une durée d’INT minutes. Toutes les créatures, même celles capables de " +
                                    "voir dans le noir, sont aveuglées dans cette zone. En plus de ce sort, le sorcier ajoute son " +
                                    "rang + 2 à tous les tests d’INT basés sur les savoirs sombres (démons, morts‐vivants, rituels " +
                                    "impies, etc.)."
                        },
                        {
                            "rang": "2",
                            "nom": "Reptation (M)*",
                            "description": "Pendant INT minutes, le sorcier peut ramper de 5 m par action de mouvement sur les murs " +
                                    "et les plafonds. Il peut lancer des sorts dans cette posture."
                        },
                        {
                            "rang": "3",
                            "nom": "Strangulation (A)*",
                            "description": "En réussissant un test opposé d’attaque magique (portée 20 m), le sorcier étouffe une " +
                                    "créature vivante. La victime subit un dé malus à tous ses tests et [1d4°+INT] DM par round " +
                                    "tant que le sorcier maintient sa concentration par une action de mouvement et la dépense de 1 " +
                                    "PM par round. Si la victime sort de la portée du sort, il prend fin."
                        },
                        {
                            "rang": "4",
                            "nom": "Manteau d’ombre (L)*",
                            "description": "Le sorcier s’enveloppe d’ombre pendant INT minutes. Il gagne un dé bonus à tous les " +
                                    "tests de discrétion et il impose un dé malus à tous les tests d’attaque à distance qui le " +
                                    "prennent pour cible. S’il tombe à 0 PV pendant la durée du sort, il peut choisir de " +
                                    "disparaître dans son ombre et de réapparaître à 1d6 km dans la direction de son choix avec " +
                                    "1d4° PV, 1d6 min plus tard (une dissipation de la magie (Maîtrise de la magie, voie du mage) " +
                                    "lancée sur la zone où le sorcier a disparu dans son ombre avant sa réapparition au loin " +
                                    "fait apparaître son corps et annule l’effet). Ceci met fin au sort et interdit de le lancer " +
                                    "de nouveau avant le prochain crépuscule."
                        },
                        {
                            "rang": "5",
                            "nom": "Pacte ténébreux",
                            "description": "Le sorcier augmente sa CON de +1. Désormais, il obtient un dé bonus aux tests de CON " +
                                    "et voit dans le noir comme s’il s’agissait de pénombre. De plus, lorsqu’il lance un sort, " +
                                    "il peut sacrifier 1d4° PV pour ajouter +2d4° aux DM de ce sort. S’il s’agit d’un sort dont " +
                                    "les DM durent de round en round (comme strangulation), il peut sacrifier 1d4° PV chaque round."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies du druide
         ****************************************************************************/
        {
            "id": "DRUIDE",
            "voies": [
                {
                    "id": "ANIMAUX",
                    "nom": "ANIMAUX",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Langage des animaux",
                            "description": "Le druide sait communiquer avec les mammifères. La communication reste " +
                                    "primitive et limitée à l’intelligence de l’animal et à son point de vue (prédateur, " +
                                    "proie, etc.). De plus, il ajoute son rang + 2 à tous les tests destinés à influencer " +
                                    "un animal avec lequel il peut communiquer. Chaque fois que le personnage atteint le " +
                                    "rang 4 dans une voie de druide, il apprend à communiquer avec une nouvelle catégorie " +
                                    "d’animaux de son choix : les oiseaux, les reptiles (et les amphibiens), les poissons " +
                                    "(et les mollusques) ou les arthropodes (insectes, araignées, scorpions, etc.) et enfin " +
                                    "les animaux fantastiques (griffon, pégase, etc.)."
                        },
                        {
                            "rang": "2",
                            "nom": "Petit compagnon",
                            "description": "Le druide choisit un petit animal (écureuil, corbeau, chat). Il peut utiliser " +
                                    "les sens de son familier (voir par ses yeux, entendre ce qu’il entend, etc.) et " +
                                    "communiquer avec lui à distance illimitée. Il gagne +2 en DEF lorsque son familier " +
                                    "est en vue. Le familier récupère tous les PV perdus après une récupération rapide. " +
                                    "S’il est réduit à 0 PV, le familier prend la fuite et réapparaît auprès de son maître " +
                                    "24 h plus tard, complètement soigné. S’il est tué (lors d’un fait de jeu que le MJ juge " +
                                    "inévitable), le druide perd 1d4° PV en contrecoup et pourra trouver un autre familier " +
                                    "au prochain passage de niveau (pas forcément le même animal). " +
                                    "<span style=\"text-decoration: underline;\">FAMILIER</span> : <b>AGI</b>:+3* <b>CON</b>:0 " +
                                    "<b>FOR</b>:‐4 <b>PER</b>:+2* <b>INT</b>:‐2 <b>CHA</b>:‐2 <b>VOL</b>:+2 " +
                                    "<b>Défense</b>:[13 + rang dans la voie] <b>Points de vigueur</b>:[niveau du druide × 2] " +
                                    "<b>Initiative</b>:[Init. du druide]<br>" +
                                    "Un familier est une créature trop petite pour attaquer et infliger des dommages.<br>" +
                                    "<b>Note</b> : Petit compagnon est une version non magique du Familier du magicien (voie de la " +
                                    "magie universelle). Si un personnage décide de faire l’acquisition de ces deux capacités, " +
                                    "le bonus de DEF ne se cumule pas."
                        },
                        {
                            "rang": "3",
                            "nom": "Nuée d’insectes (A)*",
                            "description": "En réussissant un test d’attaque magique contre la DEF de sa cible (portée 20 m), " +
                                    "le druide libère sur celle‐ci une nuée d’insectes volants qui piquent, aveuglent et la " +
                                    "suivent pendant [3 + PER] rounds. La victime subit 1 DM par round et un malus de ‐2 à " +
                                    "tous les tests. Les DM de zone détruisent la nuée."
                        },
                        {
                            "rang": "4",
                            "nom": "Masque du prédateur (A)*",
                            "description": "Pendant PER minutes, le druide prend les traits d’un fauve ou d’un loup. Il gagne " +
                                    "+2 en Initiative, en DEF, en attaque et aux DM au contact et peut voir dans la nuit " +
                                    "(comme un elfe)."
                        },
                        {
                            "rang": "5",
                            "nom": "Forme animale (A)*",
                            "description": "Pendant une durée de PER minutes, le druide peut prendre la forme d’un animal " +
                                    "de taille moyenne ou inférieure (minimum une souris) d’une catégorie dont il maîtrise " +
                                    "la communication (voir rang 1, à l’exception des animaux fantastiques). Il conserve " +
                                    "seulement ses PV, ses valeur d’INT et de VOL, et acquiert les caractéristiques, les " +
                                    "attaques, la DEF et les capacités naturelles de la forme choisie (le vol pour un oiseau, " +
                                    "la respiration aquatique pour le poisson, etc.). Le druide ne peut ni utiliser son " +
                                    "équipement ni ses propres capacités sous cette forme. Le druide peut reprendre sa " +
                                    "forme humaine lorsqu’il le désire par une action de mouvement (M)."
                        }
                    ]
                },
                {
                    "id": "FAUVE",
                    "nom": "FAUVE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Vitesse du félin",
                            "description": "Le druide ajoute son rang + 2 aux tests de course, d’escalade ou de saut. " +
                                    "De plus, il gagne +3 en Initiative et +1 en DEF. Le bonus de DEF passe à +2 au " +
                                    "rang 3 et +3 au rang 5."
                        },
                        {
                            "rang": "2",
                            "nom": "Panthère",
                            "description": "Le druide apprivoise une panthère (ou un puma) qui lui obéit au doigt et à " +
                                    "l’œil.<br><span style=\"text-decoration: underline;\">PANTHÈRE</span> : " +
                                    "<b>AGI</b>:+4* <b>CON</b>:+2 <b>FOR</b>:+2 <b>PER</b>:+2* <b>CHA</b>:‐2 <b>INT</b>:‐3 " +
                                    "<b>VOL</b>:+2 <b>Défense</b>:[13 + rang dans la voie] " +
                                    "<b>Points de vigueur</b>:[niveau du druide × 4] <b>Initiative</b>:[Init. du druide] " +
                                    "<b>Attaque au contact</b>:[attaque magique] <b>DM</b>:1d4+2"
                        },
                        {
                            "rang": "3",
                            "nom": "Attaque bondissante (L)",
                            "description": "Le druide ou son félin parcourt de 5 à 10 m et bénéficie d’un dé bonus au test " +
                                    "d’attaque et de +1d4° aux DM contre sa cible. Il ne peut pas effectuer d’attaque " +
                                    "bondissante s’il est au contact d’un adversaire."
                        },
                        {
                            "rang": "4",
                            "nom": "Grand félin",
                            "description": "La panthère devient un animal fabuleux ou est remplacée par un félin plus grand " +
                                    "(tigre, lion). Le grand félin peut servir de monture au druide et il se déplace de 20 m " +
                                    "par action de mouvement. Le druide peut communiquer avec son félin par télépathie et " +
                                    "le guérir à distance en dépensant ses propres PV (‐1 PV au druide par PV octroyé au félin).<br>" +
                                    "<span style=\"text-decoration: underline;\">ANIMAL FABULEUX</span> : <b>AGI</b>:+4* " +
                                    "<b>CON</b>:+5 <b>FOR</b>:+5 <b>PER</b>:+2* <b>CHA</b>:‐2 <b>INT</b>:‐2 <b>VOL</b>:+4 " +
                                    "<b>Défense</b>:[15 + rang] <b>Points de vigueur</b>:[niveau du druide × 5] " +
                                    "<b>Initiative</b>:[Init. du druide] <b>Attaque au contact</b>:[attaque magique] " +
                                    "<b>DM</b>:1d4°+5"
                        },
                        {
                            "rang": "5",
                            "nom": "Les sept vies du chat",
                            "description": "Cette capacité ne peut être utilisée que six fois, et pas plus d’une fois par niveau. " +
                                    "Lorsque les PV du druide tombent à 0 ou qu’il meurt, le druide peut choisir d’ignorer ce qui " +
                                    "a provoqué la mort ou l’inconscience ! Le MJ et le joueur doivent se mettre d’accord et " +
                                    "trouver une raison plausible (ou pas !) pour expliquer la survie du personnage, et le " +
                                    "faire réapparaître immédiatement ou un peu plus tard dans l’aventure si nécessaire."
                        }
                    ]
                },
                {
                    "id": "NATURE",
                    "nom": "NATURE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Maître de la survie",
                            "description": "En milieu naturel, le druide ajoute son rang + 2 à tous les tests de survie (s’orienter, " +
                                    "trouver un abri et de la nourriture, éviter les dangers, etc.) dont les tests de récupération " +
                                    "effectués chaque nuit. Lorsqu’il dort en milieu naturel, s’il utilise 1 DR, il guérit 1d4° " +
                                    "PV supplémentaire."
                        },
                        {
                            "rang": "2",
                            "nom": "Terrains difficiles",
                            "description": "Le druide ne subit aucune pénalité de déplacement en terrain difficile " +
                                    "(natation, neige, boue, broussailles, pente abrupte, etc.). Il obtient un bonus de +3 en " +
                                    "initiative, et +1 en attaque et en DEF lors d’un combat dans ces conditions."
                        },
                        {
                            "rang": "3",
                            "nom": "Bâton de druide (L)",
                            "description": "Le druide combat avec les deux extrémités de son bâton de bois noueux (ou de son épieu). " +
                                    "Lorsqu’il utilise cette capacité, il effectue deux attaques de contact pour lesquelles il peut " +
                                    "remplacer sa FOR par son AGI en attaque s’il le souhaite. Il inflige [1d4°+FOR ou AGI au choix] " +
                                    "DM par attaque (plus d’éventuels bonus si l’arme est magique) et il gagne +2 en DEF pendant 1 round."
                        },
                        {
                            "rang": "4",
                            "nom": "Constitution héroïque",
                            "description": "Le druide augmente sa CON de +1. Désormais, il obtient un dé bonus aux tests de CON."
                        },
                        {
                            "rang": "5",
                            "nom": "Résistant",
                            "description": "Le druide divise par deux tous les DM « naturels non magiques » : froid, feu, chutes, " +
                                    "poisons... mais aussi les DM provoqués par les animaux ou les insectes (même géants). Cette " +
                                    "protection s’étend aussi à ses compagnons animaux."
                        }
                    ]
                },
                {
                    "id": "PROTECTEUR",
                    "nom": "PROTECTEUR",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Baies magiques (L)*",
                            "description": "Le druide doit se trouver devant un buisson ou un arbre vivant. Son incantation fait " +
                                    "pousser PER fruits qu’il peut cueillir. Chaque fruit offre l’équivalent d’un repas et rend " +
                                    "[1d4°+rang] PV après 1 min à celui qui le consomme. Les effets de ces fruits ne fonctionnent " +
                                    "qu’une fois par jour et par personnage. En plus de ce sort, le druide ajoute son rang + 2 " +
                                    "à tous les tests de vigilance et de discrétion en pleine nature."
                        },
                        {
                            "rang": "2",
                            "nom": "Forêt vivante*",
                            "description": "Après un rituel de 30 min, la forêt s’éveille dans un rayon de 1 km par rang et " +
                                    "devient une alliée du druide pendant 24 h. Dans ce périmètre, les ennemis du druide sont " +
                                    "désorientés et gênés par les branches et les racines. Ils divisent leur déplacement par deux " +
                                    "et subissent un dé malus à tous les tests de survie, d’orientation, de perception ou de " +
                                    "discrétion. Le druide peut lancer ce sort une seule fois par jour. Si deux druides essaient " +
                                    "d’influencer la forêt, c’est celui dont le niveau est le plus élevé qui l’emporte."
                        },
                        {
                            "rang": "3",
                            "nom": "Régénération*",
                            "description": "Une cible touchée par le druide récupère [3d4°+PER] PV par un rituel de 10 min " +
                                    "(la cible et le druide doivent rester au calme). À partir du rang 5, ce sort permet aussi " +
                                    "de faire repousser les membres ou les parties du corps amputées. Une cible peut bénéficier " +
                                    "de ce sort seulement une fois par jour."
                        },
                        {
                            "rang": "4",
                            "nom": "Perception héroïque",
                            "description": "Le druide augmente sa PER de +1. Désormais, il obtient un dé bonus aux tests de PER. " +
                                    "De plus, il ajoute désormais sa PER pour calculer ses PM (en plus de sa VOL)."
                        },
                        {
                            "rang": "5",
                            "nom": "Forme d’arbre (A)*",
                            "description": "Le druide peut se transformer en arbre (environ 5 m de hauteur) pendant PER " +
                                    "minutes. Il prend les mêmes caractéristiques (à l’exception de l’INT, de la PER et " +
                                    "de la VOL) que l’arbre animé (voir plus loin), y compris les PV. Sous cette forme, " +
                                    "il ne peut pas parler, mais peut utiliser les sorts des voies du protecteur et des " +
                                    "végétaux. À la fin du sort, ou s’il est réduit à 0 PV, il reprend forme humaine et " +
                                    "retrouve les PV que le personnage avait au début du sort."
                        }
                    ]
                },
                {
                    "id": "VEGETAUX",
                    "nom": "VÉGÉTAUX",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Peau d’écorce (M)*",
                            "description": "La peau du druide prend la consistance de l’écorce. Il bénéficie d’un bonus à " +
                                    "la DEF égal à +2 pendant PER minutes. Ce bonus augmente de +1 aux rangs 3 et 5. Les " +
                                    "effets du sort ne sont pas cumulables au bonus d’une armure métallique ou d’un autre " +
                                    "sort de protection qui ajoute un bonus de DEF (à l’exception du Masque du prédateur). " +
                                    "En plus de ce sort, le druide ajoute son rang + 2 aux tests pour identifier les " +
                                    "plantes et connaître leurs propriétés."
                        },
                        {
                            "rang": "2",
                            "nom": "Prison végétale (L)*",
                            "description": "Le druide peut commander à la végétation de pousser et bloquer ses ennemis " +
                                    "(mais pas ses alliés) dans une zone de 10 m de diamètre (portée 20 m) pendant PER " +
                                    "minutes. Les cibles sont immobilisées. À son tour, une créature peut se libérer (action " +
                                    "d’attaque) avec un test de FOR difficulté [10 + PER du druide]. En cas de réussite, " +
                                    "elle n’est plus affectée par le sort pour le reste du combat."
                        },
                        {
                            "rang": "3",
                            "nom": "Flèche vivante (A)*",
                            "description": "En une action, le druide enchante une flèche et la tire (il doit tenir un arc " +
                                    "en main). Cette flèche a pour particularité de prendre racine dans la plaie et de " +
                                    "devenir un arbuste. S’il réussit un test d’attaque à distance, il inflige les DM " +
                                    "habituels de son attaque, et au round suivant, la flèche inflige 3d4° DM supplémentaires. " +
                                    "Si la victime est réduite à 0 PV par ce sort, un jeune arbuste pousse sur son cadavre."
                        },
                        {
                            "rang": "4",
                            "nom": "Animation d’un arbre (L)*",
                            "description": "Le druide peut animer un arbre en le touchant. Il combat à son service pendant " +
                                    "[niveau du druide] rounds. Il peut animer un seul arbre à la fois.<br>" +
                                    "<span style=\"text-decoration: underline;\">ARBRE ANIMÉ</span> : <b>AGI</b>:‐2 <b>CON</b>:+3 " +
                                    "<b>FOR</b>:+3 <b>PER</b>:‐2 <b>CHA</b>:‐2 <b>INT</b>:‐2 <b>VOL</b>:+0 <b>Défense</b>:[10 + rang] " +
                                    "<b>Points de vigueur</b>:[Niveau × 5] <b>Initiative</b>:8 " +
                                    "<b>Attaque au contact</b>:[attaque magique] <b>DM</b>:1d4°+3 <b>Déplacement</b>:5 m par action de mouvement"
                        },
                        {
                            "rang": "5",
                            "nom": "Porte végétale (A)*",
                            "description": "Une fois par jour, le druide peut pénétrer dans le tronc d’un gros arbre et sortir " +
                                    "de celui d’un autre arbre appartenant à la même forêt et situé à une distance maximale de " +
                                    "PER × 10 km. À partir du niveau 10 et tous les 4 niveaux supplémentaires, le druide peut " +
                                    "emmener une personne avec lui."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies du moine
         ****************************************************************************/
        {
            "id": "MOINE",
            "voies": [
                {
                    "id": "ENERGIE_VITALE",
                    "nom": "ÉNERGIE VITALE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Mains d’énergie (L)",
                            "description": "Par un effort de concentration, le moine peut rendre ses mains intangibles. " +
                                    "Au prix d’une action limitée, à son tour, il peut faire une attaque à mains nues avec " +
                                    "un bonus en attaque égal au rang + 2. De plus, même lorsqu’il n’utilise pas Mains " +
                                    "d’énergie, toutes les attaques à mains nues du moine sont considérées comme magiques " +
                                    "et il peut choisir de remplacer sa FOR aux DM par sa VOL."
                        },
                        {
                            "rang": "2",
                            "nom": "Projection du ki (L)",
                            "description": "Le moine projette une vague de force avec son corps et son esprit à une " +
                                    "distance maximale de 20 m. Un test d’attaque magique réussi lui permet d’infliger " +
                                    "[1d4°+ VOL] DM. Les DM passent à [2d4°+ VOL] au rang 4."
                        },
                        {
                            "rang": "3",
                            "nom": "Invulnérable",
                            "description": "Le moine ne reçoit que la moitié des DM de toutes les sources « élémentaires » : " +
                                    "Feu, froid, foudre, acide... ainsi que des poisons ou des maladies. À partir du rang 5, " +
                                    "il ne reçoit plus aucun DM ni effet des poisons et des maladies."
                        },
                        {
                            "rang": "4",
                            "nom": "Pression mortelle (M)",
                            "description": "Le moine frappe les points par lesquels circule l’énergie vitale d’une créature " +
                                    "vivante. En touchant un point précis, il libère ensuite des effets dévastateurs. Lorsqu’il " +
                                    "combat à mains nues, le joueur peut choisir de ne pas infliger immédiatement les DM de " +
                                    "ses attaques, il les comptabilise à part et ajoute +1d4° aux DM de chaque attaque. À " +
                                    "tout moment dans l’heure qui suit, il peut annoncer une Pression mortelle. Il doit alors " +
                                    "réussir un test d’attaque au contact contre la DEF de la cible (action limitée), ce " +
                                    "qui libère instantanément la totalité des DM infligés jusqu’alors. À partir du niveau " +
                                    "10, le moine n’a plus besoin de toucher sa cible pour déclencher cet effet ; dans ce " +
                                    "cas, il remplace le test d’attaque au contact par un test opposé d’attaque magique, " +
                                    "mais n'a droit qu'à un seul essai."
                        },
                        {
                            "rang": "5",
                            "nom": "Ascétisme",
                            "description": "Le moine ne mange presque plus, et il peut subsister sans eau et sans sommeil " +
                                    "pendant [5 + VOL] jour. Il ne subit aucune pénalité durant cette période. De plus, " +
                                    "le moine augmente sa CON de +1 et obtient un dé bonus aux tests de CON."
                        }
                    ]
                },
                {
                    "id": "MAITRISE",
                    "nom": "MAÎTRISE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Agilité du singe",
                            "description": "Le moine ajoute son rang + 2 à tous ses tests pour effectuer des acrobaties ou " +
                                    "esquiver et il gagne +2 en DEF. Ce bonus passe à +3 au rang 4. Se relever (si le personnage " +
                                    "est renversé) devient une action gratuite."
                        },
                        {
                            "rang": "2",
                            "nom": "Griffes du tigre",
                            "description": "Désormais, lorsque le moine obtient un résultat de 1 au dé de DM à mains nues, il " +
                                    "le remplace par le résultat maximal du dé. De plus le moine peut choisir d’infliger des " +
                                    "DM tranchants ou perforants lorsqu’il combat à mains nues au lieu de DM contondants."
                        },
                        {
                            "rang": "3",
                            "nom": "Morsure du serpent",
                            "description": "Lorsqu’il attaque à mains nues, le moine augmente de 1 point les chances d’obtenir " +
                                    "un critique sur les attaques au contact (par exemple, 19‐20 au lieu de 20). De plus, ses " +
                                    "coups critiques portés à mains nues sont désormais si douloureux que la cible est " +
                                    "affaiblie pendant 1 round."
                        },
                        {
                            "rang": "4",
                            "nom": "Fureur du dragon (L)",
                            "description": "Une fois par combat, le moine peut effectuer une attaque tournoyante qui inflige " +
                                    "automatiquement [3d4°+FOR] DM à tous les adversaires au contact et oblige ceux‐ci à " +
                                    "réussir un test de FOR difficulté 10 pour ne pas être renversés."
                        },
                        {
                            "rang": "5",
                            "nom": "Moment de perfection",
                            "description": "Une fois par jour, le moine peut choisir de réussir toutes ses attaques " +
                                    "automatiquement (pas de critique) et d’esquiver toutes celles qui le prennent pour " +
                                    "cible pendant un round. Tout semble aller au ralenti autour de lui... Il peut utiliser " +
                                    "cette capacité une fois de plus chaque jour par rang 5 atteint dans une autre voie de " +
                                    "moine, mais pas plus d’une fois par combat. De plus le moine augmente définitivement de +1 " +
                                    "la valeur de sa plus faible caractéristique (choisir en cas d’égalité)."
                        }
                    ]
                },
                {
                    "id": "MEDITATION",
                    "nom": "MÉDITATION",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Pacifisme",
                            "description": "Tant que le moine n’a réalisé aucune action offensive dans un combat, il bénéficie " +
                                    "d’un bonus de +5 en DEF et divise par deux tous les DM subis par des attaques. De plus, " +
                                    "il obtient un bonus égal à son rang + 2 à tous les tests d’empathie (pour analyser l’état " +
                                    "émotionnel d’un interlocuteur) ou à ceux effectués pour apaiser un auditoire ou le convaincre " +
                                    "de ne pas avoir recours à la violence."
                        },
                        {
                            "rang": "2",
                            "nom": "Transe de guérison",
                            "description": "Le moine peut méditer pendant 10 min et récupérer ainsi [1d4°+VOL] PV. Les soins " +
                                    "augmentent de +1d4° chaque fois que le personnage atteint le rang 4 dans une voie de " +
                                    "moine. Il doit terminer une récupération rapide avant de pouvoir à nouveau utiliser " +
                                    "cette capacité et il ne peut pas l’utiliser plus de trois fois par jour."
                        },
                        {
                            "rang": "3",
                            "nom": "Maîtrise du ki",
                            "description": "Le moine utilise sa force mentale pour augmenter son efficacité en combat. Il ajoute " +
                                    "sa VOL à son Initiative et à ses PV. De plus, il gagne +2 en DEF (ce bonus passe à +3 au rang 5)."
                        },
                        {
                            "rang": "4",
                            "nom": "Volonté héroïque",
                            "description": "Le moine augmente sa VOL de +1. Désormais, il obtient un dé bonus aux tests de VOL."
                        },
                        {
                            "rang": "5",
                            "nom": "Projection mentale (L)",
                            "description": "Une fois par jour, le moine entre en méditation et projette son esprit hors de " +
                                    "son corps pendant [1d4°+VOL] minutes. Il ressemble à un ectoplasme de couleur blanche " +
                                    "qui se déplace en volant à la vitesse de 10 m par round. Il peut passer au travers " +
                                    "des murs, mais pas des êtres vivants ou des barrières magiques. Le moine ne perçoit " +
                                    "le monde que par sa projection mentale, mais ressent les DM qui sont infligés à son " +
                                    "corps. Il peut utiliser cette capacité une fois de plus chaque jour par rang 5 atteint " +
                                    "dans une autre voie de moine. De plus le moine augmente définitivement de +1 la valeur " +
                                    "de sa plus faible caractéristique (choisir en cas d’égalité)."
                        }
                    ]
                },
                {
                    "id": "POING",
                    "nom": "POING",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Poings de fer",
                            "description": "Lorsqu’il combat à mains nues, le moine peut (s’il le souhaite) remplacer sa " +
                                    "FOR par son AGI pour ses tests d’attaque au contact et il inflige [1d6+FOR] DM létaux " +
                                    "Ces DM augmentent à chaque rang suivant : 1d8 au rang 2, 1d10 au rang 3, 1d12 au rang 4 " +
                                    "et enfin 2d6 au rang 5."
                        },
                        {
                            "rang": "2",
                            "nom": "Peau de fer",
                            "description": "Le moine gagne un bonus de +2 en DEF et il divise tous les DM temporaires subis " +
                                    "par deux. Le bonus de DEF passe à +3 au rang 5."
                        },
                        {
                            "rang": "3",
                            "nom": "Parade de projectiles (G)",
                            "description": "Le moine peut dévier un projectile (flèche, javelot...) une fois par round (sauf " +
                                    "si le test d’attaque est un critique ou si l’attaque vient d’une arme à poudre)."
                        },
                        {
                            "rang": "4",
                            "nom": "Déluge de coups (L)",
                            "description": "À son tour, le moine peut effectuer deux attaques au contact sur des cibles de " +
                                    "son choix."
                        },
                        {
                            "rang": "5",
                            "nom": "Puissance du ki",
                            "description": "Le moine peut choisir de s’imposer un dé malus sur une attaque au contact et " +
                                    "ajoute +2d4° aux DM. Cette capacité peut aussi être utilisée avec Projection du ki " +
                                    "qui est une attaque magique."
                        }
                    ]
                },
                {
                    "id": "VENT",
                    "nom": "VENT",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Pas du vent",
                            "description": "Le moine peut se déplacer avant et après avoir attaqué (mais il couvre toujours " +
                                    "une distance normale, il divise son mouvement en deux). De plus, il gagne +3 en Initiative " +
                                    "et son rang + 2 à tous les tests de saut, de course ou d’escalade."
                        },
                        {
                            "rang": "2",
                            "nom": "Course du vent",
                            "description": "Le moine se déplace à une vitesse surhumaine, il gagne +1 en DEF et une action " +
                                    "de mouvement lui permet de couvrir 15 m. Au rang 5, le bonus de DEF passe à +2 et l’action " +
                                    "de mouvement lui permet de couvrir 20 m."
                        },
                        {
                            "rang": "3",
                            "nom": "Course des airs",
                            "description": "Le moine défie les lois de la pesanteur et peut se déplacer sur des surfaces qui " +
                                    "ne devraient pas supporter son poids. Il peut se déplacer sur l’eau, la neige, le feuillage " +
                                    "des arbres ou courir sur un mur vertical. Il doit commencer et terminer son déplacement " +
                                    "sur une surface normale. Il n’est plus ralenti par les terrains difficiles et il est " +
                                    "désormais immunisé à l’état immobilisé."
                        },
                        {
                            "rang": "4",
                            "nom": "Agilité héroïque",
                            "description": "Le moine augmente son AGI de +1. Désormais, il obtient un dé bonus aux tests d’AGI."
                        },
                        {
                            "rang": "5",
                            "nom": "Passe‐muraille (L)",
                            "description": "Une fois par combat, le moine peut rendre son corps intangible le temps de passer " +
                                    "au travers d’un mur d’une épaisseur maximal de VOL mètres. Il ne peut rester immatériel " +
                                    "qu’un court instant et reprend corps dès qu’il émerge du mur. Si le mur est trop épais, " +
                                    "la capacité ne fonctionne pas. De plus le moine augmente définitivement de +1 la valeur de " +
                                    "sa plus faible caractéristique (choisir en cas d’égalité)."
                        }
                    ]
                }
            ]
        },
        /***************************************************************************
         Voies du prêtre
         ****************************************************************************/
        {
            "id": "PRETRE",
            "voies": [
                {
                    "id": "FOI",
                    "nom": "FOI",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Prédicateur",
                            "description": "Le prêtre ajoute son rang + 2 aux tests visant à convaincre ou convertir son " +
                                    "auditoire. De plus, une fois par jour, il récupère 1 PC s’il réussit à convertir une " +
                                    "créature (ou un groupe) à sa religion ou à convaincre une créature peu encline à " +
                                    "le faire à suivre ses préceptes."
                        },
                        {
                            "rang": "2",
                            "nom": "Miracle mineur (A)*",
                            "description": "Le prêtre réalise un petit miracle. Par exemple, purifier de l’eau croupie pour " +
                                    "qu’elle devienne buvable ou des aliments avariés (mais il ne peut pas en créer), apaiser " +
                                    "une douleur mineure (qui n’entraîne pas de malus) ou même une douleur majeure pendant " +
                                    "un seul round, soigner une maladie bénigne (rhume, grippe, etc.). Ce sort permet " +
                                    "aussi de rendre 1d4° PV à une créature à 0 PV."
                        },
                        {
                            "rang": "3",
                            "nom": "Arme de lumière (M)* ou (L)*",
                            "description": "Ce sort permet d’enchanter l’arme du prêtre pour une durée de CHA minutes. " +
                                    "Elle produit de la lumière dans un rayon de 5 m et contre les démons et les morts‐vivants, " +
                                    "elle offre un dé bonus en attaque et ajoute +1d4° aux DM. À partir du rang 5, le prêtre " +
                                    "peut utiliser ce sort sur l’arme d’un allié au prix d’une action limitée ou, s’il " +
                                    "utilise le sort sur son arme personnelle, infliger +2d4° DM (au lieu de 1d4°). Le sort " +
                                    "prend immédiatement fin si l’arme quitte les mains du prêtre."
                        },
                        {
                            "rang": "4",
                            "nom": "Ailes célestes (A)*",
                            "description": "Des ailes divines poussent dans le dos du prêtre, qui peut voler à une vitesse " +
                                    "équivalente à son déplacement normal pendant CHA minutes. Rester en vol stationnaire " +
                                    "avec les ailes célestes est une action de mouvement."
                        },
                        {
                            "rang": "5",
                            "nom": "Foudres divines (A)*",
                            "description": "La foudre frappe toutes les créatures désignées dans un rayon de 10 m autour du " +
                                    "prêtre et leur inflige [2d4°+CHA] DM (pas de test d’attaque requis). Ce sort est " +
                                    "gourmand en énergie et son coût augmente de +1 PM à chaque utilisation tant que le " +
                                    "prêtre n’a pas terminé une récupération rapide."
                        }
                    ]
                },
                {
                    "id": "GUERRE_SAINTE",
                    "nom": "GUERRE SAINTE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Arme bénie (A)*",
                            "description": "Le prêtre effectue un court rituel et son arme est bénie pour une durée de 24 h. " +
                                    "Lorsqu’il obtient un résultat de 1 sur son dé de DM, il relance le dé et garde le second " +
                                    "résultat. Les DM de l’arme sont considérés comme magiques. L’arme n’est plus bénie si " +
                                    "une autre créature l’utilise."
                        },
                        {
                            "rang": "2",
                            "nom": "Bouclier de la foi",
                            "description": "Le prêtre porte le symbole de sa foi sur son bouclier, ce qui lui confère un " +
                                    "bonus supplémentaire de +1 en DEF lorsqu’il l’utilise. Ce bonus passe à +2 au rang 5. " +
                                    "Comme pour l’arme bénie, le symbole de la foi n’est d’aucune utilité si le bouclier est " +
                                    "utilisé par quelqu’un d’autre."
                        },
                        {
                            "rang": "3",
                            "nom": "Châtiment divin (L)",
                            "description": "Le prêtre effectue une attaque de contact avec un dé bonus et ajoute son CHA aux " +
                                    "dommages. De plus, lorsqu’il utilise cette capacité, le prêtre peut dépenser 1 PM pour " +
                                    "ajouter +1d4° aux DM d’une attaque au contact qui touche. Au rang 5, il peut dépenser " +
                                    "2 PM pour ajouter +2d4°."
                        },
                        {
                            "rang": "4",
                            "nom": "Marteau de la foi (A)*",
                            "description": "Le prêtre effectue un test d’attaque magique contre la DEF se sa cible (portée de " +
                                    "30 m). Un projectile d’énergie de la forme de l’arme du prêtre va percuter la cible, lui " +
                                    "infligeant [2d4°+CHA] DM en cas de réussite. Si l’arme du prêtre est magique, il peut " +
                                    "ajouter son bonus au test d’attaque et aux DM. Les DM du marteau de la foi augmentent " +
                                    "de +1 chaque fois que le personnage atteint le rang 4 dans une autre voie de prêtre."
                        },
                        {
                            "rang": "5",
                            "nom": "Mot de pouvoir (A)*",
                            "description": "Une fois par jour, le prêtre peut prononcer un mot avec la voix de son dieu. Cela " +
                                    "dépasse l’entendement des mortels et tous ses ennemis dans un rayon de 10 m sont " +
                                    "étourdis pendant 1 round (pas d’action et ‐5 en DEF)."
                        }
                    ]
                },
                {
                    "id": "PRIERE",
                    "nom": "PRIÈRE",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Bénédiction (L)*",
                            "description": "Le prêtre entonne un chant pour encourager ses compagnons en vue. Ses alliés et " +
                                    "lui bénéficient d’un bonus de +1 à tous leurs tests de caractéristique et d’attaque " +
                                    "pendant CHA minutes. Ce bonus passe à +2 au rang 5. De plus, le prêtre obtient un bonus " +
                                    "égal à son rang + 2 à tous les tests de théologie ou de cosmologie."
                        },
                        {
                            "rang": "2",
                            "nom": "Sanctuaire (L)*",
                            "description": "Pendant 1 min (10 rounds), tous les adversaires qui veulent attaquer le prêtre " +
                                    "doivent réussir un test d’INT difficulté [10 + CHA du prêtre]. S’ils échouent, ils ne " +
                                    "peuvent pas l’attaquer pour la durée du sort. Ceux dont le niveau est inférieur à la " +
                                    "moitié de celui du prêtre sont automatiquement affectés (pas de test d’INT). Si le " +
                                    "prêtre commet une action offensive, le sort prend fin immédiatement et il ne peut plus " +
                                    "être lancé avant de prendre une récupération rapide."
                        },
                        {
                            "rang": "3",
                            "nom": "Destruction du mal (A)*",
                            "description": "Tous les morts‐vivants et les démons dans un rayon de 10 m autour du prêtre " +
                                    "subissent automatiquement [2d4°+CHA] DM. Les DM passent à 3d4° au rang 5."
                        },
                        {
                            "rang": "4",
                            "nom": "Volonté héroïque",
                            "description": "Le prêtre augmente sa VOL de +1. Désormais, il obtient un dé bonus aux tests de VOL."
                        },
                        {
                            "rang": "5",
                            "nom": "Intervention divine (G)",
                            "description": "Le prêtre fait appel à son dieu pour changer le cours des événements. Une fois " +
                                    "par combat, il peut décider qu’un test du MJ ou des joueurs est une réussite ou un échec, " +
                                    "même après que les dés ont révélé leur résultat. Il ne peut pas modifier le résultat du " +
                                    "test obtenu par une créature d’un NC supérieur à son niveau."
                        }
                    ]
                },
                {
                    "id": "SOINS",
                    "nom": "SOINS",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Récupération mineure (A)*",
                            "description": "Le prêtre peut apposer les mains sur un allié au contact (ou sur lui‐même) pour le " +
                                    "soigner. Le patient récupère [1d4°+CHA du prêtre] PV. Ce sort peut être lancé une fois " +
                                    "par jour par rang atteint dans la voie, plus une fois supplémentaire chaque fois que le " +
                                    "personnage atteint le rang 3 dans une autre voie de prêtre. En plus de ce sort, le " +
                                    "prêtre ajoute son rang + 2 à tous les tests de médecine et de premiers soins."
                        },
                        {
                            "rang": "2",
                            "nom": "Vigueur divine (L)*",
                            "description": "La cible au contact est guérie d’un poison ou d’une maladie. Si l’infection est " +
                                    "surnaturelle, un test d’attaque magique (éventuellement opposé) peut être demandé par " +
                                    "le MJ. De plus, le prêtre obtient un bonus égal au rang + 2 aux tests effectués pour " +
                                    "résister aux maladies et aux poisons."
                        },
                        {
                            "rang": "3",
                            "nom": "Récupération majeure (L)*",
                            "description": "Le prêtre peut soigner une cible (ou lui‐même) à une portée de 20 m ; elle " +
                                    "récupère immédiatement [3d4°+CHA du prêtre] PV. Le montant des soins prodigués augmente " +
                                    "de 1d4° chaque fois que le personnage atteint le rang 5 dans une voie de prêtre."
                        },
                        {
                            "rang": "4",
                            "nom": "Phénix",
                            "description": "Une fois par jour, lorsque le personnage tombe à 0 PV, il se relève, nimbé d’une " +
                                    "aura de lumière. Il produit alors une onde d’énergie positive qui restitue [2d4°+CHA " +
                                    "du prêtre] PV à tous ses alliés dans un rayon de 20 m, et il récupère lui‐même le double " +
                                    "de PV."
                        },
                        {
                            "rang": "5",
                            "nom": "Rétablissement*",
                            "description": "Une fois par jour, le prêtre peut soigner une créature par point de CHA. Chaque " +
                                    "patient (éventuellement lui‐même inclus) obtient les mêmes effets qu’un sort de " +
                                    "Récupération majeure. Le sort prend 10 min pendant lesquelles tous les patients doivent " +
                                    "rester au repos dans un rayon de 5 m autour du prêtre qui se concentre et se nimbe de " +
                                    "lumière divine. Ce sort ne peut pas être lancé avec la règle de concentration."
                        }
                    ]
                },
                {
                    "id": "SPIRITUALITE",
                    "nom": "SPIRITUALITÉ",
                    "capacites": [
                        {
                            "rang": "1",
                            "nom": "Vêtements sacrés",
                            "description": "La tenue religieuse du prêtre est bénie et le protège. Lorsqu’il ne porte aucune " +
                                    "armure (bouclier autorisé), il obtient un dé bonus à tous les tests pour résister à un " +
                                    "contrôle mental (injonction, charme, domination...) et +2 en DEF. Ce bonus passe à +3 au " +
                                    "rang 3 et +4 au rang 5. Éventuellement, si le prêtre prie une divinité guerrière, il peut " +
                                    "choisir d’obtenir la maîtrise de la cotte de mailles (DEF +5) et l’autorisation d’utiliser " +
                                    "les capacités des voies de prêtre avec cette armure (dans le cas d’un profil hybride, " +
                                    "la maîtrise de la chemise de mailles est un prérequis pour bénéficier de cette variante)."
                        },
                        {
                            "rang": "2",
                            "nom": "Augure (L)*",
                            "description": "Le prêtre entre en contact avec les forces de l’au‐delà et demande un avis sur " +
                                    "les conséquences d’une action (par exemple « quelles seront les conséquences si j’ouvre " +
                                    "cette porte ? »). Il doit faire un test de CHA difficulté 10. En cas de succès, il reçoit " +
                                    "une réponse déterminée par le MJ parmi : bénéfique, incertain, risqué ou préjudiciable. " +
                                    "Le MJ essaie de donner la réponse la plus utile possible au scénario."
                        },
                        {
                            "rang": "3",
                            "nom": "Délivrance (L)*",
                            "description": "En touchant sa cible, le prêtre annule les pénalités infligées par les sorts, " +
                                    "les malédictions et les capacités spéciales (peur, douleur, affaiblissement, poisons, " +
                                    "pétrification, etc., et les états étourdi, paralysé, ralenti ou immobilisé), mais pas " +
                                    "les mutilations ou les amputations. Si la pénalité était permanente, le MJ peut requérir " +
                                    "un test d’attaque magique opposé et imposer un éventuel malus selon la force de l’effet."
                        },
                        {
                            "rang": "4",
                            "nom": "Charisme héroïque",
                            "description": "Le prêtre augmente son CHA de +1. Désormais, il obtient un dé bonus aux tests de CHA."
                        },
                        {
                            "rang": "5",
                            "nom": "Marche des plans (L)*",
                            "description": "Une fois par jour, le prêtre peut passer dans une dimension entre les plans " +
                                    "d’existence où le temps et l’espace sont déformés pendant un maximum de CHA rounds. " +
                                    "Il se déplace dans une sorte de brouillard gris où le paysage défile à toute vitesse. " +
                                    "Pour chaque round de Marche des plans, il se déplace en réalité de 10 km. Le lieu de " +
                                    "sortie n’est cependant pas très précis et le MJ doit déterminer une position au hasard " +
                                    "autour du point visé (à 1d6 km près)."
                        }
                    ]
                }
            ]
        }




    ]
};
/***************************************************************************
 Modèle de profil
 
 {
 "id": "",
 "voies": [
 {
 "id": "",
 "nom": "",
 "capacites": [
 {
 "rang": "1",
 "nom": "",
 "description": ""
 },
 {
 "rang": "2",
 "nom": "",
 "description": ""
 },
 {
 "rang": "3",
 "nom": "",
 "description": ""
 },
 {
 "rang": "4",
 "nom": "",
 "description": ""
 },
 {
 "rang": "5",
 "nom": "",
 "description": ""
 }
 ]
 },
 {
 "id": "",
 "nom": "",
 "capacites": [
 {
 "rang": "1",
 "nom": "",
 "description": ""
 },
 {
 "rang": "2",
 "nom": "",
 "description": ""
 },
 {
 "rang": "3",
 "nom": "",
 "description": ""
 },
 {
 "rang": "4",
 "nom": "",
 "description": ""
 },
 {
 "rang": "5",
 "nom": "",
 "description": ""
 }
 ]
 },
 {
 "id": "",
 "nom": "",
 "capacites": [
 {
 "rang": "1",
 "nom": "",
 "description": ""
 },
 {
 "rang": "2",
 "nom": "",
 "description": ""
 },
 {
 "rang": "3",
 "nom": "",
 "description": ""
 },
 {
 "rang": "4",
 "nom": "",
 "description": ""
 },
 {
 "rang": "5",
 "nom": "",
 "description": ""
 }
 ]
 },
 {
 "id": "",
 "nom": "",
 "capacites": [
 {
 "rang": "1",
 "nom": "",
 "description": ""
 },
 {
 "rang": "2",
 "nom": "",
 "description": ""
 },
 {
 "rang": "3",
 "nom": "",
 "description": ""
 },
 {
 "rang": "4",
 "nom": "",
 "description": ""
 },
 {
 "rang": "5",
 "nom": "",
 "description": ""
 }
 ]
 },
 {
 "id": "",
 "nom": "",
 "capacites": [
 {
 "rang": "1",
 "nom": "",
 "description": ""
 },
 {
 "rang": "2",
 "nom": "",
 "description": ""
 },
 {
 "rang": "3",
 "nom": "",
 "description": ""
 },
 {
 "rang": "4",
 "nom": "",
 "description": ""
 },
 {
 "rang": "5",
 "nom": "",
 "description": ""
 }
 ]
 }
 ]
 }
 
 */