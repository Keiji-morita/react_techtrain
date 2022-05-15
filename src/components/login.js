import React from 'react'
import {useState} from 'react'

function Login() {
    const initialValues = {username: "", mailAddress: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState();

    const handleChange = (e) => {
        // console.log(e.target.value);
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
        // console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //ログイン情報を送信
        //バリデーションチェックをする
        setFormErrors(validate(formValues));
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
        if(!values.username){
            errors.username = "ユーザー名を入力してください。";
        }
        if(!values.mailAddress){
            errors.username = "メールアドレスを入力してください。";
        } else if (!regex.test(values.mailAddress)) {
            errors.mailAddress = "正しいメールアドレスを入力してください";
        }

        if(!values.username){
            errors.username = "パスワードを入力してください。";
        } else if (values.password.length < 4) {
            errors.password = "4文字以上15文字以下のパスワードを入力してください"
        } else if (values.password.length > 15) {
            errors.password = "4文字以上15文字以下のパスワードを入力してください"
        }
        return errors;
    };

return (
    <div className='formContainer'>
<form onSubmit={(e) => handleSubmit(e)}>
    <h1>ログインフォーム</h1>
    <hr />
    <div className='uiForm'>
        
        <div className='formField'>
            <input type="text"  placeholder='ユーザー名'  name="username"
            onChange={(e) => handleChange(e)}/>
        </div>
        <p className='errormsg'>{formErrors.username}</p>

        <div className='formField'>
            <input type="text" placeholder='メールアドレス' name="mailAddress"
            onChange={(e) => handleChange(e)}/>
        </div>
        <p className='errormsg'>{formErrors.mailAddress}</p>

        <div className='formField'>
            <input type="text" placeholder='パスワード' name="password"
            onChange={(e) => handleChange(e)}/>
        </div>
        <p className='errormsg'>{formErrors.passwkord}</p>

        <button className='submitButton'>ログイン</button>
    </div>
</form>
</div>
)
}

export default Login