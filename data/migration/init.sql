
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
    `id` integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `email` varchar(255) DEFAULT NULL,
    `password` varchar(255) DEFAULT NULL,
    `firstname` varchar(255) DEFAULT NULL,
    `lastname` varchar(255) DEFAULT NULL,
    `role` varchar(255) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `library`;
CREATE TABLE IF NOT EXISTS `library` (
    `id` integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `address` varchar(255) DEFAULT NULL,
    `city` varchar(255) DEFAULT NULL,
    `zipcode` varchar(255) DEFAULT NULL,
    `country` varchar(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `book` (
    `id` integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `library_id` int(11) NOT NULL,
    `name` varchar(255) DEFAULT NULL,
    `author` varchar(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL,
    CONSTRAINT `book_fk_1` FOREIGN KEY (`library_id`) REFERENCES `library` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO user VALUES('', 'nicolas.servant@matters.tech', 'Password75', 'nicolas', 'servant', 'user', NOW(), '');