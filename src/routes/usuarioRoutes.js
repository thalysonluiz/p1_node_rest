import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', usuarioController.index);
router.get('/:id', usuarioController.show);
router.post('/', usuarioController.store);
router.put('/', loginRequired, usuarioController.update);
router.delete('/', loginRequired, usuarioController.delete);

// router.put('/:id', loginRequired, usuarioController.update);
// router.delete('/:id', loginRequired, usuarioController.delete);

export default router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT
 */
