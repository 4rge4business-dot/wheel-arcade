import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end()
  const { priceId } = req.body
  if(!priceId) return res.status(400).json({ error: 'missing_price' })
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      metadata: { source: 'wheel_arcade' }
    })
    res.status(200).json({ url: session.url })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
}
