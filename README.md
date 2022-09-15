# Pawel Matwijow's solution of TeaCode Recruitment Challenge
## 14.09.2022 - "Contacts List"


## CHECK SOLUTION LIVE:
https://stellular-squirrel-ab3a94.netlify.app


### Techstack used:

- React 18
- SWR
- MUI
- Styled Components

### Coding attitude:

- atomic design used for components transparency
- logic seperated with design - custom hooks and providers
- SWR used for more efficient data storing and rapid revalidation when opereting in the browser window
- simple RWD (not the best design but works on mobile and desktop)
- useTransition new React 18 API used to keep the best input reaction for user changes
- used Regexp for the easiest contact search by name or last name (just a word fragment, lower/upper case not-sensitive )
- loading state and ERRORS (as a result of data fetch!) handled, user informed for better UX
- rapid design by MUI with custom colors and styles, Styled Components for Globals and as a backdoor for fast custom design changes
- app effeciency available (MUI to remove in these case, Lazy Images possible for avatars)
- for more efficiency server changes suggested to fetch 100-200 records each time - then invinite scroll with useSWR possible!

### To develop:
- efficiency (MUI to remove)
- PROP TYPES to add!

#### Time spent: aprox 4h + documentation



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run project locally


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### CHANGES LOG:
- 15.09.2022 - added simple input validation 

