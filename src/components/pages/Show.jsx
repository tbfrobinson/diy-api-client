import axios from 'axios'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Show() {

    let [blog, setBlog] = useState({})
    let { id } = useParams()
    // console.log(id)

    const navigate = useNavigate()

    const handleEdit = (e) => {
        e.preventDefault()
        navigate(`/edit/${id}`)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete(`${process.env.REACT_APP_DIY_API_URL}/blogs/${id}`)
        navigate('/')
    }

    const getBlog = async () => {
        try {
            let response = await axios.get(`${process.env.REACT_APP_DIY_API_URL}/blogs/${id}`)
            setBlog(response.data)
        } catch(err) {
            console.warn(err)
        }
    }
    getBlog()
    return (
        <>
            <div>
                <h1 className={'title'}>{blog.title}</h1>
                <h1 className={'author'}>By: {blog.author}</h1>
                <p className={'content'}>{blog.content}</p>
                <button className={'button'} onClick={handleEdit}>Edit</button>
                <button className={'button'} onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}