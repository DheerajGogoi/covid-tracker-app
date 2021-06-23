# React Native App
## covid-tracker

Tech used:
- React Native, MongoDB, NodeJs, ExpressJs

App's key features:
- Shows Realtime live data of covid cases in various countries and also shows India's state wise covid updates
- User can register him/her self as a donor and help others in need
- People can post requests for plasma donations by entering some personal deatils that takes less than 5 min
- All important emergency numbers are available, just click it and make your call
- This app also redirects users to official COWIN vaccination registration website
- Users can do a quick COVID test by filling some details

Mode of use:
- Clone the project to your pc and open a terminal inside that folder
- In the terminal run
  ### `npm install`
  to install all the dependencies
- Make sure you have expo-cli installed in your system. If not installed, click [here](https://docs.expo.io/get-started/installation/) to get the step by step guide for installing expo-cli on your computer
- Thus after succssfully installing all the dependencies, run this:
  ### `expo start`
- Your app is up and running

Resources used:
- API keys for
  - World's stats: https://api.covid19api.com/summary
  - India's state wise stats: https://api.rootnet.in/covid19-in/stats/latest

For backend, I have created my own REST APIs and before running the project it request the users to replace these lines of code with their own REST APIs, kindly modify the code in the SearchDoners.js, SearchRequests.js, DonerForm.js and RequestForm.js located inside the screen directory
