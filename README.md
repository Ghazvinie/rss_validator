# SpeechKit RSS Validator

### An application that tests a submitted RSS feed against certain criteria and provides a visual feedback of the results

SpeechKit clients can submit RSS feeds for processing into audio. These feeds require certain fields for the audio to be processed properly. 

Often clients will mistakenly submit feeds that do not have all the necessary fields causing delays in processing and additional support. 

This application allows clients to confirm that they have all of the necessary fields before submission and therefore reducing any potential for problems further on. 

App functionality:

* A user submits a link
* The app checks if it is a valid url
* The app processes the XML and determines which fields are present and which are missing
* A visual representation of the present and missing fields is provided to the user

Built with:

 - JavaScript
 - ReactJS 17.0.2
 - Node.js 14.18.1 / Express 4.17.1
 - HTML / CSS

For development the client and server need to be started separately, using:

```
$ npm install

$ npm start
```

The application will now be accessible from localhost:5000
