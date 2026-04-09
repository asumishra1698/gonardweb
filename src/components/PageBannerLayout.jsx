import SliderBanner from './SliderBanner.jsx'
const defaultBackgroundImage =
    "linear-gradient(125deg, rgba(18, 52, 86, 0.46), rgba(10, 24, 55, 0.34)), url('/banner2.jpg')"

const defaultPrimaryAction = { label: 'Book A Free Consultation', to: '/contact-us' }

function PageBannerLayout({
    eyebrow,
    title,
    description,
    bannerEyebrow = eyebrow,
    bannerTitle = title,
    bannerDescription = description,
    backgroundImage = defaultBackgroundImage,
    primaryAction = defaultPrimaryAction,
    children,
}) {
    const slides = [
        {
            eyebrow: bannerEyebrow,
            title: bannerTitle,
            description: bannerDescription,
            primaryAction,
            backgroundImage,
        },
    ]

    return (
        <div className="">
            <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen max-w-screen overflow-x-clip">
                <SliderBanner
                    slides={slides}
                    className="min-h-[420px] rounded-none border-x-0"
                />
            </div>

            {children ?? null}
        </div>
    )
}

export default PageBannerLayout