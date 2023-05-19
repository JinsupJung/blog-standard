import { getSession } from "@auth0/nextjs-auth0";
import clientPromise from "../../lib/mongodb";
import stripeInit from "stripe";
import { MongoClient } from "mongodb";

const stripe = stripeInit(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { user } = await getSession(req, res);

  console.log(user);

  const client = await clientPromise;
  const db = client.db("BlogStandard");
  // const db = client.db();
  console.log(db);

  const userProfile = await db.collection("users").updateOne(
    {
      auth0Id: user.sub,
    },
    {
      $inc: {
        availableToken: 10,
      },
      $setOnInsert: {
        auth0Id: user.sub,
      },
    },
    {
      upsert: true,
    }
  );

  //test code
  // const data = req.body;
  // const client = await MongoClient.connect(
  //   "mongodb+srv://Flome:M!B63up-4i5L3BU@cluster0.db6lj76.mongodb.net/?retryWrites=true&w=majority"
  // );

  // const db = client.db('blogstandard');

  // const meetupsCollection = db.collection('user');

  // const result = await meetupsCollection.insertOne(
  //     {
  //       auth0Id: user.sub,
  //     }
  //     );

  // console.log("MongoDB result = ",result);
  // end of test code

  // const lineItems = [
  //   {
  //     price: process.env.STRIPE_PRODUCT_PRICE_ID,
  //     quantity: 1,
  //   },
  // ];

  // const protocol =
  //   process.env.NODE_ENV === 'development' ? 'http://' : 'https://';
  // const host = req.headers.host;

  // const checkoutSession = await stripe.checkout.sessions.create({
  //   line_items: lineItems,
  //   mode: 'payment',
  //   success_url: `${protocol}${host}/success`,
  //   payment_intent_data: {
  //     metadata: {
  //       sub: user.sub,
  //     },
  //   },
  //   metadata: {
  //     sub: user.sub,
  //   },
  // });

  // console.log('user: ', user);

  res.status(200).json({ name: "John" });
}
