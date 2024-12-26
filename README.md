## 📸 Screenshots
Below are screenshots of the application:

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/a4c979c5-9204-4efd-a246-c7aa22760ef6" alt="Screenshot 158" /></td>
    <td><img src="https://github.com/user-attachments/assets/8ab48519-9a3e-4d52-82f1-7f6b37ae6c7d" alt="Screenshot 157" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/9bb61f82-9ef8-40e0-aa64-c57e4bea19d7" alt="Screenshot 156" /></td>
    <td><img src="https://github.com/user-attachments/assets/d3224f24-987d-494a-879b-a8d13fdecd3d" alt="Screenshot 153" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/22d46d45-19e8-41c2-9e93-eba15587841e" alt="Screenshot 159" /></td>
  </tr>
</table>


# Assignment Client

## 🌐 Project Overview
This client-side application is designed as part of the assignment to re-create a Figma-based UI with efficient state management and seamless integration with a Supabase backend. The project emphasizes responsive design, reusable components, and a consistent user experience.

## 🍕 Features
- **Figma Design Re-Creation**: Pixel-perfect implementation of the provided Figma design.
- **Header & Navigation**: Responsive header with basic navigation.
- **Reusable Components**: Cards and sections built for reusability and scalability.
- **Global State Management**: Handled with Redux, incorporating data fetching, CRUD operations, and seamless API integration.
- **Styling**: TailwindCSS with optional ShadCN for additional UI polish.

## ⚙ Technology Stack
- **Frontend Framework**: React with Vite for faster development.
- **State Management**: Redux (RTK Query) for managing global state.
- **Styling**: TailwindCSS with optional ShadCN for enhanced UI components.
- **API Integration**: Fetches data from Supabase and integrates seamlessly with Redux.

## 🌐 Server Deployment
The server-side application is live and can be accessed at:

[Live API](https://assignmentserver-r6wt.onrender.com)

## 🌐 Client Deployment
The client-side application is live and can be accessed at:

[Live Demo](https://assignmentdeveshcse.netlify.app/)

## 🚀 Getting Started

### Installation and Setup
1. Clone the repository:

```bash
git clone https://github.com/deveshcse/assignmentclient.git
cd assignment-client
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

Create a `.env` file in the root directory and add the following:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_API_KEY=your_supabase_api_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open the application in your browser:

```
http://localhost:3000
```


# Assignment Server

## 🌐 Project Overview
This server-side application is a Node.js backend developed to handle API requests, manage database interactions, and provide data for the client application. It utilizes Prisma ORM for efficient database management and integrates with Supabase for real-time data operations.

## 🍕 Features
- **Supabase Integration**: Connects with Supabase for database operations.
- **CRUD Operations**: API routes for creating, reading, updating, and deleting the student records.
- **Prisma ORM**: Simplified and efficient database interactions.
- **Environment Variables**: Secure handling of sensitive data like Supabase API keys.

## ⚙ Technology Stack
- **Backend Framework**: Node.js with Express.
- **Database**: Supabase for cloud-hosted PostgreSQL.
- **ORM**: Prisma for schema management and efficient database queries.

## 🌐 Server Deployment
The server-side application is live and can be accessed at:

[Live API](https://assignmentserver-r6wt.onrender.com)

## 🌐 Client Deployment
The client-side application is live and can be accessed at:

[Live Demo](https://assignmentdeveshcse.netlify.app/)



## 🚀 Getting Started

### Installation and Setup
1. Clone the repository:

```bash
git clone https://github.com/deveshcse/assignmentserver.git
cd assignment-server
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

Create a `.env` file in the root directory and add the following:

```
PORT=4000
DATABASE_URL=your_supabase_database_url
SUPABASE_API_KEY=your_supabase_api_key
```

4. Run database migrations:

```bash
npx prisma migrate dev
```

5. Start the server:

```bash
npm start
```

The server will run at:

```
http://localhost:4000
```

## 📚 API Endpoints
- **GET /allstudents**: Fetch all students record from the database.
- **POST /addnewstudent**: Create a new student record.
- **PUT /updatestudent/:id**: Update an existing user record.
- **DELETE /deletestudent/:id**: Delete an student record by ID.

## 📝 License
This project is licensed under the MIT License.

---
Feel free to explore the server and its functionality!
