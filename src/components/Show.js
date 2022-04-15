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
        <div >
            <h1 className="spage">Show Page</h1>
            <div className="show">
                 <div className="view">
                    <h2 className="show2"> {text.title} </h2>
                    <div className="show2">Written by: {text.author}</div>
                     <img style={{height:'550px', width: '550px'}} src={text.image} alt="" id="img" /> <br/>
                     <p className="show2">{text.body}</p> 
                 </div> 
                 {comments.map((comment, i) => {
                         return (
                             <div className="comm" key={i}>
                                 <h4>User Comment</h4>
                               <div>Name: {comment.name} </div>
                               <p>Comment: {comment.message} </p>
                               <div> Date: {comment.date} </div>
                             </div>
                         )
                     })}
                </div>
                    <br/>  <br/> 
                <button onClick={() => {nav(`/${id}/edit`)}} className="sbtn"> Edit Blog </button> <br/> <br/>
                <button onClick={deleteTheBlog} className="sbtn" > Delete </button>     
        </div>
    )
}


