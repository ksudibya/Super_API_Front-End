import { useState, useEffect } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom'
import Home from "./screens/Home.jsx";
import Nav from "./components/Nav.jsx";
import Characters from "./screens/Characters.jsx";
import DetailCharacter from "./screens/DetailCharacter.jsx";
import CreateCharacter from "./screens/CreateCharacter.jsx";
import EditCharacter from "./screens/EditCharacter.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Celeste from "./screens/Celeste.jsx";
import SignIn from "./screens/SignIn.jsx";
import SignUp from "./screens/SignUp.jsx";
import SignOut from "./screens/SignOut.jsx";
import { verifyUser } from './services/users';



function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div>
      <Nav user={user} setUser={setUser} />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<DetailCharacter />} />
        <Route path="/add-character" element={<CreateCharacter />} />
        <Route path="/character/:id/edit" element={<EditCharacter />} />
        <Route path="/Celeste" element={<Celeste />} />
        <Route path="/signin" element={<SignIn onSignIn={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/signout" element={<SignOut setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
