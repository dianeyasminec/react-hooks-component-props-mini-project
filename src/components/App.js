import React from "react";
import blogData from "../data/blog";
import Header from './Header.jsx';
import About from './About.jsx';
import ArticleList,{Article} from './ArticleList.jsx';



function App() {
  console.log(blogData.posts);
  // console.log(blogData.posts.filter(function(item){ return item.title}));
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about} image={blogData.image}/>
      <ArticleList posts={blogData.posts} /*title={posts.title}*/ />
     
      
     
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;


