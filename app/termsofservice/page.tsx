import React from "react";

function Page() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 font-sans text-gray-900">
      <h1 className="text-3xl font-bold text-center">Terms of Service</h1>

      <section className="space-y-3">
        <p>
          Welcome to Color Hunt. By accessing or using our website, you agree to
          be bound by these Terms of Service. If you do not agree to these
          terms, you may not access or use our website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
        <p>
          We make no warranties or representations about the accuracy or
          completeness of the content on our website, and we are not liable for
          any damages arising from your use of our website or the content on it.
          In no event shall our company be liable for any damages whatsoever
          arising out of or in connection with the use or inability to use our
          website or the content on it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Indemnification</h2>
        <p>
          You agree to indemnify and hold our company, its officers, directors,
          employees, agents, and affiliates, harmless from any and all claims,
          damages, expenses, and liabilities, including reasonable attorneys
          fees, arising out of or in connection with your use of our website or
          your violation of these Terms of Service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Termination</h2>
        <p>
          We may terminate or suspend your access to our website, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if you breach these Terms of Service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Changes to Terms of Service</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms of Service at any time. Your continued use of our website
          after any such changes constitutes your acceptance of the new Terms of
          Service.
        </p>
      </section>
    </div>
  );
}

export default Page;
