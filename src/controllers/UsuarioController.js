import Usuario from '../models/Usuario';

class UsuarioController {
  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      const { id, nome, email } = novoUsuario;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll({ attributes: ['id', 'nome', 'email'] });
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
      const { nome, email } = usuario;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId);

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const atualiza = await usuario.update(req.body);
      const { id, nome, email } = atualiza;

      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId);

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await usuario.destroy();
      const { id, nome, email } = usuario;

      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UsuarioController();
