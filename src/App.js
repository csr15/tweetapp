import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllTweet from "./components/AllTweet/AllTweet";
import MyTweet from "./components/MyTweet/MyTweet";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container-fluid mt-3">
        <div className="col-md-2">
          <Profile />
        </div>
        <div className="col-md-10">
          <Routes>
            <Route path="/" element={<AllTweet />} />
            <Route path="/myTweet" element={<MyTweet />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
