import Usuario from '../models/Usuario';

class UsuarioController {
  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      return res.json(novoUsuario);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      return res.json(usuario);
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const atualiza = await usuario.update(req.body);

      return res.json(atualiza);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await usuario.destroy();

      return res.json(usuario);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UsuarioController();
