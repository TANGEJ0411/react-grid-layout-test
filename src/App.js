
import { AgGridReact } from 'ag-grid-react';
import './App.css';
import ReactGridLayoutTest from './pages/ReactGridLayoutTest';
import Table from './pages/Table';
import AgGridTest from './pages/AgGridTest';
import ReactGridTable from './pages/ReactGridTable';


function App() {
  // console.log(document.querySelector('#test').dataset.apple)
  return (
    <>
      {/* <ReactGridLayoutTest /> */}
      {/* <hr /> */}
      {/* <Table /> */}
      {/* <ReactGridTable /> */}
      <AgGridTest />
      {/* <div data-apple={{ a: 1, b: 2 }} id='test'></div> */}
    </>
  );
}

export default App;