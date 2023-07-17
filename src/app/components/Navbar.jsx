import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <Link href="/">home</Link>
            <Link href="/pokemonList">Pokemon List</Link>
            <Link href="/pokemonList">Rules</Link>
            <Link href="/pokemonList">Account</Link>
        </div>
    );
}