import './style.css'

interface LoginOpenOfProps {
    on: () => void,
    off: () => void
}

function Login({ on, off }: LoginOpenOfProps) {
    return (
        <div onMouseOver={on} onMouseOut={off}>
            <div className="fazer-login">
                <a href="/login" target='_blank'>Faça seu Login</a>
            </div>
        </div>
    );
}

export default Login;