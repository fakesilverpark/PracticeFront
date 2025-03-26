import { useState } from 'react'
import './App.css'

function Login() {
    const [btn, login] = useState(false);

    return(

        <div>
            <h1>{btn ? "잘가" : "하이"}</h1>
            <hr />
            <button onClick={()=>login(!btn)}>{btn ? "로그아웃하기" : "로그인하기"}</button>
        </div>
    );

}

export default Login
