import React from "react";
import blogData from "../data/blog";
import Header from './Header.js';
import About from './About.jsx';
import ArticleList from './ArticleList.jsx';
import Article from "./Article";


function App() {
  //console.log(blogData);
  console.log(blogData.posts.filter(function(item){ return item.title}));
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about} image={blogData.image}/>
      <ArticleList/>
      <Article />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;


