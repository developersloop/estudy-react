import React from 'react'
import { Control, Form,Errors } from 'react-redux-form';
import { required, isEmail } from '../../utils/utils'
import { connect } from "react-redux";
import '../../App.scss';


const mapStateToProps = (state) => ({
    ...state,
})

function Login(props) {

    function handleSubmit(payload) {
        props.dispatch({ type: 'LOGIN', payload,})
    }

    return (
        <Form model="formModel.login" onSubmit={(val) => handleSubmit(val)}>
            <label>Usuario</label>
            <div>
                <Control
                    type="text"
                    model=".username"   
                    validators={{
                        required,
                        isEmail,
                    }}
                />
                <Errors
                    className="errors"
                    model=".username"
                    show="touched"
                    messages={{
                        required: 'Campo requirido',
                        isEmail: (val) => { if (val) return 'isso nao é um email'}
                    }}
                >
                </Errors>
            </div>
            <div>
                <label>Senha:</label>
                <Control
                    type="password"
                    model=".password"   
                    validators={{
                        required,
                    }}
                />
                <Errors
                    className="errors"
                    model=".password"
                    show="touched"
                    messages={{
                        required: 'Campo requirido',
                    }}
                >
                </Errors>
            </div>
            <button>Login</button>
        </Form>
    )
}

export default connect(mapStateToProps)(Login);
