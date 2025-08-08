import SideBar from "./components/SideBar/SideBar"
import Routes from "./Routes"
function App() {

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1}}>
        <Routes/>
      </div>
    </div>
  )
}

export default App
