import multer, { MulterError } from 'multer';
import { extname, resolve } from 'path';

const rand = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg'
      && file.mimetype !== 'image/jpeg') {
      return cb(new MulterError('Extensão de arquivo inválido! Formatos válidos: PNG/JPEG'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${rand()}${extname(file.originalname)}`);
    },
  }),
};
