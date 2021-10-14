class HomeController {
  index(req, res) {
    res.json({
      index: 'Tudo Certo',
    });
  }
}

export default new HomeController();
