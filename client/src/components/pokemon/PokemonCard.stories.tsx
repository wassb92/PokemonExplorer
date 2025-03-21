import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import PokemonList from "./PokemonList";

const meta: Meta<typeof PokemonList> = {
  title: "Components/PokemonList",
  component: PokemonList,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof PokemonList>;

export const SinglePokemon: Story = {
  args: {
    pokemons: [
      {
        id: 1,
        name: "Bulbasaur",
        pokemon_v2_pokemonsprites: [
          {
            sprites: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            },
          },
        ],
        pokemon_v2_pokemontypes: [
          { pokemon_v2_type: { name: "Grass" } },
          { pokemon_v2_type: { name: "Poison" } },
        ],
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Bulbasaur")).toBeTruthy();
    expect(canvas.getByText(/grass/i)).toBeTruthy();
    expect(canvas.getByText(/poison/i)).toBeTruthy();
  },
};

export const MultiplePokemons: Story = {
  args: {
    pokemons: [
      {
        id: 1,
        name: "Bulbasaur",
        pokemon_v2_pokemonsprites: [
          {
            sprites: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            },
          },
        ],
        pokemon_v2_pokemontypes: [
          { pokemon_v2_type: { name: "Grass" } },
          { pokemon_v2_type: { name: "Poison" } },
        ],
      },
      {
        id: 4,
        name: "Charmander",
        pokemon_v2_pokemonsprites: [
          {
            sprites: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            },
          },
        ],
        pokemon_v2_pokemontypes: [{ pokemon_v2_type: { name: "Fire" } }],
      },
      {
        id: 7,
        name: "Squirtle",
        pokemon_v2_pokemonsprites: [
          {
            sprites: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            },
          },
        ],
        pokemon_v2_pokemontypes: [{ pokemon_v2_type: { name: "Water" } }],
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Bulbasaur")).toBeTruthy();
    expect(canvas.getByText("Charmander")).toBeTruthy();
    expect(canvas.getByText("Squirtle")).toBeTruthy();
  },
};

export const Empty: Story = {
  args: {
    pokemons: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.queryByText("Bulbasaur")).toBeNull();
    expect(canvas.queryByText("Charmander")).toBeNull();
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Error: Story = {
  args: {
    error: { message: "Error message" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/error message/i)).toBeTruthy();
  },
};
