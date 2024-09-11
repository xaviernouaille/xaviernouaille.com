# Portfolio

## Description

Ce projet est une application web basée sur **Next.js** avec une structure modulaire, comprenant plusieurs composants réutilisables et des pages dynamiques. Le projet utilise également **TailwindCSS** pour le style et **TypeScript** pour une gestion de typage robuste.

L'application est hébergée sur **AWS S3** et distribuée via **AWS CloudFront** pour une livraison rapide et optimisée des ressources.

## Structure du projet

Voici une vue d'ensemble de l'arborescence du projet :

```
.github/
    workflows/
        prod.yml             # Configuration du workflow CI/CD pour déploiement sur AWS
public/
    font/
        my-font.woff2        # Fichier de police personnalisé
src/
    app/
        about/
            page.tsx         # Page 'About'
        components/
            Footer.tsx       # Composant footer
        favicon.ico          # Icône du site
        globals.css          # Styles globaux
        layout.tsx           # Composant de mise en page
    components/
        ui/
            avatar.tsx       # Composant Avatar
            badge.tsx        # Composant Badge
            button.tsx       # Composant Bouton
    lib/
.gitignore                  # Fichiers ignorés par Git
package.json                # Dépendances du projet et scripts NPM
next.config.mjs             # Configuration de Next.js
```

## Technologies Utilisées

- **Next.js** : Framework pour React, utilisé pour le rendu côté serveur et la génération statique.
- **React** : Bibliothèque JavaScript pour la création d'interfaces utilisateur.
- **TypeScript** : Superset de JavaScript, ajoutant le typage statique pour améliorer la robustesse du code.
- **TailwindCSS** : Framework CSS utilitaire pour une conception rapide et réactive.
- **AWS S3** : Utilisé pour l'hébergement des fichiers statiques.
- **AWS CloudFront** : Utilisé pour la distribution du contenu (CDN) afin d'améliorer les performances de chargement.

## Hébergement

Ce projet est hébergé sur **AWS S3** et les fichiers sont distribués via **AWS CloudFront** pour garantir une haute disponibilité et des temps de chargement rapides.

## Installation

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/mon-utilisateur/mon-repo.git
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Lancer le serveur de développement :

   ```bash
   npm run dev
   ```

4. Construire le projet pour la production :
   ```bash
   npm run build
   ```

## Déploiement

Le déploiement est automatisé via un workflow GitHub Actions, qui pousse les fichiers de production sur un bucket **AWS S3** et met à jour la distribution **CloudFront**.

---
