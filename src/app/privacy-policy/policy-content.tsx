"use client"

import Link from "next/link"
import { ArrowUp, Shield } from "lucide-react"

import { Button } from "@/components/shadcn/ui/button"
import { TableOfContents } from "./table-of-content"

export default function PrivacyPolicyClientPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-slate-900 text-white rounded-full mb-6">
            <Shield className="h-6 w-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">KESHFLIP Privacy Policy</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our commitment to safeguarding your privacy and personal information
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-8">
              <TableOfContents />
              <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-medium text-slate-900 mb-2">Need Help?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  If you have any questions about our privacy policy, please contact us.
                </p>
                <Button asChild className="w-full bg-slate-900 hover:bg-slate-800">
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3 order-1 lg:order-2">
            <div className="prose prose-slate max-w-none">
              <section id="introduction" className="mb-10">
                <p>
                  KESHFLIP Ltd and its affiliates (&quot;KESHFLIP,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) are committed to safeguarding the
                  privacy and personal information of our users. This Privacy Policy explains how we collect, use,
                  protect, and disclose your information when you use our website, mobile applications, and other
                  services (collectively, the &quot;Platform&quot;).
                </p>
                <p>
                  This Policy should be read in conjunction with our User Agreement and is aligned with global data
                  protection standards, including the General Data Protection Regulation (GDPR).
                </p>
              </section>

              <section id="definitions" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Definitions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Affiliates:</strong> Subsidiaries, parent companies, or related entities under common
                    ownership.
                  </li>
                  <li>
                    <strong>Personal Data:</strong> Any information that can be used to identify an individual (e.g.,
                    name, contact details, transaction data).
                  </li>
                  <li>
                    <strong>Data Subject:</strong> Any individual whose personal data is being processed.
                  </li>
                  <li>
                    <strong>Data Controller:</strong> The entity determining how and why personal data is processed.
                  </li>
                  <li>
                    <strong>Data Processor:</strong> A third party that processes personal data on behalf of the data
                    controller.
                  </li>
                  <li>
                    <strong>Processing:</strong> Any operation involving personal data, such as collection, storage,
                    use, or deletion.
                  </li>
                </ul>
              </section>

              <section id="purpose" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Purpose of This Policy</h2>
                <p>This document outlines:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Who we are and how you can contact us;</li>
                  <li>What personal information we collect and why;</li>
                  <li>How long we retain your data;</li>
                  <li>How we use cookies and IP address data;</li>
                  <li>When and why we share your data with third parties;</li>
                  <li>Cross-border data transfers;</li>
                  <li>Your rights as a user;</li>
                  <li>Automated decision-making and profiling;</li>
                  <li>Security measures in place to protect your data;</li>
                  <li>How to file complaints or contact us.</li>
                </ol>
              </section>

              <section id="who-is-keshflip" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Who is KESHFLIP?</h2>
                <p>
                  KESHFLIP is a Kenyan-registered digital finance company that provides cryptocurrency exchange, wallet,
                  payment gateway, and digital asset services across emerging markets. We offer web, mobile, and
                  API-based access to secure, fast, and reliable trading, wallet, and payment services.
                </p>
              </section>

              <section id="information-we-collect" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                <p>When you sign up, transact, or interact with our services, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full name and contact information;</li>
                  <li>Photographic ID and official documents (e.g., passport, driver&apos;s license);</li>
                  <li>Geolocation and device details (IP address, browser, OS);</li>
                  <li>Financial data (bank account or card details);</li>
                  <li>Employment and income details;</li>
                  <li>Transaction history and trading behavior;</li>
                  <li>Video recordings for verification purposes.</li>
                </ul>
                <p>
                  We process this data to provide services, meet legal requirements (AML/KYC), and enhance platform
                  security and performance.
                </p>
              </section>

              <section id="why-we-use-your-data" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Why We Use Your Data</h2>
                <p>Your personal information helps us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Register and maintain your account;</li>
                  <li>Execute and validate your transactions;</li>
                  <li>Ensure compliance with legal and regulatory frameworks;</li>
                  <li>Respond to your queries and provide customer support;</li>
                  <li>Prevent fraudulent and unauthorized activities;</li>
                  <li>Improve platform performance and user experience;</li>
                  <li>Send promotional messages (if you&apos;ve opted in);</li>
                  <li>Conduct market research (on an anonymized basis).</li>
                </ul>
              </section>

              <section id="cookies-analytics" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies & Analytics</h2>
                <p>
                  We use cookies to understand user behavior, customize your experience, and monitor platform
                  performance. You can manage cookie settings via your browser:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Chrome</li>
                  <li>Mozilla Firefox</li>
                  <li>Safari</li>
                  <li>Opera</li>
                  <li>Microsoft Edge</li>
                </ul>
                <p>
                  We may use third-party services for analytics. These providers are contractually bound to use data
                  only for agreed purposes.
                </p>
              </section>

              <section id="childrens-data" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Children&apos;s Data</h2>
                <p>Our services are not intended for users under 18. We do not knowingly collect data from minors.</p>
              </section>

              <section id="data-sharing" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Sharing & Third Parties</h2>
                <p>We may share personal information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Financial institutions, payment processors, and verification services;</li>
                  <li>Customer service platforms and communication tools;</li>
                  <li>Government regulators and law enforcement (as required);</li>
                  <li>Third parties during acquisitions, mergers, or legal restructures.</li>
                </ul>
                <p>
                  All third parties are bound by confidentiality and data protection obligations equivalent to ours.
                </p>
              </section>

              <section id="international-transfers" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">International Transfers</h2>
                <p>
                  Your data may be processed outside your country of residence. We ensure adequate safeguards (e.g.,
                  contractual clauses, regional protections) are in place when transferring data across borders.
                </p>
              </section>

              <section id="your-rights" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
                <p>You may:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, update, or delete your data;</li>
                  <li>Request data portability;</li>
                  <li>Restrict or object to data processing;</li>
                  <li>Withdraw marketing consents at any time.</li>
                </ul>
                <p>
                  Requests can be made by contacting: support@keshflip.com. We may request ID confirmation for security.
                </p>
              </section>

              <section id="automated-profiling" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Automated Profiling</h2>
                <p>
                  We may use automated systems to assess risk or ensure compliance. These systems are designed to detect
                  fraud or suspicious behavior. If you wish to contest an automated decision, contact our compliance
                  team.
                </p>
              </section>

              <section id="data-security" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
                <p>
                  We use encryption, 2FA, role-based access control, and regular audits to secure your data. Our
                  infrastructure is PCI DSS compliant for secure handling of payment information.
                </p>
                <p>In the event of a breach, affected users will be notified in accordance with applicable laws.</p>
              </section>

              <section id="data-retention" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
                <p>
                  We retain your information for as long as necessary to fulfill the purposes described above or as
                  required by law. Typically, we retain data for five years after the account closure for regulatory
                  compliance.
                </p>
              </section>

              <section id="data-disposal" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Disposal</h2>
                <p>
                  When data is no longer needed, it is anonymized or deleted securely. Backup archives are also managed
                  in accordance with retention policies.
                </p>
              </section>

              <section id="marketing" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Marketing</h2>
                <p>
                  You may opt-in to receive updates and promotions. You can manage your preferences via your profile or
                  by emailing support@keshflip.com. You can opt-out at any time.
                </p>
              </section>

              <section id="changes" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
                <p>
                  This policy may be updated periodically. Users will be notified via the platform or email. Continued
                  use of our services implies acceptance of any changes.
                </p>
              </section>

              <section id="fraud-disclaimer" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Fraud Disclaimer</h2>
                <p>
                  We do not charge for support or request credentials via phone or social media. Always interact with us
                  through official KESHFLIP channels. Report fraud attempts to tech@keshflip.com.
                </p>
              </section>

              <section id="contact" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
                <p>
                  Questions or concerns? Reach us at info@keshflip.com or visit our help center:{" "}
                  <a href="/contact" className="text-slate-900 underline">
                    www.keshflip.com/contact
                  </a>
                  .
                </p>
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
