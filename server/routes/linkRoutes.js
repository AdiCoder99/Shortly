import express from 'express'
import { shrunkURL, redirect } from '../controllers/linkController.js';

const linkRouter = express.Router();

linkRouter.post('/shorten', shrunkURL)
linkRouter.get('/:shortCode', redirect)

export default linkRouter;