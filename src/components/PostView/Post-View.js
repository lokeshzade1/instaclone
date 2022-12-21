import {useEffect, useState} from "react"
import Card from "./Card";
import Header from "./Header";
const PostView = ()=> {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        fetch('data.JSON').then((res)=>res.json()).then((data)=> {
        setPosts(data.user);
        }).catch((err)=> {
            if(err) {
                console.log(err)
            }
        })
    }, []);
    return (
<div>
<Header/>
        <div className="post-container">
            {posts.map((post, i)=> {
                return (    
                    <Card post={post} key={i}/>
                )
            })}
        </div>
</div>
        
    )
}
export default PostView;