import './Login.css';
import useFormValidation from '../../hooks/useFormValidation';

function Login({ signIn, signOut }) {

    const {values, handleChange, resetForm, errors} = useFormValidation();

    function handelSubmit(evt) {
        evt.preventDefault();

        signIn({
            password: values.password,
            username: values.login
        });

        resetForm();
    }

    // function handelSignOut() {
    //     signOut();
    // }

    return (
        <section className="login">
            <h2 className="login__title">Login to edit tasks</h2>
            <form className="login__form">
                <input 
                    className="login__input" 
                    type="text"
                    placeholder="login"
                    minLength="1" 
                    maxLength="10"
                    id="login" 
                    name="login"
                    value={values.login || ''}
                    onChange={handleChange}
                    required
                /> 

                <input 
                    className="login__input" 
                    type="password"
                    placeholder="password"
                    minLength="1"
                    id="password"
                    name="password"
                    value={values.password || ''}
                    onChange={handleChange}
                    required
                /> 
                
                <button 
                    type="submit" 
                    className="login__button"
                    onClick={handelSubmit}
                >
                    Sign in
                </button>

                <span className={`task-form_error ${errors.login && "login-form_error_visible"}`}>
                    {errors.login || ''}
                </span>

                <span className={`task-form_error ${errors.password && "login-form_error_visible"}`}>
                    {errors.password || ''}
                </span>

            </form>

            <button onClick={signOut} className="login__button-out" type="button">Sign out</button>
        </section>
    );
}

export default Login;