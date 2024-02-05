import {React , useContext} from 'react'
import {UserContext,ThemeContext} from './Page';
function User() {
    const user = useContext(UserContext);
    const theme = useContext(ThemeContext);
  return (
    <div>
        <>
            <p>User name: {user.name}</p>
            <p>Theme name: {theme.name}</p>
            <hr/>
        </>
        {/* This old code before  useContext Hook*/}
        <UserContext.Consumer>
            {
                (user)=>(
                    <ThemeContext.Consumer>
                        {
                            (theme)=>(
                                <>
                                    <p>User name: {user.name}</p>
                                    <p>Theme name: {theme.name}</p>
                                </>
                            )
                        }
                    </ThemeContext.Consumer>
                    )
            }
        </UserContext.Consumer>
    </div>
  )
}

export default User