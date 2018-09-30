-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  Dim 30 sep. 2018 à 18:41
-- Version du serveur :  5.7.21
-- Version de PHP :  5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `lebonjob`
--

-- --------------------------------------------------------

--
-- Structure de la table `companies`
--

DROP TABLE IF EXISTS `companies`;
CREATE TABLE IF NOT EXISTS `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `adresse` varchar(400) NOT NULL,
  `ville` varchar(50) NOT NULL,
  `code_postal` int(10) NOT NULL,
  `pays` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `tel` int(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `message` text NOT NULL,
  `id_from` int(11) NOT NULL,
  `id_to` int(11) NOT NULL,
  `id_job_advert` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `job_advertisements`
--

DROP TABLE IF EXISTS `job_advertisements`;
CREATE TABLE IF NOT EXISTS `job_advertisements` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `titre` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `description_long` text NOT NULL,
  `date_creation` datetime NOT NULL,
  `date_lastupdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `type_poste` varchar(255) NOT NULL,
  `type_contrat` enum('CDI','CDD','INTERIM') NOT NULL,
  `remun` varchar(100) NOT NULL,
  `adresse` varchar(400) NOT NULL,
  `ville` varchar(50) NOT NULL,
  `code_postal` int(10) NOT NULL,
  `pays` varchar(100) NOT NULL,
  `image_src` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `job_advertisements`
--

