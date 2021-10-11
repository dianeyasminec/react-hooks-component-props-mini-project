import React from 'react'
import Article from './Article';

function ArticleList(props) {
// map each post as article .map
const element =props.posts
const list=element.map(article=>{
    return (<Article key={article.id} title={article.title}
         date={article.date} preview={article.preview}/>

    )
})
return (<main>
    {list}
</main>)
    
}
 
export default ArticleList;