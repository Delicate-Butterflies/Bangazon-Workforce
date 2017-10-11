## BANGAZON-WORKFORCE


### Contributing

#### Sequelize config.json:
You may need to add your psql username and password the the development database in the /config/config.json file.  For this reason, it has been .gitignored.  There is, however, a config.json.example. Copy all from the .example file, paste into a new config.json file in the /config folder, and try as is before adding your user/password to the development config info.

#### Note on Model/Migration creation:
We are using snake_case for our database attribute names.  By default, sequelize uses camelCase, which comes into play for the auto-generated updatedAt and createdAt attributes.  To avoid this, please use the --underscored argument when creating the model via sequelize cli. Example:
```sequelize model:create --name [model] --underscored --attributes [attributes].```
