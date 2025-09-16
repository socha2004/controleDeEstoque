import SideBar from "./components/SideBar/SideBar"
import Routes from "./Routes"
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css'

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
