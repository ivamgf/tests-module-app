import { NextApiRequest, NextApiResponse } from 'next'
// import { sampleUserData } from '../../../utils/sample-data'
import { connectToDatabase } from '../../../utils/mongodb'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(connectToDatabase)) {
      throw new Error('Cannot find user data')
    }

    const {
      query: { id, name },
      method,
    } = _req;

    switch (method) {
      case 'GET':
        // Get data from your database
        const { db } = await connectToDatabase();
        const data = await db.collection('users').find().toArray();
        console.log(data);
        res.status(200).json(data);
        break;
      case 'PUT':
        // Update or create data in your database
        res.status(200).json(data);
        break
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
