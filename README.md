This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Github User Search
[Search for users on Github](https://dev-fildes.github.io/github-user-search/)

Utilizes the [Github API](https://docs.github.com/en/free-pro-team@latest/rest) with [Octokit/Rest](https://octokit.github.io/rest.js/v18) and [Parse-Link-Header](https://github.com/thlorenz/parse-link-header).

## Setup
1. Clone repository
2. `bundle install`
3. `yarn install`
4. `yarn start`
5. In a browser visit `localhost:3000`

## Future Plans / Improvements
1. Refactor fetch calls to utilize `useCallback` and `useRef`
2. Swap `CSS` files to `Sass` files.
3. Set up API rate-limit error handling. (API search only allows for 30/hour) (In progress)
