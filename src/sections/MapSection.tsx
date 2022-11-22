import React from 'react'

const MapSection: React.FC = () => {
  return (
    <section>
      <iframe 
        className="google-map"
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7685.652316073843!2d17.117892640048233!3d61.211414201303654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466132d79e2bbbc1%3A0x2603450772b124f2!2s820%2020%20Ljusne!5e0!3m2!1ssv!2sse!4v1666693618767!5m2!1ssv!2sse" 
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  )
}

export default MapSection