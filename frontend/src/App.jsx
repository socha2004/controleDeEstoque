import SideBar from "./components/SideBar/SideBar"
import Routes from "./Routes"

function App() {
  const user = {
    name: "Eugenio Socha",
    role: "Administrator"
  }

  return (

    <div style={{ display: "flex" }}>
      <SideBar user={user} />
      <div style={{ flex: 1, marginLeft: "250px" }}>
        <Routes />
      </div>
    </div>

  )
}

export default App
