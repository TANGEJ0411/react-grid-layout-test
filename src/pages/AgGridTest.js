import React, { useState, useEffect } from 'react'
// import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

function AgGridTest() {
    // const state = date()
    // const [data, setData] = useState({
    //     columnDefs: [
    //         { headerName: "Make", field: "make" },
    //         { headerName: "Model", field: "model" },
    //         { headerName: "Price", field: "price" },
    //         { headerName: "Popular", field: "popular" }

    //     ],
    //     rowData: [
    //         { make: "Toyota", model: "Celica", price: 35000, popular: 1 },
    //         { make: "Ford", model: "Mondeo", price: 32000, popular: 2 },
    //         { make: "Porsche", model: "Boxster", price: 72000, popular: 3 },
    //         { make: "Honda", model: "Fit", price: 33000, popular: 4 },
    //     ]
    // })
    const [code, setCode] = useState("")
    const [token, setToken] = useState("")
    // const []
    useEffect(() => {
        const url = new URL(window.location.href) //當前網址
        console.log(url)
        console.log(url.searchParams.get('code'))
        setCode(url.searchParams.get('code'))
    }, [])

    useEffect(() => {
        async function getToken() {
            if (code !== "") {
                try {
                    const response = await axios.post('https://api.line.me/oauth2/v2.1/token', {
                        client_id: '1660858533',
                        grant_type: 'authorization_code',
                        code,
                        client_secret: '4e16d5fc11ffda0a5e6189770cf40c7a',
                        redirect_uri: 'http://localhost:3000'
                    }, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    })
                    setToken(response.data.access_token);
                } catch (error) {
                    // console.error(error);
                }
            }
        }
        getToken();
    }, [code])
    useEffect(() => {
        async function getUser() {
            if (token !== "") {
                try {
                    const response = await axios.get('https://api.line.me/v2/profile', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    console.log(response)
                    alert(`uid:${response.data.userId}\n name:${response.data.displayName}`)
                } catch (error) {
                    // console.error(error);
                }
            }
        }
        getUser();
    }, [token])

    return (
        <>
            {/* <div
                className="ag-theme-alpine"
                style={{
                    height: '500px',
                    width: '802px'
                }}
            >
                <AgGridReact
                    columnDefs={data.columnDefs}
                    rowData={data.rowData}>
                </AgGridReact>
            </div> */}
            {token && (<img src='https://profile.line-scdn.net/0h2nNLW6zCbUFjNXoJ2jITPhNlbitARDRTTAAnLwU0ZHIKDH8TH1UkJV49ZiZZDH4QSQNxclBhYSRvJhonfWORdWQFM3ZZBCMTRlcgpQ' />)}
            <a href='https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1660858533&redirect_uri=http://localhost:3000&state=12345abcde&scope=profile%20openid%20email'>LINE</a>
        </>
    )
}

export default AgGridTest