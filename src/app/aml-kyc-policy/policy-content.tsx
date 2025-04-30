"use client"

import Link from "next/link"
import { ArrowUp, ShieldAlert } from "lucide-react"

import { Button } from "@/components/shadcn/ui/button"
import { TableOfContents } from "./table-of-content"

export default function AmlKycPolicyClientPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-slate-900 text-white rounded-full mb-6">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">KESHFLIP AML/KYC Policy</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our commitment to preventing money laundering and ensuring customer verification
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-8">
              <TableOfContents />
              <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-medium text-slate-900 mb-2">Need Help?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  If you have any questions about our AML/KYC policy, please contact us.
                </p>
                <Button asChild className="w-full bg-slate-900 hover:bg-slate-800">
                  <Link href="/contact">Contact Compliance</Link>
                </Button>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3 order-1 lg:order-2">
            <div className="prose prose-slate max-w-none">
              <section id="introduction" className="mb-10">
                <p>
                  The Keshflip Anti-Money Laundering and Know Your Customer (AML/KYC) Policy is designed to identify,
                  prevent, and mitigate risks associated with money laundering, terrorist financing, fraud, and other
                  illegal activities. Keshflip complies fully with international and local regulatory requirements to
                  implement rigorous internal controls, procedures, and mechanisms for detecting and reporting
                  suspicious activities.
                </p>
                <p className="font-medium">AML/KYC Policy Key Components:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Customer Verification</li>
                  <li>Sanction and PEP Screening</li>
                  <li>Compliance Officer Role</li>
                  <li>Transaction Monitoring</li>
                  <li>Risk Management</li>
                  <li>Account Management</li>
                </ul>
              </section>

              <section id="customer-verification" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Customer Verification Procedures</h2>
                <p>
                  Keshflip follows stringent Customer Due Diligence (CDD) standards. The process includes verifying
                  customer identities using credible, independent documentation (e.g., government-issued IDs, passports,
                  bank statements, utility bills). Keshflip may employ multiple verification methods, ensuring the
                  authenticity of provided documents. Continuous identity verification may also occur periodically,
                  especially when suspicious activities or changes in account information are detected.
                </p>
                <p>
                  All collected customer data is securely stored and managed in accordance with Keshflip&apos;s Privacy
                  Policy and applicable regulations.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
                  Verification for Mobile Wallets and Payment Cards
                </h3>
                <p>
                  Customers intending to link mobile wallets or payment cards to their Keshflip accounts must undergo
                  additional verification steps as outlined on our platform.
                </p>
              </section>

              <section id="sanctions-pep-screening" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Sanctions and PEP Screening</h2>
                <p>
                  Keshflip systematically screens all users against international Sanctions Lists and Politically
                  Exposed Persons (PEP) lists. Screening occurs:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>During initial user onboarding;</li>
                  <li>Regularly through automated monthly screenings;</li>
                  <li>Upon any alerts triggered by transactional activity or profile updates.</li>
                </ul>
                <p>
                  Keshflip utilizes integrated databases and manual verification methods to maintain high accuracy in
                  these screenings.
                </p>
              </section>

              <section id="compliance-officer" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Role of the Compliance Officer</h2>
                <p>
                  Keshflip has appointed a Compliance Officer responsible for overseeing and enforcing the AML/KYC
                  Policy. The Compliance Officer&apos;s primary duties include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Collection and verification of user information;</li>
                  <li>Updating and implementing AML/KYC internal controls;</li>
                  <li>Monitoring, analyzing, and investigating transaction activities;</li>
                  <li>Record-keeping and document management systems;</li>
                  <li>Regular updates to risk assessments;</li>
                  <li>Collaborating and providing information to relevant law enforcement authorities upon request.</li>
                </ul>
                <p>
                  The Compliance Officer serves as the principal liaison with external regulatory bodies and law
                  enforcement agencies regarding compliance issues.
                </p>
              </section>

              <section id="transaction-monitoring" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Transaction Monitoring</h2>
                <p>
                  Keshflip implements continuous monitoring of transactions to detect irregular activities and potential
                  risks. Monitoring processes include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Daily screenings against recognized sanctions and watchlists (e.g., OFAC);</li>
                  <li>Detailed analysis of user transactions and patterns;</li>
                  <li>Investigative case management and documentation;</li>
                  <li>Internal reporting and escalation procedures.</li>
                </ul>
                <p>Keshflip reserves the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Report suspicious transactions to appropriate authorities;</li>
                  <li>Request additional information from users concerning their transactions;</li>
                  <li>Suspend or terminate user accounts where suspicious activities are identified.</li>
                </ul>
              </section>

              <section id="risk-management" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Risk Management Strategy</h2>
                <p>
                  Keshflip employs a risk-based approach aligning resources and controls with identified risks. Regular
                  risk assessments guide resource allocation and policy updates, ensuring effective risk mitigation and
                  compliance adherence. Resources and controls are prioritized towards areas assessed as presenting
                  higher risks of money laundering or other illicit activities.
                </p>
              </section>

              <section id="account-management" className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Account Management Policy</h2>
                <p>
                  Due to regulatory obligations and the necessity of maintaining detailed transactional records,
                  Keshflip does not support account deletions. Our operational requirements, internal audits, and
                  compliance responsibilities across our operating regions mandate the retention of transactional and
                  user data. This policy ensures we remain fully compliant with laws and regulatory expectations in
                  Dubai, UAE, and other operational jurisdictions.
                </p>
                <p className="mt-6 font-medium">
                  By using Keshflip&apos;s services, users acknowledge understanding and agreement to comply with the
                  outlined AML/KYC policies and procedures.
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
