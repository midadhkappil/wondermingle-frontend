import { useState } from 'react';
import Router from './Router'

import { UserContext } from 'context/UserContext';

function App() {
  const [user, setUser] = useState()

  console.log({user})
  return (
    <div className="App">
      <UserContext.Provider value={{
        user, setUser
      }}>
        <Router user={user}/>
     </UserContext.Provider>
    </div>
  );
}

export default App;
