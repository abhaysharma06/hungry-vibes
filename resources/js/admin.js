import axios from "axios";
import moment from "moment";
import Noty from "noty";

export default function initAdmin(socket) {
  const orderTableBody = document.querySelector("#orderTableBody");
  let orders = []; // array of orders
  let markup; // table markup

  /* calling get method for 
    axios to send http request */

  axios
    .get("/admin/orders", {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    })
    .then((res) => {
      // storing data in order array
      orders = res.data;
      markup = generateMarkup(orders);
      console.log("markup", markup);
      orderTableBody.innerHTML = markup;
    })
    .catch((err) => {
      console.log(err);
    });
  /*  
        renders all the items in order collection 
        (array) present at database in for of table 
    */
  function renderItems(items) {
    let parsedItems = Object.values(items);
    return parsedItems
      .map((menuItem) => {
        return `<p>${menuItem.items.name} - ${menuItem.qty} pcs </p>`;
      })
      .join("");
  }

  /* 
          calling a map function which finally returns 
          object array in form of table. 
      */
  function generateMarkup(orders) {
    return orders
      .map((order) => {
        /* 
                 displaying details order details in a table 
                 where admin can update the status (the applies a ternary condition to change status)
            */
        return `
                <tr>
                <td style="border-width:2px; border-color:grey; background-color:transparent">
                    <p style="text-align:center; font-size:1.5rem; color:black;">${
                      order._id
                    }</p>
                </td>
            
                <td style="border-width:2px; border-color:grey; background-color:transparent">
                <p style="text-align:center; font-size:1.5rem; color:black;">
                ${order.phone}
                </p>
                </td>
                <td style="border-width:2px; border-color:grey; background-color:transparent">
                <p style="text-align:center; font-size:1.5rem; color:black;">
                ${order.address}
                </p></td>
                <td style="border-width:2px; border-color:grey; background-color:transparent">
                    <div class="inline-block relative w-64">
                        <form action="/admin/order/status" method="POST">
                            <input type="hidden" name="orderId" value="${
                              order._id
                            }">
                            <select name="status" onchange="this.form.submit()"
                                class="text-center block appearance-none w-full bg-transparent border border-black-500 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="order_placed"   
                                    ${
                                      order.status === "order_placed"
                                        ? "selected"
                                        : ""
                                    }>
                                    Placed</option>
                                <option value="confirmed" ${
                                  order.status === "confirmed" ? "selected" : ""
                                }>
                                    Confirmed</option>
                                <option value="prepared" ${
                                  order.status === "prepared" ? "selected" : ""
                                }>
                                    Prepared</option>
                                <option value="delivered" ${
                                  order.status === "delivered" ? "selected" : ""
                                }>
                                    Delivered
                                </option>
                                <option value="completed" ${
                                  order.status === "completed" ? "selected" : ""
                                }>
                                    Completed
                                </option>
                            </select>
                        </form>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </td>
                <td style="border-width:2px; border-color:grey; background-color:transparent">
                    <p style="text-align:center; font-size:1.5rem; color:black;">
                    ${moment(order.createdAt).format("hh:mm A")}
                    </p>
                </td>
                <td style="border-width:2px; border-color:grey; background-color:transparent">
                    <p style="text-align:center; font-size:1.5rem; color:black;">
                    ${order.paymentStatus ? "paid" : "Not paid"}
                    </p>
                </td>
                <td style="border-width:2px; border-color:grey; background-color:transparent">
                    <p style="text-align:center; font-size:1.5rem; color:black;">
                    ${order.status}
                    </p>  
                </td>

            </tr>
        `;
      })
      .join("");
  }

  /* 
        whenever customer generate order there comes 
        a notification of order(using Noty) to admin.
     */
  socket.on("orderPlaced", (order) => {
    new Noty({
      type: "success",
      timeout: 1000,
      text: "New order!",
      progressBar: false,
    }).show();
    orders.unshift(order);
    orderTableBody.innerHTML = "";
    orderTableBody.innerHTML = generateMarkup(orders);
  });
}
