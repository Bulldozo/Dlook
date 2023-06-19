import React from 'react';
function Login() {
    //const [message, setMessage] = useState("");

    // useEffect(() => {
    //     fetch('/test')
    //         .then(response => response.text())
    //         .then(message => {
    //             setMessage(message);
    //         });
    // }, [])

    return (
        <>
        <div class="login-wrapper">
            <h2>Login</h2>
            <form action="/login" method="post" id="login-form">
                <input type="text" name="userName" placeholder="Email"/>
                <input type="password" name="userPassword" placeholder="Password"/>
                <input type="submit" value="Login"/>
            <br/><button><img src="./img/google icon.png"/></button>
            <button id="searchpassword" onclick="location.href='searchpassword.html'" type="button">비밀번호 찾기</button>
            </form>
        </div>
        <div id="firstvisit">
            Dlook이 처음이신가요? <button id="signup" onclick="location.href='signup.html'" type="button">회원가입</button>
        </div>
        </>
    );
}

export default Login;