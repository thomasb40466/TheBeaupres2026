import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layouts/Layout';

import Home from './pages/Home';
import About from './pages/About';
import QA from './pages/Q&A';
import Registry from './pages/Registry';
import RSVP from './pages/RSVP';
import ThingsToDo from './pages/ThingsToDo';
import Travel from './pages/Travel';
import WeddingParty from './pages/WeddingParty';


function App() {
  return (
    <Router basename="/TheBeaupres2026"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/q&a" element={<Layout><QA /></Layout>} />
        <Route path="/registry" element={<Layout><Registry /></Layout>} />
        <Route path="/rsvp" element={<Layout><RSVP /></Layout>} />
        <Route path="/things-to-do" element={<Layout><ThingsToDo /></Layout>} />
        <Route path="/travel" element={<Layout><Travel /></Layout>} />
        <Route path="/wedding-party" element={<Layout><WeddingParty /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;