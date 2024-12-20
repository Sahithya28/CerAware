-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2024 at 05:48 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cervical`
--

-- --------------------------------------------------------

--
-- Table structure for table `doctorlogin`
--

CREATE TABLE `doctorlogin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `re_enter_password` varchar(255) NOT NULL,
  `phonenumber` varchar(15) DEFAULT NULL,
  `specialization` varchar(100) DEFAULT NULL,
  `experience` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctorlogin`
--

INSERT INTO `doctorlogin` (`id`, `username`, `password`, `re_enter_password`, `phonenumber`, `specialization`, `experience`, `name`, `email`) VALUES
(8, 'Vijay', '123', '123', '1134467889', 'Specialties ', 20, 'Vijay', 'vijaysv.sse@saveetha.com');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `qns_id` int(11) DEFAULT NULL,
  `category` varchar(50) NOT NULL,
  `questions` text DEFAULT NULL,
  `choice_1` varchar(255) DEFAULT NULL,
  `choice_2` varchar(255) DEFAULT NULL,
  `choice_3` varchar(255) DEFAULT NULL,
  `choice_4` varchar(255) DEFAULT NULL,
  `scores` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `qns_id`, `category`, `questions`, `choice_1`, `choice_2`, `choice_3`, `choice_4`, `scores`) VALUES
(1, 1, 'age_more_than_35', 'Is your age between 45 - 55 ?', 'Yes', 'No', '', '', 0),
(2, 2, 'age_more_than_35', 'Have you attained Menopause ?', 'Yes', 'No', '', '', 1),
(3, 3, 'age_less_than_21', 'Do you have bleeding after sex ?', 'Yes', 'No', '', '', 1),
(4, 4, 'age_less_than_21', 'Do you have irregular vaginal bleeding?', 'Yes', 'No', '', '', 1),
(5, 5, 'age_less_than_21', 'Do you have vaginal discharge ?', 'Yes', 'No', '', '', 0),
(6, 6, 'age_less_than_21', 'If yes color of the discharge ?', 'Green', 'Yellow', 'White', 'Bloody', 1),
(7, 7, 'age_more_than_35', 'Do you have any weight loss or loss of appetite ?', 'Yes', 'No', '', '', 0),
(8, 8, 'age_more_than_35', 'Do you have any urinary problems ?', 'Yes', 'No', '', '', 0),
(9, 9, 'age_more_than_35', 'Are you vaccinated against Human Papilloma Virus(HPV) ?', 'Yes', 'No', '', '', 1),
(10, 10, 'age_less_than_21', 'Are you vaccinated against human papilloma virus (HPV) ?', 'Yes', 'No', '', '', 0),
(11, 11, 'age_less_than_21', 'Have you ever done Human Papilloma Virus(HPV) test ?', 'Yes', 'No', '', '', 0),
(12, 12, 'age_less_than_21', 'If Yes ?', 'Positive', 'Negative', '', '', 1),
(13, 13, 'age_less_than_21', 'Do you have any history of multiple sexual partners ?', 'Yes', 'No', '', '', 1),
(14, 14, 'age_more_than_35', 'Have you ever done Pap Test ?', 'Yes', 'No', '', '', 0),
(15, 15, 'age_more_than_35', 'If Yes ?', 'Normal', 'Abnormal', '', '', 1),
(16, 16, 'age_less_than_21', 'Any of your family members having cervical cancer ?', 'Yes', 'No', '', '', 1),
(17, 17, 'age_more_than_35', 'Do you have leg pain or swelling ? ', 'Yes', 'No', '', '', 0),
(18, 18, 'age_more_than_35', 'Are you overweight ?', 'Yes', 'No', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `storequestions`
--

CREATE TABLE `storequestions` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `question_text` text NOT NULL,
  `answer` varchar(255) NOT NULL,
  `score` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `userlogin`
--

CREATE TABLE `userlogin` (
  `id` int(50) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Gender` varchar(30) NOT NULL,
  `Age` int(40) NOT NULL,
  `Date` varchar(30) NOT NULL,
  `phonenumber` varchar(20) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `re_enter_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userlogin`
--

INSERT INTO `userlogin` (`id`, `Name`, `Gender`, `Age`, `Date`, `phonenumber`, `username`, `password`, `re_enter_password`) VALUES
(9, 'Vijay', 'Female', 20, '09/03/2004', '6729183079', 'Vijay', '123', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctorlogin`
--
ALTER TABLE `doctorlogin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `storequestions`
--
ALTER TABLE `storequestions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userlogin`
--
ALTER TABLE `userlogin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctorlogin`
--
ALTER TABLE `doctorlogin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `storequestions`
--
ALTER TABLE `storequestions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=298;

--
-- AUTO_INCREMENT for table `userlogin`
--
ALTER TABLE `userlogin`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
