Mind-Connect

This repository contains the code for Mind-Connect, a Node.js and Express application.

Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine. You can download them from nodejs.org.
- Yarn package manager installed. You can install Yarn by running the following command:

  npm install -g yarn

Getting Started

To set up and run this project locally, follow these steps:

1. Clone the repository:

   git clone https://github.com/Aperson402/my-app.git

2. Navigate to the project directory:

   cd my-app

3. Install the dependencies using Yarn:

   yarn install

4. Run the application:

   yarn start

   By default, the server will start on port 10000. You should see the message "Server is running on http://localhost:10000" in the terminal.

Usage

Access the Application
Open a web browser and go to [http://localhost:10000](http://localhost:3000) to access the application.

API Endpoints
The following API endpoints are available:

- Register a new user:
  - Endpoint: /register
  - Method: POST
  - Body: { "username": "your-username", "password": "your-password" }

- Sign in a user:
  - Endpoint: /signin
  - Method: POST
  - Body: { "username": "your-username", "password": "your-password" }

- List all users:
  - Endpoint: /list-users
  - Method: GET

- Clear all users (Admin only):
  - Endpoint: /clear-users
  - Method: POST
  - Body: { "username": "admin", "password": "adminpassword" }

- List all posts:
  - Endpoint: /list-posts
  - Method: GET

- Add a new post (Admin only):
  - Endpoint: /add-post
  - Method: POST
  - Body: { "title": "Post Title", "content": "Post Content", "username": "admin", "password": "adminpassword" }

- Delete a post (Admin only):
  - Endpoint: /delete-post/:id
  - Method: DELETE
  - Body: { "username": "admin", "password": "adminpassword" }

- Clear all posts (Admin only):
  - Endpoint: /clear-posts
  - Method: POST
  - Body: { "username": "admin", "password": "adminpassword" }

Project Structure
- server.js: Main server file.
- Static Code/: Directory containing HTML, CSS, and JavaScript files.

Contributing
If you would like to contribute, please fork the repository and create a pull request.

License
This project is licensed under the ISC License. See the LICENSE file for more details.
