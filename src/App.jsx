import React from 'react'
import Header from './components/Header'
import AboutCompany from './components/AboutCompany'
import ImageSwiper from './components/ImageSwiper'
import SupportAreas from './components/SupportAreas'
import ProductsPage from './components/Product'
import News from './components/NewsCard'
import Partners from './components/Partners'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
    <Header/>
    <ImageSwiper/>
    <main>
      <AboutCompany/>
      <SupportAreas/>
      <ProductsPage/>
      {/* <News/> */}
      <Partners/>
    </main>
    <Footer/>
   </>
  )
}

export default App