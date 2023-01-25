import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FrontPage from './components/pages/FrontPage'
import NewPost from './components/pages/NewPost';
import Nav from './components/Nav'
import Show from './components/pages/Show';
import Edit from './components/pages/Edit';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<FrontPage />} />  
          <Route path="/new-post" element={<NewPost />} />  
          <Route path="/post/:id" element={<Show />} />  
          <Route path="/edit/:id" element={<Edit />} />  
        </Routes>  
      </Router>      
    </div>
  );
}

export default App;
