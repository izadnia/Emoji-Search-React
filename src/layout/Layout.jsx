import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'



function Layout({page}) {
  return (
   <div>
      <Header />
        {page}
      <Footer />
   </div>
  )
}

export default Layout