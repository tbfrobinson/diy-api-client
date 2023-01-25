import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function FrontPage() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get(`${process.env.REACT_APP_DIY_API_URL}/blogs`)
            // console.log(response.data)
            setBlogs(response.data)
        }
        fetchBlogs()
    })
    let displayBlogs = blogs.map((b, i) => {
        return(
            <div className={'post'} key={`post-${i}`}>
                <Link className={'blogLink'} to={`/post/${b._id}`}>
                <h2>{b.title}</h2>
                </Link>
                <p>By {b.author}</p>
            </div>
        )
    })
    return (
        <div>
            <h1 className={'headline'}>Welcome to the front page of localhost:8000.. or.. er localhost:3000</h1>
            {displayBlogs}
        </div>
    )
}