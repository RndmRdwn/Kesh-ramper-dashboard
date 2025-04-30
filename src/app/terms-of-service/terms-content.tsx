"use client"

import Link from "next/link"
import { ArrowUp, FileText } from "lucide-react"

import { Button } from "@/components/shadcn/ui/button"
import { TableOfContents } from "./table-of-content"

export default function TermsOfServiceClientPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-slate-900 text-white rounded-full mb-6">
            <FileText className="h-6 w-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">KESHFLIP Terms of Service</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The rules and guidelines for using the KESHFLIP platform
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-8">
              <TableOfContents />
              <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-medium text-slate-900 mb-2">Need Help?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  If you have any questions about our Terms of Service, please contact us.
                </p>
                <Button asChild className="w-full bg-slate-900 hover:bg-slate-800">
                  {/* <Link href="mailto:legal@keshflip.com">Contact Legal Team</Link> */}
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3 order-1 lg:order-2">
            <div className="prose prose-slate max-w-none">
              <section id="introduction" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                <p>
                  Welcome to KESHFLIP. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the KESHFLIP
                  website, mobile applications, and services (collectively, the &quot;Services&quot;). By accessing or using our
                  Services, you agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p>
                  Please read these Terms carefully before using our Services. If you do not agree to these Terms, you
                  may not access or use our Services.
                </p>
              </section>

              <section id="definitions" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Definitions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>&quot;KESHFLIP&quot;</strong> (or &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) refers to KESHFLIP Ltd and its affiliates.
                  </li>
                  <li>
                    <strong>&quot;User&quot;</strong> (or &quot;you&quot; or &quot;your&quot;) refers to any individual or entity that accesses or
                    uses our Services.
                  </li>
                  <li>
                    <strong>&quot;Services&quot;</strong> refers to the KESHFLIP website, mobile applications, cryptocurrency
                    exchange, wallet, payment gateway, and digital asset services.
                  </li>
                  <li>
                    <strong>&quot;Account&quot;</strong> refers to a registered user account on the KESHFLIP platform.
                  </li>
                  <li>
                    <strong>&quot;Digital Assets&quot;</strong> refers to cryptocurrencies, tokens, and other digital assets
                    available on our platform.
                  </li>
                </ul>
              </section>

              <section id="eligibility" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Eligibility</h2>
                <p>To use our Services, you must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be at least 18 years old;</li>
                  <li>Have the legal capacity to enter into these Terms;</li>
                  <li>Not be a resident of a country subject to economic sanctions;</li>
                  <li>
                    Not be prohibited from using our Services under applicable laws or regulations in your jurisdiction.
                  </li>
                </ul>
                <p>
                  By using our Services, you represent and warrant that you meet all eligibility requirements. If you
                  are using our Services on behalf of a legal entity, you represent and warrant that you have the
                  authority to bind that entity to these Terms.
                </p>
              </section>

              <section id="account-registration" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Account Registration and Security</h2>
                <p>
                  To access certain features of our Services, you must create an account. When registering for an
                  account, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information;</li>
                  <li>Maintain and promptly update your account information;</li>
                  <li>
                    Keep your account credentials secure and confidential, and not share them with any third party;
                  </li>
                  <li>
                    Immediately notify us of any unauthorized use of your account or any other breach of security.
                  </li>
                </ul>
                <p>
                  You are solely responsible for all activities that occur under your account. KESHFLIP will not be
                  liable for any loss or damage arising from your failure to maintain the security of your account.
                </p>
              </section>

              <section id="kyc-aml" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">KYC and AML Compliance</h2>
                <p>
                  KESHFLIP is committed to complying with all applicable Know Your Customer (KYC) and Anti-Money
                  Laundering (AML) laws and regulations. As part of our compliance program, we may require you to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide additional personal information and documentation;</li>
                  <li>Complete identity verification procedures;</li>
                  <li>Comply with our AML/KYC Policy;</li>
                  <li>Submit to ongoing monitoring of your account activities.</li>
                </ul>
                <p>
                  We reserve the right to refuse registration, suspend or terminate accounts, or limit access to our
                  Services if you fail to comply with our KYC and AML requirements or if we suspect fraudulent or
                  illegal activity.
                </p>
              </section>

              <section id="services-usage" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Services Usage</h2>
                <p>When using our Services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comply with all applicable laws and regulations;</li>
                  <li>Use our Services only for lawful purposes;</li>
                  <li>Not engage in any fraudulent, deceptive, or manipulative activities;</li>
                  <li>Not interfere with or disrupt the integrity or performance of our Services;</li>
                  <li>Not attempt to gain unauthorized access to our Services or related systems or networks;</li>
                  <li>Not use our Services to harm, threaten, or harass any person or entity.</li>
                </ul>
                <p>
                  We reserve the right to monitor your use of our Services to ensure compliance with these Terms and to
                  protect the security and integrity of our platform.
                </p>
              </section>

              <section id="fees-payments" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Fees and Payments</h2>
                <p>
                  KESHFLIP charges fees for certain Services, which are disclosed on our website or mobile applications.
                  We reserve the right to change our fee structure at any time. Any changes to our fees will be
                  communicated to you through our platform or via email.
                </p>
                <p>
                  By using our Services, you agree to pay all applicable fees. All fees are non-refundable unless
                  otherwise specified or required by law. You are responsible for paying all taxes associated with your
                  use of our Services.
                </p>
              </section>

              <section id="risks" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Risks Disclosure</h2>
                <p>
                  Trading and investing in Digital Assets involves significant risks. By using our Services, you
                  acknowledge and accept the following risks:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Price Volatility:</strong> Digital Asset prices can be highly volatile and may fluctuate
                    significantly over short periods.
                  </li>
                  <li>
                    <strong>Liquidity Risk:</strong> There may be limited liquidity for certain Digital Assets, which
                    could affect your ability to buy or sell at desired prices.
                  </li>
                  <li>
                    <strong>Market Risk:</strong> Digital Asset markets are subject to various factors that could cause
                    significant price movements.
                  </li>
                  <li>
                    <strong>Regulatory Risk:</strong> Changes in laws or regulations may adversely affect the value of
                    Digital Assets or the operation of our Services.
                  </li>
                  <li>
                    <strong>Technical Risk:</strong> Technical issues, including network failures, software bugs, or
                    security breaches, could affect our Services or your Digital Assets.
                  </li>
                </ul>
                <p>
                  You should carefully consider these risks before using our Services. KESHFLIP is not responsible for
                  any losses you may incur as a result of these risks.
                </p>
              </section>

              <section id="intellectual-property" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our Services, including but not limited to text, graphics,
                  logos, icons, images, audio clips, digital downloads, data compilations, software, and the design,
                  selection, and arrangement thereof, are owned by KESHFLIP, its licensors, or other providers of such
                  material and are protected by copyright, trademark, patent, trade secret, and other intellectual
                  property or proprietary rights laws.
                </p>
                <p>
                  These Terms do not grant you any right, title, or interest in or to our Services or any content,
                  features, or functionality thereof. You may not reproduce, distribute, modify, create derivative works
                  of, publicly display, publicly perform, republish, download, store, or transmit any of the material on
                  our Services without our prior written consent.
                </p>
              </section>

              <section id="limitation-liability" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, KESHFLIP and its affiliates, officers, directors,
                  employees, agents, and licensors shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill,
                  or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your access to or use of or inability to access or use our Services;</li>
                  <li>Any conduct or content of any third party on our Services;</li>
                  <li>Any content obtained from our Services;</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content;</li>
                  <li>
                    System failures, interruptions, delays, or errors in the operation or transmission of information.
                  </li>
                </ul>
                <p>
                  In no event shall our total liability to you for all claims arising from or relating to these Terms or
                  your use of our Services exceed the amount paid by you to KESHFLIP during the six (6) months
                  immediately preceding the event giving rise to such liability.
                </p>
              </section>

              <section id="indemnification" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless KESHFLIP and its affiliates, officers, directors,
                  employees, agents, and licensors from and against any and all claims, liabilities, damages, losses,
                  costs, expenses, or fees (including reasonable attorney&apos;s fees) arising from or relating to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your violation of these Terms;</li>
                  <li>Your use of our Services;</li>
                  <li>Your violation of any rights of another person or entity;</li>
                  <li>Your violation of any applicable laws, rules, or regulations.</li>
                </ul>
                <p>
                  We reserve the right, at our own expense, to assume the exclusive defense and control of any matter
                  otherwise subject to indemnification by you, in which event you will cooperate with us in asserting
                  any available defenses.
                </p>
              </section>

              <section id="termination" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Termination</h2>
                <p>
                  We may terminate or suspend your account and access to our Services immediately, without prior notice
                  or liability, for any reason, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your breach of these Terms;</li>
                  <li>Your violation of applicable laws or regulations;</li>
                  <li>Requests by law enforcement or other government agencies;</li>
                  <li>Unexpected technical issues or problems;</li>
                  <li>Extended periods of inactivity.</li>
                </ul>
                <p>
                  Upon termination, your right to use our Services will immediately cease. All provisions of these Terms
                  that by their nature should survive termination shall survive termination, including, without
                  limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>

              <section id="governing-law" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law and Dispute Resolution</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to
                  its conflict of law provisions.
                </p>
                <p>
                  Any dispute arising out of or in connection with these Terms, including any question regarding its
                  existence, validity, or termination, shall be referred to and finally resolved by arbitration under
                  the rules of the Nairobi Centre for International Arbitration, which rules are deemed to be
                  incorporated by reference into this clause. The seat of arbitration shall be Nairobi, Kenya. The
                  language of the arbitration shall be English. The number of arbitrators shall be one.
                </p>
              </section>

              <section id="changes" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. If we make material changes to these Terms, we
                  will notify you by email or through our Services. Your continued use of our Services after such
                  notification constitutes your acceptance of the modified Terms.
                </p>
                <p>
                  It is your responsibility to review these Terms periodically for changes. If you do not agree to the
                  modified Terms, you must stop using our Services.
                </p>
              </section>

              <section id="contact" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at{" "}
                  <a href="mailto:info@keshflip.com" className="text-slate-900 underline">
                    info@keshflip.com
                  </a>{" "}
                  or visit our help center at{" "}
                  
                  <a href="/contact" className="text-slate-900 underline">
                    www.keshflip.com/contact
                  </a>
                  .
                </p>
              </section>

              <section id="last-updated" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Last Updated</h2>
                <p>These Terms of Service were last updated on April 29, 2025.</p>
              </section>
            </div>

            <div className="mt-16 text-center">
              <Button
                variant="outline"
                className="inline-flex items-center gap-2"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <ArrowUp className="h-4 w-4" />
                Back to top
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
