import { useState } from "react";
import Feed from "./components/Feed";
import Nav from "./components/Nav";
import SideBar from "./components/Sidebar";

export default function App() {
  const [sideBar, setsideBar] = useState(
    window.innerWidth < 1000 ? false : true
  );
  return (
    <div className="App">
      <Nav sideBar={sideBar} setsideBar={setsideBar} />
      <div className="main">
        <SideBar sideBar={sideBar} setsideBar={setsideBar} />
        <div className="content">
          <Feed />
        </div>
      </div>
    </div>
  );
}
