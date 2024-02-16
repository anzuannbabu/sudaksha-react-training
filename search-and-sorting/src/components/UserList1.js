import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'



import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'
  
//   type Person = {
//     firstName: string
//     lastName: string
//     age: number
//     visits: number
//     status: string
//     progress: number
//   }
  
  const defaultData = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]
  
  const columnHelper = createColumnHelper()
  
  const columns = [
    // columnHelper.accessor('name', {
    //   cell: info => info.getValue(),
    //   //footer: info => info.column.id,
    // }),
    columnHelper.accessor(row => row.id, {
      id: 'id',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>SN</span>,
      //footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.name, {
      id: 'name',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Name</span>,
      //footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.email, {
      id: 'email',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Email</span>,
      //footer: info => info.column.id,
    }),
    // columnHelper.accessor('Actions', {
    //   cell: info => info.getValue(),
    //   //footer: info => info.column.id,
    // }),
    
  ]
function UserList1(props) {
    const [users, setUsers] = useState([])
    const [reload, setReload] = useState([])
    useEffect(() => {


        return () => {
            //call the api
            axios.get("http://localhost:3005/users").then(res => {
                console.log(res)
                setUsers(res.data)
            })
        }
    }, [props.reload, reload])

    function handleDelete(user) {
        axios.delete('http://localhost:3005/users/' + user.id).then(res => {
            setReload(res.data + (new Date()))
        })
    }


    const mappedUsers = users.map((user, index) => (
        <tr key={user?.id}>
            <td>{(index + 1)}</td>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td >
                <div className='btn-group'>
                    <button className='btn btn-primary btn-sm' onClick={() => props.setSelectedUser(user)}>Edit</button>
                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(user)}>Delete</button>
                </div>
            </td>
        </tr>
    ))

    

    // const table = createTable({columns: {name: "Name"}, data: users})

    const table = useReactTable({
        data: users,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })
    return (
        <>
      <table className='table table-bordered'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel()?.rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}

              <td>
              <div className='btn-group'>
                    <button className='btn btn-primary btn-sm' onClick={() => props.setSelectedUser(row)}>Edit</button>
                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(row)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className='d-none'>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
        </>
    )
}

export default UserList1