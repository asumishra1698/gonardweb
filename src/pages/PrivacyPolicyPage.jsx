import PageBannerLayout from '../components/PageBannerLayout.jsx'

const policySections = [
  {
    title: '1. Introduction',
    paragraphs: [
      'Welcome to GonardWeb ("we," "us," "our," or "Company"). We respect your privacy and are committed to protecting your personal data through our compliance with this policy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website www.gonardweb.com or use any of our related services (collectively, the "Services").',
      'Please read this policy carefully to understand our practices regarding your data. By accessing or using our Services, you consent to the practices described in this Privacy Policy. If you do not agree with our policies and practices, your choice is to not use our Services.',
    ],
  },
  {
    title: '2. Applicability and Jurisdiction-Specific Provisions',
    paragraphs: [
      'As a global company, we adhere to the data protection laws applicable in the countries we operate in. This policy is designed to provide transparency and inform you of your rights under:',
    ],
    items: [
      'United States: We comply with the California Consumer Privacy Act (CCPA) as amended by the CPRA, and other applicable state laws. We also adhere to the Children’s Online Privacy Protection Act (COPPA) regarding information from children under 13.',
      'United Kingdom & European Economic Area (EEA): We process personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the EU General Data Protection Regulation (GDPR).',
      'Canada: We comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and the Canadian Anti-Spam Legislation (CASL).',
      'South Africa: We recognize and adhere to the principles of the Protection of Personal Information Act (POPIA).',
      'Australia: We comply with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).',
      'Specific rights for these regions are detailed in the “Your Data Protection Rights” section.',
    ],
  },
  {
    title: '3. Information We Collect',
    paragraphs: [
      'We collect information that you provide directly to us and information collected automatically when you use our Services.',
      'A. Personal Information You Provide: We collect personal information you voluntarily provide, such as when you register, contact us, or make a purchase. This includes identifiers such as full name, email address, postal address, phone number, username, and similar contact data; commercial information such as records of products or services purchased, obtained, or considered, and other purchasing or consuming histories; professional information such as your resume, cover letter, and employment details if you apply for a job; and content such as any communications you send to us, including customer support inquiries and feedback.',
      'B. Information Collected Automatically: When you interact with our Services, we automatically collect technical data such as your Internet Protocol (IP) address, browser type and version, time zone setting, browser plug-in types, operating system, platform, and other technology on the devices you use. We also collect usage data about your interaction with our Services, including the pages you visited, links you clicked, time spent on pages, and the dates and times of your visits. We may also derive your approximate location from your IP address.',
      'C. Information from Third Parties: We may receive information about you from analytics providers such as Google Analytics, social media platforms if you interact with us there or log in through a service such as Facebook or Google, and business partners with whom we offer co-branded services or engage in joint marketing activities.',
      'D. Cookies and Similar Tracking Technologies: We use cookies, web beacons, and similar tracking technologies to collect and store information. For more details, please see our dedicated Cookie Policy section below.',
    ],
  },
  {
    title: '4. How We Use Your Information',
    paragraphs: [
      'We use the information we collect to provide and maintain our Services, create and manage your account, process transactions, provide customer support, and fulfill your requests. We also use it to improve and personalize our Services, understand how our Services are used, develop new products and services, and present content tailored to your interests.',
      'We may communicate with you through service-related emails such as account verification, updates, and security alerts, and where you have opted in, send marketing and promotional communications. We also use information for analytics and reporting, targeted advertising, security and fraud prevention, and to comply with applicable laws, regulations, legal processes, or governmental requests.',
    ],
  },
  {
    title: '5. Legal Basis for Processing (GDPR/UK GDPR/POPIA)',
    paragraphs: [
      'If you are located in the EEA, UK, or South Africa, we process your personal data based on the following legal grounds: consent, where you have given clear consent for us to process your personal data for a specific purpose such as marketing emails; contract performance, to fulfill a contract we are about to enter into or have entered into with you; legitimate interests, for our legitimate business interests such as improving our Services, security, and marketing, provided that your fundamental rights do not override those interests; and legal obligation, to comply with a legal obligation we are subject to.',
    ],
  },
  {
    title: '6. How We Share and Disclose Your Information',
    paragraphs: [
      'We may share your information with trusted third-party vendors, service providers, and contractors who perform services for us, such as payment processing, data analysis, email delivery, and hosting services. We may also share data in connection with a merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.',
      'We may share information with affiliates including our parent company, subsidiaries, joint ventures, or other companies under common control with us, and with advertising partners to serve targeted ads. We may disclose information where required by law, court order, or governmental authority, or for any other purpose with your explicit consent. We require all third parties to respect the security of your data and to treat it in accordance with the law.',
    ],
  },
  {
    title: '7. International Data Transfers',
    paragraphs: [
      'Your personal information may be transferred to, stored, and processed in countries other than your country of residence, including India and the United States, where our servers are located and our central database is operated. These countries may have data protection laws that are different from the laws of your country.',
      'Whenever we transfer your personal data out of your home jurisdiction, we ensure a similar degree of protection is afforded to it by implementing appropriate safeguards, such as Standard Contractual Clauses (SCCs) approved for use in the EEA or UK, relying on Adequacy Decisions by the relevant authorities, ensuring vendors are certified under the EU-U.S. Data Privacy Framework (DPF) where applicable, and adhering to cross-border principles under frameworks like the APEC Cross-Border Privacy Rules (CBPR) System. You can contact us using the details below to obtain more information about the specific mechanism we use for international data transfers.',
    ],
  },
  {
    title: '8. Your Data Protection Rights',
    items: [
      'Right to Access & Data Portability: The right to request copies of your personal data and to receive it in a structured, machine-readable format.',
      'Right to Rectification: The right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.',
      'Right to Erasure (“Right to be Forgotten”): The right to request that we erase your personal data, under certain conditions.',
      'Right to Restrict Processing: The right to request that we restrict the processing of your personal data, under certain conditions.',
      'Right to Object to Processing: The right to object to our processing of your personal data, particularly for direct marketing purposes.',
      'Right to Withdraw Consent: Where we rely on consent to process your data, you have the right to withdraw that consent at any time.',
      'Right to Non-Discrimination (CCPA): We will not discriminate against you for exercising any of your rights.',
      'Right to Opt-Out of Sale/Sharing (CCPA): The right to direct a business that sells or shares personal data to stop doing so.',
      'To exercise any of these rights, please contact us using the details in the “Contact Us” section. We will respond to all legitimate requests in accordance with applicable laws. We may need to verify your identity before processing your request.',
    ],
  },
  {
    title: '9. Cookies and Tracking Technologies',
    paragraphs: [
      'Cookies are small data files placed on your device when you visit our site. We use both session cookies, which expire when you close your browser, and persistent cookies, which stay on your device until you delete them.',
    ],
    items: [
      'Essential Cookies: Necessary for the website to function and cannot be switched off.',
      'Analytics/Performance Cookies: Allow us to count visits and traffic sources to measure and improve performance.',
      'Functionality Cookies: Enable enhanced functionality and personalization.',
      'Targeting/Advertising Cookies: Set by our advertising partners to build a profile of your interests and show you relevant ads.',
      'Managing Cookies: You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. However, if you disable or refuse cookies, some parts of the Services may become inaccessible or not function properly.',
      'Upon your first visit to www.gonardweb.com, you will be presented with a cookie consent banner where you can manage your preferences and consent choices, as required by laws like GDPR and CASL.',
    ],
  },
  {
    title: '10. Data Retention',
    paragraphs: [
      'We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including to satisfy any legal, accounting, or reporting requirements. To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process it, and whether we can achieve those purposes through other means.',
    ],
  },
  {
    title: '11. Data Security',
    paragraphs: [
      'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. These measures include encryption, access controls, and secure servers. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal data, transmission of personal information to and from our Services is at your own risk.',
    ],
  },
  {
    title: '12. Children’s Privacy',
    paragraphs: [
      'Our Services are not intended for children under the age of 13, or 16 in the EEA or UK. We do not knowingly collect personally identifiable information from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us. If we learn we have collected personal data from a child without verification of parental consent, we will take steps to delete that information.',
    ],
  },
  {
    title: '13. Changes to This Privacy Policy',
    paragraphs: [
      'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “Last Updated” date. We will also provide notice via email or a prominent notice on our Services prior to the change becoming effective, if the changes are material. You are advised to review this Privacy Policy periodically for any changes.',
    ],
  },
  {
    title: '14. Contact Us & Grievance Officer',
    paragraphs: [
      'If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, or if you wish to exercise your legal rights, please contact our designated Privacy Officer at:',
    ],
    contactDetails: [
      'Email: support@gonardweb.com',
      'Address: Ghaziabad, Uttar Pradesh 201005, India',
    ],
  },
]

