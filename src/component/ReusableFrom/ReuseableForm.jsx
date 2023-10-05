
const ReuseableForm = ({formTitle, handleSubmit, submitButtonText = 'Submit', children}) => {

    // const handleSubmit = e =>{
    //     e.preventDefault();
    // }

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const  data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            {children}
            <h2>{formTitle}</h2>
              <form onSubmit={handleLocalSubmit}>
                <input  type="text" name="name" />
                <br />
                <input   type="text" name="email" id=""/>
                <br />
                <input  type="password" name="password"/>
                <br />
               <input type="submit" value={submitButtonText}/>
            </form>
        </div>
    );
};

export default ReuseableForm;