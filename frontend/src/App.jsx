import SideBar from "./components/SideBar/SideBar"
import Routes from "./Routes"
import { PrimeReactProvider } from 'primereact/api';


function App() {
  const user = {
    name: "Eugenio Socha",
    role: "Administrator"
  }

  return (
    <PrimeReactProvider>
      <div style={{ display: "flex" }}>
        <SideBar user={user} />
        <div style={{ flex: 1, marginLeft: "250px" }}>
          <Routes />
        </div>
      </div>
    </PrimeReactProvider>
  )
}

export default App
