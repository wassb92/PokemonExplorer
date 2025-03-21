# Pokémon Explorer

Une application Next.js + GraphQL pour explorer les Pokémons, rechercher par nom ou type, ajouter des favoris, et naviguer dans une interface moderne et animée.  
Ce projet inclut également un Storybook avec tests UI Playwright.

---

## 🧱 Stack utilisée

- **Next.js** 15 + **TypeScript**
- **TailwindCSS** pour le style
- **Apollo Client** + **GraphQL** (PokeAPI)
- **Heroicons** pour les icônes
- **Framer Motion** pour les animations
- **Storybook** pour l'exploration des composants
- **Playwright + @storybook/test** pour les tests UI

---

## 🚀 Fonctionnalités

### 🔍 Recherche & Affichage

- Rechercher un Pokémon par **nom** ou **type**
- Affichage sous forme de **cartes** animées
- Navigation vers les détails dans un nouvel onglet

### ❤️ Favoris

- Ajouter ou retirer un Pokémon des favoris
- Icône cœur dynamique (vide/plein)
- Galerie des favoris accessible depuis la page principale
- **LocalStorage** utilisé pour stocker les favoris

### 🧪 Tests UI avec Storybook

- Stories pour tous les composants : `PokemonCard`, `PokemonList`, `SearchBar`
- Interaction testée avec **Playwright**
- `npm run test-storybook` pour lancer les tests

---

## 📦 Installation

```bash
git clone https://github.com/ton-repo/pokemon-explorer.git
cd client
npm install
```

---

## ▶️ Démarrage

### Lancer l'application

```bash
npm run dev
```

👉 http://localhost:3000

### Lancer Storybook

```bash
npm run storybook
```

👉 http://localhost:6006

### Lancer les tests UI

```bash
npx playwright install
npm run test-storybook
```

---

## 📁 Arborescence simplifiée

```
src/
├── components/
│   └── pokemon/
│       ├── PokemonCard.tsx
│       ├── PokemonList.tsx
│       ├── SearchBar.tsx
│       └── __storybook__/SearchBarWrapper.tsx
├── pages/
│   ├── index.tsx
│   └── pokemon/
│       ├── [id].tsx
│       ├── index.tsx
│       └── favorites.tsx
├── lib/
│   └── apolloClient.ts
├── styles/
│   └── globals.css
```

---

## 🧠 À propos

Ce projet met en avant la **capacité à structurer un projet Next.js moderne**, à **utiliser GraphQL proprement**, à **animer avec Framer Motion**, et à **maintenir une bonne qualité de code avec Storybook et les tests UI**.

---

## 🧑‍💻 Auteur

Développé par **Wassini Bouzidi**  
[Portfolio](https://www.wassini-bouzidi.com) · [LinkedIn](https://www.linkedin.com/in/wassini-bouzidi) · [GitHub](https://github.com/wassb92)
