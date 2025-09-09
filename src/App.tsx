import { useState } from 'react';
import Greeter from "./Greeter";
import NameInput from './NameInput';

export default function App() {

  const [greeting, setGreeting] = useState('Hi');
  const [names, setNames] = useState('Jane Doe');

  return <>
    <NameInput {...{ names, setNames }} />
    {/* Mounting the Greeter component */}
    <Greeter  {...{ greeting, setGreeting, names }} />
  </>;
}