import { motion } from 'framer-motion'
import { useSanity } from '@/hooks/useSanity'
import { contactQuery } from '@/lib/sanity'

import EmailIcon from '@/assets/icons/email.svg?react'
import GithubIcon from '@/assets/icons/github.svg?react'
import LinkedInIcon from '@/assets/icons/linkedin.svg?react'
import WhatsappIcon from '@/assets/icons/whatsapp.svg?react'

import type { ContactData } from './contact.types'

const Contact = () => {
  const { data: contact, loading } = useSanity<ContactData>(contactQuery)

  if (loading || !contact) return null

  const socialLinks = [
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: EmailIcon,
      iconClass: 'text-rose-500 group-hover:text-rose-foreground',
    },
    {
      label: 'LinkedIn',
      value: 'Career Profile',
      href: contact.linkedin,
      icon: LinkedInIcon,
      iconClass:
        'fill-current text-[#0077b5] group-hover:text-[#0077b5]-foreground',
    },
    {
      label: 'GitHub',
      value: 'Code Repositories',
      href: contact.github,
      icon: GithubIcon,
      iconClass: 'text-foreground group-hover:fill-primary-foreground',
    },
    {
      label: 'WhatsApp',
      value: 'Quick Chat',
      href: `https://wa.me/${contact.whatsapp}`,
      icon: WhatsappIcon,
      iconClass: 'text-green-500 group-hover:text-green-foreground',
    },
  ]

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
        className="bg-card rounded-3xl border p-8 text-center md:p-16"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-3xl font-bold tracking-tighter sm:text-5xl"
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground mx-auto mb-12 max-w-150"
        >
          Saya selalu terbuka untuk diskusi proyek menarik atau peluang
          kolaborasi baru.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1, // Jeda antar ikon
              },
            },
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03, y: -5 }} // Efek melayang
                className="group bg-background hover:border-primary/50 hover:shadow-primary/5 relative flex flex-col items-center justify-center rounded-3xl border p-6 transition-all duration-300 hover:shadow-xl"
              >
                <div className="bg-secondary group-hover:bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110">
                  <Icon
                    className={`h-6 w-6 transition-all duration-300 ${link.iconClass}`}
                  />
                </div>

                <h3 className="group-hover:text-primary font-bold transition-colors duration-300">
                  {link.label}
                </h3>
                <p className="text-muted-foreground mt-1 text-xs">
                  {link.value}
                </p>
              </motion.a>
            )
          })}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Contact
