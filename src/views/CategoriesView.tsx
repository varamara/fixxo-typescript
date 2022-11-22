import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'


const CategoriesView: React.FC= () => {

  document.title = 'Categories | Fixxo.'

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Categories"/>
    <FooterSection />
    </>
  )
}

export default CategoriesView