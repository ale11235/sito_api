import type { ComponentType } from 'react'

import { Badge } from '@/components/ui/badge'

type Stat = {
  icon: ComponentType
  value: string
  description: string[]
}

const AboutUs = ({ stats }: { stats: Stat[] }) => {
  return (
    <section
      id='about-us'
      className='before:bg-muted relative py-8 before:absolute before:inset-0 before:-z-10 before:skew-y-3 sm:py-16 lg:py-24'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mx-auto mb-12 flex max-w-4xl flex-col items-center justify-center space-y-4 text-center md:mb-16 lg:mb-24'>
          <Badge variant='outline' className='border-primary text-primary text-sm font-normal'>
            La Nostra Storia
          </Badge>
          <h2 className='text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl'>
            Dalla passione di nonno Remo al tuo cucchiaino
          </h2>
          <p className='text-muted-foreground text-lg leading-relaxed'>
            Le api sono sempre state una presenza fissa a casa nostra. Tutto nasce dal profondo rispetto per la natura
            che nonno Remo ci ha tramandato. Nel 2021, io (Alessandro) ho deciso di affiancare mio padre Fabrizio in un
            grande passo: trasformare questa radicata passione in Apicoltura Bertelli.
          </p>
          <p className='text-muted-foreground mt-4 text-lg leading-relaxed'>
            Lavoriamo nel cuore delle Prealpi Varesine, un luogo dalla morfologia unica. Ci distingue un'attenzione
            maniacale ai dettagli: abbiamo studiato analisi sensoriale per perfezionare il nostro metodo e offrirti un
            prodotto vivo. La nostra è una lavorazione rigorosamente a freddo, senza alcuna pastorizzazione, per
            preservare ogni singolo profumo del nostro territorio.
          </p>
        </div>

        {/* Immagine e Statistiche Wrapper */}
        {/* Abbiamo aggiunto margine inferiore per compensare il box che sporge */}
        <div className='relative mx-auto mb-16 w-full max-w-6xl sm:mb-24 lg:mb-32'>
          {/* Contenitore Immagine (L'overflow-hidden ora è solo qui, non taglia più il box) */}
          <div className='h-[400px] w-full overflow-hidden rounded-2xl shadow-xl sm:h-[500px]'>
            <img
              src='/images/chi-siamo-apicoltura.webp'
              alt='Alessandro e Fabrizio al lavoro negli apiari Bertelli'
              className='h-full w-full object-cover'
              loading='lazy'
            />
          </div>

          {/* Card Statistiche sovrapposta */}
          {/* Su mobile usiamo un margine negativo (-mt-16) per farla salire sull'immagine */}
          {/* Su desktop usiamo absolute e -bottom-16 per centrarla sul bordo inferiore */}
          <div className='bg-background/95 relative z-10 mx-4 -mt-16 grid gap-8 rounded-xl border p-6 shadow-2xl backdrop-blur-md sm:max-lg:grid-cols-2 lg:absolute lg:-bottom-16 lg:left-1/2 lg:mx-0 lg:mt-0 lg:w-[90%] lg:-translate-x-1/2 lg:grid-cols-4 lg:px-10 lg:py-8'>
            {stats.map((stat, index) => (
              <div key={index} className='flex flex-col items-center justify-center gap-3 text-center'>
                <div className='text-primary flex size-10 items-center justify-center [&>svg]:size-8'>
                  <stat.icon />
                </div>
                <span className='text-foreground text-3xl font-bold'>{stat.value}</span>
                <p className='text-muted-foreground font-medium'>
                  {stat.description[0]} <br /> {stat.description[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
