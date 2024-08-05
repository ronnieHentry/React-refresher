# React-refresher

Learning react core concepts from scratch

# Basics:

React can be included in a project by simply including it's CDN link into the script tag along with the react DOM library.
Then use React.createElement method to create a JS object describing the elements needed to be rendered. This function takes in 3 arguments: 1. The HTML element type 2. The HTML attributes as an object 3. Children
This create element function will return an object containing the type of element, and its children or attributes in the "props" property.
This object is then fed into the react DOM library and finally rendered in the real DOM by replacing the contents inside the dom id provided.

# Episode 2

Create a package.json file using npm init
Install parcel package as a dev dependency.
Parcel is a web application bundler – a tool that simplifies the process of building and bundling front-end assets like HTML, CSS, JavaScript, and other files. It is designed to be zero-config, meaning you can start using it without any complex setup or configuration files, making it beginner-friendly and efficient for quick development.
Install react and react dom packages and import it to your JS file. Mention type = "module" in script tag.
run "npx parcel index.html" to create a development build and host it to localhost

# Episode 3

The command to start an application can be found in the "scrips" in package.json. So when you type "npm run start" in console, it'll execute the "start" script fron package.json.
In npm, when you use npm start, it's a special built-in shorthand for npm run start. The start script is a predefined script in npm, and you can run it without explicitly using run.
So, both npm start and npm run start would achieve the same result of running the "start" script defined in your package.json. It's just a convenient shorthand provided by npm to make common commands more concise.
npm start === npm run start ---- starts a development build
npm build ----- creates a production ready (optimized) build

JSX : used to create react element objects by using html like syntax. If you console.log jsx elements in the browser, it'll be an object in the exact format that React.createElement returns
JSX is NOT a part of React package but works hand in hand with react. The JSX code is transpiled (converted to code browsers can understand) by the parcel library using babel before passing it into the browser
JSX is converted into React.createElement code by babel which is then converted to HTML code

Functional components: Functional components are just javascript functions that return React.createElement or JSX. The name of a functional component needs start with uppercase characters for babel to understand it's a component. The functional component can be displayed in DOM by calling it inside the root.render(functionalComponent()) or using jsx root.render(<FunctionalComponent />)
A functional component can be rendered using jsx or invoking it like a regular function like the above example.
JSX will prevent cross site scripting and prevents malicious attacks.

# Episode 4

Props: Functional components are javascript function. Props are arguments that you pass to the function. Props will be collated as a javascript object and this object can be used to make the content of a component dynamic.

Config driven UI: Content that needs to be shown dynamically (Like in a food delivery app, the restaurants need to be dynamic for different locations) can be controlled by using this UI method. The response from backend determines what is to be displayed on the UI.

Keys: While mapping components from an array, always provide a key to each component so react knows which are new elements that need to be rendered. Not providing a unique key will cause react to re-render the entire list which will cause performance to take a hit. Also, providing the index as key is not a good practise because the order of items inside array might change. But if the data does not have unique id property, use the index.

# Episode 5

Hooks: Normal jsvacript functions provided by react.

useState: Used to keep variables inside a component and update the UI when it's value changes.
Whenever a state variable changes, react re-render's the component

React uses reconciliation (also known as react-fiber) whics is the algorithm used for diffing the previous virtual dom and updated virtual dom.

Virtual DOM: React maintains a virtual DOM (the main object that is returned from React.createElement). Once the main object is updated, react uses the diff algorithm and compares the previous copy and updated copy of virtual DOM and tries to find out the difference between the two objects representing the DOM structure. Then react updates the actual DOM.
Whenever a re-render is triggered, this process is done.

# Episode 6

The ideal process to load data in a react application is - Load the UI or skeleton UI - Make API call - Re-render the UI based on response.
This approach gives better user experience.

useEffect hook is another javascript function which takes in two parameters - a callback function and a dependency array.
This function is first called after the initial render of the component.

# Episode 7

useEffect is called after the render of a component. The dependency array controls when the useEffect hook is called.
If the dependency array is empty, the hook is called only on the initial render (when the component is mounted).
To add basic routes in app, import "createBrowserRouter" from react-router-dom. Call the function createBrowserRouter and pass the routes as an array. Also add a errorElement prop in the "/" route.
You can get more information about the error using the useRouterError hook from the router library.

To add children routes (Keep the header and footer intact and display the route component UI below it):
Add a children prop with the routes and add Outlet component from react router in the JSX.


