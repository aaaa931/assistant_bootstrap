import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import { useSortBy } from "react-table/dist/react-table.development";
import { Table, Text } from "./theme";

const ReactTable = (props) => {
    const tableRow = props.data.length > 0 ? props.data : ["暫無資料"];
    const data = useMemo(() => tableRow, [props.data]);
    const columns = useMemo(() => props.col, [props.col]);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data }, useSortBy);

    return (
        <section className="table-responsive">
            <Table {...getTableProps()} className="table">
                <thead className="text-center">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}
                                >
                                    {column.render("Header")}
                                    <Text>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? " ⇊"
                                                : " ⇈"
                                            : ""}
                                    </Text>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {(rows[0].original != "暫無資料") &
                    (rows[0].original.itemType != "暫無資料") ? (
                        rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr
                                    {...row.getRowProps()}
                                    className="text-center"
                                >
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                暫無資料
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </section>
    );
};

export default ReactTable;
