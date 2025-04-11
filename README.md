# 🍩 Mobin Donut Website 🍩

This is an interactive website for the **Mobin Donut Tasting Party** event, designed to highlight the shop's delicious donut offerings and showcase event details. Built using **React**, **Tailwind CSS**, and **Model Viewer**, this site provides an engaging user experience with interactive elements. Visitors can explore event details, RSVP for the tasting party, and discover Mobin Donut Shop's unique flavors.

## 🚀 Features

- **Modern UI**: Sleek and intuitive user interface powered by React and Tailwind CSS.
- **Interactive 3D Donut Viewer**: Explore donuts in 3D using Model Viewer.
- **API Integration**: Fetch donut data from a mock API.
- **Dynamic Cart Logic**: Built a functional shopping cart allowing users to add/remove donuts to/from the cart, update quantities of items in the cart and view the total price in real-time.

## 📝 How to Run the Project Locally

- **Install Dependencies**: npm install
- **Start the Server**: npm run dev
- **Start the JSON Server (API)**: npm run server

## 📝 Challenges and overcome

One of the most interesting technical challenges was hosting the site while ensuring the mock API worked in a real environment:

- **Problem**
  This approach bypassed the hosting limitations (my provider, hostpapa🫠, didn’t support custom ports) while keeping the user experience smooth and fully functional.

- **Solution**
  I deployed the mock API on Glitch, creating a real, accessible online endpoint that enabled full data fetching without uploading everything to my own domain.
