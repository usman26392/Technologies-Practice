
import React from 'react'

function PrintName({firstName}) {
    console.log("child component rendered!");
    return (
        <div>PrintName: {firstName}</div>
    )
}

export default React.memo(PrintName);



// React.memo is a higher-order component that can be used to optimize the rendering of functional components in React. It works by memoizing the result of a component's render function, which means that if the props passed to the component do not change, React will skip re-rendering the component and reuse the previously rendered output. This can improve performance by preventing unnecessary re-renders, especially for components that are expensive to render or have complex logic. 