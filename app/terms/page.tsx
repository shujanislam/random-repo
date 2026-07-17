import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Terms() {
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
            Terms & Conditions
          </h1>
          <p className="text-neutral-600">
            Last updated: January 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">1. Agreement to Terms</h2>
            <p className="text-neutral-600 leading-relaxed">
              By accessing and using the TruTag service, you agree to be bound by these Terms and Conditions. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">2. Use License</h2>
            <p className="text-neutral-600 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on TruTag&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on TruTag&apos;s website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or &quot;mirroring&quot; the materials on any other server</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">3. Disclaimer</h2>
            <p className="text-neutral-600 leading-relaxed">
              The materials on TruTag&apos;s website are provided on an &apos;as is&apos; basis. TruTag makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">4. Limitations</h2>
            <p className="text-neutral-600 leading-relaxed">
              In no event shall TruTag or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TruTag&apos;s website, even if TruTag or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">5. Accuracy of Materials</h2>
            <p className="text-neutral-600 leading-relaxed">
              The materials appearing on TruTag&apos;s website could include technical, typographical, or photographic errors. TruTag does not warrant that any of the materials on its website are accurate, complete, or current. TruTag may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">6. Links</h2>
            <p className="text-neutral-600 leading-relaxed">
              TruTag has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TruTag of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">7. Modifications</h2>
            <p className="text-neutral-600 leading-relaxed">
              TruTag may revise these terms and conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms and conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">8. Governing Law</h2>
            <p className="text-neutral-600 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">9. Contact Information</h2>
            <p className="text-neutral-600 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 space-y-2">
              <p className="text-neutral-700">
                <span className="text-neutral-500 font-semibold">Email:</span> support@trutag.com
              </p>
              <p className="text-neutral-700">
                <span className="text-neutral-500 font-semibold">Website:</span> www.trutag.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
