-- phpMyAdmin SQL Dump
-- version 4.4.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-12-15 08:32:08
-- 服务器版本： 5.1.73-community
-- PHP Version: 5.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `lanjinqudou`
--

-- --------------------------------------------------------

--
-- 表的结构 `administrator`
--

CREATE TABLE IF NOT EXISTS `administrator` (
  `id` int(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` double NOT NULL,
  `limit` varchar(30) NOT NULL,
  `password` int(20) NOT NULL,
  `repassword` int(20) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `remark` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `administrator`
--

INSERT INTO `administrator` (`id`, `username`, `email`, `phone`, `limit`, `password`, `repassword`, `picture`, `remark`) VALUES
(3, 'GTP', '757629876@qq.com', 13785654569, '19', 123, 123, '', 'fdsf'),
(5, '李月婷', '1135174438@qq.com', 13383336343, '', 123456, 123456, '这是图片', '这是备注'),
(6, '李月婷', '1', 321, '', 123, 123, '', '李经理');

-- --------------------------------------------------------

--
-- 表的结构 `adminusers`
--

CREATE TABLE IF NOT EXISTS `adminusers` (
  `id` int(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `adminusers`
--

INSERT INTO `adminusers` (`id`, `username`, `password`) VALUES
(1, 'lyt', '123456');

-- --------------------------------------------------------

--
-- 表的结构 `appointment`
--

CREATE TABLE IF NOT EXISTS `appointment` (
  `id` int(30) NOT NULL,
  `userid` varchar(30) NOT NULL,
  `remark` text NOT NULL,
  `publisher` varchar(30) NOT NULL,
  `time` varchar(30) NOT NULL,
  `userphone` varchar(30) NOT NULL,
  `userweixin` varchar(30) NOT NULL,
  `useradress` varchar(50) NOT NULL,
  `ifaccept` varchar(30) NOT NULL,
  `ifappointment` varchar(30) NOT NULL,
  `doctorname` varchar(50) NOT NULL,
  `userqq` varchar(30) NOT NULL,
  `appointmenttime` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `appointment`
--

INSERT INTO `appointment` (`id`, `userid`, `remark`, `publisher`, `time`, `userphone`, `userweixin`, `useradress`, `ifaccept`, `ifappointment`, `doctorname`, `userqq`, `appointmenttime`) VALUES
(1, '2', '张琰很2', '李月婷', '2016-12-14', '110', '123', '河北师范大学', '是', '是', '', '0', ''),
(5, '123456', '这次一定行', '李月婷', '2016-12-14', '15231168762', '757629876', '河北师范大学', 'yes', 'no', '张琰2', '1135174438', '2016-9-8');

-- --------------------------------------------------------

--
-- 表的结构 `case`
--

CREATE TABLE IF NOT EXISTS `case` (
  `id` int(20) NOT NULL,
  `cname` varchar(30) NOT NULL,
  `cpicture` varchar(255) NOT NULL,
  `cremark` text NOT NULL,
  `cpublisher` varchar(30) NOT NULL,
  `ctime` varchar(255) NOT NULL,
  `cintroduce` text NOT NULL,
  `callintroduce` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `case`
--

INSERT INTO `case` (`id`, `cname`, `cpicture`, `cremark`, `cpublisher`, `ctime`, `cintroduce`, `callintroduce`) VALUES
(3, '平疤案例', '', '安抚', '李月婷', '2016-12-27 00:00:00', '这是平疤案例', '<b>这是平疤安利的内容<img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/0.gif" border="0" alt="" /></b>'),
(4, '法规', '', '', '', '', '', '<img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/10.gif" border="0" alt="" /><strong>案例内容</strong>');

-- --------------------------------------------------------

--
-- 表的结构 `consul`
--

CREATE TABLE IF NOT EXISTS `consul` (
  `id` int(30) NOT NULL,
  `userNumber` int(30) NOT NULL,
  `user` varchar(30) NOT NULL,
  `consulContent` text NOT NULL,
  `remark` text NOT NULL,
  `publisher` varchar(30) NOT NULL,
  `time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(30) NOT NULL,
  `adress` varchar(100) NOT NULL,
  `phone` double NOT NULL,
  `province` varchar(30) NOT NULL,
  `content` text NOT NULL,
  `picture` varchar(255) NOT NULL,
  `remark` text NOT NULL,
  `publisher` varchar(30) NOT NULL,
  `time` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `contact`
--

INSERT INTO `contact` (`id`, `adress`, `phone`, `province`, `content`, `picture`, `remark`, `publisher`, `time`) VALUES
(2, '改的', 0, '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
  `id` int(30) NOT NULL,
  `userNumber` int(30) NOT NULL,
  `user` varchar(30) NOT NULL,
  `content` text NOT NULL,
  `remark` text NOT NULL,
  `publisher` varchar(20) NOT NULL,
  `time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `indexcontrol`
--

CREATE TABLE IF NOT EXISTS `indexcontrol` (
  `id` int(30) NOT NULL,
  `picontent` text NOT NULL,
  `picture` varchar(255) NOT NULL,
  `pipublisher` varchar(30) NOT NULL,
  `piremark` text NOT NULL,
  `pitime` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `indexcontrol`
--

INSERT INTO `indexcontrol` (`id`, `picontent`, `picture`, `pipublisher`, `piremark`, `pitime`) VALUES
(3, '<img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/10.gif" border="0" alt="" /><img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/41.gif" border="0" alt="" />', '', '李月婷', '好官方 ', '2016-12-28 00:00:00'),
(4, '佛挡杀佛<img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/10.gif" border="0" alt="" />', ' ', '李月婷', '放到', '2016-12-22 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `introduction`
--

CREATE TABLE IF NOT EXISTS `introduction` (
  `id` int(20) NOT NULL,
  `ititle` varchar(50) NOT NULL,
  `icontent` text NOT NULL,
  `ipicture` varchar(255) NOT NULL,
  `ipublisher` varchar(30) NOT NULL,
  `iremark` text NOT NULL,
  `itime` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `introduction`
--

INSERT INTO `introduction` (`id`, `ititle`, `icontent`, `ipicture`, `ipublisher`, `iremark`, `itime`) VALUES
(3, '啊发发地方', '撒飞洒发', '', '阿凡达', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `key`
--

CREATE TABLE IF NOT EXISTS `key` (
  `id` int(30) NOT NULL,
  `kname` varchar(50) NOT NULL,
  `kcontent` text NOT NULL,
  `kremark` text NOT NULL,
  `kpublisher` varchar(30) NOT NULL,
  `ktime` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `key`
--

INSERT INTO `key` (`id`, `kname`, `kcontent`, `kremark`, `kpublisher`, `ktime`) VALUES
(2, '关键字', '这是关键字的内容', '                       \r\n   这是关键字的备注                 ', '李月婷', '2016-12-23 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(20) NOT NULL,
  `ntitle` varchar(50) NOT NULL,
  `ncontent` text NOT NULL,
  `npicture` varchar(255) NOT NULL,
  `nremark` text NOT NULL,
  `npublisher` varchar(30) NOT NULL,
  `ntime` varchar(255) NOT NULL,
  `nintroduce` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `ntitle`, `ncontent`, `npicture`, `nremark`, `npublisher`, `ntime`, `nintroduce`) VALUES
(2, '发生大事了', '<strong>今天发生了一件大事<img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/28.gif" border="0" alt="" /><img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/42.gif" border="0" alt="" /><img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/76.gif" border="0" alt="" /><img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/57.gif" border="0" alt="" /><img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/67.gif" border="0" alt="" /></strong>', '', '今天发生了一件大事', '李月婷', '2016-12-23 00:00:00', '今天发生了一件大事'),
(3, '第三方', '<img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/10.gif" border="0" alt="" /><strong><img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/29.gif" border="0" alt="" /><img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/44.gif" border="0" alt="" />新闻内容</strong>', '', '个人的搞不好', 'lyt', '2016-12-29 00:00:00', '萨芬撒');

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(20) NOT NULL,
  `pdname` varchar(20) NOT NULL,
  `pdpicture` varchar(255) NOT NULL,
  `pdremark` varchar(50) NOT NULL,
  `pdpublisher` varchar(20) NOT NULL,
  `pdtime` varchar(255) NOT NULL,
  `pdprice` double NOT NULL,
  `pdintroduce` text NOT NULL,
  `pdallintroduce` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `pdname`, `pdpicture`, `pdremark`, `pdpublisher`, `pdtime`, `pdprice`, `pdintroduce`, `pdallintroduce`) VALUES
(1, '蓝金组合', '', '', '李月婷', '2016-12-29', 20, '这是蓝金组合', '这是蓝金组合这是蓝金组合'),
(3, '', '', '', '', '0000-00-00', 0, '', ''),
(4, '蓝金组合', '', '', '', '2016-12-27', 0, '这是蓝金组合', '<b>这是</b>'),
(5, 'v', '', '', '', '2016-12-19', 0, '', '<strong>产品内容</strong>'),
(8, '蓝金', '', '', '', '2016-12-13', 0, '', '<strong>产品内容</strong>');

-- --------------------------------------------------------

--
-- 表的结构 `program`
--

CREATE TABLE IF NOT EXISTS `program` (
  `id` int(20) NOT NULL,
  `prname` varchar(30) NOT NULL,
  `prpicture` varchar(255) NOT NULL,
  `prremark` text NOT NULL,
  `prpublisher` varchar(30) NOT NULL,
  `prtime` varchar(255) NOT NULL,
  `printroduce` text NOT NULL,
  `prallintroduce` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `project`
--

CREATE TABLE IF NOT EXISTS `project` (
  `id` int(20) NOT NULL,
  `pname` varchar(30) NOT NULL,
  `pimgnumber` int(20) NOT NULL,
  `pimg` varchar(255) NOT NULL,
  `premark` varchar(30) NOT NULL,
  `ppublishe` varchar(30) NOT NULL,
  `ptime` text NOT NULL,
  `pintroduction` text NOT NULL,
  `pcontent` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `project`
--

INSERT INTO `project` (`id`, `pname`, `pimgnumber`, `pimg`, `premark`, `ppublishe`, `ptime`, `pintroduction`, `pcontent`) VALUES
(5, '护肤', 123, '', '这是护肤内容', 'lyt', '2016-12-06 00:00:00', '这是护肤', '<b>这是护肤内容</b>'),
(9, '祛痘', 2, '没有', '这是什么鬼', '李月婷', '2016-12-28 00:00:00', '这是祛痘项目', '<img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/11.gif" border="0" alt="" /><strong><img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/29.gif" border="0" alt="" /><img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/65.gif" border="0" alt="" /><img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/133.gif" border="0" alt="" />项目内容</strong>');

-- --------------------------------------------------------

--
-- 表的结构 `skincaretips`
--

CREATE TABLE IF NOT EXISTS `skincaretips` (
  `id` int(30) NOT NULL,
  `scontent` text NOT NULL,
  `spicture` varchar(255) NOT NULL,
  `sremark` text NOT NULL,
  `spublisher` varchar(30) NOT NULL,
  `stime` varchar(255) NOT NULL,
  `sintroduce` text NOT NULL,
  `stitle` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `skincaretips`
--

INSERT INTO `skincaretips` (`id`, `scontent`, `spicture`, `sremark`, `spublisher`, `stime`, `sintroduce`, `stitle`) VALUES
(1, '这是美颜小贴士的内容', '图片', '啥，你说啥', '李月婷', '2016-06-23', '', ''),
(5, '<strong>案例内容痘痘怎样形成痘痘怎样形成痘痘怎样形成痘痘怎样形成痘痘怎样形成<img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/40.gif" border="0" alt="" /></strong>', '', '放大发发付付所多', 'lyt', '2016-12-14 00:00:00', '痘痘怎样形成痘痘怎样形成', '痘痘怎样形成');

-- --------------------------------------------------------

--
-- 表的结构 `tag`
--

CREATE TABLE IF NOT EXISTS `tag` (
  `id` int(30) NOT NULL,
  `tname` varchar(50) NOT NULL,
  `tcontent` text NOT NULL,
  `tremark` text NOT NULL,
  `tpublisher` varchar(30) NOT NULL,
  `ttime` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tag`
--

INSERT INTO `tag` (`id`, `tname`, `tcontent`, `tremark`, `tpublisher`, `ttime`) VALUES
(2, '标签2', '<strong>标签2<img src="http://127.0.0.1:8088/lanjin/Public/admin/js/plugins/emoticons/images/85.gif" border="0" alt="" /></strong>', '                       \r\n     暗访撒范德萨发               ', '李月婷', '2016-12-29 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrator`
--
ALTER TABLE `administrator`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adminusers`
--
ALTER TABLE `adminusers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `case`
--
ALTER TABLE `case`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `consul`
--
ALTER TABLE `consul`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `indexcontrol`
--
ALTER TABLE `indexcontrol`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `introduction`
--
ALTER TABLE `introduction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `key`
--
ALTER TABLE `key`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skincaretips`
--
ALTER TABLE `skincaretips`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administrator`
--
ALTER TABLE `administrator`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `adminusers`
--
ALTER TABLE `adminusers`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `case`
--
ALTER TABLE `case`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `indexcontrol`
--
ALTER TABLE `indexcontrol`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `introduction`
--
ALTER TABLE `introduction`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `key`
--
ALTER TABLE `key`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `program`
--
ALTER TABLE `program`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `skincaretips`
--
ALTER TABLE `skincaretips`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tag`
--
ALTER TABLE `tag`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
