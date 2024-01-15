# React-refresher

Learning react core concepts from scratch

# Basics:

React can be included in a project by simply including it's CDN link into the script tag along with the react DOM library.
Then use React.createElement method to create a JS object describing the elements needed to be rendered. This function takes in 3 arguments: 1. The HTML element type 2. The HTML attributes as an object 3. Children
This create element function will return an object containing the type of element, and its children or attributes in the "props" property.
This object is then fed into the react DOM library and finally rendered in the real DOM

# Episode 2

Create a package.json file using npm init
Install parcel package as a dev dependency.
Parcel is a web application bundler – a tool that simplifies the process of building and bundling front-end assets like HTML, CSS, JavaScript, and other files. It is designed to be zero-config, meaning you can start using it without any complex setup or configuration files, making it beginner-friendly and efficient for quick development.
Install react and react dom packages and import it to your JS file. Mention type = "module" in script tag.
run "npx parcel index.html" to start local server

