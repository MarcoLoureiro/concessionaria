import { Router } from "express";
import * as VeiculosController from '../controllers/veiculosController';

const router = Router();


router.get('/',VeiculosController.home);

router.get('/carro',VeiculosController.formCarro);
router.post('/carro-novo-carro',VeiculosController.postCarro);

router.get('/moto',VeiculosController.formMoto);
router.post('/moto-novo-moto',VeiculosController.postMoto);

export default router;