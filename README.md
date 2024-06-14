# EQ - A headphone-themed MERN CRUD Application

## Video Explanation
- The link below is to google drive version of a recording where I showcase and explain some of the key features of this website


## Overview

EQ is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to explore and manage a collection of audio equipment. The application provides CRUD (Create, Read, Update, Delete) functionality for headphones and other items, along with additional features such as image uploads, filtering, a chat bot and a cart with checkout functionality.

## Features

- **CRUD Operations**: Users can create, read, update, and delete plant items.
- **Image Uploads**: Users can upload images for each plant item.
- **Filtering and Sorting**: Users refine their products page by sorting and filtering the products bases on factors such as price or category.
- **Responsive Design**: The application is designed to be responsive and accessible across different devices and screen sizes.

## Setup and Installation

1. **Clone the Repository**: 
git clone https://github.com/KurtSchwimmbacher/DV200T2IndAssessment.git

2. **Backend Setup**:
- Navigate to the `backend` directory:
  ```
  cd DV200T2GroupAssignment/backend
  ```
- Install dependencies:
  ```
  npm install mongoose
  npm install express
  npm install nodemon
  npm install dotenv
  npm install multer
  npm install path
  npm install bcrypt
  npm install cors
  ```
- Create a `.env` file and add your MongoDB connection string:
  ```
  MONGODB_URI=your_mongodb_connection_string
  ```
- Start the backend server:
  ```
  npm start
  ```

3. **Frontend Setup**:
- Navigate to the `frontend` directory:
  ```
  cd  DV200T2GroupAssignment/frontend/audio_commerce
  ```
- Install dependencies:
  ```
  npm install react-bootstrap
  npm install axios
  npm install react-router-dom
  ```
- Start the React development server:
  ```
  npm start
  ```

4. **Open the Application**:
- Once both the backend and frontend servers are running, open your browser and navigate to `http://localhost:3000` to access EQ.

## Technologies Used

- **Backend**:
- Node.js
- Express.js
- MongoDB
- Mongoose
- **Frontend**:
- React
- Axios
- React Router
- React Bootstrap
- **Styling**:
- CSS (with optional frameworks like Bootstrap or Material-UI)

## Usage

1. **Explore Products Collection**:
- Browse through the list of product items.
- Click on a product item to view its details.

2. **Add New Product**:
- Click on the "Community" tab to create a new product item.
- Fill out the required fields and upload an image.

3. **Update Product**:
- On the Community Page navigate to the listings button.
- Once the modal is open click edit.
- Fill out the details to finish editing a product.

4. **Delete Product**:
- On the Community Page navigate to the listings button.
- Once the modal is open click Delete.

5. **Filter and Sort**:
- The filters tabs to control catgeory and price for the products list
- Use the sort drop down to control the sorting of products

6. **Adding to cart**:
- On the Single Products page click the add to cart button to add products to cart

7. **Updating Cart**:
- On the Single Products page click the add to cart button to add products to cart
- 



## Credits

This project was developed by Ngozi Ojokwu, Mwape Kurete, Lebogang Hlongwwane, Kurt Schwimmbacher as an assignment for Open Window DV200. 

## License

This project is licensed under the [MIT License](LICENSE).
