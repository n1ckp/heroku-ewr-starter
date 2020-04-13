# heroku-express-webpack-react-starter

This codebase is a skeleton app, intended for anyone who wants to avoid boilerplate code setup when launching a modern Node.js React app on Heroku.

Working, deployed example: https://nameless-shore-89737.herokuapp.com/

Main technologies used are as follows:
- Express
- Webpack
- React
- TypeScript
- Heroku

### Local Development

1. [server terminal] `make server`
2. [client teriminal] `make client`
3. Go to localhost:3000 in your browser

### Deploy to Heroku

1. Ensure you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed (and a Heroku account!)
2. Ensure you are logged in to Heroku by typing `heroku login` in a terminal
3. At the root of your repo, run `heroku create`
4. Run `git push heroku master`
5. Run `heroku open` and you should see the built app on your deployed Heroku dyno
