# MyContacts

MyContacts is a contact management system that allows users to store and manage their contacts. The application consists of a **frontend** built with React and Styled Components, and a **backend** API built with Node.js, Express and PostgreSQL.

The frontend and backend are separated into different directories: `/fe` for the frontend and `/api` for the backend.

### Frontend
- **Frontend** is located in the `/fe` folder.
- It is built using **React** and **Styled Components** for styling.

### Backend
- **Backend** is located in the `/api` folder.
- It is built using **Node.js** and **Express** for handling API routes and requests.
- **PostgreSQL** is used as the database to store the contact data and is run inside a **Docker** container.
- The backend is configured to connect to PostgreSQL running in Docker.

## Features

### Frontend:
- **Contact List**: View all contacts with the ability to search and sort by name.
- **Add Contact**: Form to add a new contact to the list.
- **Edit Contact**: Edit existing contact details.
  
### Backend:
- **API Endpoints** to create, read, update, and delete contacts and categories.
- **PostgreSQL Database**: Stores contact data, running inside a Docker container.
- **Docker Support**: Easy containerization for the PostgreSQL database.

## Technologies Used

### Frontend:
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### Backend:
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Installation

**Clone the repository**:

 ```bash
 git clone https://github.com/DiogoJRC/mycontacts.git
 ```

### Run Backend

```bash
# install deps
$ cd api
$ yarn

# run and create containers
$ docker-compose up

# run the container with database
$ docker start pg

# run API
$ yarn dev
```

The backend API will be available at `http://localhost:3001`.

### Run Frontend

```bash
# install deps
$ cd fe
$ yarn

# start app
$ yarn start
```

The frontend will be available at `http://localhost:3000`.
