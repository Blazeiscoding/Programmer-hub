import { NextApiRequest, NextApiResponse } from 'next';
import getOrCreateDB from './dbSetup';
import getOrCreateStorage from './storageSetup';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await Promise.all([getOrCreateDB(), getOrCreateStorage()]);
    res.status(200).json({ message: 'Initialization successful' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to initialize' });
  }
}