import "./Header.css";
import { Link } from "react-router-dom";
const Header = ()=> {
    return (
        <>
            <nav className="header">
                <section className="logo">
                    <img src={require('../../images/instaclone.png')} id='clone' alt="log"/>
                </section>
                <section className="camera-icon">
                <Link to='/uploade'><img src={require("../../images/camera.png")} alt="camera"/></Link>
                </section>
            </nav>
        </>
    )
}
export default Header