import { useEffect, useState } from 'react'

const initialFormState = {
    name: '',
    phone: '',
    email: '',
    city: '',
}

const initialErrorState = {
    name: '',
    phone: '',
    email: '',
    city: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ReusableContactForm({
    title = 'Book a free consultation',
    description = 'Share a few details and we will reach out with the right next step for your website, eCommerce, or digital project.',
    submitLabel = 'Send Inquiry',
    endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '/api/contact',
    triggerLabel = 'Open Consultation Form',
    triggerEyebrow = 'Popup consultation form',
    triggerTitle = 'Launch a cleaner consultation flow with a modern popup experience.',
    triggerDescription = 'Open the form in a focused modal so visitors can submit their details without leaving the current page context.',
    showTrigger = true,
    isOpen,
    onOpenChange,
    className = '',
}) {
    const [formData, setFormData] = useState(initialFormState)
    const [fieldErrors, setFieldErrors] = useState(initialErrorState)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitState, setSubmitState] = useState({ type: '', message: '' })
    const [internalIsOpen, setInternalIsOpen] = useState(false)
    const isControlled = typeof isOpen === 'boolean' && typeof onOpenChange === 'function'
    const popupIsOpen = isControlled ? isOpen : internalIsOpen

    function setPopupIsOpen(value) {
        if (isControlled) {
            onOpenChange(value)
            return
        }

        setInternalIsOpen(value)
    }

    useEffect(() => {
        if (!popupIsOpen) {
            return undefined
        }

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                setPopupIsOpen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [popupIsOpen])

    function handleChange(event) {
        const { name, value } = event.target

        const nextValue = name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value

        setFormData((current) => ({
            ...current,
            [name]: nextValue,
        }))

        setFieldErrors((current) => ({
            ...current,
            [name]: '',
        }))
        setSubmitState({ type: '', message: '' })
    }

    function validateForm(trimmedData) {
        const nextErrors = { ...initialErrorState }

        if (!trimmedData.name) {
            nextErrors.name = 'Name is required.'
        } else if (trimmedData.name.length > 35) {
            nextErrors.name = 'Name must be 35 characters or fewer.'
        }

        if (!trimmedData.phone) {
            nextErrors.phone = 'Number is required.'
        } else if (!/^\d+$/.test(trimmedData.phone)) {
            nextErrors.phone = 'Number must contain digits only.'
        } else if (trimmedData.phone.length > 10) {
            nextErrors.phone = 'Number must be 10 digits or fewer.'
        }

        if (!trimmedData.email) {
            nextErrors.email = 'Email is required.'
        } else if (!emailPattern.test(trimmedData.email)) {
            nextErrors.email = 'Enter a valid email address.'
        }

        if (!trimmedData.city) {
            nextErrors.city = 'City is required.'
        }

        return nextErrors
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setSubmitState({ type: '', message: '' })

        const trimmedData = {
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            city: formData.city.trim(),
        }

        const nextErrors = validateForm(trimmedData)
        setFieldErrors(nextErrors)

        if (Object.values(nextErrors).some(Boolean)) {
            setSubmitState({
                type: 'error',
                message: 'Please correct the highlighted fields before submitting.',
            })
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(trimmedData),
            })

            const data = await response.json().catch(() => ({}))

            if (!response.ok) {
                throw new Error(data.message || 'Unable to send your inquiry right now.')
            }

            setFormData(initialFormState)
            setFieldErrors(initialErrorState)
            setSubmitState({
                type: 'success',
                message: data.message || 'Your inquiry was sent successfully. We will reach out soon.',
            })
            setPopupIsOpen(false)
        } catch (error) {
            setSubmitState({
                type: 'error',
                message: error.message || 'Something went wrong while sending your inquiry.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            {showTrigger ? (
                <section
                    className={[
                        'rounded-[2rem] border border-slate-200 bg-[linear-gradient(160deg,_#ffffff,_#f4f8ff)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10',
                        className,
                    ].join(' ')}
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex rounded-full bg-[#e7f0ff] px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-[#2550c3]">
                            {triggerEyebrow}
                        </div>
                        
                        <h2 className="mt-5  text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                            {triggerTitle}
                        </h2>
                        <p className="mt-4  text-base leading-8 text-slate-600 sm:text-lg">
                            {triggerDescription}
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setPopupIsOpen(true)}
                            className="inline-flex items-center justify-center rounded-xl bg-[#1f4fc9] px-6 py-3  text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#173ea4]"
                        >
                            {triggerLabel}
                        </button>
                        <p className=" text-sm text-slate-500">
                            Opens a focused popup form without leaving the current page.
                        </p>
                    </div>
                </section>
            ) : null}

            {popupIsOpen ? (
                <div
                    className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm"
                    onClick={() => setPopupIsOpen(false)}
                    aria-hidden="true"
                >
                    <div
                        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/60 bg-[linear-gradient(180deg,_#ffffff,_#f4f8ff)] p-6 shadow-[0_30px_100px_rgba(15,23,42,0.22)] sm:p-8 lg:p-10"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="consultation-popup-title"
                    >
                        <button
                            type="button"
                            onClick={() => setPopupIsOpen(false)}
                            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                            aria-label="Close consultation form"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                <path
                                    d="M7 7l10 10M17 7 7 17"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>

                        <div className="max-w-2xl">
                           
                            <h2 id="consultation-popup-title" className="mt-5  text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                                {title}
                            </h2>
                            <p className="mt-4  text-base leading-8 text-slate-600 sm:text-lg">
                                {description}
                            </p>
                        </div>

                        <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                            <label className="block">
                                <span className=" text-sm font-bold text-slate-900">Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className={[
                                        'mt-2 w-full rounded-[1rem] border bg-white px-4 py-3  text-slate-900 outline-none transition focus:ring-4',
                                        fieldErrors.name
                                            ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-100'
                                            : 'border-slate-200 focus:border-[#2550c3] focus:ring-[#d9e6ff]',
                                    ].join(' ')}
                                    autoComplete="name"
                                    maxLength={35}
                                    aria-invalid={Boolean(fieldErrors.name)}
                                />
                                {fieldErrors.name ? (
                                    <p className="mt-2  text-sm font-medium text-rose-700">{fieldErrors.name}</p>
                                ) : null}
                            </label>

                            <label className="block">
                                <span className=" text-sm font-bold text-slate-900">Number</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                    className={[
                                        'mt-2 w-full rounded-[1rem] border bg-white px-4 py-3  text-slate-900 outline-none transition focus:ring-4',
                                        fieldErrors.phone
                                            ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-100'
                                            : 'border-slate-200 focus:border-[#2550c3] focus:ring-[#d9e6ff]',
                                    ].join(' ')}
                                    autoComplete="tel"
                                    inputMode="numeric"
                                    maxLength={10}
                                    aria-invalid={Boolean(fieldErrors.phone)}
                                />
                                {fieldErrors.phone ? (
                                    <p className="mt-2  text-sm font-medium text-rose-700">{fieldErrors.phone}</p>
                                ) : null}
                            </label>

                            <label className="block">
                                <span className=" text-sm font-bold text-slate-900">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={[
                                        'mt-2 w-full rounded-[1rem] border bg-white px-4 py-3  text-slate-900 outline-none transition focus:ring-4',
                                        fieldErrors.email
                                            ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-100'
                                            : 'border-slate-200 focus:border-[#2550c3] focus:ring-[#d9e6ff]',
                                    ].join(' ')}
                                    autoComplete="email"
                                    aria-invalid={Boolean(fieldErrors.email)}
                                />
                                {fieldErrors.email ? (
                                    <p className="mt-2  text-sm font-medium text-rose-700">{fieldErrors.email}</p>
                                ) : null}
                            </label>

                            <label className="block">
                                <span className=" text-sm font-bold text-slate-900">City</span>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Your city"
                                    className={[
                                        'mt-2 w-full rounded-[1rem] border bg-white px-4 py-3  text-slate-900 outline-none transition focus:ring-4',
                                        fieldErrors.city
                                            ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-100'
                                            : 'border-slate-200 focus:border-[#2550c3] focus:ring-[#d9e6ff]',
                                    ].join(' ')}
                                    autoComplete="address-level2"
                                    aria-invalid={Boolean(fieldErrors.city)}
                                />
                                {fieldErrors.city ? (
                                    <p className="mt-2  text-sm font-medium text-rose-700">{fieldErrors.city}</p>
                                ) : null}
                            </label>

                            <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    {submitState.message ? (
                                        <p
                                            className={[
                                                ' text-sm font-semibold',
                                                submitState.type === 'success' ? 'text-emerald-700' : 'text-rose-700',
                                            ].join(' ')}
                                        >
                                            {submitState.message}
                                        </p>
                                    ) : (
                                        <p className=" text-sm text-slate-500">
                                            Your details are sent securely through a backend Nodemailer handler.
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center justify-center rounded-xl bg-[#1f4fc9] px-6 py-3  text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#173ea4] disabled:cursor-not-allowed disabled:opacity-70 whitespace-nowrap"
                                >
                                    {isSubmitting ? 'Sending...' : submitLabel}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default ReusableContactForm