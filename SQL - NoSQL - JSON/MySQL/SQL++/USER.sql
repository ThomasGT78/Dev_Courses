SELECT * FROM mysql.user;

CREATE USER Thomas IDENTIFIED BY 'tom';
GRANT ALL ON *.* TO 'Thomas'@'127.0.0.1';
FLUSH PRIVILEGES;

CREATE USER a IDENTIFIED BY 'f';
GRANT SELECT, INSERT, DELETE, UPDATE ON cours.pays TO 'a'@'192.168.1.37';
FLUSH PRIVILEGES;
SET PASSWORD = PASSWORD('fff');

DROP USER 'a'@'192.168.1.37';
-- DROP USER 'a';	=	DROP USER 'a'@%;