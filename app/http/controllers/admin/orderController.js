const order = require("../../../models/order");
const Order = require("../../../models/order");

function orderController() {
  return {
    index(req, res) {
      /* when order status is ****COMPLETED**** then details of order
               get vanished from the table generated at time of success order 
            */

      order
        .find({ status: { $ne: "completed" } }, null, {
          sort: { createdAt: -1 },
        })
        .populate("customerId", "-password")
        .exec((err, orders) => {
          if (req.xhr) {
            return res.json(orders);
          } else {
            return res.render("admin/orders");
          }
        });
    },
  };
}

module.exports = orderController;
