import React, { useState } from 'react';

export const AddPost = ({ addPost }) => {
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!desc) {
            alert("write something to post");
        }
        else {
            addPost(desc);
            setDesc("");
            alertmssg("Post shared successfully!");
        }
    }
    return (
        <div className="container my-3">
            <form onSubmit={submit}>
                <span className="mb-3">
                    <textarea rows="4" type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control edit" id="desc" placeholder="write your post..."/>
                </span>
                <button type="submit" className="btn btn-sm  " id="btn_share">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-dots-fill" viewBox="0 0 16 16">
                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg> Share
                </button>
            </form>
        </div>
    )
}

function alertmssg(mssg){
    var mssgelem = document.getElementById("alert");
    mssgelem.innerHTML=mssg;
    mssgelem.style = "display: flex;";
    setTimeout(function(){mssgelem.style = "display: none;"}, 2500);
}
