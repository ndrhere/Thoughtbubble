# ThoughtBubble

## Overview
ThoughtBubble is a full stack application that allows users to create an account and save their daily diary entries. Users can add various tags to their diary entries, such as day, eating habits, favorite person of the day, important events, waking time, and sleeping time. They can also update and delete their diary entries and view their saved diaries under the "Your Diaries" section.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- React

## Features
- User Authentication: Users can create an account and log in to securely access their diary entries.
- Diary Creation: Users can create new diary entries by providing various details like day, eating habits, favorite person of the day, important events, waking time, and sleeping time.
- Diary Update and Deletion: Users have the ability to update and delete their existing diary entries.
- Diary Tagging: Users can add tags to their diary entries, making it easier to categorize and search for specific entries.
- Your Diaries: Users can view their saved diary entries in a dedicated section.

## Installation

1. Clone the repository:
git clone https://github.com/ndrhere/ThoughtBubble.git
2. Install dependencies for the server:
cd ThoughtBubble
npm install
3. Install dependencies for the client:
cd client
npm install
4. Set up MongoDB:
- Install MongoDB on your system if not already installed.
- Create a new MongoDB database.
- Update the database configuration in the `config/database.js` file.

5. Start the application:
npm run dev
This will start the server and client concurrently.

6. Access the application in your browser at `http://localhost:3000`.

## Usage
1. Create a new account or log in with your existing credentials.
2. Navigate to the "Create Diary" page to create a new diary entry.
3. Fill in the required details and add appropriate tags to categorize your diary entry.
4. Save the diary entry.
5. To update or delete a diary entry, navigate to the "Your Diaries" section and select the respective option.
6. Explore and manage your diary entries using the provided features.

