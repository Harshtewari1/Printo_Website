import React from 'react'
import NavBar from './HomePage/NavBar'
import ImageSlider from './HomePage/ImageSlider'
import PopularCategories from './HomePage/PopularCategory'
import ShopByBusinessNeeds from './HomePage/ShopByBusinessNeeds'
import NewLaunches from './HomePage/NewLaunches'
import BestSeller from './HomePage/BestSeller'
import Review from './HomePage/Review'
import Featured from './HomePage/Featured'
import CorporateTrust from './HomePage/CorporateTrust'
import BlogSection from './HomePage/BlogSection'
import Footer from './HomePage/Footer'

const HomePage = () => {
  return (
    <div className='pt-5 '>
      <NavBar />
      <ImageSlider />
      <PopularCategories />
      <ShopByBusinessNeeds />
      <NewLaunches /> 
      <BestSeller />
      <Review />
      <Featured />
      <CorporateTrust />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default HomePage