import React from 'react';
import "../Styles/SecondPage.css";
import { useNavigate } from 'react-router-dom';
import img1 from "../Images/Brunel.png";
import img2 from "../Images/Xmark.png";
import errorimg from "../Images/errorimg.jpg"
const SecondPage = () => {
    let navigate = useNavigate();
    function HomePage() {
        navigate("/firstpage");
    }

    function submit(event) {
        event.preventDefault(); // Prevent form submission

        var error = document.getElementById("error");
        var emailInput = document.getElementById("I4"); // Use correct ID for email input
        var userEmail = emailInput.value.trim();
        var nameInput = document.getElementById("I3");
        var userName = nameInput.value.trim();
        // Regular expression to validate email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        
        if (!emailRegex.test(userEmail)) {
            error.innerHTML = `<img height=${15} width=${25}  src=${errorimg} alt="" />Enter a valid email address`;
            emailInput.focus(); // Focus on the input field
            error.style.color="red";
            
        }
        else if (userName === "") {
            // error.textContent = `🔴 Enter your name`;
            nameInput.focus();
            // error.style.color = "red";
        }
         else {
            error.textContent = ""; // Clear the error message
            navigate("/thirdpage");
        }
    }

    return (
        <div className="secondpage">
            <div className="navbar1">
                <img id="I1" src={img1} alt="" />
                <img onClick={HomePage} id="I2" src={img2} alt="" />
            </div>
            <p id='regform'>Registration form</p>
            <h1>Start your success <br /> journey here!</h1>
            <form onSubmit={submit} action="">
                <label htmlFor="">
                    <input id="I3"  type="text" placeholder="Enter your name" />
                </label>
                <br />
                <label htmlFor="">
                    <input id="I4" type="text" placeholder="Enter your email" />
                    <br />
                    <span id="error"></span>
                    
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SecondPage;
