# Simple Weather App
A simple weather app that displays the weather's forecasts for New York. <br>
I used React, Moment.js and axios. 

🌡️ ☁️ 🌈 ☀️ ⛅

## The API
To run the app, you need to sign up for a (free) account to access this API. Sign up for an account, click on _Apps_, then _New Application_, and create a new app. You will then be given a client ID and a client secret, which you can include in the URL below.

You will use this URL to access the current weather forecast:

```
http://api.aerisapi.com/forecasts/11101?client_id=CLIENT_ID&client_secret=CLIENT_SECRET
```

If you have trouble signing up or registering an app, you can use [this](http://api.aerisapi.com/forecasts/11101?client_id=i5pHKBD39KOmHRkLoHcSi&client_secret=zjEUHJhnSKZR7yxrfXOU5QtFo3XGiyDjErG59s9M) URL.


## Features 

* Weekly forecast from the week depending on when the user runs the project
* Fahrenheit to Celsius option  
* Forecasted low and high temperatures for each day in the forecast

## *SECRETS
In order to properly run this app, you need to create a `.env` file in the root directory. 

Your `.env` file should look something like this:

```
export REACT_APP_WEATHER_SECRET_KEY="XXX";
export REACT_APP_WEATHER_ACCESS_ID="XXX";

```
## Deploy
Git clone the project <br>
`npm install` or `npm i` to install the things needed to run the app <br>

Start app with `yarn start` or `npm start`</br>
I recommend `yarn start` <br> 

### installing yarn

If you have homebrew, type in your terminal  `brew install yarn`<br>
Anything else please look at yarn's [documentation](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
