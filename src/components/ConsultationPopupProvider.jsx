import { createContext, useContext, useMemo, useState } from 'react'
import ReusableContactForm from './ReusableContactForm.jsx'

const ConsultationPopupContext = createContext(null)

function ConsultationPopupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo(
    () => ({
      openConsultationPopup: () => setIsOpen(true),
    }),
    [],
  )

  return (
    <ConsultationPopupContext.Provider value={value}>
      {children}
      <ReusableContactForm
        title="Book a free consultation"
        description="Share your name, number, email, and city. We will review the inquiry and get back to you with the right next step."
        submitLabel="Send Consultation Request"
        showTrigger={false}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      />
    </ConsultationPopupContext.Provider>
  )
}

function useConsultationPopup() {
  const context = useContext(ConsultationPopupContext)

  if (!context) {
    throw new Error('useConsultationPopup must be used within ConsultationPopupProvider.')
  }

  return context
}

export { ConsultationPopupProvider, useConsultationPopup }