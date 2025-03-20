# Front-End Developer Coding Test: Pokémon Explorer

## Objective:
Create a Pokémon Explorer website using Next.js, Storybook, and the PokeAPI GraphQL API. The app should allow users to search for Pokémon by name or type, add Pokémon to a favorites list, and view a gallery of their favorite Pokémon.

Note that the use of external libraries is recommended. Please do not reinvent the wheel for this test.

---

## Requirements:

### 1. Next.js Setup:
- Create a new Next.js project.
- Set up a basic page (`/pokemon`) to display the Pokémon Explorer app.

### 2. GraphQL Integration:
- Use the PokeAPI GraphQL API ([https://pokeapi.co/docs/graphql](https://pokeapi.co/docs/graphql)) to fetch Pokémon data.
- Implement a search functionality to find Pokémon by name or type.
- Display the first 10 results as Pokémon cards.

### 3. Functionalities:
- **Search Pokémon:**
  - Add a search bar where users can input a Pokémon name or type.
  - Display the first 10 results as Pokémon cards (see the `PokemonCard` component below).
- **Add to Favorites:**
  - Allow users to add a Pokémon to their favorites list.
  - Store the favorites list in the browser's `localStorage`.
- **Favorites Gallery:**
  - Create a separate page or section to display the user's favorite Pokémon cards.
  - Allow users to remove Pokémon from their favorites list.

### 4. PokemonCard Component:
- Create a reusable `PokemonCard` component that displays:
  - Pokémon name.
  - Pokémon image (use the `sprites` field from the API).
  - Pokémon types.
  - A button to add/remove the Pokémon from favorites.
- Style the card to look clean and visually appealing.

### 5. Storybook Integration:
- Create a Storybook story for the `PokemonCard` component.
- Ensure the story demonstrates the component's props and interactivity (e.g., add/remove favorite).

### 6. Bonus (Optional):
- Add unit tests for the `PokemonCard` component using Storybook and playwright.
- Implement responsive design for the app.
- Add animations or transitions for a better user experience.

---

## Deliverables:
1. A GitHub repository with the completed code.
2. A README file with instructions on how to run the project, Storybook, and any tests.
3. A live demo of the app (optional, but recommended).

---

## Evaluation Criteria:
1. **Code Quality:**
   - Clean, modular, and reusable code.
   - Proper use of React hooks and state management.
   - Error handling and loading states for API calls.

2. **GraphQL Implementation:**
   - Correct usage of queries to fetch Pokémon data.
   - Efficient data fetching and updating.

3. **UI/UX:**
   - Intuitive and responsive design.
   - Proper styling and layout for the Pokémon cards and search functionality.

4. **Storybook Usage:**
   - Well-structured and documented stories.
   - Interactive and visually representative of the `PokemonCard` component.

5. **Bonus Points:**
   - Unit tests for components.
   - Responsive design or additional features.

---