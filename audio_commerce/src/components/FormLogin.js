import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Regex } from 'react-bootstrap-icons';

function FormLogin() {

    const [form,setForm] = useState({});
    const [errors,setErrors] = useState({});
   
    const setField = (field, value) =>{
        setForm({
            // preserves field object
            ...form,
            // if no field with name exists, create new field with value // if field exists update value
            [field]:value
        })

        // if there are no errors
        if(!!errors[field]){
            setErrors({
                // preserve the rest of the errors
                ...errors,
                // remove errors from that field if there are
                [field]:null
            })
        }

    }

    const validateForm = ()=>{
        const {email,username,password} = form;
        const newErrors = {}
        const regexLC = /^(?=.*[a-z])/; 
        const regexUC = /(?=.*[A-Z])/;
        const regexSC = /(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]/;
        const regexNum = /(?=.*\d)/;

        // validates all fields
        if(!email || email === '') newErrors.email = 'Email is a required field'
        else if(!email.includes("@") || !email.includes(".com"))
            newErrors.email = 'Please ensure the email is formatted correctly'
        if(!username || username === '')
            newErrors.username = 'Username is a required field'
        else if(username.length < 5 || username.length > 15)
            newErrors.username = 'Usernames should be between 5 and 15 characters long'
        // add check to see if username is taken if necessary
        if(!password || password === '')
            newErrors.password = 'Password is a required field'
        else if(password.length < 8)
            newErrors.password = 'Password should contain at least 8 characters'
        else if(!regexLC.test(password))
            newErrors.password = 'Password must contain one lower case letter'
        else if(!regexUC.test(password))
            newErrors.password = 'Password must contain one upper case letter'
        else if(!regexSC.test(password))
            newErrors.password = 'Password must contain one special character (@ , $ , . , # , ! , % , * , ? , & , ^)'
        else if(!regexNum.test(password))
            newErrors.password = 'Password must contain one number (0-9)'

        return newErrors;
    }

    const handleSubmit = e => {
        e.preventDefault();

        const formErrors = validateForm();
        // if the list of errors is more than 0
        if(Object.keys(formErrors).length > 0){
            // set the errors useState to the errors in the field
            setErrors(formErrors);
        }
        // if there are no errors
        else{
            console.log("Form Submitted")
            console.log(form)
        }
        console.log(form)
    }

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                    value={form.email}
                    onChange={e=>setField('email', e.target.value)}
                    isInvalid={!!errors.email}
                />
                    <Form.Control.Feedback type='invalid'>
                        {errors.email}
                    </Form.Control.Feedback>
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" 
                    value={form.username}
                    onChange={e=>setField('username', e.target.value)}
                    isInvalid={!!errors.username}
                />
                    <Form.Control.Feedback type='invalid'>
                        {errors.username}
                    </Form.Control.Feedback>
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" 
                    value={form.password}
                    onChange={e=> setField('password',e.target.value)}
                    isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type='invalid'>
                    {errors.password}
                </Form.Control.Feedback>
            </Form.Group>  

            <Button variant="dark" type="submit" onClick={handleSubmit} className="login-btn">
                Login
            </Button>

            <p className="create-account-title">
                don’t have an account?
            </p>
            <Button variant="link" type="submit" className="create-link-btn">
                Create an account   
            </Button>
        </Form>
    );
}

export default FormLogin; 