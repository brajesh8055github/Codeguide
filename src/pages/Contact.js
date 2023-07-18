// import { redirect } from 'react-router-dom';
import Footer from '../pages/Footer'

import { useState, useRef } from "react";

function Contact() {
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const phoneInput = useRef(null);
    const querry_desc = useRef(null);
    const [submitStatus, setSubmitStatus] = useState(null);

    function submitStatusHandler() {
        setSubmitStatus(null)

    }

    function submitHandler() {
        const username = nameInput.current.value;
        const useremail = emailInput.current.value;
        const userphone = phoneInput.current.value;
        const comment = querry_desc.current.value;

        let students = {
            name: username,
            email: useremail,
            phone: userphone,
            comment: comment,
        }

        if (username.length > 3 && useremail.length > 3 && userphone > 1111111111) {
            fetch('https://learnfirebase32-default-rtdb.firebaseio.com/students.json', {
                method: 'post',
                body: JSON.stringify(students)
            }).then(() => {
                setSubmitStatus(
                    <div class="alert alert-success" role="alert">
                        Thanks for contacting us.
                    </div>
                )
                nameInput.current.value = '';
                emailInput.current.value = '';
                phoneInput.current.value = '';
                querry_desc.current.value = '';
            })

        }
        else {
            setSubmitStatus(
                <div class="alert alert-primary" role="alert">
                    <strong>Hey!</strong> Please fill the details.
                </div>

            )
        }
    }
    return (
        <div className="">

            <form >
                <div className=" contact right">
                    <p className='status'>{submitStatus}</p>
                    <h2 className="need">Need Help!!</h2>
                    <input placeholder='Enter Your Name' type='name' id='name' class="mb-2" onFocus={submitStatusHandler} ref={nameInput} required></input>
                    <input placeholder='Enter Your Email' type='email' id='email' class="mb-2" onFocus={submitStatusHandler} ref={emailInput} required></input>
                    <input placeholder='Enter Phone Number' type='phone' id='phone' class="mb-2" onFocus={submitStatusHandler} ref={phoneInput} required></input>
                    <textarea placeholder="Write your comment" type='comment' id='comment' class="mb-2" onFocus={submitStatusHandler} ref={querry_desc}></textarea>
                    <button type='button' onClick={submitHandler} className="btn-c">Submit</button>

                </div>
            </form>
            <div className='about'>
                <h2 className='text-center my-5'>Find Us on Map</h2>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14789.765271939475!2d88.0782342!3d22.0709569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1679983260806!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer />
        </div>
    )
}
export default Contact;