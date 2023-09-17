import React, {useState} from 'react';
import "./styles/ReservationsContent.css";

function ReservationsContent() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telephone: "",
        occasion: "",
        guests: "",
        date: "",
    })

    const [formError, setFormError] = useState({})

    const onChangeHandler = (event) => {
        setFormData(()=>({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        let err = {}
        if (formData.name === "") {
            err.name = "* Full name required!" 
        }
        if (formData.email === "") {
            err.email = "* Email required!" 
        }else{
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!regex.test(formData.email)) {
                err.email = "Email not valid!"
            }
        }


        if (formData.telephone === "") {
            err.telephone = "* Phone number required!" 
        }else{
            let phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
            if(!phoneRegex.test(formData.telephone)) {
                err.telephone = "Telephone number not valid!"
            }
        }


        if (formData.guests === "") {
            err.guests = "* Please specify number of guests!" 
        }
        if (formData.date === "") {
            err.date = "* Please specify date and time!" 
        }

        setFormError({...err})
        return Object.keys(err).length < 1;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.table(formData)

        let isValid = validateForm()
        if(isValid) {
            alert("Submitted")
        }
    }

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
                <h2>Discover the Ideal Fusion of Heritage and Opulence.</h2>
                <p>At Little Lemon, we are dedicated to delivering a truly opulent dining experience, enriched by our commitment to cherished <em>heritage</em>.</p>
                <p>Reserve your table now to partake in this exceptional journey.</p>
            </div>
            <div className="form">
                <h1>Make a Reservation</h1>
                <p>Kindly complete and submit the form to secure your booking at Little Lemon.</p>                
                <form onSubmit={onSubmitHandler}>
                    <fieldset>
                        <div className="field">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                name="name"
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid">{formError.name}</span>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                placeholder="text@email.com"
                                name="email"
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid">{formError.email}</span>
                        </div>
                        <div className="field">
                            <label htmlFor="telephone">Telephone</label>
                            <input
                                type="tel"
                                placeholder="+233000000000"
                                name="telephone"
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid">{formError.telephone}</span>
                        </div>
                        <div className="guestsdate">
                            <div className="field occasion">
                                <label htmlFor="occasion">Occasion (optional)</label>
                                <div className="options">
                                    <select name="occasion" onChange={onChangeHandler}>
                                        <option value="select">Select occasion</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="engagement">Engagement</option>
                                        <option value="anniversary">Anniversary</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field guest">
                                <label htmlFor="guests">Guests</label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    name="guests"
                                    onChange={onChangeHandler}
                                /> 
                                <span className="non-valid">{formError.guests}</span>
                            </div>
                            
                        </div>
                        
                        <div className="field">
                                <label htmlFor="date">Date & Time</label>
                                <input 
                                    type="datetime-local" 
                                    name="date"
                                    onChange={onChangeHandler}
                                />
                                <span className="non-valid">{formError.date}</span>
                            </div>
                        <button className="reserve-btn" type="submit">Reserve</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ReservationsContent