import { useState } from 'react';

// const ListItem = ({item}) => <li className='list-group-item'>{item.name}</li>;

// const ListComponent = ({ items }) => {
//     return (
//         <ul className="list-group">
//             {
//                 items.map((item) => {
//                     return <ListItem key={item.id} item={item} />
//                 })
//             }
//         </ul>
//     );
// };

const Tr = ({ item }) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
                <a href="/#" className='text-info'>Details</a>
            </td>
            <td>
                <a href="/#" className='text-warning'>Edit</a>
            </td>
            <td>
                <a href="/#" className='text-danger'>Delete</a>
            </td>
        </tr>
    )
}

const TableComponent = ({ items, children }) => {
    return (
        <>
            {children ? children : null}
            <hr />
            <table className='table table-striped'>
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th></th>
                    <th>ACTIONS</th>
                    <th></th>
                </thead>
                <tbody>
                    {
                        items.map((item) => {
                            return <Tr key={item.id} item={item} />
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

const ListRoot = () => {
    const [employees] = useState([
        { id: 1, name: "Manish" },
        { id: 2, name: "Abhijeet" },
        { id: 3, name: "Ramakant" },
        { id: 4, name: "Subodh" },
        { id: 5, name: "Abhishek" }
    ]);

    return (
        <>
            {/* <ListComponent items={employees} /> */}
            <TableComponent items={employees}>
                <h3 className='text-center text-info'>Employees Table</h3>
            </TableComponent>
        </>
    );
};

export default ListRoot;