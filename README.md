# View Demo
Open [http://email-input-component.s3-website-us-east-1.amazonaws.com/] to view it in the browser.

# Solution Highlights
It was structured in a way that can be reused not only for Email inputs but for other selection components.

Container creation to isolate behavior from HTML structure and appearance.

CSS modules to allow the component styles don't conflict with other styles.

The search for emails was debounced

Used of callbacks to avoid unnecessary rerender cycles

Use of github workflow actions 


# List of Changes
Add support for other common properties of native HTML email input (pattern, selectedOption, isMultiple, size, readOnly, placeHolder, etc )

Add a currentValue property that allows creating EmailInputs with a set of emails already selected.

Add properties to set the style of the component.

Check for validation before adding the elements. Currently is hardcoded, if the email can not be found in the possible options is marked as invalid.

For the suggested emails matching the search criteria highlight the fragment that matches 

Add tests

Add Error Handling

The Dropdown behavior can be improved. At the moment the elements can be only selected by clicking over them. However, a new state can be added to set a current item of the dropdown and allow adding it by implementing keyUp events.

Add Typechecking with PropTypes


## Suggestions for the UI
Selected emails. I would prefer that the delete button is always visible not only when you hover over the item. For some users, it may not be evident from the start how to delete items. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