function PrivacyPolicyPage() {
  return (
    <PageBannerLayout
      eyebrow="Privacy Policy"
      title="Privacy Policy – GonardWeb"
      description="Review how GonardWeb collects, uses, stores, and protects personal data across its website and related services."
      bannerTitle="Privacy practices explained with clearer structure and full policy detail."
      bannerDescription="This page outlines the company’s data collection, legal basis, international transfer safeguards, cookies, security standards, and user rights."
      focusTitle="Effective Date: 01 Jan 2025"
      focusDescription="Read this policy to understand how personal information is handled when using www.gonardweb.com and related services."
      primaryAction={{ label: 'Contact Us', to: '/contact-us' }}
    >
      <section className="mx-auto max-w-7xl space-y-6 pb-4">
        {policySections.map((section) => (
          <article
            key={section.title}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8"
          >
            <h2 className=" text-2xl font-black tracking-tight text-slate-950 sm:text-2xl">
              {section.title}
            </h2>

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-4  text-base leading-8 text-slate-600 sm:text-lg">
                {paragraph}
              </p>
            ))}

            {section.items?.length ? (
              <div className="mt-5 grid gap-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-4  text-sm leading-7 text-slate-700 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ) : null}

            {section.contactDetails?.length ? (
              <div className="mt-5 grid gap-3">
                {section.contactDetails.map((detail) => (
                  <div
                    key={detail}
                    className="rounded-[1.25rem] border border-[#d9e6ff] bg-[#edf5ff] px-4 py-4  text-sm font-semibold leading-7 text-slate-800 sm:text-base"
                  >
                    {detail.startsWith('Email:') ? (
                      <>
                        Email:{' '}
                        <a href="mailto:support@gonardweb.com" className="text-[#2447A8] underline-offset-4 hover:underline">
                          support@gonardweb.com
                        </a>
                      </>
                    ) : (
                      detail
                    )}
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </PageBannerLayout>
  )
}

export default PrivacyPolicyPage