INSERT INTO `job_advertisements` (`id`, `titre`, `description`, `description_long`, `date_creation`, `date_lastupdate`, `type_poste`, `type_contrat`, `remun`, `adresse`, `ville`, `code_postal`, `pays`, `image_src`) VALUES
(1, 'Standardiste', 'PROFIL : Vous êtes un #EnglishSpeaker avec au minimum un niveau d\'anglais conversationnel.', 'PROFIL : Vous êtes un #EnglishSpeaker avec au minimum un niveau d\'anglais conversationnel. De nature dynamique, flexible et polyvalent(e), vous êtes à l\'écoute des besoins du client et avez un état d\'esprit positif.', '2018-09-22 00:00:00', '2018-09-22 00:00:00', 'Hôte d\'Accueil Standardiste', 'CDI', ' < 2000', 'Broteaux', 'Lyon', 69007, 'France', NULL),
(2, 'Conseiller en Gestion des Achats', 'Nous recherchons actuellement des Conseillers Terrain en Gestion des Achats pour être l\'interlocuteur des décideurs .', 'Vous avez suivi une formation commerciale et êtes à l\'aise avec un discours élaboré , vous savez installer une relation gagnant/gagnant dans vos relations et vous êtes à l\'aise avec les notions de budgets et d\'économies, n\'hésitez pas à nous soumettre votre candidature.', '2018-09-22 00:00:00', '2018-09-22 00:00:00', 'Conseiller en Gestion des Achats', 'CDI', '40 000 € par an', 'Sainte-Foy-lès-Lyon', 'Lyon', 69000, 'France', NULL),
(3, 'Standardiste', 'PROFIL : Vous êtes un #EnglishSpeaker avec au minimum un niveau d\'anglais conversationnel.', 'PROFIL : Vous êtes un #EnglishSpeaker avec au minimum un niveau d\'anglais conversationnel. De nature dynamique, flexible et polyvalent(e), vous êtes à l\'écoute des besoins du client et avez un état d\'esprit positif.', '2018-09-22 00:00:00', '2018-09-22 00:00:00', 'Hôte d\'Accueil Standardiste', 'CDI', ' < 2000', 'Broteaux', 'Lyon', 69007, 'France', NULL),
(4, 'Développeur informatique', 'Titulaire d\'une formation Bac +2/3 (DUT informatique/BTS informatique/Licence Pro) avec une expérience dans le développement informatique voire un Bac +5 sans expérience.', 'Titulaire d\'une formation Bac +2/3 (DUT informatique/BTS informatique/Licence Pro) avec une expérience dans le développement informatique voire un Bac +5 sans expérience.', '2018-09-22 00:00:00', '2018-09-22 00:00:00', 'Hôte d\'Accueil Standardiste', 'CDI', ' < 2000', 'Broteaux', 'Lyon', 69007, 'France', NULL),
(8, 'Surveillant Pénitentiaire', 'Vous savez être impartial. Pour devenir surveillant, vous êtes: de nationalité française, âgé de 19 ans minimum à 42 ans', 'Le métier de surveillant pénitentiaire nécessite avant tout des qualités humaines : le sens de l’autorité, de l’écoute et du respect sont des atouts indispensables. Votre détermination et votre vigilance sont des qualités reconnues.', '2018-09-24 00:00:00', '2018-09-25 18:23:52', 'Surveillant Pénitentiaire', 'CDD', '<8000', 'Armée de terre', 'Lyon', 69002, 'France', ''),
(9, 'Chargé de recrutement', 'Vous faîtes preuve de rigueur, d’organisation, d’une excellente capacité d’évaluation et d’un bon état d’esprit.', 'Après une formation initiale, votre responsable vous accueille au sein de l’agence et vous accompagne dans votre progression. Vous pourrez ainsi participer activement à la sérénité des enfants et au bien-être des familles !', '2018-09-24 00:00:00', '2018-09-25 18:23:56', 'Chargé de recrutement', 'CDD', '1 845€', 'Lyon 6e', 'Lyon', 69006, 'France', ''),
(10, 'Informaticien', 'Société d’ingénierie industrielle née il y a 20 ans, nous intervenons pour nos clients en phase de projets et d\'avant projets dans de nombreux domaines.', 'Vous avez en charge la conception, le développement et la mise en œuvre de solutions et d’évolutions.Pour cela, vous réalisez les missions suivantes : L’analyse des besoins recueillis - Le développement en des projets - La participation aux phases de test suite aux développements réalisés - L\'intégration d\'applications dans le respect des normes et procédures', '2018-09-24 00:00:00', '2018-09-25 18:23:57', 'Informaticien', 'CDI', '24 000,00€ à 48 000,00€ /an', 'Lyon', 'Lyon', 69000, 'France', ''),
(11, 'Hôte/Hôtesse d\'accueil', 'Souriant(e) et engagé(e) vous justifiez d’une expérience réussie sur un poste similaire. ', 'Professionnel(le) et réactif(ve), vous êtes reconnu(e) pour votre excellente présentation et vos qualités humaines et organisationnelles.Votre polyvalence et votre maitrise des outils bureautique vous permettront d’être rapidement opérationnel(le) dans vos missions. ', '2018-09-24 00:00:00', '2018-09-25 18:23:57', 'Hôte/Hôtesse d\'accueil', 'CDI', '9,88 € par heure', 'Saint-Priest', 'Lyon', 69000, 'France', ''),
(12, 'Chargé(e) d\'accueil', 'Le Groupe City One, référence de l\'accueil , recrute un(e) chargé(e) d\'accueil pour une entreprise située dans le 2ème arrondissement de Lyon. ', 'Vous serez en charge de l\'accueil physique, de l\'accueil téléphonique, ainsi que de la gestion du courrier, plis, colis, arrivée. CDD de 2 mois en vu d\'un de CDI à temps partiel soit 25 heures par semaine renouvelable.', '2018-09-24 00:00:00', '2018-09-25 18:23:58', 'Chargé(e) d\'accueil', 'CDD', '9,88 € par heure', 'Lyon', 'Lyon', 69002, 'France', ''),
(13, 'Assistant administratif', 'Le Cerema Territoires et Ville est une direction technique implantée à Lyon centre. Elle exerce au sein du Cerema une compétence de niveau national.', 'Outre la production de travaux de référence, de diffusion et de valorisation, elle exerce des missions d’animation, de pilotage, et d’appui aux directions territoriales au sein du Cerema, pour développer les offres de service du Cerema dans ses domaines de compétences.', '2018-09-24 00:00:00', '2018-09-25 18:23:58', 'Assistant administratif', 'Intérim/CDD', '1 300 € par mois', 'Lyon 3e', 'Lyon', 69003, 'France', ''),
(14, 'Manager Commercial', 'Vous souhaitez vous lancer dans une nouvelle aventure managériale et rejoindre l’équipe de MAUD MAQUILLAGE PERMANENT, leader francais sur le marché de la dermopigmentation ?', 'voluant dans le domaine du maquillage permanent, votre mission sera d’encadrer notre équipe et participer au développement du chiffre d’affaires de notre studio. Vous devez également pratiquer le maquillage permanent depuis au moins 2 ans. Rigueur, autonomie et goût du challenge sont les qualités essentielles requises pour rejoindre nos talents.', '2018-09-24 00:00:00', '2018-09-25 18:23:59', 'Manager Commercial', 'CDI', '2 000 € par mois', 'Lyon', 'Lyon', 69000, 'France', ''),
(15, 'Décoratrice Vendeuse Architecte d\'Intérieur Commerciale', 'Vous êtes tenté de rejoindre un groupe en plein essor dans le secteur du design, du e-commerce et de l\'éclairage haut de gamme?', 'Le tout dans un cadre de travail dynamique(siège social flambant neuf avec bureau électrique, super salle de déjeuner, ping pong..) où le beau et le bien-être au travail font partie de nos valeurs d\'entreprise. Un travail où le savoir êtreest tout aussi important que le savoir faire. ', '2018-09-24 00:00:00', '2018-09-25 18:23:59', 'Décoratrice Vendeuse Architecte d\'Intérieur Commerciale', 'CDI', '2 300 € par mois', 'Dardilly', 'Lyon', 69000, 'France', ''),
(16, 'Assistant(e) Administratif(ve)', 'Vous êtes sensible aux valeurs de solidarité et de transparence, portées par la Nef : alors rejoignez le mouvement de la finance éthique !', 'Les projets qu’elle soutient au quotidien sont donc ceux qui construisent la société de demain : agriculture biologique et paysanne, énergies renouvelables, entrepreneuriat social, filières bio, insertion, développement local, associations, pédagogies alternatives, logement social, économie circulaire, commerce équitable, etc.', '2018-09-24 00:00:00', '2018-09-25 18:23:59', 'Assistant(e) Administratif(ve)', 'CDI', '22 800 € - 24 000 € par an', 'Lyon', 'Lyon', 69000, 'France', ''),
(17, 'Assistant(e) Economie d\'Energie', 'Issu(e) d’une formation type BEP/CAP/Bac, vous avez déjà acquis une expérience sur une fonction similaire au sein d’une entreprise de service.', 'Vous faites preuve d’une réelle aptitude à la relation téléphonique avec les clients et les partenaires. Vous êtes reconnu(e) pour votre rigueur, votre organisation, et maîtrisez les outils informatiques.', '2018-09-24 00:00:00', '2018-09-25 18:23:59', 'Assistant(e) Economie d\'Energie', 'CDD', '1 700,00€ à 1 750,00€ /mois', 'Lyon', 'Lyon', 69000, 'France', '');

