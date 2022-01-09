- [English](README.md)
- [Frensh](README.fr.md)

# This is an example to use multiple databases

Add your tests to file testDatabases.js

# Generate Models from database with sequelize

## Install library [sequelize-auto](https://github.com/sequelize/sequelize-auto)

npm install -g sequelize-auto pg pg-hstore

## Usage

### With password

sequelize-auto -o "./models" -d sequelize_auto_test -h localhost -u my_username -p 5432 -x my_password -e postgres

### Without password

sequelize-auto -o "./models/testdb_1" -d testdb_1 -h localhost -p 5432 -e postgres
