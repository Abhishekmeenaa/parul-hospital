import React from "react";

const LegalPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Parul Hospital – Legal Information</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Terms & Conditions */}
        <section className="border-2 p-6 shadow-xl rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
          <p className="mb-4">
            By using the services of Parul Hospital, you agree to comply with our terms. These terms apply to appointments, consultations, medical records, and usage of our website or mobile services.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">1. Medical Appointments</h3>
          <p className="mb-4">
            Appointments can be booked online, via phone, or at the hospital. Patients are requested to arrive at least 15 minutes prior to the scheduled time.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">2. Emergency Services</h3>
          <p className="mb-4">
            Emergency services are available 24/7. Immediate care will be provided based on urgency, regardless of appointment status.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">3. Teleconsultation</h3>
          <p className="mb-4">
            Teleconsultations are provided as per the doctor’s availability. Prescription issued via online consultation will follow government regulations.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">4. Changes in Treatment or Policy</h3>
          <p className="mb-4">
            Parul Hospital reserves the right to modify its services or legal terms. Changes will be posted here.
          </p>
          <p className="text-sm text-gray-500">Last updated: June 19, 2025</p>
        </section>

        {/* Privacy Policy */}
        <section className="border-2 p-6 shadow-xl rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            Parul Hospital is committed to protecting your medical and personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">1. Patient Information Collected</h3>
          <p className="mb-4">
            We collect name, contact details, medical history, reports, payment information, and visit logs for diagnostic, treatment, and billing purposes.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">2. Data Use</h3>
          <p className="mb-4">
            Your data is used only for medical care, communication, and hospital operations. We do not sell or misuse any personal data.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">3. Confidentiality</h3>
          <p className="mb-4">
            All patient records are securely stored and only accessible to authorized medical staff.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">4. Third-party Services</h3>
          <p className="mb-4">
            We may use third-party labs, pharmacies, or services. They are also bound to maintain strict confidentiality under agreement.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">5. Contact Information</h3>
          <p className="mb-4">
            For questions, email us at: <strong>privacy@parulhospital.in</strong> or call <strong>+91-9876543210</strong>
          </p>
          <p className="text-sm text-gray-500">Last updated: June 19, 2025</p>
        </section>
      </div>
    </div>
  );
};

export default LegalPage;
