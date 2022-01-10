import logo from "../img/logo.png";
const Navbar = ()=>{
    return (
        <>
            <div className="fixed-top bg-dar">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid bg-dar">
                        <a className="navbar-brand" href="#">RoomOrent</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link" href="/cards">Homes</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/aboutus">About Us</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/services">Services</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#logInForm" href="#">Log In</a>
                                </li>    
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;