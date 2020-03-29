import React, { useState, useEffect } from 'react';

function Contact() {
    const [firstname, setFirstname] = useState('Your firstname here');
    const [firstnameError, setfirstnameError] = useState(false);
    const [lastname, setLastname] = useState('Your lastname here');
    const [lastnameError, setlastnameError] = useState(false);
    const [email, setEmail] = useState('example@email.com');
    const [emailError, setEmailError] = useState(false);
    const [telephone, setTelephone] = useState('123-123-1234');
    const [telephoneError, setTelephoneError] = useState(false);

    useEffect(() => {
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let phonePattern = /\d{3}[\-\.\s]?\d{3}[\-\.\s]?\d{4}/;
        (firstname !== '') ? setfirstnameError(false) : setfirstnameError(true);
        (lastname !== '') ? setlastnameError(false) : setlastnameError(true);
        (emailPattern.test(email)) ? setEmailError(false) : setEmailError(true);
        (phonePattern.test(telephone)) ? setTelephoneError(false) : setTelephoneError(true);
    }, [firstname, lastname, email, telephone])


    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(firstnameError === false && lastnameError === false && emailError === false && telephoneError === false){
            alert('form validated!')
        } else {
            alert('Non-valid values in form')
        }
    }

    return (
        <div className="contact">
            <form onSubmit={handleSubmit}
                className="form">
                <p>{firstnameError === true ? 'Not a valid firstname' : null}</p>
                <label>
                    <p>First Name:</p>
                </label>
                <input name="firstname" value={firstname} type="text"
                onChange={(e) => setFirstname(e.target.value)}/>
                <br/>
                <p>{lastnameError === true ? 'Not a valid lastname' : null}</p>
                <label>
                    <p>Last name:</p>
                </label>
                <input name="lastname" value={lastname} type="text"
                onChange={(e) => setLastname(e.target.value)}/>
                <br/>
                <p>{emailError === true ? 'Not a valid email' : null}</p>
                <label>
                    <p>Email:</p> 
                </label>
                <input name="email" value={email} type="text"
                onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <p>{telephoneError === true ? 'Not a valid phone number' : null}</p>
                <label>
                    <p>Phone:</p>
                </label>
                <input name="telephone" value={telephone} type="text"
                onChange={(e) => setTelephone(e.target.value)}/>
                <br/>
                <input type="submit" value="SUBMIT" className="form__button"/>
            </form>
        </div>
    );
}

export default Contact;
