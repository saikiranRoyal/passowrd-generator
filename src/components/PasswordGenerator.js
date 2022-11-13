import React,{useState} from 'react'
import { PasswordService } from '../services/PasswordService';

const PasswordGenerator = () => {
    let [state,setState] = useState({
        generatedpassword:"",
        passwordlength:20,
        symbols:false,
        numbers:false,
        uppercase:false,
        lowercase:false,

    });
    let updateInput=(event)=>{
        setState((state)=>({
            ...state,
            [event.target.name]:event.target.value
        }));
    };
    let updateCheck=(event)=>{
        setState((state)=>({
            ...state,
            [event.target.name]:event.target.checked
        }));
    };
    let submit=(event)=>{
        event.preventDefault();
        let passwordObj=PasswordService.getPasswordObj(state);
        let thepassword = PasswordService.generatePassword(passwordObj, state.passwordlength);
        setState({...state, generatedpassword: thepassword});
        
    }
  return (
    <React.Fragment>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card  shadow-lg'>
                        <div className='card-header bg-warning p-3'>
                               <p className='h4'>PasswordGenerator</p>
                        </div>
                        <div className='card-body bg-warning'>
                            <form onSubmit={submit}>
                               <div className='mb-3'>
                                <div className='input-group'>
                                    <span className='input-group-text'>
                                        password
                                    </span>
                                    <input 
                                     value={state.generatedpassword}
                                     onChange={updateInput}
                                     name="generatedpassword"
                                    type="text" className='form-control' placeholder='GeneratePassword'></input>
                                    <span className='input-group-text'><i className='fa fa-clipboard'></i></span>
                                </div>
                               </div>
                              <div className='mb-3'>
                                    <div className='input-group'>
                                        <input
                                        required={true}
                                        value={state.passwordlength}
                                        onChange={updateInput}
                                        name="passwordlength"
                                        type="number" className='form-control' placeholder='password length'></input>
                                        <span className='input-group-text'>
                                            length
                                        </span>
                                    </div>
                              </div>
                              <div className="mb-3">
                                 <div className="input-group">
                                    <span className="input-group-text bg-white">
                                      <input 
                                       onChange={updateCheck}
                                       name="symbols"
                                      type="checkbox" className='form-input-check'></input>
                                      </span>
                                      <input
                                      type="text" disabled={true} placeholder='symbols' className='form-control'>
                                      </input>
                                 </div>

                              </div>
                              <div className="mb-3">
                                 <div className="input-group">
                                    <span className="input-group-text bg-white">
                                      <input 
                                       onChange={updateCheck}
                                       name="numbers"
                                       type="checkbox" className='form-input-check'></input>
                                      </span>
                                      <input type="text" disabled={true} placeholder='numbers' className='form-control'>
                                      </input>
                                 </div>

                              </div>
                              <div className="mb-3">
                                 <div className="input-group">
                                    <span className="input-group-text bg-white">
                                      <input 
                                       onChange={updateCheck}
                                       name="uppercase"
                                      type="checkbox" className='form-input-check' ></input>
                                      </span>
                                      <input type="text" disabled={true} placeholder='uppercase' className='form-control'>
                                      </input>
                                 </div>

                              </div>
                              <div className="mb-3">
                                 <div className="input-group">
                                    <span className="input-group-text bg-white">
                                      <input 
                                        onChange={updateCheck}
                                        name="lowercase"
                                      type="checkbox" className='form-input-check'></input>
                                      </span>
                                      <input type="text" disabled={true} placeholder='lowercase' className='form-control'>
                                      </input>
                                 </div>

                              </div>
                                <div className='mb-2'>
                                    <input type="submit" value="generate" className='btn btn-outline-dark'></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default PasswordGenerator