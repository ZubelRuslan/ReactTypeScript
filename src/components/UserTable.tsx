import React from 'react'

interface IUser {
    login: string,
    _id: string,
    password: string,
    name?: string,
    surname?: string
}


const  usersArr: IUser[] = [
    {
        "_id": "5ddd1e8fc2fe5c341ce668d3",
        "login": "Sighfried",
        "password": "$2b$10$OjtNH22ZAM1S3.QyFgJMq.47Ygjvjd/oUTUZ7zvLZRrki6Jfg/w56"
    },
    {
        "_id": "5ddd2fa94bf4423b82c96a80",
        "login": "Rihard",
        "password": "$2b$10$gkbjtGXqlhOfZmPvjAAjKedjyLtPuIp5AF0nP8ccUOhoIOtXmIm9y"
    },
    {
        "_id": "5dde4b96ae26511e1623c508",
        "login": "admin",
        "password": "$2b$10$8WA2nJi7BsSpT3TxN.0TueWhZ6SbLwE3JWV90DeTZeedIgexpF.Q."
    },
    {
        "_id": "5ddfb4c39535ae323572534e",
        "login": "qwerty",
        "password": "$2b$10$MErttgShgQPB08WF8BMKiOBvKUTClc1ioODSlut1/6Wxg5sJojCGO"
    },
    {
        "_id": "5ddfb77e41eb0433b43ccb3e",
        "login": "zxcvb",
        "password": "1234567",
        "name": "Alexey",
        "surname": "Alexeevich"
    },
    {
        "_id": "5ddfbaccdaccc533f440d4ed",
        "login": "asdfgh",
        "password": "$2b$10$fz5q6arrNbQfYYL93zTl9e5GFfaTHVLH5T1ZEDv2hlZzYBVyl//Na"
    }
];

export class UserTable extends React.Component<any,any> {

    constructor(props:any) {
        super(props);
        this.state = {
            isUserVisable:false,
            userData: [],
        }
    }

    handleClick=(e: any)=> {
        e.preventDefault();
        usersArr.forEach((item: IUser) => {
            if (item.login === e.target.parentNode.id) {
                this.setState({
                    isUserVisable: true,
                    userData: item
                })
            }
        })

        console.log(e.target.parentNode.id);
    }

    array = usersArr.map((item: IUser, index: number) => {
        return (
            <tr onClick={this.handleClick} key={index} id={item.login}>
                <td>{item.login}</td>
                <td>{item._id}</td>
                <td>{item.password}</td>
            </tr>
        )

    })

    render() {
        return (
            <div className="container">
                <table className="centered mg1 container">
                    <thead>
                    <tr>
                        <th>Login</th>
                        <th>ID</th>
                        <th>Password</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.array}

                    </tbody>
                </table>
                {this.state.isUserVisable &&
                <h1>Hello! {this.state.userData.login}.</h1>}
            </div>

        )
    }

}

