# Food Delivery Customer Profile Project

This project is a web application for managing customer profiles in a food delivery service. It consists of a frontend built with HTML, CSS, and JavaScript, and a backend implemented in Python using Flask, with a MySQL database for data storage.

## Project Structure

```
food-delivery-customer-profile
├── backend
│   ├── app.py
│   ├── database
│   │   ├── connection.py
│   │   └── schema.sql
│   └── requirements.txt
├── frontend
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── README.md
└── .gitignore
```

## Backend

- **app.py**: The main entry point for the backend application. It sets up the Flask web server, defines API endpoints for managing customer profiles, and handles requests and responses.
  
- **database/connection.py**: Manages the connection to the MySQL database. It includes functions to establish a connection and execute queries.

- **database/schema.sql**: Contains the SQL schema for creating the necessary tables in the MySQL database, such as the customer profile table.

- **requirements.txt**: Lists the Python dependencies required for the backend, such as Flask and MySQL connector.

## Frontend

- **index.html**: The main HTML document for the frontend. It contains the structure of the customer profile page, including sections for user information, addresses, and payment methods.

- **styles.css**: Contains the CSS styles for the frontend, defining the layout, colors, fonts, and overall appearance of the customer profile page.

- **script.js**: Contains JavaScript functions for handling user interactions on the frontend, such as adding new addresses or payment methods, and making API calls to the backend.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd food-delivery-customer-profile
   ```

2. **Set up the backend**:
   - Navigate to the `backend` directory.
   - Create a virtual environment and activate it:
     ```
     python -m venv venv
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```
   - Install the required dependencies:
     ```
     pip install -r requirements.txt
     ```

3. **Set up the database**:
   - Create a MySQL database and run the SQL schema in `database/schema.sql` to set up the necessary tables.

4. **Run the backend server**:
   ```
   python app.py
   ```

5. **Open the frontend**:
   - Open `frontend/index.html` in a web browser to access the customer profile interface.

## Usage Guidelines

- Use the frontend interface to manage customer profiles, including adding and editing addresses and payment methods.
- The backend API handles all data operations and communicates with the MySQL database.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.