import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Projects,
  BackendProjects,
  ProjectDetail,
} from './components';

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>

      <div className="bg-about bg-cover bg-center bg-no-repeat">
        <About />
      </div>

      <Projects />
      <BackendProjects />

      <div
        className="bg-experience bg-cover bg-center bg-no-repeat 
          rounded-tl-[150px] rounded-br-[150px]"
      >
        <div
          className="bg-experienceLight bg-cover bg-center 
          bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
        >
          <Experience />
        </div>
      </div>
      <div className="relative z-0">
        <Contact />
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
