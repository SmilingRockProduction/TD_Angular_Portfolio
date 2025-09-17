
# Mini TD Angular

## Présentation

Ce projet est une application Angular développée dans le cadre d'un TD. Elle propose une structure modulaire avec plusieurs composants (header, homepage, showroom, résumé, etc.) et une gestion des styles via SCSS. L'application est conçue pour être facilement extensible et maintenable.

## Structure du projet

```
mini_td_angular/
├── angular.json
├── package.json
├── README.md
├── tsconfig*.json
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── 1.jpg
│       ├── 2.jpg
│       └── 3.jpg
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── main.server.ts
│   ├── server.ts
│   ├── styles.scss
│   └── app/
│       ├── app.config.server.ts
│       ├── app.config.ts
│       ├── app.html
│       ├── app.routes.server.ts
│       ├── app.routes.ts
│       ├── app.scss
│       ├── app.spec.ts
│       ├── app.ts
│       ├── header/
│       ├── homepage/
│       ├── resume/
│       ├── resume_card_body/
│       ├── resume_presentation_card/
│       ├── showroom/
│       └── sliding_resume_textfield/
```

## Installation

1. **Cloner le dépôt**
	```bash
	git clone <url-du-repo>
	cd mini_td_angular
	```
2. **Installer les dépendances**
	```bash
	npm install
	```

## Lancement de l'application

```bash
npm start
```
L’application sera accessible sur `http://localhost:4200` par défaut.

## Scripts utiles

- `npm start` : Démarre le serveur de développement
- `npm test` : Lance les tests unitaires
- `npm run build` : Compile l’application pour la production

## Composants principaux

- **Header** : Barre de navigation principale (`src/app/header/`)
- **Homepage** : Page d’accueil (`src/app/homepage/`)
- **Showroom** : Présentation de projets ou réalisations (`src/app/showroom/`)
- **Resume** : Section CV, avec sous-composants pour la présentation et le détail (`src/app/resume/`, `resume_card_body/`, `resume_presentation_card/`)
- **Sliding Resume Textfield** : Champ de texte animé pour le CV (`src/app/sliding_resume_textfield/`)

## Dépendances principales

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)

## Arborescence des composants

Chaque composant possède :
- Un fichier HTML pour la vue
- Un fichier SCSS pour le style
- Un fichier TypeScript pour la logique

## Contribution

Les contributions sont les bienvenues !

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/ma-nouvelle-fonctionnalite`)
3. Commitez vos modifications (`git commit -am 'Ajout d'une fonctionnalité'`)
4. Poussez la branche (`git push origin feature/ma-nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

