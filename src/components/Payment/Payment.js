import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useContext } from 'react';
import { AuthContext } from '../Contex/AuthContex';

const MySwal = withReactContent(Swal);

function Payment({total,handleClick}) {
    const {currentUser}= useContext(AuthContext)
  const publishableKey =
    'pk_test_51MT5FaSEULRJHhb7510yHE1VrnkPXjUhAbHIwCcVwLzTX97kWOixdunVOYpsA2DyWSK9bsGQf34TEvFTpzHWhkLV00CgqomsNj';
  
  

  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 4000,
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };
  const payNow = async token => {
    try {
      const response = await axios({
        url: 'http://localhost:8800/api/payment',
        method: 'post',
        data: {
          amount: total,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
        await handleClick()
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  return (
    <div>
      {currentUser?<StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={total}
        description={`Your total is ${total}Rs`}
        token={payNow}
      />:"Please login to pay"}
    </div>
  );
}

export default Payment;