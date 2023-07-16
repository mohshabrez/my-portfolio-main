
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';
import { MyWork } from './components/MyWork';

function App() {
  return (
   <>
   <Routes>
    <Route path ="/" element={<Layout/>} >
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="skills" element={<Skills/>}/>
      <Route path="mywork" element={<MyWork/>}/>
    </Route>
   </Routes>
   </>
  );
}

export default App;
