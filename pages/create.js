import React from "react";
import axios from "axios";
import { useRouter } from 'next/router'

function Create(props) {

       const [msg, setMsg] = React.useState("");
       const [error, setError] = React.useState(false);
       const [isDestroyAR, setIsDestroyAR] = React.useState(true);
       const [autoDestroy, setAutoDestroy] = React.useState("31536000");
       const [password, setPassword] = React.useState("");
       const [hint, setHint] = React.useState("");
       const [info, setInfo] = React.useState(false);
       const [by, setBy] = React.useState("");
       const [success, setSuccess] = React.useState(false);
       const [link, setLink] = React.useState(false);
       const [isProcessing, setIsProcessing] = React.useState(false);
       const [isRemoving, setIsRemoving] = React.useState(false);
       const [removed, setRemoved] = React.useState(false);
       const [id, setId] = React.useState(false);
       const router = useRouter()

       const handleSubmit = async(event) => {
              event.preventDefault();
              setIsProcessing(true);
              setRemoved(false)

              if (msg=="") {
                     setIsProcessing(false)
                     return setError("Please write message before submit!")
              }
              if (password!="" && hint=="" || password=="" && hint!="") {
                     setIsProcessing(false)
                     return setError("If you set password then you have to provide hint also!")
              }

              var expires = new Date();
              expires.setSeconds(expires.getSeconds() + parseInt(autoDestroy))
              setAutoDestroy(expires)
              
              var data;
              
              if (password!="") {   
                     data = {
                            msg: msg,
                            password: password,
                            passHint: hint,
                            destroy: isDestroyAR,
                            destroyTime: expires,
                            by: by=="" ? "Anonymous" : by
                     }     
              } else {
                     data = {
                            msg: msg,
                            destroy: isDestroyAR,
                            destroyTime: expires,
                            by: by=="" ? "Anonymous" : by
                     }
              }

              try {
                     const res = await axios(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/msg/add`, {
                            method: "POST",
                            headers: {
                                   "Content-Type": "application/json"
                            },
                            data: JSON.stringify(data)
                     })
                     if(res.data.success) {
                            setLink(process.env.NEXT_PUBLIC_WEBSITE_URL+"/msg/"+res.data.msg._id)
                            setId(res.data.msg._id)
                            setSuccess(res.data.success)
                            setMsg("")
                            setPassword("")
                            setHint("")
                            setBy("")
                     }
                     
              } catch (error) {
                     console.log(error);
              }
              setIsProcessing(false);
       }

       const handleRemove = async(event) => {
              event.preventDefault()
              setIsRemoving(true)

              try {
                     const res = await axios(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/msg/${id}`, {
                            method: "DELETE"
                     })
                     setIsRemoving(false)
                     setRemoved(true)
                     setError("Message destroyed successfully!")
                     setSuccess(false)
              } catch (error) {
                     console.log(error);
              }
              setIsProcessing(false);
       }

       const errorMsg = () => {
              return (
                     <div className="alert alert-danger mt-3" role="alert" style={{display: error? "":"none", fontWeight:"500"}}>
                            {error}
                     </div>
              )
       }

       const successMsg = () => {
              return (
                     <div style={{display: success? "":"none", fontWeight:"500"}}>
                            <div className="alert alert-success mt-3 mb-3" role="alert">
                                   Congratulations! Your message created successfully. You can share link to anyone. <span onClick={() => {router.reload()}} className="theme-text pointer">Click here</span> to create new message.
                            </div>
                            <div className="input-group mb-3">
                                   <span className="input-group-text dark-text" id="password-field">Link</span>
                                   <input type="text" value={link} className="form-control" placeholder="by default its anonymous" aria-describedby="password-field" readOnly/>
                            </div>
                     </div>
              )
       }

       return (
              <div className="container card rounded-3 mt-4 mb-4">
              {errorMsg()}
              {successMsg()}
                     <div className="d-flex justify-content-between">
                            <h3 className="fs-2 fw-bold my-3 bg-dark text-white rounded-3 p-2">Create new message: </h3>
                            <button type="button" onClick={(e) => {e.preventDefault(); setInfo(!info)}} className="btn btn-dark dark-bg my-4 px-3 me-3" style={{fontWeight:"900"}}>?</button>
                     </div>
                     <pre><textarea onChange={(e) => {setMsg(e.target.value); setError(false)}} value={msg} className="msg-area p-2" rows="4" placeholder="Enter your message here..." spellCheck="false"></textarea></pre>
                     {info && (<div className="mx-5 light-bg rounded-3 p-3 mb-4" style={{fontWeight:"500"}}>
                            With <span className="theme-text">AnonMSG</span> you can send messages that will self-destruct after being read.<br/>
                            1. Write the message below, create it and get a sharable link.<br/>
                            2. Send the link to whom you want to read the message.<br/>
                            3. The note will self-destruct after being read by the recipient if you have selected that option.<br/>
                            <br/>
                            Note: If you dont want to set password then leave password and hint field blank.<br/>
                            <br/>
                            You can specify a manual password to encrypt the message and can also provide password hint, set an expiration date when the message is auto destroyed.<br/>
                            <br/>
                            AnonMSG is developed by <span className="theme-text">Het Delwadiya</span>. To know more, check out the 
                            <a className="theme-text fw-bolder" href="https://github.com/HeT-Delwadiya"> my github profile</a>. 
                     </div>)}
                     <div className="form-check form-switch form-switch-md">
                            <input className="form-check-input ms-2" type="checkbox" checked={isDestroyAR} onChange={() => {setIsDestroyAR(!isDestroyAR); setError(false)}} role="switch" id="self-destruct-check"/>
                            <label className="form-check-label ms-3 dark-text fw-bold fs-5" htmlFor="self-destruct-check">Self-destruct after reading it</label>
                     </div>
                     <div className="input-group mb-3 px-5">
                            <span className="input-group-text dark-text" id="password-field">Password</span>
                            <input type="password" className="form-control" value={password} onChange={(e) => {setPassword(e.target.value); setError(false)}} aria-label="Sizing example input" aria-describedby="password-field"/>
                     </div>
                     <div className="input-group mb-3 px-5">
                            <span className="input-group-text dark-text" id="question-field">Password Hint</span>
                            <input type="text" className="form-control" value={hint} onChange={(e) => {setHint(e.target.value); setError(false)}} aria-label="Sizing example input" aria-describedby="question-field"/>
                     </div>
                     <div className="input-group mb-3 px-5">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Auto destruct</label>
                            <select className="form-select" value={autoDestroy} onChange={(e) => {setAutoDestroy(e.target.value); setError(false)}} id="inputGroupSelect01">
                                   <option value="31536000">Never</option>
                                   <option value="3600">1 hour from now</option>
                                   <option value="86400">24 hour from now</option>
                                   <option value="604800">7 days from now</option>
                                   <option value="2592000">30 days from now</option>
                            </select>
                     </div>
                     <div className="input-group mb-3 px-5">
                            <span className="input-group-text dark-text" id="password-field">Message By</span>
                            <input type="text" value={by} className="form-control" placeholder="by default its anonymous" onChange={(e) => {setBy(e.target.value); setError(false)}} aria-label="Sizing example input" aria-describedby="password-field"/>
                     </div>
                     <div className="px-5 mt-3 mb-5">
                            <button type="button" onClick={handleSubmit} className={success? "btn btn-dark btn-lg rounded-3 w-100 disabled" :isProcessing? "btn btn-dark btn-lg rounded-3 w-100 disabled" : "btn btn-dark btn-lg rounded-3 w-100"}>{success ? "Message Created" : isProcessing ? "Creating message..." : "Create Message"}</button>
                     </div>

                     {success && (<div className="px-5 mb-5">
                            <button type="button" onClick={handleRemove} className={removed? "btn btn-danger btn-lg rounded-3 w-100 disabled" :isRemoving? "btn btn-danger btn-lg rounded-3 w-100 disabled" : "btn btn-danger btn-lg rounded-3 w-100"}>{removed ? "Message Destroyed" : isRemoving ? "Destroying message..." : "Destroy Message"}</button>
                     </div>)}
              </div>
       );
}

export default Create;