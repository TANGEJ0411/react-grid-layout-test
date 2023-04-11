import GridLayout, { Responsive, WidthProvider } from "react-grid-layout";
import React, { useState } from "react";
import '../../node_modules/react-grid-layout/css/styles.css';
import './Table.css'

function Table() {
    const ResponsiveGridLayout = WidthProvider(Responsive);
    const [data, setData] = useState({
        columnDefs: [
            { headerName: "Make", field: "make" },
            { headerName: "Model", field: "model" },
            { headerName: "Price", field: "price" },
            { headerName: "Popular", field: "popular" },
            { headerName: "Type", field: "type" },
            { headerName: "Size", field: "size" }

        ],
        rowData: [
            { make: "Toyota", model: "Celica", price: 35000, popular: 1, type: 'SUV ', size: 'L' },
            { make: "Ford", model: "Mondeo", price: 32000, popular: 2, type: 'SUV ', size: 'L' },
            { make: "Porsche", model: "Boxster", price: 72000, popular: 3, type: 'SUV ', size: 'L' },
            { make: "Honda", model: "Fit", price: 33000, popular: 4, type: 'SUV ', size: 'L' },
            { make: "Maserati", model: "Pro", price: 99999, popular: 5, type: 'SUV ', size: 'L' },
            { make: "Mazda", model: "ma3", price: 40000, popular: 6, type: 'SUV ', size: 'L' }
        ]
    })
    //建立layout的函式
    function layoutFunction(x, y, w, h, i) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.i = i;
    }
    //layout useState
    const [layout, setLayout] = useState(data.columnDefs.map((colDef, colDefIndex) => {
        return (new layoutFunction(colDefIndex, 0, 12 / data.columnDefs.length, (42 * data.rowData.length + 49) / 30, colDef.headerName))
    }))
    const inputValue = useState({})
    return (
        <>
            <h3>會閃爍版</h3>
            <div className='table-box'>
                <ResponsiveGridLayout
                    className="layout box-border"
                    layout={layout}
                    cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
                    rowHeight={30}
                    // width={1898}
                    isBounded={true}
                    isDroppable={true}
                    isResizable={false}
                    margin={[0, 0]}
                    compactType={'horizontal'}
                    onDragStop={(newLayout) => {
                        const layoutOnY = newLayout.map((controlY) => {
                            return { ...controlY, y: 0 }
                        })
                        setLayout(layoutOnY)
                    }}
                >
                    {data.columnDefs.map((vCol, iCol) => {
                        return (
                            <div key={vCol.headerName} data-grid={layout[iCol]} >
                                <div className='title'>{vCol.headerName}</div>
                                {data.rowData.map((vRow, iRow) => {
                                    return (
                                        <div key={vRow.make} className={`row-margin table-border ${iRow % 2 === 0 ? '' : 'bg-color'}`}>
                                            <div>
                                                {vRow[vCol.field]}
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* <div className={`row-margin table-border`}>
                                    <input placeholder="請輸入" />
                                </div> */}

                            </div>
                        )
                    })}
                </ResponsiveGridLayout>
            </div >
        </>
    )
}

export default Table