### HELP! MY API KEY WORKS FABULOUSLY WITH MY REACT APP WHEN I RUN MY APP LOCALLY, BUT WHAT IF I WANT TO DEPLOY IT?
#### ...the internet makes this far too difficult of a question to answer. Soooo how to do you deploy a front end React app while using and hiding API keys?

### OPTION ONE: The easy way
**Disclaimer: When you're deploying an app with secret keys, you should probably use a backend. If you use the following approach, your keys are always going to be discoverable in your front end code.**

Buuut you know what, maybe sometimes that's ok. Maybe you just want to deploy a little toy app that uses an open API for a live demo to toss in your portfoilo, to give a talk, or to impress your friends. I'm not sure how catastrophic it would be for someone to steal my free API key. Mostly I would wonder why they don't just get their own-- it's free! But anyway, make this decision for yourself; you've be warned! 

1. Deploy your app to Heroku. This is a much less heinous task to google.

2. Create a .env file and **make sure it's in your .gitignore**. Your env variable MUST begin with REACT_APP_, or so random tutorials claim. In your .env file, do this:

``` REACT_APP_API_KEY=yourkeywithnoquotes ```

3. Restart your app

4. Hooray! Now go to the settings of your app in Heroku and enter a key value pair in the "Config Vars" section. The value should be REACT_APP_API_KEY and your API key is the value.

5. Wherever you wish to use your API key in your app, you can now refer to it as:

``` process.env.REACT_APP_API_KEY ```

Now you can go wild!!! Put your API key in a variable and use it in an API request:

```
const API_KEY = process.env.REACT_APP_API_KEY;
axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`)
```
The world is your now your oyster! Look at MovieList.js to see this example in context, and enjoy.

### OPTION TWO: Setting up the smallest backend possible to hide away those secrets
1. Create a server.js file in the root of project
2. Install express: 

```npm install express```

3. Install a cors package to prevent annoying CORS errors 

```npm install cors```

3. See the server js file in this app for example code 


(Would you like to help improve this shitty documentation? Please make a pull request!)