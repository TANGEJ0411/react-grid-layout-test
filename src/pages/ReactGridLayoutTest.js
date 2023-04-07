import PropTypes from 'prop-types'
import GridLayout from "react-grid-layout";
import React, { useState } from "react";
import '../../node_modules/react-grid-layout/css/styles.css';

function ReactGridLayoutTest(props) {
    // const ReactGridLayout = WidthProvider(Responsive);
    const [layout, setLayout] = useState([
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 1, y: 0, w: 2, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2, isBounded: false }
    ]);
    const title = Object.keys(layout[0])
    return (
        <>
            <button onClick={() => {
                const newLayout = [...layout];
                newLayout.push({
                    i: `n${Date()}`,
                    x: (layout.length * 2) % (12),
                    y: Infinity, // puts it at the bottom
                    w: 2,
                    h: 3,
                })
                setLayout(newLayout)
            }}>add</button>
            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}
                isDroppable={true}
                onLayoutChange={(layout) => { setLayout(layout) }}
                onDrag={(layout) => {
                    console.log(layout)
                }}
            >
                {/* <div key="a" className='bg-color'>a</div>
        <div key="b" className='bg-color'>b</div>
        <div key="c" className='bg-color'>c</div> */}
                {layout.map((v, index) => {
                    return (<div key={v.i} className='bg-color'>
                        <button onClick={() => {
                            const newLayout = layout.filter((valFilter, indexFilter) => {
                                return valFilter.i !== v.i
                            })
                            setLayout(newLayout)
                        }}>刪除</button>
                        <p>{v.i}</p>
                    </div>)
                })}
                {/* <div
          key="4"
          className='bg-color'
          data-grid={{
            x: 8,
            y: 0,
            w: 4,
            h: 3
          }}
        >
          <span className="text">
            4 - Draggable with Handle
            <hr />
            <hr />
            <span className="react-grid-dragHandleExample">[DRAG HERE]</span>
            <hr />
            <hr />
          </span>
        </div> */}
            </GridLayout>
        </>
    )
}


export default ReactGridLayoutTest