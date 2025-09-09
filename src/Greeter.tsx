export default function Greeter(
  { greeting, setGreeting, name }:
    { greeting: string; setGreeting: Function, name: string; }
) {

  const greetings = [
    'Hi',
    'Hello',
    'You',
    'Top of the day',
    'Good morning'
  ];

  return <>
    <p>Choose a greeting:</p>
    <p>
      {greetings.map((greeting, i) => <button key={i}
        onClick={() => setGreeting(greeting)}
      >{greeting}</button>)}
    </p>
    <h1>{greeting} {name}!</h1>
  </>;
}