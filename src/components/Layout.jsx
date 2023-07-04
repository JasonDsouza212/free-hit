import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import BackToTopButton from './BackToTop'

export default function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
      <BackToTopButton />
    </>
  )
}