-- --------------------------------------------------------

--
-- Structure de la table `job_applications`
--

DROP TABLE IF EXISTS `job_applications`;
CREATE TABLE IF NOT EXISTS `job_applications` (
  `id_job_advertissements` int(11) NOT NULL,
  `id_people` int(11) NOT NULL,
  `id_contact` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `job_owner`
--

DROP TABLE IF EXISTS `job_owner`;
CREATE TABLE IF NOT EXISTS `job_owner` (
  `id_job` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL,
  `isCompany` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `job_owner`
--

INSERT INTO `job_owner` (`id_job`, `id_owner`, `isCompany`) VALUES
(8, 1, 0),
(9, 1, 0),
(10, 1, 0),
(11, 1, 0),
(12, 1, 0),
(13, 1, 0),
(14, 1, 0),
(15, 1, 0),
(16, 1, 0),
(17, 1, 0),
(18, 1, 0),
(19, 1, 0),
(20, 1, 0),
(21, 1, 0),
(22, 1, 0),
(23, 1, 0),
(24, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `people`
--

DROP TABLE IF EXISTS `people`;
CREATE TABLE IF NOT EXISTS `people` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `age` int(3) NOT NULL,
  `birthdate` datetime NOT NULL,
  `description_head` text NOT NULL,
  `description_skills` text NOT NULL,
  `description_experience` text NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `isPro` tinyint(1) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `mail` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tel` int(12) NOT NULL,
  `image_src` varchar(400) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `people`
--

INSERT INTO `people` (`id`, `firstname`, `lastname`, `age`, `birthdate`, `description_head`, `description_skills`, `description_experience`, `isActive`, `isPro`, `isAdmin`, `mail`, `password`, `tel`, `image_src`) VALUES
(1, 'julien', 'legay', 21, '1997-05-30 00:00:00', 'Comptabilité et Informaticien', 'PHP NODEJS JS', 'J\'ai beaucoup d\'expérience', 1, 0, 1, 'eccom3@gmail.com', 'Laflemmedecrypter', 628505815, '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
