import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import SearchBar from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    search: "",
    setSearch: () => {},
  },
};

export const TypingSearch: Story = {
  args: {
    search: "pikachu",
    setSearch: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/rechercher/i);

    expect(input).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toBe("pikachu");
  },
};
