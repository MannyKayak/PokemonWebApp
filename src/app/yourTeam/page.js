// user must be able to chose his team, the team will be composed by originally 3 starters and one extra pokemon, that wont be and evolution.
import Image from "next/image";

// this page should show the form if the user has no team

export default function YourTeam() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <Image
          src="/pokeball_icon.svg"
          width="20"
          height="20"
          alt="pokeball"
          className="animate-spin"
        />
        <h1 className="section_title">build your team!</h1>
        <Image
          src="/pokeball_icon.svg"
          width="20"
          height="20"
          alt="pokeball"
          className=" animate-spin "
        />
      </div>

      <div className="flex flex-col">
        <form className="justify-center items-center flex flex-row">
          <label for="team-name" className="text_utility ml-9">
            Team Name:
          </label>
          <input
            id="team-name"
            required
            className="font-lilita font-thin"
            placeholder="Name your team"
          ></input>
        </form>

        <div>
          <h3 className="text_utility"> choose your starters</h3>
          <div className="grid grid-cols-5 grid-flow-row grid-rows-4 gap-3">
            <div className="border-2">1</div>
            <div className="border-2">1</div>
            <div className="border-2">1</div>
            <div className="border-2">1</div>
            <div className="border-2">1</div>
            <div className="border-2">1</div>
            <div className="border-2">1</div>
            <div className="border-2">1</div>
            <div className="border-2">1</div>
            <div className="border-2">1</div>
            <div className="border-2">1</div>
          </div>
        </div>

        <button
          type="submit"
          className="font-lilita uppercase text-white bg-gradient-to-r from-cyan-500 to-blue-500 p-1 border-2 border-sky-700 rounded-lg 
          required:border-red-500
          hover:from-orange-600 hover:to-yellow-500 itmes-center justify-center w-1/3 md:w-[256px] m-auto"
        >
          create
        </button>
      </div>
    </div>
  );
}
