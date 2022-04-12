import '../App.css'
import {useNavigate, useParams} from 'react-router-dom'
import {React, useState, useEffect} from 'react'
import { editBlog, getBlog} from '../services/getApis'

export default function Edit() {
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getBlog(id)
        .then(res => setData(res.data))
    }, [])

    const editTheBlog = e => {
        e.preventDefault()
        console.log("editBlog")
        let updatedBlog = {
            title: e.target.title.value,
            author: e.target.author.value,
            body: e.target.body.value,
            comment: e.target.comment.value
        }
        console.log(updatedBlog)
        editBlog(id, updatedBlog)
        nav(`/${id}`)
    }

    return (
        <div className="edit">
            <h1>Edit Blog</h1>
            <form onSubmit={editTheBlog} id="eblog">
                Title: <input type="text" name="title" defaultValue={data.title} /> <br/>
                Author: <input type="text" name="author" defaultValue={data.author} /> <br/>
                Body: <input type="text" name="body" defaultValue={data.body} /> <br/>
                Comment: <input type="text" name="comment" defaultValue={data.comment} /> <br></br> <br></br>
                    <input type='submit' value='Update Blog' />
            </form>
        </div>
    )
}
