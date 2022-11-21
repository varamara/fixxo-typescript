import React from 'react'
import ProductCard from '../components/ProductCard'
import DealsSection_1, { DealsSectionProps } from './DealsSection_1'

const DealsSection_2: React.FC<DealsSectionProps> = ({items = []}) => {

    return (
        <section className="deals-section-2">
            <div className="flash-grid">
                <div className="container">
                    <div className="row row-cols-2 row-cols-md-2 row-cols-lg-2 row-cols-2 g-2">
                    {/* {
                        items.map( product => <ProductCard key={product.articleNumber} item={product} />)
                    } */}
                    </div>
                </div>
            </div>

            <div className="flash-sale">
                <div className="flash-info">
                    <h1>2 FOR USD $29</h1>
                    <button className="btn-light">
                        <div className="corner-left"></div>
                            FLASH SALE
                        <div className= "corner-right"></div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DealsSection_2