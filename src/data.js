// src/data.js

export const dealData = {
  value: 30, // Current value
  target: 33, // Target value
};

export const forecastData = {
  target: 33,
};

export const donutData = {
  labels: ["Philip", "John", "Paul", "Mark", "Joel", "Sebastian", "Mia"],
  datasets: [
    {
      data: [20, 15, 10, 25, 5, 20, 10],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
        "#FF9F40",
        "#FFCD56",
      ],
      labels: ["Philip", "John", "Paul", "Mark", "Joel", "Sebastian", "Mia"], // Add labels here
    },
  ],
};

export const rankingData = [
  {
    name: "Philip",
    photo: "https://via.placeholder.com/50",
    bookings: 25,
    profit: 150,
  },
  {
    name: "John",
    photo: "https://via.placeholder.com/50",
    bookings: 20,
    profit: 120,
  },
  {
    name: "Paul",
    photo: "https://via.placeholder.com/50",
    bookings: 18,
    profit: 110,
  },
];

export const agentData = [
  {
    name: "Philip",
    photo: "https://via.placeholder.com/50",
    bookings: 25,
    profit: 150,
  },
  {
    name: "John",
    photo: "https://via.placeholder.com/50",
    bookings: 20,
    profit: 120,
  },
  {
    name: "Paul",
    photo: "https://via.placeholder.com/50",
    bookings: 18,
    profit: 110,
  },
  {
    name: "Mark",
    photo: "https://via.placeholder.com/50",
    bookings: 15,
    profit: 90,
  },
  {
    name: "Joel",
    photo: "https://via.placeholder.com/50",
    bookings: 14,
    profit: 85,
  },
  {
    name: "Sebastian",
    photo: "https://via.placeholder.com/50",
    bookings: 12,
    profit: 75,
  },
  {
    name: "Mia",
    photo: "https://via.placeholder.com/50",
    bookings: 10,
    profit: 60,
  },
];

// Adding the new datasets
export const inquiryData = {
  labels: ["Inquiries"],
  datasets: [
    {
      label: "Number of Inquiries",
      data: [24], // Example data
      backgroundColor: ["#6EACDA"], // Blue color
    },
  ],
};
export const paymentData = [
  { country: "US", bookings: 120 },
  { country: "UK", bookings: 80 },
  { country: "Canada", bookings: 90 },
  // Additional entries if necessary
];
