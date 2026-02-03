import { Metadata } from 'next'
import { Header } from '../components/Header'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Política de Privacidade | BeeStay',
    description: 'Política de privacidade e proteção de dados da BeeStay, conforme LGPD',
    alternates: {
        canonical: 'https://www.beestay.com.br/politica-privacidade',
    },
}

export default function PoliticaPrivacidade() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <div className="pt-32 pb-20 px-6 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-bee-black mb-8">
                        Política de Privacidade
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6">
                            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">1. Introdução</h2>
                            <p className="text-gray-700 leading-relaxed">
                                A BeeStay está comprometida com a proteção da privacidade e dos dados pessoais de seus usuários,
                                em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Esta política
                                descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">2. Informações Coletadas</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Coletamos as seguintes informações quando você utiliza nossos serviços:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Nome completo e informações de contato (e-mail, telefone)</li>
                                <li>Informações sobre o imóvel (endereço, características, fotos)</li>
                                <li>Dados de navegação e uso do site (cookies, IP, dispositivo)</li>
                                <li>Informações financeiras necessárias para repasses</li>
                                <li>Comunicações entre você e a BeeStay</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">3. Uso das Informações</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Utilizamos suas informações para:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Prestar os serviços de gestão de imóveis contratados</li>
                                <li>Comunicar sobre reservas, manutenções e resultados financeiros</li>
                                <li>Melhorar nossos serviços e experiência do usuário</li>
                                <li>Cumprir obrigações legais e contratuais</li>
                                <li>Enviar comunicações de marketing (com seu consentimento)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">4. Compartilhamento de Dados</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Seus dados podem ser compartilhados com plataformas de reserva (Airbnb, Booking, Expedia),
                                prestadores de serviços essenciais (limpeza, manutenção), e quando exigido por lei.
                                Nunca vendemos seus dados pessoais a terceiros.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">5. Segurança dos Dados</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados contra
                                acesso não autorizado, perda, alteração ou divulgação. Isso inclui criptografia,
                                controles de acesso e monitoramento contínuo.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">6. Seus Direitos</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Conforme a LGPD, você tem direito a:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Confirmar a existência de tratamento de dados</li>
                                <li>Acessar seus dados pessoais</li>
                                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                                <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
                                <li>Revogar consentimento</li>
                                <li>Obter informações sobre compartilhamento</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">7. Cookies</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Utilizamos cookies para melhorar sua experiência, analisar o uso do site e personalizar conteúdo.
                                Você pode gerenciar suas preferências de cookies nas configurações do navegador.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">8. Contato</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                            </p>
                            <ul className="list-none text-gray-700 mt-4 space-y-2">
                                <li><strong>E-mail:</strong> andre.andrade@beehouse.imb.br</li>
                                <li><strong>Telefone:</strong> (47) 99287-9066</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">9. Alterações</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente
                                para se manter informado sobre como protegemos seus dados.
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <a
                            href="/"
                            className="text-bee-gold hover:text-bee-gold-dark font-semibold inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Voltar para Home
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer simplificado */}
            <footer className="bg-bee-black border-t border-white/10 py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-400 text-sm">© 2026 BeeStay. Todos os direitos reservados.</p>
                </div>
            </footer>
        </main>
    )
}
