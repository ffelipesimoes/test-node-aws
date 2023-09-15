import { Router } from 'express';
import * as ethereumController from './controllers/ethereumController';

const router = Router();

router.post('/generate-keys', ethereumController.generateKeys);
router.post('/get-address', ethereumController.getEthereumAddress);

export default router;
