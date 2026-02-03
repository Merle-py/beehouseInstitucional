import type { Metadata, Viewport } from 'next'
import './fonts.css'
import './globals.css'
import Script from 'next/script'
import { StructuredData } from './components/StructuredData'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
}

export const metadata: Metadata = {
    metadataBase: new URL('https://www.sejabeestay.com.br'),
    title: 'BeeStay - Gestão Profissional de Imóveis para Short Stay | Aumente sua Rentabilidade',
    description: 'Gestão completa de imóveis para aluguel de temporada (Short Stay). Tecnologia de ponta, precificação dinâmica e distribuição global em Airbnb, Booking e Expedia. Aumente até 51% sua rentabilidade.',
    keywords: ['gestão imóveis short stay', 'aluguel temporada', 'airbnb gestão', 'booking gestão', 'precificação dinâmica', 'investimento imobiliário', 'gestão profissional short stay'],
    authors: [{ name: 'BeeStay' }],
    alternates: {
        canonical: 'https://www.sejabeestay.com.br',
    },
    openGraph: {
        title: 'BeeStay - Gestão Profissional para Short Stay',
        description: 'Transforme seu imóvel em um investimento de alto rendimento com gestão profissional 360º',
        url: 'https://www.sejabeestay.com.br',
        siteName: 'BeeStay',
        images: [
            {
                url: '/hero-1.webp',
                width: 1200,
                height: 630,
                alt: 'BeeStay - Gestão Profissional de Imóveis para Short Stay',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'BeeStay - Gestão Profissional para Short Stay',
        description: 'Aumente até 51% a rentabilidade do seu imóvel com gestão profissional',
        images: ['/hero-1.webp'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/icone.svg', type: 'image/svg+xml' },
            { url: '/icone.svg', sizes: '32x32', type: 'image/svg+xml' },
        ],
        shortcut: '/icone.svg',
        apple: '/icone.svg',
    },
    manifest: '/manifest.json',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <head>
                {/* DNS Prefetch & Preconnect for external resources */}
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="https://cdn.bitrix24.com.br" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://cdn.bitrix24.com.br" />
                <link rel="dns-prefetch" href="https://images.unsplash.com" />

                {/* Critical CSS - Above the fold styles inlined */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}
                    html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:Inter,ui-sans-serif,system-ui,sans-serif;font-feature-settings:normal}
                    body{margin:0;line-height:inherit}
                    .scroll-smooth{scroll-behavior:smooth}
                    .bg-white{background-color:#fff}
                    .text-gray-900{color:rgb(17 24 39)}
                    .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
                `}} />
            </head>
            <body className="font-sans bg-white text-gray-900 antialiased" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                <StructuredData />
                {children}

                {/* Google Analytics - Deferred until user interaction */}
                <Script
                    id="gtag-init"
                    strategy="lazyOnload"
                    src="https://www.googletagmanager.com/gtag/js?id=G-522STP288V"
                />
                <Script id="gtag-config" strategy="lazyOnload">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-522STP288V');
          `}
                </Script>
            </body>
        </html>
    )
}
