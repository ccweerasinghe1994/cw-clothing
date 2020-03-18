import React from "react";
import StripeCheckout from "react-stripe-checkout";

export const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishKey = "pk_test_5zczuvHKxs1Ih3uo07klafvO00rfzmKNuh";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="pay now"
      name="wc-clothing"
      billingAddress
      shippingAddress
      image="http://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/512/darth-vader-icon.png"
      description={`Your Total is $${price}`}
      amount={stripePrice}
      panelLabel="pay now"
      token={onToken}
      
      stripeKey={publishKey}
    />
  );
};
