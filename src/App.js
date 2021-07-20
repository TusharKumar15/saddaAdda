import './App.css';
import Navbar from "./MyComponents/navbar";
import {Postss} from "./MyComponents/Posts"
import Signin from "./MyComponents/signin";
import Signup from "./MyComponents/signup";
import { AddPost } from "./MyComponents/AddPost";

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initPost;
  if (localStorage.getItem("Posts") === null) {
    initPost = [];
  }
  else {
    initPost = JSON.parse(localStorage.getItem("Posts"));
  }

  const onDelete = (Post) => {
    setPosts(Posts.filter((e) => {
      return e !== Post;
    }));
    localStorage.setItem("Posts", JSON.stringify(Posts));
  }

  const addPost = (desc) => {
    let sno;
    if (Posts.length === 0) {
      sno = 0;
    }
    else {
      sno = Posts[Posts.length - 1].sno + 1;
    }
    const myPost = {
      sno: sno,
      desc: desc,
    }
    setPosts([...Posts, myPost]);
  }

  const [Posts, setPosts] = useState(initPost);
  useEffect(() => {
    localStorage.setItem("Posts", JSON.stringify(Posts));
  }, [Posts])

  return ( 
    <> 
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path = "/"render={()=>{
          return(
            <div className="DashboardPage">
              <AddPost addPost={addPost}/>
              <Postss Posts={Posts} onDelete={onDelete}/>
            </div>
          )
        }}>
            
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path ="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
