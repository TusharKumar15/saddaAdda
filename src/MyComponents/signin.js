import React,{ useState } from 'react';
import './signin.css';

export default function Signin() {
    const [inemail, setinemail] = useState("");
    const [inpassword, setinpassword] = useState("");
    const checkinvalidity=(e)=>{
        checkin(inemail, inpassword);
        setinemail("");
        setinpassword("");
}
    return (
        <div className="page">
            <div className="signin_section" id="signinContainer">
                <div className="signin_head">
                    <h3>Welcome Back to Sadda Adda</h3>
                </div>
                <div className="signin_body">
                    <form onSubmit={checkinvalidity}>
                        <label className="label">Enter email: </label><br/>
                        <input className="blank" type="text" value={inemail} onChange={(e)=>setinemail(e.target.value)} placeholder="Ex: userDefault@xyz.com"></input><br/>
                        <label className="label">Enter Password: </label><br/>
                        <input className="blank" type="text" value={inpassword} onChange={(e)=>setinpassword(e.target.value)} placeholder="Ex: >q1Pp0Q1<"></input><br/>
                        <button className="submit_btn btn btn-primary">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function checkin(inemail, inpassword){
 if(inemail===""||inpassword===""){
     alert("fill all credentials");
 }
 else if(!validemail(inemail)){
     alert("Enter valid email id");
 }
 else{
     var success_signin_elem =document.getElementById("signinContainer");
     success_signin_elem.innerHTML = '<div className="successfullsignin" >Signed in successfully!!! </div>'
     success_signin_elem.style = "text-align: center; background-color: rgb(189, 236, 142); opacity: 90%; font-size: 30px; color: darkcyan";
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
