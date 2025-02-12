
# Middleware in Express

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. These functions can perform a variety of tasks such as executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware function in the stack.

## Universal Middleware

Universal middleware is middleware that runs on every request to the server. It is defined using `app.use()` without specifying a path. This middleware is useful for tasks that need to be performed for every request, such as logging, authentication, or setting response headers.

Example:
```javascript
app.use((req, res, next) => {
    console.log('Universal Middleware');
    next();
});
```

## Route-Specific Middleware

Route-specific middleware is middleware that runs only for requests to a specific route or set of routes. It is defined using `app.use(path, middleware)` or `app.METHOD(path, middleware)`, where `METHOD` is the HTTP method (e.g., `GET`, `POST`).

Example:
```javascript
app.use('/payment', verifyOTP, (req, res, next) => {
    console.log('Payment Middleware');
    next();
});
```

## Middleware Function

A middleware function is any function that has access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

## Example: OTP Verification Middleware

In the provided `server.js` file, there is a middleware function `verifyOTP` that checks if the OTP provided in the query parameters is correct. If the OTP is correct, it calls `next()` to pass control to the next middleware function. If the OTP is incorrect, it sends a response indicating that the OTP is not verified.

Example:
```javascript
const verifyOTP = (req, res, next) => {
    if(req.query.otp === '1234') {
        console.log('OTP Verified');
        next();
    } else {
        console.log('OTP Not Verified');
        res.send('OTP Not Verified');
    }
};
```

## Summary

- **Universal Middleware**: Runs on every request.
- **Route-Specific Middleware**: Runs only for specific routes.
- **Middleware Function**: Can execute code, modify request/response objects, end the request-response cycle, and call the next middleware function.
- **Example**: OTP verification middleware checks if the OTP is correct and either passes control to the next middleware or sends a response indicating failure.
