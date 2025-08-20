
import logo from "../assets/chef-hugs-icon.png"
export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="" className="header-img"/>
            <h1 className="header-title">Chef Hugs</h1>
        </header>
    )
}