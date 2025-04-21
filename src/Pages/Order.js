import { FaChevronDown } from "react-icons/fa";
import MainLayout from "../Layout/MainLayout";

const orders = [
  {
    id: "ORD-2023-4829",
    date: "April 12, 2023",
    status: "Delivered",
    amount: "$329.97",
    items: 2,
  },
  {
    id: "ORD-2023-3756",
    date: "March 28, 2023",
    status: "Delivered",
    amount: "$149.95",
    items: 2,
  },
  {
    id: "ORD-2023-2915",
    date: "February 15, 2023",
    status: "Returned",
    amount: "$89.99",
    items: 1,
  },
  {
    id: "ORD-2023-1842",
    date: "January 5, 2023",
    status: "Shipped",
    amount: "$199.98",
    items: 1,
  },
];

const statusStyles = {
  Delivered: "bg-green-100 text-green-700",
  Returned: "bg-purple-100 text-purple-700",
  Shipped: "bg-blue-100 text-blue-700",
};

export default function OrderHistory() {
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
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg">{order.id}</span>
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  Ordered on {order.date}
                </span>
              </div>

              <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 gap-4">
                <div className="text-right">
                  <div className="font-bold text-gray-800">{order.amount}</div>
                  <div className="text-sm text-gray-500">
                    {order.items} {order.items === 1 ? "item" : "items"}
                  </div>
                </div>
                <button className="flex items-center gap-1 px-4 py-2 border font-medium rounded-md text-sm hover:bg-gray-100 transition">
                  View Details <FaChevronDown className="text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
