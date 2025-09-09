export default function Greeter(
  { greeting, setGreeting, name }:
    { greeting: string; setGreeting: Function, name: string; }
) {
  return <>
    <p>Choose a greeting:</p>
    <p>
      <button onClick={() => setGreeting('Hi')}>Hi</button>
      <button onClick={() => setGreeting('Hello')}>Hello</button>
      <button onClick={() => setGreeting('Yo')}>Yo</button>
    </p>
    <h1>{greeting} {name}!</h1>
  </>;
}