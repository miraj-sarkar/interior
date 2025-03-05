import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaClock, FaUser, FaCalendarAlt } from 'react-icons/fa';

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    classType: '',
    notes: '',
  });

  const timeSlots = [
    '07:00 AM', '08:30 AM', '10:00 AM', '11:30 AM',
    '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM',
  ];

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      // Handle authentication first
      return;
    }

    // Here you would typically:
    // 1. Validate the booking details
    // 2. Check availability
    // 3. Save to Firebase
    // 4. Send confirmation email
    console.log('Booking submitted:', {
      ...bookingDetails,
      date,
      time: selectedTime,
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book Your Yoga Class
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred date and time to start your wellness journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendar Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Select Date & Time
              </h2>
              <div className="mb-8">
                <Calendar
                  onChange={handleDateChange}
                  value={date}
                  minDate={new Date()}
                  className="w-full border-none"
                  tileClassName="hover:bg-primary-100 rounded-full"
                  activeTileClassName="bg-primary-600 text-white rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Available Time Slots
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`p-2 rounded-md text-center transition-colors duration-200 ${
                        selectedTime === time
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Booking Details Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Booking Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={bookingDetails.name}
                      onChange={handleInputChange}
                      className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingDetails.email}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingDetails.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class Type
                  </label>
                  <select
                    name="classType"
                    value={bookingDetails.classType}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    required
                  >
                    <option value="">Select a class type</option>
                    <option value="hatha">Hatha Yoga</option>
                    <option value="vinyasa">Vinyasa Flow</option>
                    <option value="yin">Yin Yoga</option>
                    <option value="meditation">Meditation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Notes
                  </label>
                  <textarea
                    name="notes"
                    value={bookingDetails.notes}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-gray-900">
                    Total: $25
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={!isAuthenticated}
                  >
                    {isAuthenticated ? 'Confirm Booking' : 'Sign In to Book'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Summary */}
      {selectedTime && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <FaCalendarAlt className="text-primary-600" />
                <div>
                  <p className="text-sm text-gray-600">Selected Date</p>
                  <p className="font-semibold">
                    {date.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaClock className="text-primary-600" />
                <div>
                  <p className="text-sm text-gray-600">Selected Time</p>
                  <p className="font-semibold">{selectedTime}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Booking; 