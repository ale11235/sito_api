import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type Testimonial = {
  name: string
  username: string
  body: string
  img: string
}

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <section id='testimonials' className='bg-background py-12 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header della sezione */}
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='border-primary text-primary text-sm font-normal'>
            Dicono di Noi
          </Badge>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl'>Cosa pensano i nostri clienti</h2>
          <p className='text-muted-foreground mt-4 text-xl'>
            La qualità del nostro miele artigianale raccontata da chi lo ha già assaggiato. La tua soddisfazione è il
            premio più grande per il nostro lavoro con le api.
          </p>
        </div>

        {/* Griglia delle Recensioni */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className='bg-muted/50 border-none shadow-sm transition-shadow hover:shadow-md'>
              <CardHeader className='flex flex-row items-center gap-4 pb-2'>
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className='size-12 rounded-full object-cover'
                  loading='lazy'
                />
                <div className='flex flex-col'>
                  <span className='text-base font-semibold'>{testimonial.name}</span>
                  <span className='text-muted-foreground text-sm'>{testimonial.username}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground leading-relaxed'>"{testimonial.body}"</p>
                {/* Stelline finte per dare l'idea della recensione 5 stelle */}
                <div className='mt-4 flex gap-1 text-yellow-500'>★ ★ ★ ★ ★</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call To Action per chiedere nuove recensioni */}
        <div className='mt-16 flex flex-col items-center justify-center space-y-6 text-center'>
          <h3 className='text-2xl font-semibold'>Hai già provato i nostri prodotti?</h3>
          <p className='text-muted-foreground max-w-xl'>
            La tua opinione è fondamentale per noi e ci aiuta a far conoscere la nostra piccola realtà artigianale a più
            persone.
          </p>
          <Button asChild size='lg' className='rounded-full'>
            <a href='HREF_DELLA_TUA_SCHEDA_GOOGLE' target='_blank' rel='noopener noreferrer'>
              Lasciaci una recensione su Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
