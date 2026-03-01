import { FacebookIcon, InstagramIcon, MessageCircle } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import { footerData } from '@/assets/data/footer'

const Footer = () => {
  return (
    <footer className='bg-muted mt-12' style={{ clipPath: 'polygon(0 16px, 100% 0, 100% 100%, 0 100%)' }}>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 md:flex-row md:py-12'>
        {/* LOGO E NOME BRAND */}
        <a href='/#home' className='flex items-center gap-3'>
          {/* NOTA: Qui potrai inserire il tag <img> con il tuo logo SVG. Per ora ho messo un font elegante per simulare la tua B */}
          <span className='text-primary font-serif text-[24px] font-bold italic'>Apicoltura Bertelli</span>
        </a>

        {/* LINK DI NAVIGAZIONE */}
        <div className='flex flex-wrap items-center justify-center gap-5'>
          {footerData.map(item => (
            <a
              key={item.title}
              href={item.href}
              className='text-foreground hover:text-primary text-base font-medium transition-colors'
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* SOCIAL E CONTATTO WHATSAPP */}
        <div className='flex items-center gap-4'>
          <a
            href='https://wa.me/393396599663'
            target='_blank'
            rel='noopener noreferrer'
            title='Scrivici su WhatsApp'
            className='transition-colors hover:text-[#25D366]'
          >
            <MessageCircle className='size-6' />
          </a>
          <a href='#' title='Seguici su Instagram' className='hover:text-primary transition-colors'>
            <InstagramIcon className='size-6' />
          </a>
          <a href='#' title='Seguici su Facebook' className='hover:text-primary transition-colors'>
            <FacebookIcon className='size-6' />
          </a>
        </div>
      </div>

      <Separator />

      {/* COPYRIGHT E POLICY */}
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row'>
        <p className='text-muted-foreground text-center text-sm text-balance'>
          {`©${new Date().getFullYear()}`}{' '}
          <a href='/#home' className='text-foreground font-medium hover:underline'>
            Apicoltura Bertelli
          </a>
          . Tutti i diritti riservati. <br className='md:hidden' /> Sede: Besozzo (VA).
        </p>

        <div className='text-muted-foreground flex gap-4 text-sm'>
          <a href='/privacy-policy' className='hover:text-primary hover:underline'>
            Privacy Policy
          </a>
          <a href='/cookie-policy' className='hover:text-primary hover:underline'>
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
