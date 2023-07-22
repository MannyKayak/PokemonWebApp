"use client";

import Title from "./Title";
import Image from "next/image";
import Pokeball from "./Pokeball";

export default function Navbar() {
   
    return (
        <div>
            <div className="bg-orange-200 bg-[url(/sfondo_container.jpg)] bg-cover bg-blend-soft-light flex flex-col">
                <Title title="Pokemon Master"/>
                <div className="flex flex-row justify-center items-center gap-3  md:visible bg-cover">
                    <Pokeball href="/" name="Home" />
                    <Pokeball href="/pokemonList" name="Poke-list" />
                    <Pokeball href="/pokemonList" name="rules" />
                    <Pokeball href="/pokemonList" name="your team" />
                </div>
            </div>
        </div>
    );
}  