function SignUp(){
    const [values, handleChange] = useForm({year:'',name:'',email:'',password:'',checkbox:false});
    const [errors, setError] = React.useState({nameError:'', emailError:'', passwordError:''});
    
    function validate(){
        if (!values.name) {
            setError({...errors, nameError: 'bad'})
        }
        else {
            setError({...errors, nameError: ''})
        }
    }

    function handle(){
        validate();
    }
    console.log('hello');

    return (
        <>
        <h1>Hello</h1>
        <select name="year" id="year" value={values.year} onChange={handleChange}>
            <option value="Freshman">Freshman</option>
            <option value="Sophmore">Sophmore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>    
        </select>
        <div>Name</div>
        <input type="text" name="name" value={values.name} onChange={handleChange}/>
        <div style={{color:'red'}}>{errors.nameError}</div>
        <div>Email</div>
        <input type="text" name="email" value={values.email} onChange={handleChange}/>
        <div style={{color:'red'}}>{errors.emailError}</div>
        <div>Password</div>
        <input type="text" name="password" value={values.password} onChange={handleChange}/>  

        <div><input type="checkbox" name="checkbox" value={values.checkbox} onChange={handleChange}/> 
            Rememeber me
        </div>
        <button onClick={handle}>Submit</button>    
        </>
    );
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)