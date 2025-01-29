import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../compontents/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(
"pk_test_51Q1TD4Rwqs1xLWzRz02d6IGT2yfe23bIt98wojw4YkAGk54vKi5iNUxlToqHmntCWdypHL95MMbs0J3u4IG8DnlU00gilrcv6k"
);

const Pay = () => {
     
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);


const appearance = {
    theme: 'stripe',
};
const options = {
    clientSecret,
    appearance,
};

return <div className="pay">
    {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
  </div>;
};

export default Pay;