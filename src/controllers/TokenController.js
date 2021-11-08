import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['E-mail/Senha não pode(m) ser vazio(s)!'],
      });
    }

    const user = await Usuario.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['E-mail/Senha Inválido(s)!'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['E-mail/Senha Inválido(s)!'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new TokenController();
