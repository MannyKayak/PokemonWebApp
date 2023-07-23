import Link from "next/link"
import Image from "next/image"

export default function Pokeball(link) {
    return (
        <Link href={link.href} className="flex flex-col items-center">
            <Image width="60" height="60" src="/pokeball_icon.svg" alt="pokeball" className="hover:animate-bounce-slow"></Image>
            <span className="text_utility">{link.name}</span>
        </Link>
    )
}