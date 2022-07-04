import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './container/Header/Header';
import Profile from './container/Profile/Profile';
import Notes from './container/Notes/Notes';
 
function App() {
  const routes = (
    <Routes>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/notes' element={<Notes/>}></Route>
      <Route exact path="/" element={<Notes/>}></Route>
    </Routes>
);
  return (
    <div className="App">
     <Header/>
     <div className='routeContainer'>{routes}</div>
    </div>
  );
}

export default App;