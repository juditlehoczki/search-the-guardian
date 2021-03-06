# The Guardian Search

## Demo

<img border="1" style="border-radius:10px;" alt="Search The Guardian Demo" src="./img/search-the-guardian.gif" width="350">

## Local Install

1. Clone repo:<br>`git clone https://github.com/juditlehoczki/search-the-guardian.git`

2. Enter folder:<br>`cd search-the-guardian`

3. Install Expo:<br>`npm install --global expo-cli`

4. Install dependencies:<br>`npm install`

5. Get your [The Guardian API key](https://open-platform.theguardian.com/access/) and create a config.js file in the root of the directory and paste the below code in:<br>

   > `const apiKey = 'your API key' export default apiKey;`

6. Start Expo:<br>`expo start`
7. Make your choice of using an iOS or Android emulator or install the Expo App ([iOS App](https://apps.apple.com/app/apple-store/id982107779), [Android App](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)) to scan the QR code from your physical mobile device.

## Tech Stack

- built in [React Native](https://reactnative.dev/) then converted to an Expo project
- used [Axios](https://www.npmjs.com/package/axios) to send requests to The Guardian's API
- tested with [Jest](https://jestjs.io/)

## An App To Search The Guardian's Articles

App.js is built to be more of a view layer as much as possible to see what the App consists of, meanwhile most functionality of the app is extracted out to their own Components.<br>
The Header and Search sections at the top and Subscribe and Credit sections at the bottom are ones that are always visible.<br><br>
The main section of the App is conditionally rendered:

- The user will see the 5 newest articles and favourite categories if no articles have been searched yet.
- The user will see the first 10 results of a search or chosen category with pagination to be able to get further results.
  Each article is clickable which redirects to the full article on The Guardian's website.

## API requests

Api.js contains a reusable fetchArticles function. It gets used three different ways throughout the app:

- fetch the 5 newest articles of The Guardian
- fetch articles by searched keyword(s)
- fetch articles by chosen category (section)

It can also handle request for a different number of articles and can sort the articles.

## Styles

The styles.js file gives home to a reusable style sheet. The colour scheme is easily changeable if needed.

## Testing

Testing was carried out with Jest.
Tests can be run with: `npm test`

- Components are tested with a snapshot and unit tests that cover basic functionality.
- Mock data is used from the test folder.

## Code Formatting

Prettier is used for code formatting, VSCode is setup to format all files on save.
