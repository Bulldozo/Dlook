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
        <div className="login-template">
            <div className="title">
                User Login
            </div>
            <form action="/login" method="post">
                <div className="input-wrapper">
                    <input type="text" name="userID" placeholder="userID" />
                    <input type="password" name="userPW" placeholder="password" />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
        </>
    );
}

export default Login;