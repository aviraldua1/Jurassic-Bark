# Jurassic-Bark
A simple chatbot that searches for some pup-arazzi of doggos, and tells their popularity

Steps to run the application:

1. CD into folder with Dockerfile.
2. docker pull mongo
3. docker run -p 27017:27017 --name some-mongo mongo
4. docker build -t jurassic-bark .
5. docker run -p 8080:8080 jurassic-bark


NOTE: Due to firewall issues, Docker connection from node to mongo might give ECONNECT-REFUSED error. In that case, Skip steps 4 and 5,
and just type: npm start
