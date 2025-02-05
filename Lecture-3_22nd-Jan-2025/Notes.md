# Notes on server.js and index.js Files

## server.js

### Description:
A basic Express.js server setup that handles multiple routes, including a default route for undefined paths.

### Key Features:
1. **Root Route:**
   - Path: `/`
   - Response: "Hello Jaiveer"

2. **About Route:**
   - Path: `/about`
   - Response: "Hello About"

3. **Default Route:**
   - Path: `*` (wildcard to catch all other undefined routes)
   - Response: "404! Page not found"

4. **Server Listening:**
   - Port: `8085`
   - Console Log: "Server is running on port 8085"

### Notes:
- Two wildcard routes (`app.get('*')` and `app.all('*')`) are defined. The second one may be redundant since the first already handles all unmatched routes.
- Use `app.all` for both HTTP methods and unmatched routes to streamline the code.

## index.js

### Description:
An Express.js server demonstrating the use of query parameters for dynamic route responses.

### Key Features:
1. **Root Route:**
   - Path: `/`
   - Response: "Hello Jaiveer"

2. **Search Route:**
   - Path: `/search`
   - Handles query parameters `name` and `age`
   - Logs query parameters to the console
   - Example Query: `/search?name=John&age=25`
   - Converts query parameters to integers using `parseInt()` if required

3. **Mock Database Connection:**
   - Placeholder comment for database logic to filter and fetch data (e.g., MongoDB, MySQL)
   - Response: "Search Result 8" (hardcoded for now)

4. **Server Listening:**
   - Port: `8085`
   - Console Log: "Server is running on port 8085"


