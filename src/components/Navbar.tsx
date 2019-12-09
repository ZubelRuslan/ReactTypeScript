import React from "react"

export const Navbar: React.FC = () => {
    return(
        <nav>
            <div className="nav-wrapper  blue lighten-2 pd1">
                <a href="/" className="brand-logo ">Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/">NotHome</a></li>
                </ul>
            </div>
        </nav>
        )

}
// const user = usersArr.map((index) => {
//     <tr>
//         <td>{index.login}</td>
//         <td>{index._id}</td>
//         <td>{index.password}</td>
//     </tr>
// })
