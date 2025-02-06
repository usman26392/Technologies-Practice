import React, { ReactElement, useEffect, useRef, useState } from "react";
import { type ThemeColor } from "../../lib/types";

// examples: Typing variables.
let num: number;
num = 12;
let userId: number = 25;

// automatically detect/infered type
let num2 = 12;
let userName = "Muhammad Usman";
let url = "https://www.google.com";
// or
let url2: string = "https://www.google.com";

// examples: Typing functions
function convertCurrency(amount: number, currency: string) {
  // ...
}
convertCurrency(15, "USA");

// OR: it is not neccessary to mentioned return type. it infered automatically
function convertCurrency2(amount: number, currency: string): void {
  // ...
}

// with return type
function convertCurrency3(amount: number, currency: string): string {
  return `${amount} ${currency} `;
}
convertCurrency3(16, "USD");

// example: React typing props
// type ButtonProps = {
//   backgroundColor: string;
//   color: string;
// }

// export default function Button(props: ButtonProps) {
//   console.log(props)
//   return (
//     <button>Button</button>
//   )
// }

// OR
// type ButtonProps = {
//   // backgroundColor: string;
//   // or
//   backgroundColor: "red" | "green" | "blue"; // union type
//   color: string;
//   fontSize: number;
//   pillShape?: boolean; // optional type
//   padding: number[]; // array type
//   margin: [number, number]; // tuple type
// };

// export default function Button({
//   backgroundColor,
//   color,
//   fontSize,
//   pillShape,
//   padding
// }: ButtonProps) {

//   return (
//     <button
//       style={{
//         backgroundColor: backgroundColor,
//         color: color,
//         fontSize: fontSize,
//         borderRadius: pillShape ? "30em" : "0",
//         padding: `${padding[0]}px ${padding[1]}px`
//       }}
//     >
//       Button
//     </button>
//   );
// }

// example: React.CSSProperties
// type ButtonProps = {
//   styleBtn: React.CSSProperties
// };

// export default function Button({styleBtn}: ButtonProps) {
//   return (
//     <button style={styleBtn}>
//       Button
//     </button>
//   );
// }

// example: Record type
// type ButtonProps = {
//   borderRadius: {
//     topLeft: number,
//     topRight: number,
//     bottomRight: number,
//     bottomLeft: number
//   }
//   // or
//   // borderRadius: Record<string, number>;
// };

// export default function Button({borderRadius}: ButtonProps  ) {
//   // console.log(borderRadius)

//   return (
//     <button style={{
//       borderTopLeftRadius: `${borderRadius.topLeft}px`,
//       borderTopRightRadius: `${borderRadius.topRight}px`,
//       borderBottomRightRadius: `${borderRadius.bottomRight}px`,
//       borderBottomLeftRadius: `${borderRadius.bottomLeft}px`
//     }}>
//       Button
//     </button>
//   );
// }

// example: Typing function
// type ButtonProps = {
//   click: ()=> void;
// };

// export default function Button({click}: ButtonProps  ) {
//   return (
//     <button onClick={click}>
//       Button
//     </button>
//   );
// }

// // example: Typing function with parameter
// type ButtonProps = {
//   click: (num: number)=> number;
// };

// export default function Button({click}: ButtonProps  ) {
//   return (
//     <button onClick={()=> click(13)}>
//       Button
//     </button>
//   );
// }

// example: Typing children: React.ReactNode( accept all things e.g text node and element node)
// type ButtonProps = {
//   children: React.ReactNode
// };

// export default function Button({children}: ButtonProps  ) {
//   return (
//     <button>
//       {children}
//     </button>
//   );
// }

// example: Typing children: JSX.Element ( it is more restrict as campared to React.ReactNode)
// type ButtonProps = {
//   children: React.JSX.Element
// };

// export default function Button({children}: ButtonProps  ) {
//   return (
//     <button>
//       {children}
//     </button>
//   );
// }

// example: Typing useState setter function
// type ButtonProps = {
//   countValue: number;
//   setterFunc: React.Dispatch<React.SetStateAction<number>>
// };

// export default function Button({countValue, setterFunc}: ButtonProps  ) {
//   return (
//     <button
//       onClick={()=> setterFunc(countValue + 1)}>
//         you clicked me times: {countValue}
//     </button>
//   );
// }

// example: default prop values
// type ButtonProps = {
//   countValue?: number
// };

// export default function Button({ countValue = 0 }: ButtonProps  ) {
//   return (
//     <button>default prop value: {countValue}</button>
//   );
// }

// example: Type alias vs interface
// // type ButtonProps = {
// //   backgroundColor: string;
// //   color: string;
// // }

// interface ButtonProps {
//   backgroundColor: string;
//   color: string;
// }

// example: component props without ref
// yey type hum tub use karty hayn, jub hummay kissi component k
// built-in attributes as a props pass karnay hun.
// type ButtonProps = React.ComponentPropsWithoutRef<"button">;

// export default function Button({type, disabled, className }: ButtonProps  ) {
//   return (
//     <button type={type} disabled={disabled} className={className} >click me now</button>
//   );
// }

// example: rest prop
// type ButtonProps = React.ComponentPropsWithoutRef<"button">;

// export default function Button({type, disabled, ...rest }: ButtonProps  ) {
//   console.log({...rest})
//   return (
//     <button type={type} disabled={disabled} {...rest}>click me now</button>
//   );
// }

// example: intersection ( & )
// type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
//   variant?: "primary" | "secondary";
// };

