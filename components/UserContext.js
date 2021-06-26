import React from 'react';
  
const userContext = React.createContext({user: null, authenticate: () => {} });
// It's an object with 2 values: { Provider, Consumer }
// I use Provider in App.js return() 

export default userContext