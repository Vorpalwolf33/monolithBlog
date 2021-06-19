import {useState} from 'react';
import {connect} from 'react-redux';

// importing styles
import '../../styles/button.css'
import '../../styles/border.css'
import '../../styles/authcard.css'

const submitButton = {
    "name": "btn",
    "width": "btnW2",
    "border-radius": "borderR2",
    "border-width": "borderSW2"
}

const authCard = { 
    "name": "authCard",
    "border-width": "borderSW3"
}

const authElement = {
    "name": "authElement",
    "border-width": "borderSW2"
}

const LoginPage = (props) => {

    let [loginValues, setLoginValues] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const temp = {...loginValues};
        temp[event.target.name] = event.target.value;
        setLoginValues(temp);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(loginValues);  
    }

    return (
        <div className="authCardBackground">
            <div  className={`${Object.values(authCard).join(' ')}`}>    
                <div className="authType">Login</div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input className={`${Object.values(authElement).join(' ')}`} placeholder="Email" type="email" name="email" onChange={handleChange} value={loginValues.email}/>
                    </label>
                    <br/>
                    <label>
                        <input className={`${Object.values(authElement).join(' ')}`} placeholder="Password" type="password" name="password" onChange={handleChange} value={loginValues.password}/>
                    </label>
                    <br/>
                    <button className={`${Object.values(submitButton).join(' ')}`}>Login</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(LoginPage);