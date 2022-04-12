import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {getBlog, deleteBlog} from '../services/getApis'

export default function Show() {
    const nav = useNavigate()
    const {id} = useParams()
    const [text, setText] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        getBlog(id)
        .then(res => {
            setText(res.data)
            setComments(res.data.comments)
        })
        
    }, [])

    const deleteTheBlog = () => {
        deleteBlog(id)
        nav('/')
    }

    return (
        <div className="show">
            <h1>Show Page</h1>
           
                <div>
                 <h2 className="show2"> {text.title} </h2>
                 <div>Written by: {text.author}</div>
                 <p>{text.body}</p>
                </div> 
                 {comments.map((comment) => {
                         return (
                             <div className="comm">
                               <div>{comment.cName} </div>
                               <p>{comment.cMessage} </p>
                               <div>{comment.cDate} </div>
                             </div>
                         )
                     })}
                
                <button onClick={() => {nav(`/${id}/edit`)}}> Edit Blog</button> <br/>
                <button onClick={deleteTheBlog}>Delete</button>     
        </div>
    )
}


