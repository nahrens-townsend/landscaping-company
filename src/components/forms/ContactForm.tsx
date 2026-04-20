'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

const inputClasses =
  'w-full px-4 py-3 border border-stone-warm bg-white text-charcoal text-sm font-body rounded-lg focus:outline-none focus:border-green-deep transition-colors duration-200 placeholder:text-stone-gray/50'
const labelClasses = 'block text-[10px] tracking-[0.2em] uppercase font-body font-medium text-charcoal mb-2'
const errorClasses = 'text-red-500 text-xs font-body mt-1'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
      reset()
    } catch {
      setServerError('Something went wrong. Please try again or call us directly.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle size={48} className="text-green-deep mx-auto mb-4" />
        <h3 className="font-display text-2xl font-semibold text-green-deep mb-2">Message Sent</h3>
        <p className="text-stone-gray font-body text-sm">
          Thank you for reaching out. We&apos;ll be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>Full Name *</label>
          <input
            id="name"
            type="text"
            placeholder="Jane Smith"
            className={inputClasses}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>Email Address *</label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            className={inputClasses}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Invalid email address' },
            })}
          />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="(204) 555-0000"
            className={inputClasses}
            {...register('phone')}
          />
        </div>
        <div>
          <label htmlFor="subject" className={labelClasses}>Subject *</label>
          <input
            id="subject"
            type="text"
            placeholder="How can we help?"
            className={inputClasses}
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && <p className={errorClasses}>{errors.subject.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>Message *</label>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell us about your project, property, and what you're hoping to achieve..."
          className={`${inputClasses} resize-none`}
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 20, message: 'Please provide more detail (at least 20 characters)' },
          })}
        />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
      </div>

      {serverError && (
        <p className="text-red-500 text-sm font-body bg-red-50 px-4 py-3 border border-red-200 rounded-lg">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-10 py-4 bg-green-deep text-white text-sm font-body font-medium tracking-wide hover:bg-green-mid transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
      >
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
