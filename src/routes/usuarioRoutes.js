import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';

const router = new Router();

router.post('/', usuarioController.store);
router.get('/', usuarioController.index);
router.get('/:id', usuarioController.show);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);

export default router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT
 */
