module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('usuarios',
      [{
        name: 'Luiz',
        email: 'teste@escola.com',
        password_hash: '',
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
