import { useState } from 'react';
import useFetchJson from "./utils/useFetchJson";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function App() {

  const [search, setSearch] = useState('');
  const users = useFetchJson<User[]>('/json/users.json');

  // Search/filters the users array
  // by the search phrase (search)
  const found = users?.filter(({ firstName, lastName }) => {
    const wholeName = firstName + ' ' + lastName;
    return wholeName.toLowerCase().includes(search.toLowerCase());
  });

  return <main>
    <label>
      Search:&nbsp;
      <input
        type="text"
        value={search}
        onChange={event => setSearch(event.target.value)}
        placeholder="Search by name"
      />
    </label>

    {found?.map(({
      id, firstName, lastName, email, phone
    }) => <article key={id}>
        <h3>{firstName} {lastName}</h3>
        <p><b>Email: </b>{email}</p>
        <p><b>Phone: </b>{phone}</p>
      </article>
    )}
  </main>;

}