import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../config/email';
import { motion } from 'framer-motion';

const ContactForm = ({ formRef, setCurrentAnimation, showAlert, hideAlert }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFocus = () => setCurrentAnimation('Sitting');
  const handleBlur = () => setCurrentAnimation('Sleeping');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('Walk');
    emailjs
      .send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: form.name,
          to_name: 'Rizki Kosasih',
          message: form.message,
          from_email: form.email || form.name,
          to_email: 'rizkikosasih1997@gmail.com'
        },
        emailConfig.key
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ text: 'Pesan Anda Berhasil Terkirim!', type: 'success' });
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation('Sleeping');
        }, 3000);
      })
      .catch(() => {
        setIsLoading(false);
        setCurrentAnimation('Sleeping');
        showAlert({ text: 'Maaf, saya tidak dapat menerima pesan anda', type: 'danger' });
      });
  };

  return (
    <form
      className="mt-10 flex w-full flex-col gap-7"
      onSubmit={handleSubmit}
      ref={formRef}>
      <label className="font-semibold text-black-500">Nama</label>
      <input
        className="input"
        name="name"
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="Your name"
        required
        type="text"
        value={form.name}
      />

      <label className="font-semibold text-black-500">Email (Optional)</label>
      <input
        className="input"
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="example@mail.com"
        type="email"
        value={form.email}
      />

      <label className="font-semibold text-black-500">Pesan</label>
      <textarea
        className="textarea"
        name="message"
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="Jangan ragu untuk menghubungi saya dan beri tahu bagaimana saya bisa membantu Anda!"
        required
        rows={4}
        value={form.message}
      />

      <motion.button
        className="custom-btn"
        disabled={isLoading}
        type="submit"
        onBlur={handleBlur}
        onFocus={handleFocus}
        whileTap={{ scale: 0.95 }}>
        {isLoading ? 'Mengirim ...' : 'Kirim Pesan'}
      </motion.button>
    </form>
  );
};

export default ContactForm;
