import { component$ } from "@builder.io/qwik";

interface Props {
  id: number;
  size?: number;
}

export const PokemonAvatar = component$<Props>(({ id, size = 200 }) => {
  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      alt="Pokemon"
      width={size}
      height={size}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
});
