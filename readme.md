# Portfolio

Le but de ce projet est de fournir un backend pour un portfolio. Il possède différentes routes pour créer, modifier et supprimer un projet. Il intégrer un système de gestion des utilisateur ainsi qu'une sécurisation avec la technologie JWT. Les données sont stockées dans une base MongoDB qui doit être installée en local.

## Installation

1. Cloner le dépôt : `git clone git@github.com:doarb/protfolio-backend.git`
2. Aller dans le dossier du projet : `cd portfolio-backend`
3. Effectuer les installations : `pnpm install`
4. Configurer les variables d'environnement :
   - Créez un fichier .env à la racine du projet.
   - Ajoutez les configurations suivantes au fichier .env :
     ```
     PORT=5000
     DATABASEURI=mongodb://localhost:27017/Portfolio
     USER_ADMIN="exemple@exemple.fr"
     PASSWORD_ADMIN="exemple"
     ACCESS_TOKEN_SECRET="votre-access-token"
     REFRESH_TOKEN_SECRET="votre-refresh-token"
     ```
     Il est important de noter que lors du lancement, un premier utilisateur sera créé avec les informations User_Admin qui doivent être un email et le PASSWORD_ADMIN qui permettront la connexion aux routes protégées car le mot de passe est chiffré.
5. Pour utiliser la base de données MongoDB, il est recommandé de créer une base de données nommée Portfolio et d'indiquer son URL dans la variable d'environnement DATABASEURI.
6. Lancer le serveur : `pnpm start`

## Utilisation

Cette application est conçue pour être utilisée avec un frontend. Le stockage des images se fait via un système d'URL ; elles ne sont pas stockées en base de données ou dans un dossier.

### Définition des routes

- **/users** : Cette route permet la gestion des utilisateurs.
  - `GET /api/users/` : Récupère les informations sur tous les utilisateurs.
  - `GET /api/users/:id` : Récupère les informations sur un utilisateur identifié par son id.
  - `PUT /api/users/:id` : Modifie les informations d'un utilisateur.
  - `DELETE /api/users/:id` : Supprime un utilisateur.
  - `POST /api/users/` : Crée un utilisateur.

- **/projects** : Cette route permet la gestion des projets.
  - `GET /api/projects/` : Récupère les informations sur tous les projets.
  - `GET /api/projects/:id` : Récupère les informations sur un projet identifié par son id.
  - `PUT /api/projects/:id` : Modifie les informations d'un projet.
  - `DELETE /api/projects/:id` : Supprime un projet.
  - `POST /api/projects/` : Crée un projet.

- **/auth** : Cette route permet de gérer la connexion et l'authentification.
  - `GET /api/auth/login` : Permet la récupération des tokens.
  - `GET /api/auth/refreshToken` : Permet la récupération d'un token à partir du refresh token.
  - `GET /api/auth/logCheck` : Permet de vérifier si la connexion est correcte.

- **/analysis** : Cette route donne accès à l'analyse du site frontend.
  - `GET /api/analysis/:id` : Permet de récupérer une analyse spécifique en fonction de son identifiant.
  - `POST /api/analysis/search` : Permet de rechercher des analyses. Nécessite une authentification avec un token.
  - `POST /api/analysis` : Permet de créer une nouvelle analyse.

- **/presentation** : Cette route permet de gérer les différentes présentations. Elle n'est pas utilisée dans le frontend.
  - `GET /api/presentation/` : Récupère les informations sur toutes les présentations.
  - `GET /api/presentation/:id` : Récupère les informations sur une présentation identifiée par son id.
  - `PUT /api/presentation/:id` : Modifie les informations d'une présentation.
  - `DELETE /api/presentation/:id` : Supprime une présentation.
  - `POST /api/presentation/` : Crée une présentation.

## Contact

Si vous avez des questions ou des commentaires, n'hésitez pas à me contacter à l'adresse suivante [damienboucher25@gmail.com](mailto:damienboucher25@gmail.com).
