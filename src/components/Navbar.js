import { Component } from "react";
import logo from '../Images/logo.svg';
import { MenuData } from "./MenuData";
import "../css/NavbarStyles.css";


class Navbar extends Component {
    state= {clicked: false};
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className="NavbarItems">
                <div className="navMenu" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fa-solid fa-bars"}></i>
                </div>
                <ul className="nav-menu">
                    <navMenu>
                        {/* {MenuData.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url}
                                    className={item.cName}>
                                    <i className={item.icon}>
                                    </i>{item.title}
                                </a>
                            </li>
                        )
                    })} */}
                    </navMenu>
                </ul>
                <div className="logo-container">
                    {/* <i class="fa-solid fa-arrow-left-long" style={{ color: '#15154c' }}></i> */}
                    <img className="logo" src={logo} />
                </div>

            </nav>
        );
    }
}
export default Navbar;