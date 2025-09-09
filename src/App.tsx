import useFetchJson from "./utils/useFetchJson";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function App() {

  const users = useFetchJson<User[]>('/json/users.json');

  return <>
    {users?.map(({ firstName }, i) => <h3 key={i}>
      {firstName}
    </h3>)}
  </>;

}