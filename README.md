
# MERN Stack Email Scheduler

This is a MERN stack application for scheduling and sending emails using ReactFlow for the frontend, and Agenda and Nodemailer for the backend.

## Features

- Schedule emails to be sent after a specified delay.
- Immediate email sending if no delay is provided.
- Visualize email scheduling using ReactFlow.

## Prerequisites

- Node.js (v14 or later)
- MongoDB
- npm or yarn

## Getting Started

### Clone the repository

```bash
git clone <repository_url>
cd mern-email-scheduler
```

### Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

### Set up environment variables

Create a `.env` file in the root of your project and add the following variables:

```env
MONGODB_URL=mongodb://localhost:27017/your_db_name
USER=your_email@gmail.com
PASS=your_email_password
```

### Run MongoDB

Make sure your MongoDB server is running.

### Run the server

```bash
node server.js
```

### Run the client

Navigate to the `client` directory and start the React application:

```bash
cd client
npm start
```

or

```bash
cd client
yarn start
```

## Project Structure

```
mern-email-scheduler/
├── client/               # React frontend
│   ├── public/
│   └── src/
├── server/
│   ├── controllers/
│   │   └── emailController.js
│   ├── db/
│   │   └── model.js
│   ├── routes/
│   │   └── emailRoutes.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Usage

### Schedule an Email

1. Open the React application in your browser.
2. Connect nodes by dragging from one node to another.
3. Fill out the email form with recipient details, subject, body, and delay time in minutes.
4. Submit the form to schedule the email.

### Immediate Email Sending

If no delay time is provided, the email will be sent immediately.

## API Endpoints

### Send Email

**POST** `/api/emails/sendemail`

**Body:**

```json
{
  "to": "recipient@example.com",
  "subject": "Email Subject",
  "text": "Email Body",
  "time": "delay in minutes" // Optional, if provided the email will be scheduled
}
```

## Technologies Used

- **Frontend:** React, ReactFlow
- **Backend:** Node.js, Express.js, Agenda, Nodemailer
- **Database:** MongoDB

