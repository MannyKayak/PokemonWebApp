import Image from "next/image";
import Feed from "./components/Feed";

// TODO: HOME PAGE - show the cards of all the teams -> call to a database and fetch the data.
export default function Home() {
  return (
    <div className="flex flex-col h-full ">
      <p className="font-lilita text-sky-700 uppercase text-center text-xl mt-9 ">
        Are you ready to become a Poke-Master? <br /> Pick your fav pokemon and
        start the battle!
      </p>
      <div className="h-[500px] border-2 mx-20 my-7"></div>
    </div>
  );
}
