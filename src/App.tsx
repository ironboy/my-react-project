import { useState } from 'react';
import Greeter from "./Greeter";

export default function App() {

  const [greeting, setGreeting] = useState('Hi');
  const [name, setName] = useState('Jane Doe');

  return <>
    {/* A state controlled input */}
    <input
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
    {/* Mounting the Greeter component */}
    <Greeter  {...{ greeting, setGreeting, name }} />
  </>;
}