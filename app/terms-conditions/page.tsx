import React from "react";

type Props = {};

const termsConditions = (props: Props) => {
  return (
    <div className="p-5 mx-auto max-w-full prose prose-invert lg:max-w-5xl">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to Astria-za Collectibles. By using our website and services,
        you agree to the following terms and conditions. Please read them
        carefully.
      </p>
      <ol>
        <h3>
          <li>General Terms</li>
        </h3>
        <p>
          By accessing our website, you confirm that you are at least 18 years
          old or have parental/guardian permission to use the site.You agree not
          to misuse our website for illegal purposes or activities that violate
          the rights of others.The content on this website is for general
          information and use only. It is subject to change without notice.
        </p>
        <h3>
          <li>Purchases and Payments</li>
        </h3>
        <p>
          Prices for our products and services are listed in INR (Indian
          Rupees).Payments can be made via credit card, debit card, or other
          accepted methods at checkout.We reserve the right to change prices or
          services at any time without notice.
        </p>
        <h3>
          <li>Liability</li>
        </h3>
        <p>
          We are not responsible for any damage or loss resulting from the use
          of our website or services unless caused by our gross negligence. In
          no event will Astria-za be held liable for indirect, incidental, or
          consequential damages arising from the use of our services.
        </p>
        <h3>
          <li>Account Termination</li>
        </h3>
        <p>
          We reserve the right to terminate user accounts if there is evidence
          of misuse, fraud, or illegal activity.
        </p>
      </ol>
    </div>
  );
};

export default termsConditions;
