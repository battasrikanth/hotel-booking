HOTEL BOOKING WEB APPLICATION
-----------------------------

PROJECT OVERVIEW:
This is a full-stack web application designed for booking hotel rooms. It supports three types of users: Customers, Vendors, and Admins. Each user type has access to a customized dashboard. The application provides room listings, user authentication, and vendor management features.

-----------------------------
TECH STACK:
Frontend:
- React JS
- React Router DOM
- React Hooks (useState, useEffect, useContext)

Backend:
- Java
- Spring Boot (MVC Architecture)
- Spring Data JPA

Database:
- Oracle DB

-----------------------------
FEATURES:

1. USER AUTHENTICATION:
   - Separate login and signup for Customers, Vendors, and Admins.
   - Secure credential storage and session handling.

2. CUSTOMER DASHBOARD:
   - Browse available rooms.
   - View room details with images and amenities.
   - Book or like rooms.
   - Manage bookings.

3. VENDOR DASHBOARD:
   - Add new rooms with details and images.
   - Update room availability and pricing.
   - View customer bookings.

4. ADMIN DASHBOARD:
   - Monitor platform activity.
   - View registered users (vendors/customers).
   - Moderate listings and vendor performance.

5. ROOM DATA:
   - Real-world room image URLs.
   - Google Maps links for location visualization.
   - Amenities, pricing, and room type included.

-----------------------------
DATABASE STRUCTURE:

- USERS TABLE: Stores user login and profile info.
- ROOMS TABLE: Stores room details including vendorId.
- ROOM_IMAGE TABLE: Stores multiple images per room.
- BOOKINGS TABLE: Tracks customer bookings.
- LIKED_ROOMS TABLE: Optional, for saving favorite rooms.

-----------------------------
SETUP INSTRUCTIONS:

1. Clone the repository.
2. Set up Oracle DB with necessary schema and seed data.
3. Backend:
   - Open in any Spring Boot-compatible IDE (like IntelliJ or Eclipse).
   - Configure `application.properties` with your DB credentials.
   - Run the Spring Boot application.

4. Frontend:
   - Navigate to the React project folder.
   - Run `npm install` to install dependencies.
   - Run `npm start` to launch the frontend.

-----------------------------
FUTURE ENHANCEMENTS:
- Payment Gateway Integration
- Email confirmations and notifications
- Advanced filtering (price, amenities, location)
- Vendor verification and rating system

-----------------------------
DEVELOPER INFO:
Built with ❤️ by Sree

