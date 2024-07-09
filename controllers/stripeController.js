const stripe = require('stripe')(process.env.STRIPE_KEY);

// Controller function to handle payment intent creation
const stripeController = async (req, res) => {
  const { purchase, total_amount, shipping_fee } = req.body;

  const calculateOrderAmount = () => {
    return total_amount + shipping_fee;
  };

  // Create a payment intent with the calculated amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: 'usd',
  });

  // Send the client secret of the payment intent back to the client
  res.json({ clientSecret: paymentIntent.client_secret });
};

module.exports = stripeController;
