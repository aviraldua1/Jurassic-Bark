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


#Conversational-AI
1. Install ngrok.
2. CD into ngrok folder, and type ./ngrok http 8080
3. Copy the https URL , lets say (xyz.com)
4. Link to the Chat-Bot : https://cai.tools.sap/aviraldua/jurassic-bark/train/intents
5. Go to Build -> Dog-pictures -> Actions
6. Replace webhook URL with (xyz.com/cai)
7. Go to Build -> popularity -> Actions
8. Replace webhook URL with (xyz.com/cai/mvp)


#List of utterances:
1. Show me pictures of bulldog
2. Show pictures of Corgi
3. How popular is Corgi
4. How famous is dane
