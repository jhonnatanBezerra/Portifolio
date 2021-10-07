


// https://www.youtube.com/watch?v=27JtRAI3QO8&t=3702s&ab_channel=Bedimcode

import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Qualifications } from "./Components/Qualifications";
import { Services } from "./Components/Services";
import { Portfolio } from "./Components/Portfolio";

export const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Services />
        <Portfolio />
      </main>
    </>
  );
}


