import React from 'react'
import Layout from './Layout'

const user = { name: 'Walid'};
const theme = { name : 'white-theme'};

export const UserContext = React.createContext();
export const ThemeContext = React.createContext();

function Page() {
  return (
    <>
       <UserContext.Provider value={user}>
            <ThemeContext.Provider value={theme}>
                <Layout />
            </ThemeContext.Provider>
       </UserContext.Provider>
        
    </>
  )
}

export default Page