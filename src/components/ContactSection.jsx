import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    location: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setSuccess(false);
    setError('');

    try {
      const response = await fetch(
        'https://formspree.io/f/mkovooro',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            _replyto: formState.email, // REQUIRED
            phone: formState.phone,
            company: formState.company,
            product: formState.product,
            quantity: formState.quantity,
            location: formState.location,
            message: formState.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          product: '',
          quantity: '',
          location: '',
          message: '',
        });
      } else {
        setError(
          data?.errors?.[0]?.message ||
            'Something went wrong. Please try again.'
        );
      }
    } catch {
      setError('Network error. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal">
              Request a Quote
            </h2>
            <p className="mt-4 text-steel-gray max-w-md">
              Ready to start your project? Contact us for quotes, product inquiries, or
              professional advice. Our team is here to help.
            </p>

            <a
              href="https://wa.me/966537006760"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] transition-colors duration-200"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-steel-gray/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                  placeholder='your name'
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-steel-gray/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                  placeholder='you@example.com'                  
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-steel-gray/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                  placeholder='+91 123 456 7890'
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Company Name <span className="text-xs">(optional)</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-steel-gray/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                  placeholder='your company name'
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Product Interested In
                </label>
                <input
                  type="text"
                  name="product"
                  value={formState.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-steel-gray/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                  placeholder='e.g. Steel Beams, Concrete Mix, etc.'
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Quantity <span className="text-xs">(optional)</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={formState.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-steel-gray/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                  placeholder='Approximate quantity or tonnage'
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Project Location <span className="text-xs">(optional)</span>
              </label>
              <input
                type="text"
                name="location"
                value={formState.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-steel-gray/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                placeholder='City, state, or site address'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-steel-gray/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none"
                placeholder='Tell us about your project, timeline, and any specific requirements...'
              />
            </div>

            {success && (
              <p className="text-sm text-emerald-600">
                Thank you, we will contact you shortly.
              </p>
            )}

            {error && (
              <p className="text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-4 bg-gold text-charcoal font-semibold hover:bg-gold/90 disabled:opacity-70"
            >
              {submitting ? 'Sending...' : 'Send Request'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
