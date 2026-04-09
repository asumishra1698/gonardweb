import PageBannerLayout from '../components/PageBannerLayout.jsx'

const termsSections = [
    {
        title: '1. Acceptance of Terms',
        paragraphs: [
            'These Terms and Conditions govern your access to and use of GonardWeb, including our website, consultation flows, design and development services, marketing support, and related deliverables. By accessing this website or engaging us for services, you agree to be bound by these terms. If you do not accept them, do not use the website or proceed with our services.',
            'If you are acting on behalf of a company, startup, agency, or other legal entity, you represent that you have authority to bind that entity to these Terms and Conditions.',
        ],
    },
    {
        title: '2. Scope of Services',
        paragraphs: [
            'GonardWeb provides services that may include website design, website development, application development, digital marketing, technical consulting, maintenance, and related strategic support. The exact scope, timelines, pricing, revisions, and deliverables for any project will be defined in a proposal, quotation, statement of work, invoice, or written communication approved by both parties.',
            'Any feature, integration, migration, content entry, hosting, or third-party tool setup not expressly included in the agreed scope will be treated as additional work and may require revised pricing or delivery timelines.',
        ],
    },
    {
        title: '3. Client Responsibilities',
        items: [
            'Provide accurate information, brand assets, content, credentials, approvals, and feedback required for delivery.',
            'Review milestones, mockups, prototypes, content, and production builds within a reasonable timeframe.',
            'Ensure that all materials supplied to GonardWeb, including text, images, trademarks, and data, are lawfully owned or licensed for intended use.',
            'Maintain responsibility for business decisions, legal disclosures, industry compliance obligations, and approval of final published content.',
        ],
    },
    {
        title: '4. Fees, Invoices, and Payment',
        paragraphs: [
            'Project fees, retainers, and recurring charges are payable according to the commercial terms stated in the applicable proposal or invoice. Unless otherwise agreed in writing, payments made to start work are non-refundable once planning, design, development, or reserved delivery time has begun.',
            'Late payments may delay project delivery, suspend access to work-in-progress materials, or pause maintenance and support activities. GonardWeb reserves the right to recover reasonable costs associated with overdue invoices where permitted by law.',
        ],
    },
    {
        title: '5. Revisions and Change Requests',
        paragraphs: [
            'Reasonable revisions are limited to the rounds, stages, or review windows described in the agreed scope. Requests that materially alter approved direction, technical architecture, timelines, or content volume may be treated as change requests.',
            'Change requests may require additional fees, timeline extensions, or re-prioritization of delivery milestones before implementation begins.',
        ],
    },
    {
        title: '6. Intellectual Property',
        paragraphs: [
            'Upon full payment of all undisputed fees, the client receives ownership or licensed usage rights to the final approved deliverables to the extent stated in the relevant project agreement. GonardWeb retains ownership of pre-existing materials, internal processes, frameworks, reusable code, design systems, libraries, methodologies, and general know-how used in producing the work.',
            'We may display completed work, project summaries, non-confidential visuals, and the client name or logo in our portfolio, proposals, and marketing materials unless the parties agree in writing to a confidentiality restriction.',
        ],
    },
    {
        title: '7. Third-Party Platforms and Dependencies',
        paragraphs: [
            'Projects may rely on third-party hosting providers, APIs, plugins, payment processors, analytics tools, fonts, libraries, or SaaS platforms. GonardWeb is not responsible for outages, pricing changes, policy changes, security incidents, deprecations, or service limitations caused by third-party providers.',
            'Licensing, subscription, and ongoing operating costs for third-party products are the client’s responsibility unless explicitly included in a written agreement.',
        ],
    },
    {
        title: '8. Warranties and Disclaimers',
        paragraphs: [
            'GonardWeb will perform services using reasonable care and professional skill. Except as expressly stated in writing, services and website content are provided on an "as is" and "as available" basis without warranties of uninterrupted availability, specific commercial outcomes, search ranking results, lead generation volume, or compatibility with every third-party environment.',
            'We do not warrant that the website will be error-free at all times or that all defects can be corrected if they arise from third-party systems, client edits, unsupported environments, or requirements outside the agreed scope.',
        ],
    },
    {
        title: '9. Limitation of Liability',
        paragraphs: [
            'To the maximum extent permitted by law, GonardWeb will not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, goodwill, business interruption, or anticipated savings arising from or related to the use of the website or our services.',
            'Our aggregate liability for any claim relating to services or use of the website will not exceed the amount actually paid to GonardWeb for the specific service giving rise to the claim during the six months preceding the event, except where a different limit is required by applicable law.',
        ],
    },
    {
        title: '10. Suspension and Termination',
        paragraphs: [
            'We may suspend or terminate access to the website, project activity, or related services where there is non-payment, abusive conduct, unlawful use, repeated delay in approvals, breach of these terms, or a security risk affecting our systems, team, or vendors.',
            'Either party may terminate a project according to the termination terms stated in the governing proposal or agreement. On termination, the client remains responsible for fees due for work completed, committed costs, and approved change requests incurred up to the termination date.',
        ],
    },
    {
        title: '11. Confidentiality and Data Handling',
        paragraphs: [
            'Each party should treat non-public business, technical, and commercial information shared during a project as confidential and use it only for the purpose of performing or receiving the services. Confidentiality obligations do not apply to information that is public, independently developed, or lawfully obtained from another source.',
            'Our handling of personal data submitted through the website or in connection with services is described in our Privacy Policy. Where required, the parties may enter into separate data protection or processing terms for specific engagements.',
        ],
    },
    {
        title: '12. Acceptable Use of the Website',
        items: [
            'Do not use the website for unlawful, fraudulent, infringing, defamatory, or abusive purposes.',
            'Do not attempt to interfere with the website, hosting environment, analytics, forms, security controls, or other connected systems.',
            'Do not reproduce, scrape, copy, distribute, or exploit website material beyond what is permitted by law or by our prior written consent.',
            'Do not submit malicious code, spam, false inquiries, or inaccurate information through any form or communication channel on the site.',
        ],
    },
    {
        title: '13. Governing Law',
        paragraphs: [
            'These Terms and Conditions are governed by the laws applicable in Uttar Pradesh, India, unless a separate signed agreement states otherwise. Courts located in or having jurisdiction over Ghaziabad, Uttar Pradesh will have exclusive jurisdiction over disputes arising from these terms, subject to any mandatory consumer protection rights that may apply in your home jurisdiction.',
        ],
    },
    {
        title: '14. Updates to These Terms',
        paragraphs: [
            'We may revise these Terms and Conditions from time to time to reflect changes in law, services, commercial practices, or website functionality. Updated terms become effective when posted on this page unless a later effective date is stated.',
            'Continued use of the website or continued engagement with services after updated terms are posted constitutes acceptance of the revised terms.',
        ],
    },
    {
        title: '15. Contact Information',
        paragraphs: [
            'Questions about these Terms and Conditions, commercial terms, or legal notices may be sent to:',
        ],
        contactDetails: [
            'Email: support@gonardweb.com',
            'Address: Ghaziabad, Uttar Pradesh 201005, India',
        ],
    },
]

function TermsConditionsPage() {
    return (
        <PageBannerLayout
            eyebrow="Terms & Conditions"
            title="Terms and Conditions - GonardWeb"
            description="Review the terms that govern use of GonardWeb, project engagements, payments, intellectual property, and service limitations."
            bannerTitle="Terms explained in a clearer legal structure for clients and site visitors."
            bannerDescription="This page sets expectations for using the website, engaging GonardWeb for services, handling approvals, payments, project scope, liability, and ownership."
            focusTitle="Effective Date: 07 Apr 2026"
            focusDescription="Read these terms before using the website or starting a project with GonardWeb."
            primaryAction={{ label: 'Privacy Policy', to: '/privacy-policy' }}
        >
            <section className="mx-auto max-w-7xl space-y-6 pb-4">
                {termsSections.map((section) => (
                    <article
                        key={section.title}
                        className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8"
                    >
                        <h2 className=" text-4xl font-black tracking-tight text-slate-950 sm:text-4xl">
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

export default TermsConditionsPage