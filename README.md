![ClearView Header Image](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/EQ_Logo.png)

- - - -


# About EQ

EQ is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to explore and manage a collection of audio equipment. The application provides CRUD (Create, Read, Update, Delete) functionality for headphones and audio other items, along with additional features such as image uploads, filtering, a chat bot and a cart with checkout functionality.

## Built With
### Frontend
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)](https://react.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
[![ReactBootstrap](https://img.shields.io/badge/ReactBootStrap-41E0FD?style=for-the-badge&logo=reactbootstrap&logoColor=black)](https://react-bootstrap.netlify.app/)
[![ReactRouter](https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white)](https://reactrouter.com/en/main)
### Backend
[![NodeJS](https://img.shields.io/badge/NodeJS-5FA04E?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/lp/cloud/atlas/try4-reg?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_emea-za_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624560&adgroup=115749711783&cq_cmp=12212624560&gad_source=1&gclid=Cj0KCQjwm5e5BhCWARIsANwm06iaJRATCRDoXA4gID4BnJFgLh2T8-Ema018Hvw6DYFQotXuVd9rm1caAk3sEALw_wcB)
[![Express](https://img.shields.io/badge/Express-010409?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-F04D35?style=for-the-badge&logo=mongoosedotws&logoColor=white)](https://mongoose.ws/)



## How To Install
Prerequisites
```
Node.js (version 20.18.0 or later)
```
```
MongoDB (either locally or via a cloud provider like MongoDB Atlas)
```
```
Git or Github
```
```
A code editor (e.g., Visual Studio Code, Sublime Text)
```
Step 1 clone the repo:
```
git clone https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment
```
Step 2: Set up environment variables
```
MONGODB_URI=your_mongodb_connection_string 
PORT=5000 (or any other port)
```

Step 3: Install Backend Dependencies in Terminal
```
cd backend
```
```
npm install (bcrypt, cors, dotenv, express,mongoose, multer)
```
Step 4: Install frontend dependencies in New Terminal
```
cd frontend
cd audio_commerce
```
```
npm install( axios, react-bootstrap, react-bootstrap-icons, react-fast-marquee )
```
Step 5: Start the backend and the frontend servers separately with
```
npm run start
```
Step 6: Open the app in the browser
```
Once both the backend and frontend servers are running, open your browser and navigate to `http://localhost:3000` to access EQ.
```


## Features

| Page                  | Description                                                          |
| --------------------- | --------------------------------------------------------------       |
| Login / Signup Page   | - Allows all users to create a profile                               |
|                       | - Provides login functionality for registered users                  |
| Home Page             | - Allows Users to see a list of the 3 top products on the website    |
|                       | - Shows a product highlight to users                                 |
| Products Page         | - Shows a list of all products posted                                |
|                       | - Allows users to filter products by price, and product category     |
|                       | - Allows users to sort products by fields such as latest, newest etc |
|                       | - Allows users to add products to cart                               |
|                       | - Allows Users to view wishlisted items                              |
| Single Products Page  | - Allows users to view the information of a single product           |
|                       | - Allows Users to add products to wishlist                           |
|                       | - Allows Users to add products to wishlist/ like item                |
|                       | - Allows Users to leave reviews on single products                   |
| Community Page        | - Allows logged in users to post new products                        |
|                       | - Allows users to view all the products they've listed               |
|                       | - Allows users to edit and delete their listings                     |
|Deliveries (admin only)| - Allows admins to view all the orders placed by users               |
|                       | - Allows admins to update orders to delivered                        |
| Cart Page             | - Allows users to edit the products in their cart                    |
|                       | - Allows users to edit and delete the items in their cart            |
|                       | - Allows users to check out items in their cart                      |


## UI Design
### Home Page
![Home Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Home_1.png)
![Home Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Home_2.png)
![Home Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Home_3.png)
![Home Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Home_4.png)

### Products Page
![Products Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Products_1.png)
![Products Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Products_2.png)
![Products Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Products_3.png)
![Products Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Products_4_Wishlist.png)

### Single Product Page
![Single Product Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_SingleProduct_1.png)
![Single Product Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_SingleProduct_2.png)
![Single Product Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_SingleProduct_3.png)

### Community Page
![Community Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Community_1.png)
![Community Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Community_2.png)
![Community Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Community_3.png)
![Community Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Community_4_Modal.png)

### Cart Page
![Cart Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Cart_1.png)

### Deliveries Page
![Deliveries Page](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/UI_Designs/UI_Design_Deliveries_1.png)

## Development Process
![Home Mockup](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/Mockups/Mockup_Home.png)
![Product Mockup](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/Mockups/Mockup_Products.png)
![Community Mockup](https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment/blob/main/frontend/audio_commerce/src/assets/readme_assets/Mockups/Mockup_Community.png)

### Highlights
* Clean and minimmalistic UI designed to express professionalism and quality
* Community driven marketplace


### Challenges
* Implementing image handling in products was challenging
* Linking the products into the cart and then into the Deliveries page was challenging to do effectively
* Creating the chat bot posed challenges

## Future Implementations
* Increase Admin functionality - allow admins to moderate products being posted and reviews
* Expand filtering to include more fields, such as brand 

## Mockups



## Demonstration
- The link below is to google drive version of a recording where I showcase and explain some of the key features of this website
https://drive.google.com/file/d/1qmlwQhS2ZC6EjtQgAep3ItXi4ZXZ1I_q/view?usp=sharing

- The link below is a video demonstration of our chat bot feature
https://drive.google.com/file/d/12Q5gW5YsGZ-mnOOL3TJZ5DBwP0nqLaBY/view?usp=sharing 


## Credits

This project was developed by Ngozi Ojokwu, Mwape Kurete, Lebogang Hlongwwane, Kurt Schwimmbacher as an assignment for Open Window DV200.

### License
[MIT](LICENSE) © Kurt Schwimmbacher, Ngozi Ojokwu, Mwape Kurete, Lebogang Hlongwane.

### Author
Kurt Schwimmbacher - 231002@virtualwindow.co.za
Mwape Kurete -231115@virtualwindow.co.za
Ngozi Ojokwu - 231285@virtualwindow.co.za
Lebogang Hlongwane - 231214@virtualwindow.co.za

### Contribution
In order to contribute to this project, clone the project according the instructions layed out above and create a new branch.
