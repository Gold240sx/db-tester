# db-tester

## Purpose:

For the purpose of testing functions of various databases, and forms. This project is for the use of learning, testing both vanilla and npm forms (react-hook-forms) amoungst many different types of databases. The Context for form, database and user is all defined in the diffeent context stores.

## Preview:

<img src="https://i.ibb.co/7j3DYVw/preview.png" alt="preview" border="0">

Live Demo: (This project is currently being built and has not been hosted yet. When a working prototype has been completed, the text you are reading now will be replaced with the live link.


## Setup

create a new .env{database name} file in the project folder for your private db vaiables. Include your variables for that installation. For instance env.firebase Within the file,include:

```
    VITE_API_KEY=xxxxxxxxx
    VITE_AUTH_DOMAIN=xxxxxxx
    VITE_PROJECT_ID=xxxxxxxxx
    VITE_STORAGE_BUCKET=xxxxxxxx
    VITE_MESSAGING_SENDER_ID=xxxxxxxx
    VITE_APP_ID=xxxxxxxxxxx
```

For Supabase include the following:

```
    VITE_SUPABASE_URL=xxxxxxxx
    VITE_SUPABASE_ANON_KEY=xxxxxxxx
```

Notes:

- NPM packages like react-fire can be initialized to access the same firebase env variables.
- For a list of all the database names, see the bottom of this readme in the ##Database section.
- To remove a database that you are not interested in including, remove the import from the App.js file, and remove the database from the database context store.

## Installation

To installl the project, you will need to run the following commands in the terminal:
`npm i, npm run start. `
This will install all the dependencies, and start the project on localhost:3000.
To ensure tailwind is modifying the css on save, run
`npm run tail`

# About this project

## Databases

- firebase
- supabase
- react-fire (NPM package)
  <!-- surreal  (not included yet but considered in the future)  -->
  <!-- - mongodb (not included yet but considered in the future)  -->
  <!-- - postgres (not included yet but considered in the future)  -->
  <!-- - mysql (not included yet but considered in the future)  -->
  <!-- - sqlite (not included yet but considered in the future)  -->
  <!-- - neo4j (not included yet but considered in the future)  -->
  <!-- - redis (not included yet but considered in the future)  -->
  
  ...Surreal, Mongodb, Postgres, mySql, SqLite, Neo4J, redis, and PlanetScale (hopefully) coming eventually.

## Forms

<!-- - vanilla (simple) (not included yet but considered in the future)  -->  

- vanilla (complex)
- react-hook-forms
  <!-- ... expandable in the future -->

## Technologies

- Vite: React
- Tailwind
- Firebase
- Supabase
- React-fire
- React Icons
- React Toastify
- React Hook Form
- React Hook Form Resolver Yup
- React Hook Form Resolver Zod
