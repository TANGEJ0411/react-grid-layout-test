import GridLayout, { Responsive, WidthProvider } from "react-grid-layout";
import React, { useState } from "react";
import '../../node_modules/react-grid-layout/css/styles.css';

function ReactGridTable() {
    const [data, setData] = useState({
        columnDefs: [
            { headerName: "Make", field: "make", position: 0 },
            { headerName: "Model", field: "model", position: 1 },
            { headerName: "Price", field: "price", position: 2 }

        ],
        rowData: [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxster", price: 72000 },
            { make: "Honda", model: "Fit", price: 33000 },
        ]
    })

    return (
        <>
            <h3>暫時不動版</h3>
            <GridLayout
                className="layout"
                // layout={layout}
                cols={6}
                rowHeight={30}
                width={1200}
                isDroppable={true}
                isResizable={false}
                onLayoutChange={() => {

                }}>

                {data.columnDefs.map((vCol, iCol) => {
                    return (
                        <div key={vCol.headerName} data-grid={{
                            x: vCol.position,
                            y: 0,
                            w: 1,
                            h: 2,
                            i: vCol.headerName
                        }}>{vCol.headerName}</div>
                    )
                })}
                {data.rowData.map((vRow, iRow) => {
                    return (
                        <div key={vRow.make} data-grid={{
                            x: data.columnDefs[0].position,
                            y: iRow * 2,
                            w: 1,
                            h: 2,
                            i: vRow.make,
                            static: true
                        }}>{vRow.make}</div>
                    )
                })}
                {data.rowData.map((vRow, iRow) => {
                    return (
                        <div key={vRow.model} data-grid={{
                            x: data.columnDefs[1].position,
                            y: iRow * 2,
                            w: 1,
                            h: 2,
                            i: vRow.model,
                            static: true
                        }}>{vRow.model}</div>
                    )
                })}
                {data.rowData.map((vRow, iRow) => {
                    return (
                        <div key={vRow.price} data-grid={{
                            x: data.columnDefs[2].position,
                            y: iRow * 2,
                            w: 1,
                            h: 2,
                            i: vRow.price,
                            static: true
                        }}>{vRow.price}</div>
                    )
                })}
            </GridLayout>
        </ >
    )
}

export default ReactGridTable