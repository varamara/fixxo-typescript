import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MapSection from '../sections/MapSection'
import ContactFormSection from '../sections/ContactFormSection'

// OBS att denna js heter contactS och inte contact

const ContactsView: React.FC = () => {

  document.title = 'Contacts | Fixxo.'

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Contacts"/>
    <MapSection />
    <ContactFormSection />
    <FooterSection />
    </>
  )
}

export default ContactsView