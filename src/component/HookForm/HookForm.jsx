import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('piku')
    // const nameState = useInputState('piku')
    const emailState = useInputState('piku@cat.com')


    const handleSubmit = e =>{
        console.log('form data', emailState.value)
        e.preventDefault();
    }
    return (
        <div>
              <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} defaultValue={'piku@.g.com'} type="text" name="email" id=""/>
                <br />
                <input  type="password" name="password"/>
                <br />
               <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default HookForm;