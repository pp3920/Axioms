Question:  Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?

Answer:  Re-formatting the data helps create a cleaner and simpler response for your client application. The external API may return many properties that your app does not need, such as IDs, source URLs, or metadata.

Benefits of providing a clean, minimal response:

Makes the response easier for frontend developers to use
Reduces unnecessary data transfer
Hides external API structure from your client
Gives you control over the response format
Makes future API changes easier to manage

This is called creating an abstraction layer between your client and the external API.


Question: In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?

Answer: Sending the full Axios error object to the client can expose sensitive or unnecessary information such as:

Internal server details
API URLs
Headers or tokens
Stack traces
Debugging information

Benefits:

Improves security
Prevents leaking sensitive backend information
Keeps responses clean and professional
Gives users understandable error messages

Meanwhile, developers can still log the real error in the console:



Question: How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?

Answer: If the external API supports query parameters like:

?language=de

you could pass the language dynamically from the client request.

