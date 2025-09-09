export default function Greeter(
  { greeting, setGreeting, names }:
    { greeting: string; setGreeting: Function, names: string; }
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
    {names.split(',').map((name, i) => <h1 key={i}>
      {greeting} {name}!
    </h1>)}
  </>;
}