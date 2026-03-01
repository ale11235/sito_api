import type { ComponentType } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

type ContactInfo = {
  id: number
  icon: ComponentType
  title: string
  description: string
}

const ContactUs = ({ contactInfo }: { contactInfo: ContactInfo[] }) => {
  return (
    <section id='contact-us' className='bg-muted/30 py-12 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header con la Regola d'Oro del PRD */}
        <div className='mx-auto mb-12 flex max-w-3xl flex-col items-center justify-center space-y-4 text-center md:mb-16'>
          <Badge variant='outline' className='border-primary text-primary text-sm font-normal'>
            Contatti
          </Badge>
          <h2 className='text-primary text-3xl font-bold tracking-tight uppercase md:text-4xl lg:text-5xl'>
            Vieni a trovarci su appuntamento
          </h2>
          <p className='text-muted-foreground mt-4 text-xl font-medium'>
            Il nostro laboratorio è aperto per il ritiro dei prodotti e per conoscersi, ma{' '}
            <strong className='text-foreground'>riceviamo esclusivamente su prenotazione</strong>. Contattaci per
            fissare un incontro!
          </p>
        </div>

        <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-8'>
          {/* Box dei Contatti */}
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {contactInfo.map(info => (
              <Card key={info.id} className='bg-background border-none shadow-md transition-shadow hover:shadow-lg'>
                <CardContent className='flex flex-col items-center space-y-4 p-6 text-center'>
                  <div className='bg-primary/10 text-primary flex size-14 items-center justify-center rounded-full [&>svg]:size-7'>
                    <info.icon />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold'>{info.title}</h3>
                    <p className='text-muted-foreground mt-2 font-medium'>{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mappa Interattiva Google Maps */}
          <div className='h-[400px] min-h-[400px] w-full overflow-hidden rounded-2xl border shadow-xl lg:h-full'>
            <iframe
              src='https://maps.google.com/maps?q=Via%20Ettore%20Stocchetti%2084%2C%20Besozzo&t=&z=15&ie=UTF8&iwloc=&output=embed'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Mappa Laboratorio Apicoltura Bertelli'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
