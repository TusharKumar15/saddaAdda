import React, { useState } from 'react';
import './signup.css';

export default function Signup() {
    const [user_name, setuser_name] = useState("");
    const [user_email, setuser_email] = useState("");
    const [user_Phn, setuser_Phn] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const checkValidity=(e)=>{
        check(user_name, user_email, user_Phn, password, confirmPassword);
        setuser_name("");
        setuser_email("");
        setuser_Phn("");
        setpassword("");
        setconfirmPassword("");
    }
    return (
       <div className="page">
            <div className="signin_section" id="signupContainer">
            <div className="signin_head">
                <h3>Welcome to Sadda Adda</h3>
            </div>
            <div className="signin_body">
                <form onSubmit={checkValidity}>
                    <label className="label_signup"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg> </label>
                    <input className="blank_signup" type="text" value={user_name} onChange={(e)=>setuser_name(e.target.value)} placeholder="Enter your name"></input><br/>
                    <label className="label_signup"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </svg> </label>
                    <input className="blank_signup" type="text" value={user_email} onChange={(e) => setuser_email(e.target.value)} placeholder="Enter your Email ID"></input><br/>
                    <label className="label_signup"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg> </label>
                    <input className="blank_signup" type="text" value={user_Phn} onChange={(e) => setuser_Phn(e.target.value)} placeholder="Enter your Phone Number"></input><br/>
                    <label className="label_signup"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg> </label>
                    <input className="blank_signup" type="text" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter password"></input><br/>
                    <label className="label_signup"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg> </label>
                    <input className="blank_signup" type="text" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} placeholder="Confirm password"></input><br/>
                    <button className="submit_btn btn btn-primary">Sign-Up</button>
                </form>
            </div>
            <div className="signup_footer">
                Note: We strongly recommend using a password with atleast:<br/>
                * 8 characters<br/>
                * one small letter<br/>
                * one capital letter<br/>
                * one number and<br/>
                * one special character
            </div>
        </div>
       </div>
    )
}

function check(user_name, user_email, user_Phn, password, confirmPassword){
    if(user_name===""||user_email===""||user_Phn===""||password===""||confirmPassword===""){
        var errormsg = "Fill all the credentials!";
        alert(errormsg);
    }
    else if(!validemail(user_email)){
        alert("Enter a valid email-id")
    }
    else if(!validphn(user_Phn)){
        alert("Enter a valid phone number");
    }
    else if(confirmPassword !== password){
        alert("Confirmed password should be same as password")
    }
    else{
        var showElem = document.getElementById("signupContainer");
        showElem.innerHTML = '<div className="successfullsignup" >Account has been created successfully!!! </div>'
        showElem.style = "text-align: center; background-color: rgb(189, 236, 142); opacity: 90%; font-size: 30px; color: darkcyan";
    }
}

function validemail(mail) 
{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(validRegex))
    {
        return (true);
    }
        return (false);
}

function validphn(phn) 
{
    var phoneno = /^\d{10}$/;
    if (phn.match(phoneno))
    {
        return (true);
    }
        return (false);
}
