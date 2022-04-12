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
            <h1 className="index">MyBlog Page</h1>
                <nav className="btn">
                    <button onClick={() => {nav("/create")}}>New Blog</button>
                </nav>
            
        <ul className="art">
            {posts.map((post) => {
              return( 
                
                  <li className="index2"><a href={`/${post._id}`}><h2>{post.title}</h2> </a>
                    <h3>{post.createdAt}</h3>
                  </li>
                    )
                })}
        </ul>
           
        </div>
    )
}


