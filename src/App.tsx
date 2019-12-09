import React from 'react'
import {Navbar} from "./components/Navbar";
import {UserTable} from "./components/UserTable";


class  App extends React.Component<any, any>{

    render() {
        return (
                <div>
                    <Navbar/>
                    <UserTable/>
                </div>

        );
    }


}

export default App;
