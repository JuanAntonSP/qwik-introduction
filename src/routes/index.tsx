/* eslint-disable qwik/jsx-img */
import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonAvatar } from "~/components/pokemon-avatar.tsx";

interface Props {}
export default component$<Props>(() => {
  // Los signals debemos usarlos para datos primitivos:
  // Strings, numbers, boolean, null, BigInt, Symbol, uindefined
  // la señal es un envoltorio a un valor
  const pokemonId = useSignal(1);

  const handleChangePokemon = $((value: number) => {
    if (pokemonId.value + value <= 0) return;
    pokemonId.value += value;
  });

  return (
    <>
      <h1 class="text-2xl">Buscador de pokemón</h1>
      <p>ID del pokemón: {pokemonId}</p>
      <PokemonAvatar id={pokemonId.value} />
      <div class="flex">
        <button
          class="btn btn-primary mr-2"
          onClick$={() => handleChangePokemon(-1)}
        >
          Anterior
        </button>
        <button
          class="btn btn-primary"
          onClick$={() => handleChangePokemon(+1)}
        >
          Siguiente
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to my app",
  meta: [
    {
      name: "description",
      content: "Qwik App",
    },
  ],
};
