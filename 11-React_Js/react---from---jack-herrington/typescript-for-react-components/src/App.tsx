import React, { ReactNode, useState } from "react";
import "./App.css";
import Button, { SuperButton } from "./components/Button";

// example1: conventional props
type HeadingProps = {
  children: ReactNode;
};

// children is a component's object property name, that is reserved for children
function Heading({ children }: HeadingProps) {
  return <h1>{children}</h1>;
}

// example2: conventional props
type Heading2Props = {
  title: string;
};

function Heading2({ title }: Heading2Props) {
  return <h1>{title}</h1>;
}

// another way to use props.
// function Heading2({ title}: { title: string } ) {
//   return <h1>{title}</h1>
// }

// example:  default props
// const ContainerPropsDefault = {
//   heading: <p>My default heading!</p>,
// };

type ContainerProps = {
  heading?: ReactNode;
  children: ReactNode;
};

function Container({
  heading = "<p>My default heading!</p>",
  children,
}: ContainerProps) {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

// example:  functional props
type TextWithNumberProps = {
  header: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
};
function TextWithNumber({ header, children }: TextWithNumberProps) {
  const [dummyNumber, setDummyNumber] = useState<number>(1);

  return (
    <div>
      {/* through prop */}
      <h2>{header(dummyNumber)}</h2>
      {/* through children prop */}
      <h2>{children(dummyNumber)}</h2>
      <div>
        <button onClick={() => setDummyNumber(dummyNumber + 1)}>add</button>
      </div>
    </div>
  );
}

// Main app
function App() {
  const [count, setCount] = React.useState(0);

  function justClick() {
    console.log("just clicked !");
  }

  function justClick2(num: number) {
    console.log(num);
    return num;
  }

  return (
    <div className="App">
      <Heading>This is my first code </Heading>
      <Heading2 title={"This is my second heading"} />

      <Container>Content from the container!</Container>
      <Container heading={<p>This a paragraph</p>}>
        Content from the container!
      </Container>

      <TextWithNumber
        header={(num: number) => (
          <div>Through props: Today's number is {num}</div>
        )}
      >
        {(num: number) => <div>Through children: Today's number is {num}</div>}
      </TextWithNumber>

      {/* New tutorial is starting from here */}

      {/* example: for React typing props */}
      {/* <Button backgroundColor="black" color="red" /> */}
      {/* <Button
        backgroundColor="red"
        color="black"
        fontSize={12}
        pillShape={false}
        padding={[10, 40]}
        margin={[20, 50]}
      /> */}

      {/* example: for React.CSSProperties  */}
      {/* <Button styleBtn={{
        backgroundColor: "red",
        color: "black",
        fontSize: 12,
        padding: "10px 40px",
        margin: "20px 50px"
      }} /> */}

      {/* example: for Record type */}
      {/* <Button borderRadius = {{
        topLeft: 5,
        topRight: 15,
        bottomRight: 20,
        bottomLeft: 40,
      }} /> */}

      {/* example: for Typing function */}
      {/* <Button click={justClick} /> */}

      {/* example: Typing function with parameter */}
      {/* <Button click={justClick2} /> */}

      {/* example: for Typing children */}
      {/* <Button>Click me now!</Button>
      <Button><p>Click me now!</p></Button> */}

      {/* example: for Typing children: through JSX.Element */}
      {/* don't accept plain text */}
      {/* <Button>
        <span>click me now!</span>
      </Button> */}

      {/* example: for Typing useState setter function */}
      {/* <Button countValue={count} setterFunc={setCount} /> */}

      {/* example: for default prop values */}
      {/* <Button /> */}

      {/* example: for component props without ref */}
      {/* <Button 
        type="reset" 
        disabled={true} 
        autoFocus={true} 
        className="check-btn"
          /> */}

      {/* example: for rest prop */}
      {/* <Button
        type="reset"
        disabled={true}
        autoFocus={true}
        className="primary-btn"
        defaultValue={"checked"}
      /> */}

      {/* example: intersection ( & ) */}
      {/* <Button type="submit" disabled={true} variant="primary" /> */}

      {/* example:2  for intersection ( & ) */}
      {/* <Button
        type="reset"
        color="blue"
        size="md"
      /> */}


      {/* example: for interface extend */}
      {/* <Button
        type="reset"
        color="blue"
      />

      <SuperButton color="red" type="submit" size="lg"/> */}

      {/* example: for Typing event handler functions */}
      {/* <Button/> */}

      {/* example: for  Typing usestate hook */}

      {/* example: for Typing useRef hook */}
      {/* <Button/> */}

      {/* example: for as const */}
      {/* <Button/> */}

      {/* example: for omit utility */}
      {/* <Button sessionId="123"/> */}

      {/* example: "as" Type assertion */}
      {/* <Button/> */}

      {/* example: for Generics in React */}
      {/* <Button countValue={12} countHistory={[12, 40 , 23]} /> */}
      {/* try to take countValue={"12"} it will not allows */}
      {/* <Button countValue={"12"} countHistory={[12, 40 , 23]} /> */}

      {/* example: for export and import types */}
      {/* <Button fontSize={12} color="green" /> */}

      {/* example: for "unknown" type */}
      {/* <Button  /> */}
    </div>
  );
}

export default App;
