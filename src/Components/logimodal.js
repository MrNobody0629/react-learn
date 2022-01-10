import React,{ useState } from "react";

const LogIn = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allEntry, setAllEntry] = useState([]);

    const ValidateForm = (e)=>{
        e.preventDefault();
        if(email && password)
        {
            if(email === 'anujv965@gmail.com' && password === 'Hacker22@')
            {
                alert('Log In')
                window.location.href = '/cards';
            }
            else
            {
                console.log('invalid Data')
                alert('InValid');
                console.log(new Date());
                const newEntry = {id:new Date().getTime().toString(),email,password};
                setAllEntry([...allEntry,newEntry]);
                console.log([allEntry]);
            }
        }
        else
        {
            alert('please fill data')
        }
    }
    return (
        <>
            <div className="modal fade" id="logInForm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Sign In</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-container">
                            <form action="" onSubmit={ValidateForm}>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col col-form-label">Email</label>
                                    <div className="col-sm-12">
                                    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter UserId" id="inputEmail3"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col col-form-label">Password</label>
                                    <div className="col-sm-12">
                                    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter Password" id="inputPassword3"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                        Example checkbox
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-between">
                                        <button type="reset" className="col-5 m-2 btn btn-outline-danger">Reset</button>
                                        <button type="submit" className="col-5 m-2 btn btn-outline-success">Sign in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div className="modal-footer">
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogIn;