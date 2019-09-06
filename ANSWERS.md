- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class components are able to extend other classes and therefore gain access to their props and methods for their own use.

- [ ] Name three lifecycle methods and their purposes.

    componentDidMount() - Runs when the component initially is applied to the page, useful for setting state and running API calls that rely on the target component being verifiably present
    componentDidUpdate() - Runs when the state of the component is changed, useful for changing the DOM in response to prop or state changes
    componentDidUnmount() - Runs when the component dies :( Allows us to run cleanup methods and prepare for further actions

- [ ] What is the purpose of a custom hook?

    A custom hook can be written once and applied to a wide variety of state handling in an application, for example, one form with 100 inputs could all establish and maintain state using a single reusable custom state hook, promotes DRY code.

- [ ] Why is it important to test our apps?

Unforseen bugs will catch up to us and cause headaches and delays if they are not caught early through rigorous testing.