create database WEBII;

use WEBII;

CREATE TABLE `usuario` (
`id` int(11) NOT NULL auto_increment,
`nome` VARCHAR(50) NULL DEFAULT NULL,
`senha` VARCHAR(50) NULL DEFAULT NULL,
PRIMARY KEY (`id`)
)
