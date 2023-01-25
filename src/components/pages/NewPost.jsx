import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function NewPost() {

    const [form, setForm] = useState({
        author: '',
        title: '',
        content: '',
    })

    const navigate = useNavigate()

    let handleSubmit = e => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_DIY_API_URL}/blogs`, form)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Craft Post</h1>
            <form className={'form'}>
                <label htmlFor='title'>Title: </label>
                <input 
                    type='text'
                    id='title'
                    placeholder='The Importance of Being...'
                    value={form.title}
                    onChange={e=>setForm({...form, title: e.target.value})}
                />
                <label htmlFor='author'>Author: </label>
                <input 
                    type='text'
                    id='author'
                    placeholder='Oscar...'
                    value={form.author}
                    onChange={e=>setForm({...form, author: e.target.value})}
                />
                <label htmlFor='content'>Content: </label>
                <input 
                    type='text'
                    id='content'
                    placeholder="It's important because..."
                    value={form.content}
                    onChange={e=>setForm({...form, content: e.target.value})}
                />
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}