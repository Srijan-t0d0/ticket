import React from "react";

type Props = {};

const refund = (props: Props) => {
  return (
    <div className="p-5 mx-auto max-w-full prose prose-invert lg:max-w-5xl">
      <h1>Refund and Cancellation Policy</h1>
      <p>
        We strive to ensure customer satisfaction with our products and
        services. Below is our refund and cancellation policy.
      </p>
      <ol>
        <h3>
          <li>Refunds</li>
        </h3>
        <p>
          Refunds are available for eligible products within 7 days of delivery.
          To be eligible, items must be returned in their original condition and
          packaging.Once we receive and inspect the returned product, we will
          process your refund within 5-7 working days. The refund will be
          credited back to your original payment method. Refunds are not
          available for digital products or services once they are delivered
          unless there is a technical issue.
        </p>
        <h3>
          <li>Cancellations</li>
        </h3>
        <p>
          You can cancel your order within 24 hours of purchase. After 48 hours,
          cancellations may incur a 10% cancellation fee.For subscription-based
          services, cancellations must be made before the next billing cycle.
        </p>
      </ol>
    </div>
  );
};

export default refund;
