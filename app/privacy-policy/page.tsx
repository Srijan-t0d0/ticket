import React from "react";

type Props = {};

const privacyPolicy = (props: Props) => {
  return (
    <div className="p-5 mx-auto max-w-full prose prose-invert lg:max-w-5xl">
      <h1>Privacy policy</h1>
      <p>
        We respect your privacy and are committed to protecting your personal
        information. This privacy policy outlines how we collect, use, and
        safeguard your data.
      </p>
      <ol>
        <h3>
          <li>Information Collection</li>
        </h3>
        <p>
          We collect personal data such as your name, email address, and payment
          information when you make a purchase or sign up on our website.
        </p>
        <h3>
          <li>Use of Data</li>
        </h3>
        <p>
          Your personal data is used to process orders, respond to inquiries,
          and provide relevant services.We may use your contact information to
          send promotional emails or newsletters (you can opt out at any time).
        </p>
        <h3>
          <li>Third-Party Sharing</li>
        </h3>
        <p>
          We do not sell or share your personal data with third parties, except
          when necessary for order processing (e.g., payment gateways, shipping
          companies).We ensure that third-party service providers have their own
          privacy policies that comply with data protection regulations.
        </p>
        <h3>
          <li>Data Security</li>
        </h3>
        <p>
          Your personal data is stored securely using encryption and other
          security measures to protect it from unauthorized access or misuse.
        </p>
      </ol>
    </div>
  );
};

export default privacyPolicy;
