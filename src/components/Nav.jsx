import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <ul>
                <li className={'navBar'}>
                    <Link to="/" className={'frontPageLink'}>Front Page</Link>
                    <Link to="/new-post" className={'newPost'}>Make A Post</Link>
                </li>
            </ul>
        </nav>
    )
}