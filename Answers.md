1. What problem does the context API help solve?
A: Context API is good to use when there is global data that a lot of components share or to pass data through intermediate components. This helps keep the state clean.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
A: Actions tell the reducer what it needs to do. Reducers use actions to return a new version of state. The store contains the state and wraps the entire app so that every component has access to it. When changes are made to the state the state object is cloned and replaced, never mutated - single source of truth.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
A: Application state is global. Application state is good to use when you have something more general, like a logged in state. Component state is local. It's good to use when you have something more specific to the component like handleChange.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
A: Redux-thunk allows async actions. Middleware can disrupt the redux flow and interrupt an action-creator before it gets to the reducer. Redux-thunk checks to see what is returned when an action creator is called; if an action is returned it goes to the reducer. If a function (thunk) is returned it invokes the function and passes in dispatch as an argument.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
My favorite state management is probably Context API because it cuts down on the prop drilling.