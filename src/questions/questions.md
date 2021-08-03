1. Redux is a state management library and it is used to monitor the state of your application for easy bug fixes and a better overall image of how your app is working.

2. The "Provider" component wraps the entire application so that your redux store has access to the all of the apps children.

3. The store holds the entire state of your app. Can watch as components change based on user interaction.

4. The redux store object is for viewing what your components are doing during user interactions.

5. You must import createStore from "redux". Set a variable to obj "store" and create a dispatch from that variable. Can keep adding reducer functions until app grows enough to separate them into separate files.

6. It's the main reducer that runs with the app.

7. State and Action.

8. Reducer function runs once dispatch is activated.

9. The reducer function returns a modified state to the main app state.
