import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

function AgGridTest() {
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
    return (
        <>
            <div
                className="ag-theme-alpine"
                style={{
                    height: '500px',
                    width: '600px'
                }}
            >
                <AgGridReact
                    columnDefs={data.columnDefs}
                    rowData={data.rowData}>
                </AgGridReact>
            </div>
        </>
    )
}

export default AgGridTest