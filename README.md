
# BestBuddies Backend

BestBuddies is a platform to find trusted travel buddies, create travel plans, join trips, and explore destinations together. This repository contains the backend API, built with Node.js, Express, and MongoDB.


## Features

- **User Authentication**: Signup, login, JWT-based authentication.  
- **Travel Plans**: Create, update, delete, and view travel plans.  
- **Buddy Requests**: Send, accept, and decline travel buddy requests.  
- **Reviews & Ratings**: Users can review trips and rate buddies.  
- **Real-time Notifications**: Notify users about requests, trip updates, and more.  
- **Role-based Access**: Admin and regular user permissions.  


## Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose ORM)  
- **Authentication**: JWT (JSON Web Token)  
- **Validation**: Joi or express-validator  
- **Realtime Updates**: Socket.io (optional)  
- **Environment Management**: dotenv  

---

## API Endpoints

> Base URL: `http://localhost:5000/api`

### Auth
| Method | Endpoint           | Description                  |
|--------|------------------|------------------------------|
| POST   | `/auth/register`  | Register a new user           |
| POST   | `/auth/login`     | Login and receive a token     |

### Users
| Method | Endpoint              | Description                    |
|--------|---------------------|--------------------------------|
| GET    | `/users/:id`         | Get user by ID                 |
| PUT    | `/users/:id`         | Update user profile            |
| DELETE | `/users/:id`         | Delete user                    |

### Travel Plans
| Method | Endpoint               | Description                     |
|--------|----------------------|---------------------------------|
| GET    | `/plans`             | Get all travel plans            |
| POST   | `/plans`             | Create a new travel plan        |
| GET    | `/plans/:id`         | Get single travel plan          |
| PUT    | `/plans/:id`         | Update travel plan              |
| DELETE | `/plans/:id`         | Delete travel plan              |

### Buddy Requests
| Method | Endpoint                  | Description                     |
|--------|-------------------------|---------------------------------|
| POST   | `/buddies/request`      | Send a buddy request             |
| PUT    | `/buddies/accept/:id`   | Accept buddy request             |
| PUT    | `/buddies/decline/:id`  | Decline buddy request            |

---

## Getting Started

### Prerequisites

- Node.js v16+  
- MongoDB (Atlas or local)  
- npm or yarn  

### Installation

1. Clone the repo:

```bash
git clone https://github.com/Imranahmed935/BestBuddies-backend.git
cd BestBuddies-backend
````

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create `.env` file (see below) and set your environment variables.

4. Run the server:

```bash
npm run dev
# or
yarn dev
```

Server will start at `http://localhost:5000`

---

## Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret Key>
NODE_ENV=development
```

---

## Folder Structure

```
BestBuddies-backend/
├─ controllers/       # Route controllers
├─ models/            # Mongoose schemas
├─ routes/            # Express routes
├─ middlewares/       # Authentication & error handling
├─ utils/             # Helper functions
├─ config/            # Database & config files
├─ app.js             # Express app
├─ server.js          # Server start
└─ package.json

## Author

**Imran Ahmed**

* GitHub: [https://github.com/Imranahmed935](https://github.com/Imranahmed935)
* Email: [imrantahir9918@gmail.com](mailto:imrantahir9918@gmail.com)



