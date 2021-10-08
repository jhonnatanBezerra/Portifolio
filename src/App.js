


// https://www.youtube.com/watch?v=27JtRAI3QO8&t=3702s&ab_channel=Bedimcode

import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Qualifications } from "./Components/Qualifications";
import { Services } from "./Components/Services";
import { Portfolio } from "./Components/Portfolio";
import { ProjectMind } from "./Components/ProjectMind";
import { Testimonial } from "./Components/Testimonial";
import { ContacteMe } from "./Components/ContacteMe";
import { Footer } from "./Components/Footer";


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
        <ProjectMind />
        <Testimonial />
        <ContacteMe />
      </main>
      <Footer />
    </>
  );
}


