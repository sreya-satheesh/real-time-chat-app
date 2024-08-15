# Real-Time Chat App with React & Appwrite

https://github.com/user-attachments/assets/2df68d1d-da24-4ffb-bdaa-3b8aaa5ac232

This is a real-time chat application built with React and Appwrite. It provides features like user authentication, message sending, and real-time updates using Appwrite.

## Features

- Real-Time Messaging: Users can send and receive messages instantly.
- User Authentication: Secure user login and registration.
- Message Management: Users can delete their own messages.
- Responsive Design: Optimized for both desktop and mobile devices.

## Installation

  - Run npm install to install dependencies

  ### Set Up Appwrite
  
  - Sign in to your Appwrite console.
  - Create a new project.
  - Set up a database and a collection for messages.
  - Note down the following IDs: Database ID, Project ID, Collection ID for Messages
 
  ### Configure Environment Variables
  
  Create a file named .env in the root directory of your project and add the following Appwrite configuration:
  
  - VITE_API_ENDPOINT=https://[YOUR_APPWRITE_ENDPOINT]
  - VITE_PROJECT_ID=[YOUR_PROJECT_ID]
  - VITE_DATABASE_ID=[YOUR_DATABASE_ID]
  - VITE_COLLECTION_ID_MESSAGES=[YOUR_COLLECTION_ID_MESSAGES]

- Run npm run dev to launch the local server
