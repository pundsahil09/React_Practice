import React, { useState } from 'react'

function Form() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [Uerror, setUError] = useState(false);
    const [Perror, setPError] = useState(false);

    function userHandler(e){
        let temp = e.target.value;
        if(temp.length < 3){
            setUError(true)
        }
        else{
            setUError(false)
        }
        setUser(temp);
    }
    function passHandler(e){
        let temp = e.target.value;
        if(temp.length<3){
            setPError(true)
        }
        else{
            setPError(false)
        }
        setPass(temp);
    }

    function show(e){
        
        if(user === "" || pass=== ""){
            alert("Please fill form");
        }else{
            alert(` name is ${user} and password is ${pass} `)
        }

        e.preventDefault();
    }
    return (
        <>
            <form action="" onSubmit={show}>

                <input type='text' name={user} placeholder='Enter User Name' onChange={userHandler}/><br />
                {Uerror?<span> User Name Not Valid </span>:""}
                <br /><br />
                <input type="password" name={pass} placeholder='Enter Password' onChange={passHandler}/><br />
                {Perror?<span>Password not valid</span>:""}
                <br /><br />
                <button> SUBMIT </button>&nbsp;&nbsp;<input type="reset" value={'RESET'}/>
            </form>
        </>
    )
}

export default Form