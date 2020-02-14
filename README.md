# HELP! MY API KEY WORKS FABULOUSLY WITH MY REACT APP WHEN I RUN MY APP LOCALLY, BUT WHAT IF I WANT TO DEPLOY IT?

### ...the internet makes this far too difficult of a question to answer. Soooo how to do you deploy a front end React app while using and hiding API keys?  

1. Deploy your app to Heroku. This is a much less heinous task to google. 

2. Create a .env file and make sure it's in your .gitignore. Your env variable MUST begin with
REACT_APP_, or so random tutorials claim. In your .env file, do this:  

```
REACT_APP_API_KEY=yourkeywithnoquotes

```
_I *think* you need to restart your react app now_

3. Hooray! Now go to the settings of your app in Heroku and enter a key value pair in the "Config Vars" section. The value should be REACT_APP_API_KEY and your API key is the value. 

4. Wherever you wish to use your API key in your app, you can now refer to it as:

```
process.env.REACT_APP_API_KEY

```

Smart magic happens now and your API key is kept safe by Heroku and hidden from github. Now you can go wild. You can put your safely hidden API key in a variable and use it in an API request: 

```
const API_KEY = process.env.REACT_APP_API_KEY;
axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`)
```

The world is your now your oyster! Look at MovieList.js to see this example in context, and enjoy. 

(Would you like to help improve this shitty documentation? Please make a pull request!)