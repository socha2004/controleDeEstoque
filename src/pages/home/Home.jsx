import SideBar from "../../components/SideBar/SideBar"
import "./Home.css"

function Home() {
    return (
        <div className="home-container">
            <SideBar/>
            <div className="home-content">
                <p>Home!</p>
            </div>
        </div>
    )
}

export default Home