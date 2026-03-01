'use client'

import { useState } from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type PopularDish = {
  image: string
  alt: string
  name: string
  type: string
  shortDescription: string
  description: string
  formats: string
}

const PopularDishes = ({ popularDishes }: { popularDishes: PopularDish[] }) => {
  const [selectedProduct, setSelectedProduct] = useState<PopularDish | null>(null)

  // Funzione per generare il link di WhatsApp in base al prodotto
  const getWhatsAppLink = (productName: string) => {
    const phoneNumber = '393396599663' // Numero del PRD

    const message = encodeURIComponent(
      `Ciao Apicoltura Bertelli, vorrei avere maggiori informazioni o ordinare: ${productName}.`
    )

    return `https://wa.me/${phoneNumber}?text=${message}`
  }

  // Funzione per chiudere la modale
  const closeModal = () => setSelectedProduct(null)

  return (
    <section id='prodotti' className='relative py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='text-sm font-normal'>
            Il Nostro Catalogo
          </Badge>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>I Nostri Prodotti</h2>
          <p className='text-muted-foreground text-xl'>
            Scopri la nostra selezione di mieli uniflorali e prodotti dell'alveare. Clicca sul prodotto per scoprirne le
            caratteristiche e i formati disponibili.
          </p>
        </div>

        {/* Griglia Prodotti */}
        <div className='grid gap-6 md:grid-cols-2 lg:gap-y-10 xl:grid-cols-3'>
          {popularDishes.map((product, index) => (
            <Card
              key={index}
              onClick={() => setSelectedProduct(product)}
              className='hover:border-primary cursor-pointer overflow-hidden rounded-none py-0 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
            >
              <CardContent className='px-0'>
                <div className='bg-muted overflow-hidden'>
                  <img
                    src={product.image}
                    alt={product.alt}
                    className='h-64 w-full object-cover transition-transform duration-500 hover:scale-105'
                    loading='lazy'
                  />
                </div>
                <div className='space-y-3 px-6 py-5'>
                  <CardTitle className='text-xl'>{product.name}</CardTitle>
                  <Separator />
                  <div className='text-muted-foreground'>
                    <p className='text-primary mb-2 text-sm font-medium'>{product.type}</p>
                    <p className='text-sm'>{product.shortDescription}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modale Dettaglio Prodotto (Overlay) */}
      {selectedProduct && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm'
          onClick={closeModal}
        >
          <div
            className='bg-background relative w-full max-w-2xl overflow-hidden rounded-xl shadow-2xl'
            onClick={e => e.stopPropagation()} // Evita che il click dentro la modale la chiuda
          >
            {/* Bottone di chiusura (X) */}
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/40'
            >
              ✕
            </button>

            <div className='flex flex-col md:flex-row'>
              {/* Immagine nella modale */}
              <div className='w-full md:w-1/2'>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.alt}
                  className='h-64 w-full object-cover md:h-full'
                />
              </div>

              {/* Contenuto nella modale */}
              <div className='flex w-full flex-col justify-between space-y-4 p-6 md:w-1/2'>
                <div>
                  <h3 className='mb-1 text-2xl font-bold'>{selectedProduct.name}</h3>
                  <p className='text-primary mb-4 text-sm font-medium'>{selectedProduct.type}</p>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>{selectedProduct.description}</p>
                  <div className='bg-muted/50 mb-6 rounded-md p-3'>
                    <p className='text-sm font-semibold'>{selectedProduct.formats}</p>
                  </div>
                </div>

                <div className='flex flex-col gap-3'>
                  <Button asChild size='lg' className='w-full bg-[#25D366] text-white hover:bg-[#128C7E]'>
                    <a href={getWhatsAppLink(selectedProduct.name)} target='_blank' rel='noopener noreferrer'>
                      Ordina su WhatsApp
                    </a>
                  </Button>
                  <Button variant='outline' onClick={closeModal} className='w-full'>
                    Chiudi
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PopularDishes
