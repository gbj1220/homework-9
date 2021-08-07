1. How many reducers can you have in your redux app?
   Typically a redux app only has one reducer called the rootReducer that uses combine reducers so that you have access to all of your reducers from the redux-store.

2. What is “combineReducers” from Redux used for?
   CombineReducers is used to take multiple reducers from different states and use them all in redux-store. Once combined you can call any reducer from anywhere in the app.

3. What is the React Router library for?
   React Router is used to show components based on the url given. It is an easy way to make your app look like a traditional website with multiple pages even though React is a single page application.

4. Explain what each following are for in react router(https://reactrouter.com/):<BrowserRouter /><Switch /><Route /><Link />

BrowserRouter is the main package and it is pulled in import {BrowserRouter as Router, Route, Switch}.
Once you have that pulled in you can use Router to wrap your components to make the router. Then you use Switch to create a Switch statement based on the url you give per component. Finally you dispatch a Route either wrapping a component and giving it a url or importing the component and called <Route path='/' component={home}>.
