import { useState } from 'react';
import Greeter from "./Greeter";

export default function App() {

  const [greeting, setGreeting] = useState('Hi');
  const [names, setNames] = useState('Jane Doe');

  return <>
    {/* A state controlled input */}
    <label>Comma-separated list of names:&nbsp;
      <input type="text" id="nameInput"
        value={names}
        onChange={(event) => setNames(event.target.value)}
      />
    </label>
    {/* Mounting the Greeter component */}
    <Greeter  {...{ greeting, setGreeting, names }} />
  </>;
}