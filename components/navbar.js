import Image from "next/image"
import Link from "next/link"
import logo from '../public/logo.png'

export default function Navbar() {
    return (
    <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link href='/'>
              <a>
                <Image src={logo} />
              </a>
            </Link>
          </div>
          <div className="navbar-burger"><span></span><span></span><span></span></div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link href='/vote'>
                  <a className="button is-dark">Vote</a>
                </Link>
                <Link href='/'>
                  <a className="button is-light">Home</a>
                </Link>
              </div>
            </div>           
          </div>
        </div>
      </nav>
    )
}