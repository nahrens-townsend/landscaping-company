'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

interface ConsultationFormData {
  name: string
  email: string
  phone: string
  address?: string
  projectType: string
  timeframe?: string
  budget?: string
  description: string
}

const inputClasses =
  'w-full px-4 py-3 border border-stone-warm bg-white text-charcoal text-sm font-body rounded-lg focus:outline-none focus:border-green-deep transition-colors duration-200 placeholder:text-stone-gray/50'
const labelClasses = 'block text-[10px] tracking-[0.2em] uppercase font-body font-medium text-charcoal mb-2'
const errorClasses = 'text-red-500 text-xs font-body mt-1'

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormData>()

  const onSubmit = async (data: ConsultationFormData) => {
    setServerError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, subject: 'Consultation Request' }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please try again or call us directly.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-20">
        <CheckCircle size={56} className="text-green-deep mx-auto mb-6" />
        <h3 className="font-display text-3xl font-semibold text-green-deep mb-3">Request Received</h3>
        <p className="text-stone-gray font-body max-w-md mx-auto text-sm leading-relaxed">
          Thank you for reaching out. A member of our team will contact you within one business day to schedule your
          consultation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10" noValidate>
      {/* Contact Info */}
      <div>
        <h3 className="font-display text-xl font-semibold text-green-deep mb-6 pb-4 border-b border-stone-warm">
          Your Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="c-name" className={labelClasses}>Full Name *</label>
            <input id="c-name" type="text" placeholder="Jane Smith" className={inputClasses}
              {...register('name', { required: 'Required' })} />
            {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="c-email" className={labelClasses}>Email *</label>
            <input id="c-email" type="email" placeholder="jane@example.com" className={inputClasses}
              {...register('email', { required: 'Required', pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Invalid email' } })} />
            {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="c-phone" className={labelClasses}>Phone *</label>
            <input id="c-phone" type="tel" placeholder="(204) 555-0000" className={inputClasses}
              {...register('phone', { required: 'Required' })} />
            {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="c-address" className={labelClasses}>Property Address</label>
            <input id="c-address" type="text" placeholder="123 Main St, Winnipeg, MB" className={inputClasses}
              {...register('address')} />
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div>
        <h3 className="font-display text-xl font-semibold text-green-deep mb-6 pb-4 border-b border-stone-warm">
          Project Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div>
            <label htmlFor="c-type" className={labelClasses}>Project Type *</label>
            <select id="c-type" className={`${inputClasses} cursor-pointer`}
              {...register('projectType', { required: 'Required' })}>
              <option value="">Select…</option>
              <option>Patio &amp; Outdoor Living</option>
              <option>Garden &amp; Planting</option>
              <option>Driveway &amp; Walkways</option>
              <option>Water Feature</option>
              <option>Outdoor Kitchen</option>
              <option>Fire Pit / Fireplace</option>
              <option>Full Yard Transformation</option>
              <option>Commercial Project</option>
              <option>Other</option>
            </select>
            {errors.projectType && <p className={errorClasses}>{errors.projectType.message}</p>}
          </div>
          <div>
            <label htmlFor="c-timeframe" className={labelClasses}>Timeframe</label>
            <select id="c-timeframe" className={`${inputClasses} cursor-pointer`} {...register('timeframe')}>
              <option value="">Select…</option>
              <option>As soon as possible</option>
              <option>This season</option>
              <option>Next season</option>
              <option>Still planning</option>
            </select>
          </div>
          <div>
            <label htmlFor="c-budget" className={labelClasses}>Approximate Budget</label>
            <select id="c-budget" className={`${inputClasses} cursor-pointer`} {...register('budget')}>
              <option value="">Select…</option>
              <option>Under $10,000</option>
              <option>$10,000 – $25,000</option>
              <option>$25,000 – $50,000</option>
              <option>$50,000 – $100,000</option>
              <option>Over $100,000</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="c-description" className={labelClasses}>Describe Your Vision *</label>
          <textarea
            id="c-description"
            rows={6}
            placeholder="Tell us about your space, what you love about it, what isn't working, and what you'd like to achieve…"
            className={`${inputClasses} resize-none`}
            {...register('description', { required: 'Please describe your project' })}
          />
          {errors.description && <p className={errorClasses}>{errors.description.message}</p>}
        </div>
      </div>

      {serverError && (
        <p className="text-red-500 text-sm font-body bg-red-50 px-4 py-3 border border-red-200 rounded-lg">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-5 bg-green-deep text-white text-sm font-body font-medium tracking-[0.12em] uppercase hover:bg-green-mid transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
      >
        {isSubmitting ? 'Submitting…' : 'Request Your Consultation'}
      </button>
    </form>
  )
}
