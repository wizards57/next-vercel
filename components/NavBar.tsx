import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'
// import '../src/styles/globals.css'


const menuItems = [
  {
    text: 'Home',
    href:'/'
  },
  {
    text: 'About',
    href:'/about'
  },
  {
    text: 'Contact',
    href:'/contact'
  },
  {
    text: 'Pricing',
    href:'/pricing'
  },
]



export const NavBar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(m => (
          <ActiveLink key={m.href} text={m.text} href={m.href} />
        ))
      }
          {/* <ActiveLink text="Home" href="/" /> */}
          {/*<ActiveLink text="About" href="/about" />  // esta esta en otra carpeta solo en modo de ejemplo */}
          {/* <ActiveLink text="Contact" href="/contact" />
          <ActiveLink text="Pricing" href="/pricing" /> */}
    </nav>
  )
}