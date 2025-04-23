import { FaChevronDown } from "react-icons/fa";
import MainLayout from "../Layout/MainLayout";
import { useEffect, useState } from "react";
import PrivateApiServices from "../API/privateApiServices";

const statusStyles = {
  pending: "bg-green-100 text-red-700",
  paid: "bg-purple-100 text-purple-700",
  Shipped: "bg-blue-100 text-blue-700",
};

const OrderHistory = () => {
  const [orders, setOrderList] = useState([]);
  const [viewDetails, setViewDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const fetchOrderDetails = async () => {
    // const url = "/api/cart/configureCart";
    const url = " http://localhost:1414/api/order/getOrders";

    const response = await PrivateApiServices.getAll(url, true);

    console.log(response);

    setOrderList(response);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const toggleViewDataTab = (id) => {
    console.log(id, "/**********/");
    setActiveTab(id);
    setViewDetails((prevState) => !prevState);
  };

  return (
    <MainLayout>
      <div className="px-4 py-8 w-[80%]">
        <h2 className="text-2xl font-bold mb-6">Order History</h2>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <select className="w-full md:w-auto px-4 py-2 border rounded-lg focus:outline-none">
            <option>All Orders</option>
            <option>Delivered</option>
            <option>Shipped</option>
            <option>Returned</option>
          </select>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => {
            const totalItems = order.products.reduce(
              (acc, item) => acc + item.quantity,
              0
            );
            const formattedDate = new Date(order.createdAt).toLocaleDateString(
              "en-IN",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            );

            return (
              <div className=" border rounded-lg shadow-sm">
                <div
                  key={order._id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-lg">
                        {order._id.slice(0, 8)}...
                      </span>
                      <span
                        className={`text-sm font-medium px-2 py-1 rounded-full ${
                          statusStyles[order.status] ||
                          "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      Ordered on {formattedDate}
                    </span>
                  </div>

                  <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 gap-4">
                    <div className="text-right">
                      <div className="font-bold text-gray-800">
                        ₹{order.billingDetails.totalAmt.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {totalItems} {totalItems === 1 ? "item" : "items"}
                      </div>
                    </div>
                    <button
                      onClick={() => toggleViewDataTab(order._id)}
                      className="flex items-center gap-1 px-4 py-2 border font-medium rounded-md text-sm hover:bg-gray-100 transition"
                    >
                      View Details <FaChevronDown className="text-xs" />
                    </button>
                  </div>
                </div>

                {activeTab === order._id &&
                  viewDetails &&
                  order?.products?.map((each) => (
                    <ul
                      key={each._id}
                      className="p-4 my-2 border-t bg-white space-y-1"
                    >
                      <li className="text-lg font-semibold text-gray-800">
                        {each.productId.title}
                      </li>
                      <li className="text-gray-600">
                        Price: ₹{each.productId.price}
                      </li>
                      <li className="text-gray-600">
                        Quantity: {each.quantity}
                      </li>
                    </ul>
                  ))}
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default OrderHistory;
