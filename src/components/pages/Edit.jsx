import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Edit() {
    let { id } = useParams()

    let [blog, setBlog] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await axios.get(`${process.env.REACT_APP_DIY_API_URL}/blogs/${id}`)
            setBlog(response.data)
        }
        fetchBlog()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${process.env.REACT_APP_DIY_API_URL}/blogs/${id}`, blog)
            // console.log(update)
            navigate(`/post/${id}`)
        } catch(err) {
            console.warn(err)
        }
    }

    return (
        <>
            <h1 className={'title'}>Edit Post: </h1>
            <form className={'form1'}>
                <label htmlFor='title'>Title: </label>
                <input 
                    type='text'
                    id='title'
                    placeholder='The Importance of Being...'
                    value={blog.title}
                    onChange={e=>setBlog({...blog, title: e.target.value})}
                />
                <label htmlFor='author'>Author: </label>
                <input 
                    type='text'
                    id='author'
                    placeholder='Oscar...'
                    value={blog.author}
                    onChange={e=>setBlog({...blog, author: e.target.value})}
                />
                <label htmlFor='content'>Content: </label>
                <input 
                    type='text'
                    id='content'
                    placeholder="It's important because..."
                    value={blog.content}
                    onChange={e=>setBlog({...blog, content: e.target.value})}
                />
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}