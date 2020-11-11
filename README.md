# Face-Finder-
Identify faces in pictures using claifia API 

HOW IT WORKS
Enter a image URL containing a face the 
app locates the position of the face on the image.

SETUP

Clone this repo
Run npm install

Create a clarifai account to aquire the API key
Create mySQL database server

Add your database connection information too face_finder_api\server.js
    host     : 'HOSTNAME',
    user     : 'DATABASE USERNAME',
    password : 'DATABASE PASSWORD',
    database : 'DATABASE NAME


You must add your own API key in the face_finder_api\controllers\entries.js file to connect to Clarifai.
  Replace 'API KEY HERE' with the API key from clarifai

Run npm start
