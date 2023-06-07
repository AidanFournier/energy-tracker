<h1 align="left">OctoSave</h1>
<h3 align="left">Using personal data from Kraken Technologies, users can track their personal energy usage at home, compete with their friends, and earn incentives.</h3>

![Loading Screen](https://github.com/AidanFournier/energy-tracker/assets/78288118/01229d27-5f44-4d12-9082-7cbbc3c3572e)
![Home Page](https://github.com/AidanFournier/energy-tracker/assets/78288118/0a39e7f6-9f0b-468d-98eb-321c766839a3)
![Friends League](https://github.com/AidanFournier/energy-tracker/assets/78288118/c30b3a6e-de14-4e08-af73-9f85b746c404)
![Stats Page](https://github.com/AidanFournier/energy-tracker/assets/78288118/f4625800-c0e5-4fd6-bf1f-5c96664cce25)
![Account Page](https://github.com/AidanFournier/energy-tracker/assets/78288118/960dcaf4-978c-43c3-9271-29c4e4ce5383)

## Table of contents
* [Introduction](#introduction)
* [App](#app)
* [Technologies](#technologies)
* [The Team](#team)
* [Contribution](#contributing)
* [Credits](#credits)

## Introduction
This mobile native app was built over the course of two and a half days, during the Tokyo hackathon [Builders Weekend 2023](https://www.buildersweekend.co/). Our team chose to tackle Kraken Technologies' challenge on energy: How do you encourage and empower people and businesses to use energy at the cheapest and greenest times?

We wanted to make a user-facing app that would make it easy and fun for regular people to reduce their energy use. We all have bill tracking apps, whether it be for phone data usage or gas bills. How often to we actually open these apps?

With OctoSave, the user doesn't even have to open the app to start making changes in their energy using-habits. OctoSave sends daily reminders during high and low peaks of energy usage in a user's area, telling them when they should turn off the lights and go ahead and run some laundry. As an added incentive, users earn points proportional to the energy they save, which can be cashed out or carried over for credit off of next month's bill. We have also gamified the experience of energy conservation: users can compare their energy savings to their friends' on a leader board, turning it into a competition. 

## App
Access the live project on [Expo Go](https://expo.dev/@aidoufou/energy-tracker?serviceType=classic&distribution=expo-go).

Or, if you already have the Expo Go app on your phone, you can scan this QR code to open OctoSave now:

<img src="https://github.com/AidanFournier/energy-tracker/assets/78288118/fcbd04dc-fd9c-4666-9d0a-f8deeca3c4f1" alt="Expo Go QR Code" width="200" height="200"/>

## Technologies

<h3 align="left">Languages and tools:</h3>
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
<a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" width="40" height="40"/></a>
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> 
</a> <a href="https://git-scm.com/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="git" width="40" height="40"/> </a> 

## Team
- [Pira](https://www.linkedin.com/in/pirada-jirawatvisut-b821081a1/) - Product Design
- [Tash](https://github.com/tashseb) - Front-End
- [Joshua](https://github.com/joshnsw) - Front-End
- [Aidan](https://www.linkedin.com/in/aidanfournier/) - Front-End
- [Miriam](https://github.com/mmiy55) - Back-End

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Credits
This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Development environment
If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

If it's your first time, run this command in the project directory to make sure you have installed all the necessary packages:
```
// ./energy-tracker
yarn install
```

To start the server locally:

### `yarn start`

Runs your app in development mode.

Scan the QR Code that appears to open and view it in the [Expo app](https://expo.io) on your phone. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```
#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).
