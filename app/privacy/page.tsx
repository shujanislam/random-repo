import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Privacy() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-neutral-600">
            Last updated: January 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">1. Introduction</h2>
            <p className="text-neutral-600 leading-relaxed">
              TruTag (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the TruTag website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">2. Information Collection and Use</h2>
            <p className="text-neutral-600 leading-relaxed">
              We collect several different types of information for various purposes to provide and improve our service to you.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-neutral-500 mb-2">Personal Data</h3>
                <p className="text-neutral-600">
                  While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;), including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-neutral-600 mt-2">
                  <li>Email address</li>
                  <li>Vehicle registration details</li>
                  <li>Usage data</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">3. Use of Data</h2>
            <p className="text-neutral-600 leading-relaxed">
              TruTag uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">4. Security of Data</h2>
            <p className="text-neutral-600 leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. We use industry-standard encryption protocols to protect all sensitive information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">5. Privacy of Phone Numbers</h2>
            <p className="text-neutral-600 leading-relaxed">
              TruTag&apos;s core mission is to protect your privacy. Your personal phone number is never shared with anyone who scans your QR sticker. All communication goes through our secure messaging platform, ensuring your phone number remains completely private.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">6. Service Providers</h2>
            <p className="text-neutral-600 leading-relaxed">
              We may employ third-party companies and individuals to facilitate our service (&quot;Service Providers&quot;), provide the service on our behalf, perform service-related services or assist us in analyzing how our service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">7. Changes to This Privacy Policy</h2>
            <p className="text-neutral-600 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;effective date&quot; at the top of this Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">8. Contact Us</h2>
            <p className="text-neutral-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 space-y-2">
              <p className="text-neutral-700">
                <span className="text-neutral-500 font-semibold">Email:</span> privacy@trutag.com
              </p>
              <p className="text-neutral-700">
                <span className="text-neutral-500 font-semibold">Website:</span> www.trutag.com
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">9. Your Rights</h2>
            <p className="text-neutral-600 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of certain communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="space-y-4 bg-neutral-50 border border-neutral-200 rounded-lg p-6">
            <h2 className="text-lg font-bold text-neutral-500">Privacy First Promise</h2>
            <p className="text-neutral-700">
              TruTag is committed to protecting your privacy. We will never sell your data, and we will never compromise your personal information. Your trust is our most valuable asset.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
