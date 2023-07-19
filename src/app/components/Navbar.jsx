"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react" 

export default function Navbar() {
    const isUserLoggedIn = true; 
    const [providers, setProviders] = useState(null);

    useEffect (() => {
        const setProviders = async () => {
            const response = await getProviders()
        }
    }, [])

    return (
        <nav>
            <Link href="/">home</Link>
            <Link href="/pokemonList">Pokemon List</Link>
            <Link href="/pokemonList">Rules</Link>
            <Link href="/pokemonList">Account</Link>
            <div>
                {isUserLoggedIn ? (
                    <div>
                        <Link href="/makeYourTeam">Make Your Team</Link>
                    </div>
                ) : (<></>)}
                <button type="button" onClick={signOut}>
                    Sign Out
                </button>
                {/* will add the link to the profile of the user*/}
            </div>
        </nav>
    );
}