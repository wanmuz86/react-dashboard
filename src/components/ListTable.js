import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function ListTable(props) {
    return <Table size="small">
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Orders</TableCell>
                <TableCell>Sale Amount</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>{
            props.restaurants.map(val => {
                return <TableRow>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.email}</TableCell>
                    <TableCell>{val.address}</TableCell>
                </TableRow>
            })
        }
        </TableBody>
    </Table>
}