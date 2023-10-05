
import './App.css'
import Grandpa from './component/Grandpa/Grandpa';
// import ReuseableForm from './component/ReusableFrom/ReuseableForm'
// import HookForm from './component/HookForm/HookForm'
// import RafForm from './component/RafForm/RafForm'
// import SimpleForm from './component/SimpleForm/SimpleForm'
// import StatefulForm from './component/StatefulForm/StatefulForm'

function App() {
  const handleSingUpSubmit = data =>{
         console.log('sing up data', data);
    }

    const handleUpdateProfile = data =>{
      console.log('update profile', data);
    }

  return (
    <>
      
      <h1>Form Master</h1>

      <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RafForm></RafForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm
       formTitle={'sing up'} 
       handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>sing up</h2>
          <p>Please sing up right now</p>
        </div>
        </ReuseableForm>
      <ReuseableForm 
      formTitle={'profile update'} 
      handleSubmit={handleUpdateProfile} submitButtonText='update'>
        <div>
          <h2>update profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReuseableForm> */}
    </>
  )
}

export default App;
