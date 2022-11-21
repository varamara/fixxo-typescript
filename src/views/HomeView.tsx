import React, { useContext } from 'react'
import { ProductsContext } from '../contexts/contexts'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import DealsSection_1 from '../sections/DealsSection_1'
import DealsSection_2 from '../sections/DealsSection_2'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import SupportSection from '../sections/SupportSection'
import TopPicksSection from '../sections/TopPicksSection'

interface HomeViewProps {
  featured: string
  deals: string
}

const HomeView: React.FC<HomeViewProps>= () => {

 document.title = 'Fixxo.'

 const {featured, deals} = useContext(ProductsContext)

  return (
    <>
      <header>
        <MainMenuSection />
        <BreadcrumbSection currentPage="Home"/>
        <ShowcaseSection />
      </header> 
    <ProductGridSection title="Featured Products" items={featured}/>
    <TopPicksSection />
    <DealsSection_1 items={deals} />
    <DealsSection_2 items={deals} />
    <SupportSection />
    <FooterSection />
    </>
  )
}

export default HomeView