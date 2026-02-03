export function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BeeStay",
        "url": "https://www.sejabeestay.com.br",
        "logo": "https://www.sejabeestay.com.br/logo_preto.svg",
        "description": "Gestão profissional de imóveis para aluguel de temporada (Short Stay)",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-47-99287-9066",
            "contactType": "customer service",
            "email": "andre.andrade@beehouse.imb.br",
            "availableLanguage": "Portuguese"
        },
        "sameAs": [
            "https://www.linkedin.com/company/beestay",
            "https://www.facebook.com/beestay",
            "https://www.youtube.com/@beestay"
        ]
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BeeStay",
        "image": "https://www.sejabeestay.com.br/logo_preto.svg",
        "@id": "https://www.sejabeestay.com.br",
        "url": "https://www.sejabeestay.com.br",
        "telephone": "+55-47-99287-9066",
        "email": "andre.andrade@beehouse.imb.br",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR",
            "addressLocality": "Brasil"
        },
        "description": "Gestão completa de imóveis para aluguel de temporada. Tecnologia de ponta, precificação dinâmica e distribuição global em Airbnb, Booking e Expedia.",
        "areaServed": {
            "@type": "Country",
            "name": "Brasil"
        }
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Gestão de Imóveis para Short Stay",
        "provider": {
            "@type": "Organization",
            "name": "BeeStay",
            "url": "https://www.sejabeestay.com.br"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Brasil"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Gestão",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Limpeza Profissional",
                        "description": "Higienização completa e preparação impecável para receber cada novo hóspede"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Manutenção Preventiva",
                        "description": "Inspeções regulares e reparos rápidos. Seu ativo sempre valorizado"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Vistoria Criteriosa",
                        "description": "Registro fotográfico detalhado na entrada e saída de cada reserva"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Precificação Inteligente",
                        "description": "Tarifas dinâmicas para máxima ocupação e lucro em tempo real"
                    }
                }
            ]
        }
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Quanto preciso investir para colocar meu imóvel na Beestay?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O investimento inicial depende do estado atual do imóvel. Normalmente o custo de implantação envolve possíveis ajustes de ambientação e adequações operacionais, tais como a disponibilização do enxoval de cama e banho. Após a primeira vistoria, apresentamos um diagnóstico claro com tudo o que é necessário antes do início da operação."
                }
            },
            {
                "@type": "Question",
                "name": "Meu imóvel precisa estar mobiliado?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. O imóvel precisa estar mobiliado e equipado para short stay. Caso ainda não esteja, a Beestay pode orientar sobre padrão, layout e itens essenciais para garantir boa performance e avaliações positivas."
                }
            },
            {
                "@type": "Question",
                "name": "Como funciona o contrato com a Beestay?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O contrato define as responsabilidades de cada parte, o modelo de remuneração, prazos, regras operacionais e critérios de rescisão. É um contrato claro, transparente e pensado para proteger tanto o proprietário quanto a operação."
                }
            },
            {
                "@type": "Question",
                "name": "Como a Beestay garante a segurança do meu imóvel?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Utilizamos critérios rigorosos de seleção de hóspedes, controle de acesso (fechaduras eletrônicas), vistorias recorrentes, monitoramento de ocorrências e plataformas com políticas de proteção ao anfitrião."
                }
            },
            {
                "@type": "Question",
                "name": "Em quanto tempo começo a ver resultados?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Normalmente, os primeiros resultados aparecem já nos primeiros meses de operação, à medida que o imóvel ganha avaliações, histórico e posicionamento nos canais. A performance tende a melhorar de forma progressiva."
                }
            },
            {
                "@type": "Question",
                "name": "Como e quando recebo meus repasses?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Os repasses são feitos mensalmente, com relatório detalhado de receitas, despesas, taxas e resultados. Tudo de forma clara e auditável."
                }
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    )
}
