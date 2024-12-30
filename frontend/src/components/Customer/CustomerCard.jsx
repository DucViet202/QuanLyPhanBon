import React, { useState } from "react";
import CustomerDetailModal from "./CustomerDetailModal";
import EditCustomerModal from "./EditCustomerModal";

const CustomerCard = ({ customer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  return (
    <>
      <div className="p-4 hover:bg-gray-50 transition-colors duration-150">
        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-11 md:gap-4 items-center">
          <div className="col-span-1 text-sm text-gray-900">
            {customer.userId}
          </div>
          <div className="col-span-2 text-sm font-medium text-gray-900">
            {customer.userName}
          </div>
          <div className="col-span-2 text-sm font-medium text-gray-900">
            {customer.userEmail}
          </div>
          <div className="col-span-2 text-sm text-gray-500">
            {customer.userAddress || "Không có thông tin"}
          </div>
          <div className="col-span-1 text-sm text-gray-500">
            {customer.userPhone}
          </div>
          <div className="col-span-1 text-sm text-gray-500">
            {customer.status}
          </div>
          <div className="col-span-2 flex space-x-2">
            <button
              onClick={openModal}
              className="flex-1 bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-colors duration-300 text-sm"
            >
              Chi tiết
            </button>
            <button
              onClick={openEditModal}
              className="flex-1 bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition-colors duration-300 text-sm"
            >
              Chỉnh sửa
            </button>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Mã khách hàng</span>
            <span className="text-gray-900">{customer.userId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Tên khách hàng</span>
            <span className="text-gray-900 font-medium">
              {customer.userName}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Email</span>
            <span className="text-gray-500">{customer.userEmail}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Điện thoại</span>
            <span className="text-gray-500">{customer.userPhone}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Tình trạng</span>
            <span className="text-gray-500">{customer.status}</span>
          </div>

          <div className="mt-2 flex space-x-2">
            <button
              onClick={openModal}
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 text-sm"
            >
              Chi tiết
            </button>
            <button
              onClick={openEditModal}
              className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 text-sm"
            >
              Chỉnh sửa
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <CustomerDetailModal
          customerId={customer._id}
          onClose={closeModal}
        />
      )}
      {isEditModalOpen && (
        <EditCustomerModal
          customer={customer}
          onClose={closeEditModal}
        />
      )}
    </>
  );
};

export default CustomerCard;
