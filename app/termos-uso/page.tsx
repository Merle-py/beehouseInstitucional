import { Metadata } from 'next'
import { Header } from '../components/Header'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Termos de Uso | BeeStay',
    description: 'Termos e condições de uso dos serviços da BeeStay',
    alternates: {
        canonical: 'https://www.beestay.com.br/termos-uso',
    },
}

export default function TermosUso() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <div className="pt-32 pb-20 px-6 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-bee-black mb-8">
                        Termos de Uso
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6">
                            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">1. Aceitação dos Termos</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Ao utilizar o site e os serviços da BeeStay, você concorda com estes Termos de Uso.
                                Se você não concordar com qualquer parte destes termos, não utilize nossos serviços.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">2. Serviços Oferecidos</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                A BeeStay oferece serviços de gestão profissional de imóveis para aluguel de temporada (short stay), incluindo:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Gestão operacional completa do imóvel</li>
                                <li>Distribuição em plataformas de reserva (Airbnb, Booking, Expedia, Decolar)</li>
                                <li>Precificação dinâmica e gestão de reservas</li>
                                <li>Limpeza profissional e manutenção</li>
                                <li>Vistoria de entrada e saída</li>
                                <li>Atendimento a hóspedes 24/7</li>
                                <li>Relatórios financeiros e repasses mensais</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">3. Elegibilidade</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Para utilizar nossos serviços, você deve ser maior de idade, possuir capacidade legal para
                                contratar e ser proprietário legítimo ou ter autorização legal para disponibilizar o imóvel
                                para gestão.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">4. Contratação dos Serviços</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Os serviços são formalizados através de contrato específico que define responsabilidades,
                                prazos, modelo de remuneração e condições operacionais. O contrato prevalece sobre estes
                                termos em caso de conflito.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">5. Responsabilidades do Proprietário</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                O proprietário é responsável por:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Fornecer imóvel em condições adequadas para operação</li>
                                <li>Manter documentação legal do imóvel em dia</li>
                                <li>Arcar com custos estruturais e investimentos iniciais acordados</li>
                                <li>Informar qualquer alteração na situação legal do imóvel</li>
                                <li>Respeitar os prazos e condições contratuais</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">6. Responsabilidades da BeeStay</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                A BeeStay se compromete a:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Gerir o imóvel com profissionalismo e excelência</li>
                                <li>Maximizar a ocupação e rentabilidade dentro das condições de mercado</li>
                                <li>Prestar contas de forma transparente e regular</li>
                                <li>Manter o imóvel em bom estado de conservação</li>
                                <li>Atender hóspedes com qualidade e resolver ocorrências</li>
                                <li>Realizar repasses financeiros conforme acordado</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">7. Remuneração e Custos</h2>
                            <p className="text-gray-700 leading-relaxed">
                                A forma de remuneração da BeeStay e a divisão de custos operacionais são definidas em
                                contrato específico. Os repasses ao proprietário são realizados mensalmente, com relatório
                                detalhado de receitas e despesas.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">8. Danos e Seguros</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Em caso de danos causados por hóspedes, a BeeStay atuará na mediação com plataformas e seguros.
                                O proprietário deve manter seguro patrimonial do imóvel, quando aplicável, conforme orientação
                                da BeeStay.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">9. Rescisão</h2>
                            <p className="text-gray-700 leading-relaxed">
                                As condições de rescisão contratual, prazos de aviso prévio e eventuais multas estão definidas
                                no contrato de prestação de serviços entre as partes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">10. Propriedade Intelectual</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Todo o conteúdo do site da BeeStay, incluindo textos, imagens, logotipos e design, é protegido
                                por direitos autorais e propriedade intelectual. É proibida a reprodução sem autorização prévia.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">11. Limitação de Responsabilidade</h2>
                            <p className="text-gray-700 leading-relaxed">
                                A BeeStay não se responsabiliza por danos indiretos, lucros cessantes ou eventos de força maior
                                que impeçam a operação normal do imóvel. A responsabilidade está limitada aos termos contratuais.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">12. Uso do Site</h2>
                            <p className="text-gray-700 leading-relaxed">
                                É proibido utilizar o site para fins ilegais, transmitir vírus, spam ou qualquer conteúdo
                                que viole direitos de terceiros. A BeeStay se reserva o direito de bloquear acessos não autorizados.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">13. Legislação Aplicável</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Estes termos são regidos pelas leis brasileiras. Eventuais disputas serão resolvidas no foro
                                da comarca definida no contrato de prestação de serviços.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">14. Alterações nos Termos</h2>
                            <p className="text-gray-700 leading-relaxed">
                                A BeeStay pode atualizar estes termos periodicamente. Alterações significativas serão
                                comunicadas aos usuários. O uso continuado dos serviços após alterações constitui aceitação
                                dos novos termos.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-bee-black mb-4">15. Contato</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Para dúvidas sobre estes termos, entre em contato:
                            </p>
                            <ul className="list-none text-gray-700 mt-4 space-y-2">
                                <li><strong>E-mail:</strong> andre.andrade@beehouse.imb.br</li>
                                <li><strong>Telefone:</strong> (47) 99287-9066</li>
                            </ul>
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
