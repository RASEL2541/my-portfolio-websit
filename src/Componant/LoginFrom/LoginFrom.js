import React from 'react';

const LoginFrom = () => {
    return (
        <div>
                    <form >
                        <div className="row">
                <div className="col-8 form-group mx-auto"><input className="form-control" type="e-mail" placeholder="Name" /></div>
            <div className="col-8 form-group mx-auto"><input className="form-control" type="Subject" placeholder="Enter email" /></div>
            <div className="col-8 form-group mx-auto"><input className="form-control" type="Subject" placeholder="Subject"/></div>
            <div className="col-8 form-group mx-auto"><input className="form-control" type="Youre message" placeholder="Youre message" /></div>
            <div className="col-5 form-group mx-auto"><input className="form-control" type="submit" placeholder="Submit" /></div>
            </div>
            </form>
        </div>
    );
};

export default LoginFrom;