/* eslint-disable qwik/jsx-img */
import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
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
      <p>Edad de mi pokemon: {pokemonId}</p>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`}
        alt="Pokemon Sprite"
        style={{ width: "200px" }}
      />

      <button
        class="btn btn-primary mr-2"
        onClick$={() => handleChangePokemon(-1)}
      >
        Anterior
      </button>
      <button class="btn btn-primary" onClick$={() => handleChangePokemon(+1)}>
        Siguiente
      </button>
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
