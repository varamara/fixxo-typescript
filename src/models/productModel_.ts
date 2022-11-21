export interface Product {
  
          articleNumber: string
          name: string
          description?: string
          category: string
          price: number
          rating: number
          imageName: string
}

// Jag tänker att det borde gå att göra en model för alla produkter
// och justera antalet som hämtas på något annat sätt. Jag gör en model
// åt varje nu bara för att mina variabler ska bli rätt. 