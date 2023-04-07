import PropTypes from 'prop-types'
import GridLayout, { Responsive, WidthProvider } from "react-grid-layout";
import React, { useState } from "react";
import '../../node_modules/react-grid-layout/css/styles.css';
// import { QuerySelector } from 'ag-grid-community';

function Table() {
    const [data, setData] = useState({
        columnDefs: [
            { headerName: "Make", field: "make" },
            { headerName: "Model", field: "model" },
            { headerName: "Price", field: "price" }

        ],
        rowData: [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxster", price: 72000 },
            { make: "Honda", model: "Fit", price: 33000 },
        ]
    })
    const [layout, setLayout] = useState([{
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        i: data.columnDefs[0].headerName,
    }, {
        x: 1,
        y: 0,
        w: 1,
        h: 2,
        i: data.columnDefs[1].headerName
    }, {
        x: 2,
        y: 0,
        w: 1,
        h: 2,
        i: data.columnDefs[2].headerName
    }, {
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        i: data.columnDefs[0].headerName,
        static: true
    }, {
        x: 1,
        y: 0,
        w: 1,
        h: 2,
        i: data.columnDefs[1].headerName,
        static: true
    }, {
        x: 2,
        y: 0,
        w: 1,
        h: 2,
        i: data.columnDefs[2].headerName,
        static: true
    }])
    return (
        <>
            <h3>嘗試版</h3>
            <GridLayout
                className="layout"
                layout={layout}
                cols={6}
                rowHeight={30}
                width={1200}
                isDroppable={true}
                isResizable={false}
                onLayoutChange={(layout) => {
                    // console.log(layout)
                    setLayout(layout)
                }}
                onDragStop={(layout, oldItem, newItem, placeholder, e, element) => {
                    console.log('layout', layout, 'oldItem', oldItem, 'newItem', newItem, 'ph', placeholder, 'e', e, 'element', element)

                    // layout.map((v, i) => {
                    //     console.log('o', oldItem, 'n', newItem, 'l', layout)
                    //     if (v.x === oldItem.x) {
                    //         v.x = newItem.x
                    //         v.y = 0
                    //     } else if (v.x !== oldItem.x && oldItem.x === 0) {
                    //         v.y = 0
                    //         v.x = 2
                    //     } else {
                    //         v.y = 0
                    //         v.x--
                    //     }
                    //     return v
                    // })
                    // setLayout(layout)
                }}
            >

                {data.columnDefs.map((vCol, iCol) => {
                    return (
                        <div key={vCol.headerName} data-grid={layout[iCol]}>{vCol.headerName}</div>
                    )
                })}
                {data.rowData.map((vRow, iRow) => {
                    return (
                        <div key={vRow.make} data-grid={layout[3]}>{vRow.make}</div>
                    )
                })}
                {data.rowData.map((vRow, iRow) => {
                    return (
                        <div key={vRow.model} data-grid={layout[4]}>{vRow.model}</div>
                    )
                })}
                {data.rowData.map((vRow, iRow) => {
                    return (
                        <div key={vRow.price} data-grid={layout[5]}>{vRow.price}</div>
                    )
                })}
            </GridLayout>
        </ >
    )
}

export default Table