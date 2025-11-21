import React, { useEffect } from "react";
import { X } from "lucide-react";

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden relative animate-fade-in border border-slate-100 dark:border-slate-800 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/40 rounded-full hover:bg-white dark:hover:bg-black transition-colors z-10 text-slate-600 dark:text-slate-200"
          aria-label="Close privacy policy"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="bg-gradient-to-r from-primary/10 to-transparent px-10 py-8">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2">
              Privacy Policy
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Last updated: October 26, 2023
            </p>
          </div>

          <div className="p-8 sm:p-10 prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              Introduction
            </h3>
            <p>
              Welcome to The IMG Resident. We are committed to protecting your
              personal information and your right to privacy. This section
              summarizes how we may collect, use, and safeguard the information
              you provide when you use this website and any related services,
              sales, marketing, or events.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              Information We Collect
            </h3>
            <p>
              We collect personal information that you voluntarily provide to us
              when you register on the website, express interest in obtaining
              information about us or our services, or otherwise contact us.
            </p>
            <p>The personal information we collect may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Identification Information:</strong> Name, email
                address, phone number.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website.
              </li>
              <li>
                <strong>Cookies and Tracking Data:</strong> We use cookies and
                similar tracking technologies to monitor activity on our service.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              How We Use Your Information
            </h3>
            <p>
              We use personal information collected via our website for a variety
              of business purposes, including:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>To provide and maintain our services.</li>
              <li>To improve our website and offerings.</li>
              <li>
                To send you marketing and promotional communications (where
                permitted by law).
              </li>
              <li>To respond to your inquiries and support requests.</li>
            </ol>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              Data Sharing and Disclosure
            </h3>
            <p>
              We may process or share your data that we hold based on consent,
              legitimate interests, performance of a contract, legal obligations,
              or vital interests. We do not sell your personal information.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              Data Retention
            </h3>
            <p>
              We will only keep your personal information for as long as necessary
              for the purposes set out in this Privacy Policy, unless a longer
              retention period is required or permitted by law.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              Your Privacy Rights
            </h3>
            <p>
              Depending on your location, you may have certain rights under
              applicable data protection laws, such as the right to access,
              correct, or delete your personal information. To exercise these
              rights, please contact us.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              Contact Us
            </h3>
            <p>
              If you have any questions or comments about this policy, you may
              contact us at{" "}
              <a
                href="mailto:privacy@imgresident.com"
                className="text-primary hover:underline"
              >
                privacy@imgresident.com
              </a>
              .
            </p>
            <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
