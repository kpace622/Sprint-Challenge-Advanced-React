- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class components are older but they were used for a very long time. Hooks are still very new so any old code you work with will likely use classes. Very important to be able to use classes.


- [ ] Name three lifecycle methods and their purposes.

    ComponentDidMount() runs as soon as the component is rendered. Used like the useEffect hook when you want code to run when the component renders.

    Render() which is the code itself actually running. Not necessary when using hooks.

    ComponentDidUpdate() This happens when react ‘reacts’ to something happening in the code and updates the said code.


- [ ] What is the purpose of a custom hook?

    Custom hooks are created so that you can reuse logic in your code.

- [ ] Why is it important to test our apps?

    Testing saves a lot of potential headache later. You don’t want to assume your code is working then find out two hours of coding later that something was broken all along. It’s a long term investment as lambda says.
