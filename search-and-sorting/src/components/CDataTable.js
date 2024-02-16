import React, { useMemo, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
// import './index.css';

import {
    Column,
    Table,
    useReactTable,
    ColumnFiltersState,
    getCoreRowModel,
    getFilteredRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
    getPaginationRowModel,
    sortingFns,
    getSortedRowModel,
    FilterFn,
    SortingFn,
    ColumnDef,
    flexRender,
    FilterFns,
} from '@tanstack/react-table';

import {
    RankingInfo,
    rankItem,
    compareItems,
} from '@tanstack/match-sorter-utils';

// import { makeData, Person } from './makeData';

const fuzzyFilter = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({
        itemRank,
    });
    return itemRank.passed;
};

const fuzzySort = (rowA, rowB, columnId) => {
    let dir = 0;
    if (rowA.columnFiltersMeta[columnId]) {
        // dir = compareItems(
        //   rowA.columnFiltersMeta[columnId]?.itemRank!,
        //   rowB.columnFiltersMeta[columnId]?.itemRank!
        // );
    }
    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

function CDataTable(props) {
    const rerender = React.useReducer(() => ({}), {})[1];

    const [columnFilters, setColumnFilters] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');

    const columns = useMemo(() => [
        {
            header: 'User List',
            // footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'id',
                    cell: info => info.getValue(),
                    header: () => <span>SN</span>,
                    // footer: props => props.column.name,
                },
                {
                    accessorKey: 'name',
                    cell: info => info.getValue(),
                    header: () => <span>Name</span>,
                    // footer: props => props.column.name,
                },
                {
                    accessorFn: row => row.email,
                    id: 'email',
                    cell: info => info.getValue(),
                    header: () => <span>Email</span>,
                    // footer: props => props.column.id,
                },
                // {
                //     accessorFn: row => `${row.firstName} ${row.lastName}`,
                //     id: 'fullName',
                //     header: 'Full Name',
                //     cell: info => info.getValue(),
                //     footer: props => props.column.id,
                //     filterFn: 'fuzzy',
                //     sortingFn: fuzzySort,
                // },
            ],
        },
        // {
        //     header: 'Info',
        //     footer: props => props.column.id,
        //     columns: [
        //         {
        //             accessorKey: 'age',
        //             header: () => 'Age',
        //             footer: props => props.column.id,
        //         },
        //         {
        //             header: 'More Info',
        //             columns: [
        //                 {
        //                     accessorKey: 'visits',
        //                     header: () => <span>Visits</span>,
        //                     footer: props => props.column.id,
        //                 },
        //                 {
        //                     accessorKey: 'status',
        //                     header: 'Status',
        //                     footer: props => props.column.id,
        //                 },
        //                 {
        //                     accessorKey: 'progress',
        //                     header: 'Profile Progress',
        //                     footer: props => props.column.id,
        //                 },
        //             ],
        //         },
        //     ],
        // },
    ], []);

    const [data, setData] = useState(() => []);
    const refreshData = () => setData([]);
    const [reload, setReload] = useState([])
    useEffect(() => {


        return () => {
            //call the api
            axios.get("http://localhost:3005/users").then(res => {
                console.log(res)
                setData(res.data)

            })
        }
    }, [props.reload, reload])



    function handleDelete(userId) {
        console.log(userId)
        axios.delete('http://localhost:3005/users/' + userId).then(res => {
            setReload(res.data + (new Date()))
        })
    }


    const table = useReactTable({
        data,
        columns,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        state: {
            columnFilters,
            globalFilter,
        },
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        debugTable: true,
        debugHeaders: true,
        debugColumns: false,
    });

    useEffect(() => {
        if (table.getState().columnFilters[0]?.id === 'fullName') {
            if (table.getState().sorting[0]?.id !== 'fullName') {
                table.setSorting([{ id: 'fullName', desc: false }]);
            }
        }
    }, [table.getState().columnFilters[0]?.id]);

    return (
        <div className="p-2">
            <div className='d-flex justify-content-between mb-3'>
                <h6>Registered Users</h6>
                <DebouncedInput
                    value={globalFilter ?? ''}
                    onChange={value => setGlobalFilter(String(value))}
                    className="form-control w-25"
                    placeholder="Search..."
                />
            </div>
            <div className="h-2" />
            <table className='table table-bordered'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder ? null : (
                                            <>
                                                <div
                                                    {...{
                                                        className: header.column.getCanSort()
                                                            ? 'cursor-pointer select-none'
                                                            : '',
                                                        onClick: header.column.getToggleSortingHandler(),
                                                    }}
                                                >
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                    {{
                                                        asc: ' 🔼',
                                                        desc: ' 🔽',
                                                    }[header.column.getIsSorted()] ?? null}
                                                </div>
                                                {header.column.getCanFilter() ? (
                                                    <div>
                                                        <Filter column={header.column} table={table} />
                                                    </div>
                                                ) : null}
                                            </>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => {
                        return (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => {
                                    return (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    )
                                })}

                                <td>
                                    <div className='btn-group'>
                                        <button className='btn btn-primary btn-sm' onClick={() => props.setSelectedUser(row.getValue("id"))}>Edit</button>
                                        <button className='btn btn-danger btn-sm' onClick={() => handleDelete(row.getValue("id"))}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="h-2" />
            <div className="flex items-center gap-2">
                <button
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => { }} />
            </div>
        </div>
    );
}

export default CDataTable;



// A debounced input react component
function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}) {
    const [value, setValue] = React.useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <input {...props} value={value} onChange={e => setValue(e.target.value)} />
    )
}

function Filter({ column, table }) {
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id);

    const columnFilterValue = column.getFilterValue();

    const sortedUniqueValues = React.useMemo(() =>
        typeof firstValue === 'number'
            ? []
            : Array.from(column.getFacetedUniqueValues().keys()).sort()
        , [column.getFacetedUniqueValues()]);

    return typeof firstValue === 'number' ? (
        <div>
            <div className="flex space-x-2">
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
                    value={(columnFilterValue)?.[0] ?? ''}
                    onChange={value =>
                        column.setFilterValue((old) => [value, old?.[1]])
                    }
                    placeholder={`Min ${column.getFacetedMinMaxValues()?.[0]
                        ? `(${column.getFacetedMinMaxValues()?.[0]})`
                        : ''
                        }`}
                    className="form-control"
                />
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
                    value={(columnFilterValue)?.[1] ?? ''}
                    onChange={value =>
                        column.setFilterValue((old) => [old?.[0], value])
                    }
                    placeholder={`Max ${column.getFacetedMinMaxValues()?.[1]
                        ? `(${column.getFacetedMinMaxValues()?.[1]})`
                        : ''
                        }`}
                    className="form-control"
                />
            </div>
            <div className="h-1" />
        </div>
    ) : (
        <>
            <datalist id={column.id + 'list'}>
                {sortedUniqueValues.slice(0, 5000).map((value) => (
                    <option value={value} key={value} />
                ))}
            </datalist>
            <DebouncedInput
                type="text"
                value={(columnFilterValue ?? '')}
                onChange={value => column.setFilterValue(value)}
                placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
                className="form-control"
                list={column.id + 'list'}
            />
            <div className="h-1" />
        </>
    );
}



