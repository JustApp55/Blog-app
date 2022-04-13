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
    console.log(comments)

    return (
        <div className="show">
            <h1>Show Page</h1>
           
                <div className="view">
                  <h2 className="show2"> {text.title} </h2>
                  <div>Written by: {text.author}</div>
                  <img style={{height:'350px', width: '350px'}} src={text.image} alt="" /> <br/>
                  <p>{text.body}</p> <br/> 
                </div> 
                 {comments.map((comment, i) => {
                         return (
                             <div className="comm" key={i}>
                               <div>{comment.name} </div>
                               <p>{comment.message} </p>
                               <div>{comment.date} </div>
                             </div>
                         )
                     })}
                    <br/>  <br/> 
                <button onClick={() => {nav(`/${id}/edit`)}}> Edit Blog</button> <br/>
                <button onClick={deleteTheBlog}>Delete</button>     
        </div>
    )
}


