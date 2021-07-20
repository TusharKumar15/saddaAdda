import React from 'react'
import {PostItem} from "./PostItem";

export const Postss = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <div id="alert"></div>
            <h3 className="my-3 post_heading">Posts</h3>
            {props.Posts.length===0? <div className="no_post">No Posts to display. Share your message here</div>:  
            props.Posts.map((Post)=>{
                return (<PostItem Post={Post} key={Post.sno} onDelete={props.onDelete}/>   
                )
            })} 
        </div>
    )
}
