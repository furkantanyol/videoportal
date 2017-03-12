# videoportal

## Table of contents
	•	Introduction
	•	Features
	•	Installation
	•	App Flow
	•	Conclusion

## Introduction
	
The Video Portal Web Application consists of 2 parts which are the back-end project given and the front-end project created by me from scratch:

	•	/video_portal_api-master  —>  back-end project
	•	/videoportal —> front-end project

In the front-end part of the project my aim was to implement a very simple and user-friendly video portal for the users where they can login with their credentials and get access to the videos in the portal quickly. 

## Features

	•	A single page application by using AngularJS framework developed.
	•	Simple, easy-to-use UI designed motivated by the provided visuals.
	•	User authentication implemented. Content of this application not visible to public.
	•	User can see video listings on index page. Only first 10 videos are loaded initially.
	•	Lazy loading implemented with a loading spinner i.e. More videos should appear as the user scrolls down the listing.
	•	Users can play 1 video simultaneously. Playing a video pauses all other videos.
	•	Users can see the average ratings of the videos in the index page and rate the videos in the detail page.
	•	Users can open the video details page by clicking on video title.
	•	REST API consumed using Restangular framework. (https://github.com/mgonto/restangular)
	•	Unit tests with more than 50% code coverage provided.
	•	Code well documented by comments.
	•	Exception handling done, where necessary.
	•	Code should well organized into files and folders.
	•	UI design clean and polished.
	•	UI is cross-browser compatible.
	•	UI is cross-device compatible.

## Installation

	•	Pre-requisites:
	    ⁃   Client: npm, AngularJS, Grunt, Karma (test)
	    ⁃	Server: NodeJS and npm, express, body-parser, morgan, mongoose, MongoDB

	•	Server Side:
	    ⁃	Download video_portal_api-master from Crossover. 
	    ⁃	Create the folder /data in video_portal_api-master.
	    ⁃	In the /bin folder of your MongoDB directory, from the terminal, run:
			`$ mongod --dbpath /videoportal-api-path/video_portal_api-master/data/`
	    ⁃	In the video portal api path  `./video_portal_api-master` :
	    ⁃	Run `$ npm install` to download npm packages.
	    ⁃	Run `$ npm start` to start the backend API.
	    ⁃	By Default the backend will start web server on `http://localhost:3000/`

	•	Client Side:
	    ⁃	Download videoportal from the zip file I uploaded. 
	    ⁃	In the video portal client path  ./videoportal :
	    ⁃	Run `$ npm install` to download npm packages.
	    ⁃	Run `$ bower install` to download bower packages.
        ⁃	Make sure Access-Control-Allow-Origin' header is present on the requested resource. I am enabling cross-origin resource sharing with the CORS Chrome Extension.
        ⁃	Test Environment: Run `$ grunt test` to run unit tests.
        ⁃	Dev Environment: Run `$ grunt serve` to start the client app in development mode, by default http://localhost:9000/.
        ⁃	Prod Environment: Run `$ grunt build` to build the client app in the dist folder and open index.html with your browser.
## App Flow

	•	User first enter his/her username and password to login
	•	After successful login he/she is redirected to the portal page where he/she can see and watch the videos and see their ratings and part of their descriptions.
	•	When the click the title of the videos they are redirected to the video detail page where they can watch the selected video in bigger screen, rate the videos & read full descriptions.
	•	While in the detail page, users can go back simply by clicking the back button on the top left corner.
	•	In the portal screen, users can easily logout from the app using the Logout button on the top right corner of the screen.

## Conclusion

	As a result, with respect to the back-end of the video portal app, I created a client using AngularJS framework & Yeoman Angular Generator. I used HTML & CSS to create the UI components and Javascript to work with controllers. I used Karma & Jasmine for unit testing.