// export default function Button({type, disabled, variant, ...rest }: ButtonProps) {
//   console.log({...rest})
//   return (
//     <button type={type} disabled={disabled} {...rest} className={`${variant}-btnn`} >click me now</button>
//   );
// }

// example:2
// type ButtonProps = {
//   type: "submit" | "reset";
//   color: "red" | "blue" | "green"
// }

// type SuperButtonProps = ButtonProps & {
//   size?: "sm" | "md" | "lg"
// }

// export default function Button({type, color, size }: SuperButtonProps) {
//   return (
//     <button type={type} color={color} className={`btnn-${size}`} >click me now</button>
//   );
// }

// example: interface extend: jo kaam hum nay SuperButtonProps( intersection ) say kiya hay
// wo kaam hum intersection extend say b kar sakhtay hayn.
// These interfaces will be gone into Types.ts
// interface ButtonProps  {
//   type: "submit" | "reset";
//   color: "red" | "blue" | "green"
// }

// interface SuperButtonProps extends ButtonProps  {
//   size?: "sm" | "md" | "lg"
// }

// export default function Button({type, color }: ButtonProps) {
//   return (
//     <button type={type} color={color}>click me now</button>
//   );
// }

// export function SuperButton({type, color, size }: SuperButtonProps) {
//   return (
//     <button type={type} color={color} className={`btnn-${size}`} >click me now</button>
//   );
// }

// example: Typing event handler functions
// export default function Button() {
//   // event handler
//   const handleClick = (
//     evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) => {
//     console.log("click me now!", evt);
//   };

//   return (
//     <>
//       {/* infered here: detect type automatically because of inline js   */}
//       <button onClick={(evt) => console.log("check now!", evt)}>check now</button>
//       {/* dont infered here: dont detect type  */}
//       <button onClick={handleClick}>click me now</button>
//     </>
//   );
// }

// example:  Typing usestate hook
// type UserProps = {
//   userName: string;
//   age: number;
//   email: string
// }

// export default function Button() {
//   // it is not neccessary to explicitly define type
//   // typescript automatically infered/detect its type.
//   const [count, setCount] = useState<number>(1);
//   // This is valid
//   const [countNegative, setCountNegative] = useState(1);

//   // but somewhere it is neccessary to define type.
//   const [user, setUser] = useState<UserProps | null>(null);
//   console.log(user?.age)

//   return (
//     <>
//       <button>click me now</button>
//     </>
//   );
// }

// example: Typing useRef hook
// export default function Button() {
//   const btnRef = useRef<HTMLButtonElement | null>(null);

//   console.log("Before mount:",  btnRef.current);

//   useEffect(() => {
//     console.log("when component is mounted", btnRef)
//   }, [])

//   return (
//     <>
//       <button ref={btnRef}>click me now!! </button>
//     </>
//   );
// }

// example: as const
// let buttonTextOptions = ["click me ", "click me now ", "click me now again"] as const;

// export default function Button() {
//   return (
//     <>
//       <button>
//         {buttonTextOptions.map((option, idx: number) => {
//           return <span key={idx}>{option}</span>;
//         })}{" "}
//       </button>
//     </>
//   );
// }

// example: omit utility
// type User = {
//   sessionId: string;
//   name: string
// }

// type Guest = Omit<User, "name">;

// export default function Button({sessionId}: Guest) {
//   return (
//     <>
//       <button>Click me!</button>
//     </>
//   );
// }

// example: "as" Type assertion
// type ButtonColor = "red" | "green" | "blue";

// export default function Button() {

//   useEffect(() => {
//     const previousButtonColor = localStorage.getItem("buttonColor") as ButtonColor;
//   }, []);

//   return (
//     <>
//       <button>Click me!</button>
//     </>
//   );

// }

// example: Generics with typescript
// function convertToArray(value: string): string[] {
//   return [value]
// }
// convertToArray(2); // Here it cannot accept number because function's type has string
// convertToArray("red");

// Now convert above function for generic: it can accept all types( string, number, boolean ) and return array depends on argument.
// function will do return array, that will be depends on argument's type.
// example:
// function convertToArray<T>(value: T): T[] {
//   return [value]
// }
// convertToArray(2);
// convertToArray("red");

// example: Generics type in React
// Define same relationship among props.
// type ButtonProps<T extends string | number> = {
//   countValue: T;
//   countHistory: T[];
// }

// export default function Button<T extends string | number>({ countValue, countHistory}: ButtonProps<T>) {
//   return (
//     <>
//       <button>{countValue}</button>
//       {
//         countHistory.map((count, idx: number )=> (
//           <p key={idx}>{count}</p>
//         ))
//       }
//     </>
//   );
// }

// difference between index.d.ts and types.ts files
// example:
// type ButtonProps = {
//   color: ThemeColor; // It is coming from types.ts
//   fontSize: number;
// }

// export default function Button({ color, fontSize }: ButtonProps) {
//   return (
//     <>
//       <button style={{
//         fontSize: `${fontSize}em`,
//         color: color
//       }}>CLick me now</button>
//     </>
//   );
// }





// example: "unknown" type
// export default function Button() {

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((res) => res.json())
//       .then((data: unknown) => {
//         // data.name.toUpperCase
//         // here Run it through Zod.
//         // const todo = todoSchema.parse(data); // don't uncomment code because of it is part of Zod.
//       });
//   }, []);

//   return (
//     <>
//       <button>CLick me now</button>
//     </>
//   );
// }
