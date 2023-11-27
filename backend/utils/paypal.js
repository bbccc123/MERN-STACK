import dotenv from 'dotenv';
import btoa from 'btoa-lite';
dotenv.config();
const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET, PAYPAL_API_URL } = process.env;

/**
 * @see {@link https://developer.paypal.com/reference/get-an-access-token/#link-getanaccesstoken}
 *
 * @returns {Promise<string>}
 * @throws {Error}
 *
 */
async function getPayPalAccessToken() {
  const auth = Buffer.from(PAYPAL_CLIENT_ID + ':' + PAYPAL_APP_SECRET).toString(
    'base64'
  );

  const url = `https://api-m.sandbox.paypal.com/v1/oauth2/token`;

  const headers = {
    Accept: 'application/json',
    'Accept-Language': 'en_US',
    Authorization: `Basic ${auth}`,
  };
  console.log(auth);
  const body = 'grant_type=client_credentials';
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body,
  });

  if (!response.ok) throw new Error('Failed to get access token');

  const paypalData = await response.json();

  return paypalData.access_token;
}

/**

 * @param {Mongoose.Model} orderModel
 * @param {string} paypalTransactionId
 * @returns {Promise<boolean>}
 * @throws {Error}

 */
export async function checkIfNewTransaction(orderModel, paypalTransactionId) {
  try {
    const orders = await orderModel.find({
      'paymentResult.id': paypalTransactionId,
    });

    return orders.length === 0;
  } catch (err) {
    console.error(err);
  }
}

/**

 * @see {@link https://developer.paypal.com/docs/api/orders/v2/#orders_get}
 * @param {string} paypalTransactionId
 * @returns {Promise<Object>}
 * @throws {Error}
 */
export async function verifyPayPalPayment(paypalTransactionId) {
  const accessToken = await getPayPalAccessToken();
  const paypalResponse = await fetch(
    `https://api-m.sandbox.paypal.com/v2/checkout/orders/${paypalTransactionId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!paypalResponse.ok) throw new Error('Lỗi xác thực thanh toán');

  const paypalData = await paypalResponse.json();
  return {
    verified: paypalData.status === 'COMPLETED',
    value: paypalData.purchase_units[0].amount.value,
  };
}
