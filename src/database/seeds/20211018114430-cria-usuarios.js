const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('usuarios',
      [{
        nome: 'Luiz',
        email: 'teste@escola.com',
        password_hash: bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }],
      {});
  },

  down: async (/* queryInterface, Sequelize */) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
