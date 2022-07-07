const Menu = require("../../models/menu");

function menuController() {
  return {
    /* factory function as it returns object (jucies) */
    async menu(req, res) {
      const juices = await Menu.find();
      return res.render("menu", { juices: juices });
    },
  };
}

module.exports = menuController;
