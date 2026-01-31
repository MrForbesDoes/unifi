import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({
  title = "Unifi.id | Movement Intelligence & Building Awareness",
  description = "Unifi.id provides real-time movement intelligence and building awareness solutions for security, fire safety, and sustainability.",
  canonical = "https://unifi.id",
  ogImage = "/og-image.jpg",
  ogType = "website"
}: SEOProps) {
  const fullTitle = title.includes("Unifi.id") ? title : `${title} | Unifi.id`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
