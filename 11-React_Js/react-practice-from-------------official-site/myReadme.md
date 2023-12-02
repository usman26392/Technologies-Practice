
# ------------------------ context API ------------------------------------------

The Context API in React is a feature that allows you to share data between components without having to explicitly pass the data through component props at every level of the component tree. It provides a way to manage and share state and other application-specific data at a global level, making it accessible to any component that needs it without prop drilling (passing data down the component tree).

The main purposes and benefits of using the Context API in React are:

# Global State Management:
You can use the Context API to manage global application state. For example, you can store user authentication information, theme settings, or other shared data in a central place and provide access to this data to any component in your application.

# Simplifying Prop Drilling:
Avoid the need to pass props through multiple intermediate components that don't use the data themselves. This can greatly simplify the structure of your component tree and make your code more maintainable.

# Component Composition:
It facilitates the composition of components. You can build reusable components that consume context data, making it easier to create complex user interfaces by assembling smaller, self-contained components.

# Separation of Concerns:
It helps to maintain a clear separation of concerns. By centralizing state and logic related to a particular feature or aspect of your application in a context provider, you can isolate that functionality and make your code more organized and modular.

# Performance Optimization
React's Context API is designed to be efficient and only update components that are affected by changes in the context. This can lead to performance improvements compared to prop drilling, where unnecessary re-renders can occur.

# Testing
It can make testing components easier. With context, you can easily mock or provide different contexts for testing scenarios, allowing you to test components in isolation.

# To use the Context API
1)  create a context using: React.createContext()
2)  provide data using a: Context.Provider  , at a higher level in the component tree
3)  consume the data with hook: useContext()
