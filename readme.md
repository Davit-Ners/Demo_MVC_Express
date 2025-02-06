# Pattern MVC avec Express

## Structure de fichiers
```
controllers
 - home.controller.js
 - product.controller.js
models (Pour definir les modeles de DB)
 - product.js
services
 - product.service.js
routers
 -home.router.js
 - product.router.js
public
 - favicon.ico
views
 _shared
  - header.ejs
  - footer.ejs
 home
  - index.ejs
  - about.ejs
 product
  - index.ejs
  - detail.ejs
  - formulaire.ejs
app.js
package.json
```

## Exemple de cheminement d'une requete dans la structure de fichier
### /about
- **app.js** \
Déclanchement des middlewares \
Redirection vers le router adapté \

- **home.router.js** \
Interpretation de la requete (method, params, query, ...) \
Redirection vers le controller adapté \

- **home.controller.js** \
Traitement de la requete \
Generation de la vue avec la methode "render" (Views: home/about.ejs) \


### /product/42
- **app.js** \
Déclanchement des middlewares \
Redirection vers le router adapté \

- **product.router.js** \
Interpretation de la requete (method, params, query, ...) \
Redirection vers le controller adapté \

- **product.controller.js** \
Traitement de la requete \
Utilisation des services pour obtenir les données\
En fonction du resultat du service : \
 -> Generation de la vue avec la methode "render" (Views: product/details.ejs) \
 -> Creation d'une page 404

- **product.service.js** \
Connexion à la base de donnée \
Recuperation des données \
Renvoi des donées au controllers \



## Initialisation du projet

### Packages
```
npm i express@next morgan express-handlebars
npm i nodemon --savdev
```

### Setup
npm init \
Creer fichier environnement .env \
Creer le nodemon.json pour configurer le nodemon [Exemple] (https://github.com/remy/nodemon/blob/master/doc/sample-nodemon.md); \
Modifier package.json : \
 -> Ajouter les scripts \
 -> Definir module \
Creer .gitignore \
Initialiser depot Git \