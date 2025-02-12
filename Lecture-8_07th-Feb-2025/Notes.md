
# Middleware

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. These functions can perform a variety of tasks such as executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware function in the stack.

## Types of Middleware

1. **Application-level middleware**: Bound to an instance of `express` using `app.use()` or `app.METHOD()`, where `METHOD` is the HTTP method (e.g., `GET`, `POST`).

2. **Router-level middleware**: Works in the same way as application-level middleware, except it is bound to an instance of `express.Router()`.

3. **Error-handling middleware**: Takes four arguments instead of three: `(err, req, res, next)`. This middleware is used to catch and handle errors.

4. **Built-in middleware**: Provided by Express, such as `express.static`, `express.json`, and `express.urlencoded`.

5. **Third-party middleware**: Created by the community and can be installed via npm, such as `body-parser`, `cookie-parser`, and `morgan`.

## Middleware Function

A middleware function is any function that has access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.
