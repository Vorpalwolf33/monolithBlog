import {React} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {connect} from 'react-redux';

// Importing styles
import '../../styles/navbar.css'
import '../../styles/border.css'
import '../../styles/authcard.css'

const navbarcss = {
    "name": "navbar",
    "border-width": "borderSW4"
}

const redirectButton = {
    "name": "btn redirectBtn",
    "width": "btnW2",
    "border-radius": "borderR2",
    "border-width": "borderSW2"
}

const LoginNavbar = (props) => {
    return (
        <div>
            <Link to="/register">
                <button className={`${Object.values(redirectButton).join(' ')}`}>Register</button>
            </Link>
        </div>
    )
}

const RegistrationNavbar = (props) => {
    return (
        <div>
            <Link to="/login">
                <button className={`${Object.values(redirectButton).join(' ')}`}>Login</button>
            </Link>
        </div>
    )
}

const authenticatedNavbar = (props) => {
    return (
        <div>
            Authenticated Navbar
        </div>
    )
}

const Navbar = (props) => {
    return (
        <div className={`navbar ${navbarcss["border-width"]}`}>
            {/* <div>Navbar</div> */}
            <Switch>
                <Route path="/login" component={LoginNavbar} />
                <Route path="/register" component={RegistrationNavbar} />
                <Route path={["/post", "/user", "/feed"]} component={authenticatedNavbar} />
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Navbar);