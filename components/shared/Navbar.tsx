
import  { Link }  from 'react-router-dom'

export default function Navbar() {

  return (
    <nav>
        <Link to="/" className='home'>
            Home
        </Link>
        <ul>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}
