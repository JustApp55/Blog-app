import '../App.css'
import {useState, useEffect} from 'react'
import { getBlogs } from '../services/getApis'
import {useNavigate} from 'react-router-dom'


export default function Home() {
    const nav = useNavigate()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getBlogs()
        .then(res => setPosts(res.data))
    }, [])
    console.log(posts)


    return (
        <div className="post">
            <h1 className="index">List of Blogs</h1>
                <nav className="btn">
                    <button onClick={() => {nav("/create")}} id="bat">New Blog</button>
                </nav>
            
        <ul className="art">
            {posts.map((post) => {
              return( 
                
                  <li className="index2"><a href={`/${post._id}`}><h2>{post.title}</h2> </a>
                    <img style={{height:'350px', width: '350px'}} src={post.image} alt=""/> <br/>
                    <h4>Date: {post.createdAt}</h4>
                  </li>
              )
                })}
        </ul>
           
        </div>
    )
}




