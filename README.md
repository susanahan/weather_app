# Simple Weather App
A simple weather app that displays the weather's forecasts for New York.

*🌡️ ☁️ 🌈 ☀️ ⛅

## The API
To run the app, you need to sign up for a (free) account to access this API. Sign up for an account, click on _Apps_, then _New Application_, and create a new app. You will then be given a client ID and a client secret, which you can include in the URL below.

You will use this URL to access the current weather forecast:

```
http://api.aerisapi.com/forecasts/11101?client_id=CLIENT_ID&client_secret=CLIENT_SECRET
```

If you have trouble signing up or registering an app, you can use [this](http://api.aerisapi.com/forecasts/11101?client_id=i5pHKBD39KOmHRkLoHcSi&client_secret=zjEUHJhnSKZR7yxrfXOU5QtFo3XGiyDjErG59s9M) URL.


## Features 

* Weekly forecast from the week depending on when the user runs the project
* Celsius to Fahrenheit option  
* Forecasted low and high temperatures for each day in the forecast

## SECRETS
In order to properly run this app, you need to create a `.env` file in the root directory. 

Your `.env` file should look something like this:

```
export REACT_APP_WEATHER_SECRET_KEY="XXX";
export REACT_APP_WEATHER_ACCESS_ID="XXX";

```

Start app with `yarn start`</br>

