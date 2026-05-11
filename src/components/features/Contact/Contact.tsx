import { motion } from 'framer-motion'
import { useSanity } from '@/hooks/useSanity'
import { contactQuery } from '@/lib/sanity'
import type { ContactData } from './contact.types'

const Contact = () => {
  const { data: contact, loading } = useSanity<ContactData>(contactQuery)

  if (loading || !contact) return null

  const socialLinks = [
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: '📧',
    },
    {
      label: 'LinkedIn',
      value: 'Professional Profile',
      href: contact.linkedin,
      icon: '🔗',
    },
    {
      label: 'GitHub',
      value: 'Code Repositories',
      href: contact.github,
      icon: '💻',
    },
    {
      label: 'WhatsApp',
      value: 'Quick Chat',
      href: `https://wa.me/${contact.whatsapp}`,
      icon: '💬',
    },
  ]

  return (
    <div className="py-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-3xl border p-8 text-center md:p-16"
      >
        <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-5xl">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground mx-auto mb-12 max-w-150">
          Saya selalu terbuka untuk diskusi proyek menarik atau peluang
          kolaborasi baru.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-background hover:border-primary hover:shadow-primary/5 flex flex-col items-center justify-center rounded-3xl border p-6 transition-all hover:shadow-xl"
            >
              <span className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-125">
                {link.icon}
              </span>
              <h3 className="font-bold">{link.label}</h3>
              <p className="text-muted-foreground mt-1 text-xs">{link.value}</p>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
