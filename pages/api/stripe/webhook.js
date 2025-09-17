import Stripe from 'stripe'
import { buffer } from 'micro'

export const config = { api: { bodyParser: false } }

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res){
  const sig = req.headers['stripe-signature']
  const buf = await buffer(req)
  let event
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('Webhook error', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }
  if(event.type === 'checkout.session.completed'){
    const session = event.data.object
    // TODO: insert purchase record into Supabase
    console.log('Checkout session completed', session.id)
  }
  res.json({ received: true })
}
