import {useState} from 'react';
import {connect} from 'react-redux';

import '../../styles/border.css';
import '../../styles/authcard.css';
import '../../styles/button.css';

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

const RegistrationPage = (props) => {
    let [registrationValues, setRegistrationValues] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        let temp = {...registrationValues};
        temp[event.target.name] = event.target.value;
        setRegistrationValues(temp);
    }

    return (
        <div className={`authCardBackground`}>
            <div className={`${Object.values(authCard).join(' ')}`}>
                <div className="authType"> Register </div>
                <form>
                    <label> 
                        <input className={`${Object.values(authElement).join(' ')}`} placeholder="Username" type="text" value={registrationValues.username} name="username" onChange={handleChange} />
                    </label>
                    <br/>
                    <label> 
                        <input className={`${Object.values(authElement).join(' ')}`} placeholder="Email" type="email" value={registrationValues.email} name="email" onChange={handleChange} />
                    </label>
                    <br/>
                    <label>
                        <input className={`${Object.values(authElement).join(' ')}`}    placeholder="password" type="password" value={registrationValues.password} name="password" onChange={handleChange} />
                    </label>
                    <br/>
                    <button className={`${Object.values(submitButton).join(' ')}`}>Register</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(RegistrationPage);