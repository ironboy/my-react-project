export default function NameInput(
  { names, setNames }:
    { names: string; setNames: Function; }
) {
  return <label>Comma-separated list of names:&nbsp;
    {/* A state controlled input */}
    <input type="text" id="nameInput"
      value={names}
      onChange={(event) => setNames(event.target.value)}
    />
  </label>;
}