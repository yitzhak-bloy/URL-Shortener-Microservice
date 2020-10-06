# URL-Shortener-Microservice

User Story:
1. I can POST a URL to [project_url]/api/shorturl/new and I will receive a shortened URL in the JSON response.
Example : {"original_url":"www.google.com","short_url":1}<br />
2. If I pass an invalid URL that doesn't follow the http(s)://www.example.com(/more/routes) format, the JSON response will contain an error like {"error":"invalid URL"}
HINT: to be sure that the submitted url points to a valid site you can use the function dns.lookup(host, cb) from the dns core module.<br />
3. When I visit the shortened URL, it will redirect me to my original link.


This project was done as part of the freeCodeCamp curriculum for the APIs and Microservices certificate.<br />
See here: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice
