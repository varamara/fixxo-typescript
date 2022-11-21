import React from 'react'
import customer_service from '../assets/images/customer-service.svg'
import credit_card from '../assets/images/credit-card.svg'
import delivery_truck from '../assets/images/delivery-truck.svg'


const SupportSection: React.FC = () => {
  return (
    <section className='support_section'>
       <div className="btn-container">
            <div className="container">
                <div className="support-options">
                    <a href="#" className="support-btn"><img className="customer_service" src={customer_service} alt="icon"/></a>
                    <a href=""><h1>Customer Support</h1></a>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="support-options">
                    <a href="#" className="support-btn"><img className="customer_service" src={credit_card} alt="icon"/></a>
                    <a href=""><h1>Secured Payment</h1></a>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="support-options">
                    <a href="#" className="support-btn"><img className="delivery_truck" src={delivery_truck} alt="icon"/></a>
                    <a href=""><h1>Free Delivery</h1></a>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="support-options">
                    <a href="#" className="support-btn"><img className="delivery_truck" src={delivery_truck} alt="icon"/></a>
                    <a href=""><h1>Customer Support</h1></a>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SupportSection