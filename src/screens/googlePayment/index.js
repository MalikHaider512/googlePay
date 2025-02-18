import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./styles";
import { makePayment } from "@google/react-native-make-payment";

export default function GooglePayment() {
  const allowedCardNetworks = ["VISA", "MASTERCARD"];
  const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];

  const requestData = {
    allowedCardNetworks,
    allowedCardAuthMethods,
    transactionInfo: {
      totalPrice: "10",
      totalPriceStatus: "FINAL",
      currencyCode: "USD",
    },
    merchantName: "Development",
  };

  const handleGooglePay = () => {
    console.log("Payment......", requestData);
    // makePayment(requestData)

    // makePayment(requestData)
    //   .then((response) => {
    //     console.log("Payment Success:", response);
    //     // Process the payment response (e.g., send token to backend)
    //   })
    //   .catch((error) => {
    //     console.log("Payment Error:", error.message);
    //   });
  };

  return (
    <View style={styles.parentView}>
      <Text>Google Pay Implementation</Text>
      <Button onPress={handleGooglePay} title="Pay with Google Pay" />
    </View>
  );
}

// AIzaSyCvlGxQ_EBBpQcLgNMilxVLxovhVZdRON8;  google pay api key
