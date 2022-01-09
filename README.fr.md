- [Anglais](README.md)
- [Française](README.fr.md)

# Un exemple d'utilisation de plusieurs bases de données

Ajoutez vos tests au fichier testDatabases.js

# Générer des modèles à partir de la base de données avec sequelize

## Installer la bibliothèque [sequelize-auto](https://github.com/sequelize/sequelize-auto)

npm install -g sequelize-auto pg pg-hstore

## Usage

### Avec mot de passe

sequelize-auto -o "./models" -d sequelize_auto_test -h localhost -u my_username -p 5432 -x my_password -e postgres

### Sans passe

sequelize-auto -o "./models/testdb_1" -d testdb_1 -h localhost -p 5432 -e postgres
