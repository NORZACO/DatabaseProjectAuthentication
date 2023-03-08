
CREATE DATABASE DatabaseProjectAuthentic;

CREATE USER 'DbProjectAuthentic'@'localhost' IDENTIFIED BY 'strong_password';

GRANT ALL PRIVILEGES ON DatabaseProjectAuthentic.* TO 'DbProjectAuthentic'@'localhost' WITH GRANT OPTION;


