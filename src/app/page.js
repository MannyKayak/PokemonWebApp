import Image from 'next/image'
import Feed from './components/Feed';

// cosa deve fare questa app, innanzitutto deve mostrare le squadre che ci sono disponibili
// ogni squadra deve essere visitabile
// ci deve essere un sign-in/sign-up con form 
// my account page dove posso vedere le stat dei miei pokemon
// ci deve essere una chat e la possibilità di sfidare altri allenatori
// ci deve essere una lista dei pokemon disponibili e ogni pokemon deve essere clikkabile per vedere le sue stat.
// print a title and a subtitle, something like became a Pokemon trainer! Catch 'em all...
export default function Home() {
  return (
      <section>
          <h1 className=' to-indigo-800 font-sans '>Pokemon Master</h1>
          <h3>Became a pokemon trainer, chose your team and start the jurney!</h3>
          <></>
          <Feed/>
      </section>
  );
}