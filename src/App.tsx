import { Counters } from "./modules/counters/counters";
import { UsersList } from "./modules/users/users-list";
import {fetchUsers} from "./modules/users/model/fetchUsers.ts";
import {store} from "./store.ts";

fetchUsers(store.dispatch, store.getState)

function App() {
  return (
    <div className="container p-5 flex flex-col gap-5">
      <Counters />
      <UsersList />
      <UsersList />
    </div>
  );
}

export default App;
