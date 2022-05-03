import React, { useState } from 'react';
import Navbar from './Navbar';
import SideImage from './SideImage';
import axios from 'axios';
// import { Button } from 'reactstrap';


const Header = () => {

    const [formData, setFormData] = useState({});
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);

    const openPopupHandler = () => {
        setOpen(true);
    }
    const closePopupHandler = () => {
        setOpen(false);
    }


    const focusHandler = (e) => {
        e.preventDefault();
        e.target.placeholder = '';
    };
    const handleInputChange = (event) => {
        setEmail(event.target.value)
        setFormData({ ...formData, [event.target.name]: event.target.value })

    }
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(formData)
        // appendSpreadsheet(formData)
        // setEmail('');
        // console.log(email);

        const data = {
            Email: email,
        };

       

        axios.post('https://sheet.best/api/sheets/d72fe0c5-266c-42ae-90d2-a70757956234', data).then((response) =>
            console.log(response));
        setEmail('');
    }

    let popup = null;
    !open ? popup = null : popup = <div className="modal"><button onClick={closePopupHandler} className="buttonClose">x</button><div className="popup">Join our free Botwarriors VIP Facebook group to connect with bot devs now!<div className="center-button"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/706560254111209" className="buttonGroup">Facebook Group</a></div></div></div>;

    return (
        <div id="main">
            <Navbar /><form className="App" onSubmit={handleSubmit}>
                <div className="flexHeader"><div>
                    <div className="name">
                        <h1><span>Win The Internet</span> by gaining an edge on the competition</h1>
                        <p className="details">Join over a thousand internet natives signing up for the first bot and automation tools marketplace.</p>
                        <p><strong>Get your first bot free when you join pre-launch.</strong></p>
                        <div>
                            <div className="contact-input contact-center">
                                <input name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" onChange={handleInputChange} type='email' value={email} onBlur={(e) => e.target.placeholder = 'example@gmail.com'} onFocus={focusHandler} placeholder='example@gmail.com' required /><a href="/"><button onClick={openPopupHandler} className="buttonStyle" >Join Now</button></a>

                            </div>
                        </div></div>
                    <div className="shiftThis">


                        <SideImage /></div>
                </div></div>
            </form>
            {popup}
        </div>
    )
}

export default Header;