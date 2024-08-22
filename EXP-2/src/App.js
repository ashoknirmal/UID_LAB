import React from 'react';
import UserProfile from './components/UserProfile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const user = {
    name: "Ashoknirmal P S",
    email: "ashoknirmalps.22it@kongu.edu",
    location: "Erode ,India",
    bio: "A passionate developer with experience in React and JavaScript.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXLW1wfle_slXVLMXOrkJRqCz6iKsaDp4Blw&s"
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <UserProfile
              name={user.name}
              email={user.email}
              location={user.location}
              bio={user.bio}
              avatar={user.avatar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
