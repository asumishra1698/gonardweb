import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { DEFAULT_DESCRIPTION, SITE_NAME, getMetadataForPath } from '../seo/siteMetadata.js'

function PageSeo() {
  const location = useLocation()
  const metadata = getMetadataForPath(location.pathname)
  const ogType = metadata.type === 'Article' ? 'article' : 'website'

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description || DEFAULT_DESCRIPTION} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="robots" content={metadata.robots} />
      <link rel="canonical" href={metadata.canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:type" content={ogType} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description || DEFAULT_DESCRIPTION} />
      <meta property="og:url" content={metadata.canonicalUrl} />
      <meta property="og:image" content={metadata.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description || DEFAULT_DESCRIPTION} />
      <meta name="twitter:image" content={metadata.image} />

      {metadata.schema.map((entry, index) => (
        <script key={`${location.pathname}-schema-${index}`} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  )
}

export default PageSeo