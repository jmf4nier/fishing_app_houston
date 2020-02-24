This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


 <!-- begin 2/2/20 -->
1.need to change oAuth login/signup page.  dont really know how it works right now. its seem to have my gmail account logged in by default. not great.  also it has no backout button if i dont want to use a specific account or click decline on the prompt. bad design?  it will let you put in a new email and password, but where is it stored?  also it refers to an account with dev-blah-blah
<!-- end of 2/2/20 -->
<!-- begin 2/9/20 -->
1.Apparently passwords are handled by oauth in the users tab.  Users can create accounts with any email address and password they like, but are not verified until the verfication email automatically sent is clicked.  The login template itself is slightly configurable, but a custom url can also be used.  The logo has been changed to a fish.  The app name has been changed from 'myapp' to 'Houston Fishing' inside account settings.  
* also, user roles can be assigned via oauth *
2. integrated redux-persist.  old solution for an old problem.  persisting entire store for now.  reason: lost state on refresh and using routes dependent on redux state.  probably a better way.
<!-- end of 2/9/20 -->
<!-- begin 2/23/20 -->
1. added searchbar functionality. can search names of all the lakes. is filtered on the lakehome comp.
2. added selectbox for species filtering.  not applied yet. not happy with the fit and finish of the chips.
3. changed the actions for the initial lake fetch and added the searchbar action/reducer. now bringing in action function into component and doing dispatchs outside of component. maybe not fully implemented on all dispatches.....???
<!-- end 2/23 -->