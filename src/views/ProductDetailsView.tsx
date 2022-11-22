import React from 'react'
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'

const ProductDetailsView: React.FC = () => {

  const params = useParams()

  return (
    <>
    <MainMenuSection />
    <ProductDetailsSection />
    <FooterSection />
    </>
  )
}

export default ProductDetailsView