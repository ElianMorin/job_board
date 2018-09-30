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
(2, 'Standardiste', 'PROFIL : Vous êtes un #EnglishSpeaker avec au minimum un niveau d\'anglais conversationnel.', 'PROFIL : Vous êtes un #EnglishSpeaker avec au minimum un niveau d\'anglais conversationnel. De nature dynamique, flexible et polyvalent(e), vous êtes à l\'écoute des besoins du client et avez un état d\'esprit positif.', '2018-09-22 00:00:00', '2018-09-22 00:00:00', 'Hôte d\'Accueil Standardiste', 'CDI', ' < 2000', 'Broteaux', 'Lyon', 69007, 'France', NULL),
(3, 'Standardiste', 'PROFIL : Vous êtes un #EnglishSpeaker avec au minimum un niveau d\'anglais conversationnel.', 'PROFIL : Vous êtes un #EnglishSpeaker avec au minimum un niveau d\'anglais conversationnel. De nature dynamique, flexible et polyvalent(e), vous êtes à l\'écoute des besoins du client et avez un état d\'esprit positif.', '2018-09-22 00:00:00', '2018-09-22 00:00:00', 'Hôte d\'Accueil Standardiste', 'CDI', ' < 2000', 'Broteaux', 'Lyon', 69007, 'France', NULL),
(4, 'Développeur informatique', 'Titulaire d\'une formation Bac +2/3 (DUT informatique/BTS informatique/Licence Pro) avec une expérience dans le développement informatique voire un Bac +5 sans expérience.', 'Titulaire d\'une formation Bac +2/3 (DUT informatique/BTS informatique/Licence Pro) avec une expérience dans le développement informatique voire un Bac +5 sans expérience.', '2018-09-22 00:00:00', '2018-09-22 00:00:00', 'Hôte d\'Accueil Standardiste', 'CDI', ' < 2000', 'Broteaux', 'Lyon', 69007, 'France', NULL),
(8, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:23:52', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(9, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:23:56', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(10, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:23:57', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(11, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:23:57', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(12, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:23:58', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(13, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:23:58', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(14, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:23:59', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(15, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:23:59', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(16, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:23:59', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(17, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:23:59', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(18, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:24:00', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(19, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:24:00', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(20, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:24:01', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(21, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:24:01', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(22, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:24:01', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(23, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:24:02', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', ''),
(24, 'Chef de projet', 'Vous êtes de nature dynamique et motivé', 'La société ENJI recherche des chefs de projet pour gérer des projets. SI si', '2018-09-24 00:00:00', '2018-09-25 18:24:02', 'Chef de projet', 'CDD', '<15000', '15 rue millounis', 'Lyon', 69002, 'France', '');

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
