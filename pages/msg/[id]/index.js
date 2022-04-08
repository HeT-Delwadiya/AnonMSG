import React from 'react';
import { useRouter } from 'next/router';
const axios = require('axios').default;

function Msg(props) {

       const router = useRouter()
       const { id } = router.query;

       const [msg, setMsg] = React.useState(props.msg?props.msg:{})
       const [passProtected, setPassProtected] = React.useState(props.passProtected?props.passProtected:false)
       const [passHint, setPassHint] = React.useState(props.passHint?props.passHint:"")
       const [password, setPassword] = React.useState("");
       const [isProcessing, setIsProcessing] = React.useState(false)
       const [error, setError] = React.useState(false)
       const [error404, setError404] = React.useState(props.error404?props.error404:false)

       const handleSubmit = async(event) => {
              event.preventDefault();
              setIsProcessing(true)
              if(password==="") {
                     setIsProcessing(false)
                     return setError("Please write password first!")
              }

              try {
                     const res = await axios(`${process.env.REACT_APP_WEBSITE_URL}/api/msg/${id}/unlock`, {
                            method: "POST",
                            headers: {
                                   "Content-Type": "application/json"
                            },
                            data: JSON.stringify({password:password})
                     })
                     if(res.data.success) {
                            setMsg(res.data.msg)
                            setPassProtected(false)
                            // if (res.data.msg.destroy)
                            //        setTimeout(() => removeMsg(),5000);
                     } else {
                            setError("Wrong password! Please try again.")
                     }
                     
              } catch (error) {
                     console.log(error);
              }
              setIsProcessing(false);
       }

       const removeMsg = () => {
              if (!passProtected) {
                     setTimeout(async() => {
                            if (msg.destroy) {
                                   try {
                                          const res = await axios(`${process.env.REACT_APP_WEBSITE_URL}/api/msg/${id}/`, {
                                                 method: "DELETE"
                                          })
                                          console.log("Removed?");
                                   } catch (error) {
                                          console.log(error);
                                   }
                            }
                     },5000)
              }
       }

       const errorMsg = () => {
              return (
                     <div className="alert alert-danger mt-3 mx-5" role="alert" style={{display: error? "":"none", fontWeight:"500"}}>
                            {error}
                     </div>
              )
       }

       const errorMsg404 = () => {
              return (
                     <div>
                            <div className="alert alert-danger mt-4 mx-5" role="alert" style={{display: error404? "":"none", fontWeight:"500", textAlign:"center"}}>
                                   {error404}
                            </div>
                            <div className="text-center" style={{display: error404? "":"none"}}>
                                   <img src="https://res.cloudinary.com/dev-s-den/image/upload/v1649401529/other/404_txb0rt.gif" alt="404" className="my-3 px-3 img-error"></img>
                            </div>
                            <div className="mx-5 light-bg rounded-3 p-3 mb-5 mt-3" style={{fontWeight:"500", display: error404? "":"none"}}>
                                   <span className="dark-text fw-bold">About AnonMSG: </span><br/>
                                   <br/>
                                   With <span className="theme-text">AnonMSG</span> you can send messages that will self-destruct after being read.<br/>
                                   
                                   You can specify a manual password to encrypt the message and can also provide password hint, set an expiration date when the message is auto destroyed.<br/>
                                   <br/>
                                   AnonMSG is developed by <span className="theme-text">Het Delwadiya</span>. To know more, check out the 
                                   <a className="theme-text fw-bolder" href="https://github.com/HeT-Delwadiya"> my github profile</a>. 
                            </div>
                             
                     </div>
              )
       }

       return (
              <div className="container card rounded-3 mt-4 mb-4">
              {errorMsg()}
              {errorMsg404()}
              {removeMsg()}
                     {!error404 && !passProtected && (<>
                            <div className="d-flex justify-content-between mx-5 mt-3">
                                   <h3 className="fs-2 fw-bold my-3 bg-dark text-white rounded-3 p-2">Message: </h3>
                            </div>
                            <div className="mx-5">
                                   <pre><textarea value={msg.msg} readOnly className="msg-area p-2" rows="4" placeholder="Enter your message here..." spellCheck="false"></textarea></pre>
                            </div>

                            <div className="input-group mb-3 px-5">
                                   <span className="input-group-text dark-text" id="password-field">Message By</span>
                                   <input type="text" value={msg.by} className="form-control" placeholder="Anonymous" readOnly aria-label="Sizing example input" aria-describedby="password-field"/>
                            </div>

                            <div className="mx-5 light-bg rounded-3 p-3 mb-5 mt-3" style={{fontWeight:"500"}}>
                                   {msg.destroy && (<><span className="dark-text fw-bold">Note:</span> Sender of this message ({msg.by}) set message auto-destruction after being read on for this message. Take backup if you want to else it will be permanently deleted.<br/>
                                   <br/></>)}
                                   <span className="dark-text fw-bold">About AnonMSG: </span><br/>
                                   <br/>
                                   With <span className="theme-text">AnonMSG</span> you can send messages that will self-destruct after being read.<br/>
                                   
                                   You can specify a manual password to encrypt the message and can also provide password hint, set an expiration date when the message is auto destroyed.<br/>
                                   <br/>
                                   AnonMSG is developed by <span className="theme-text">Het Delwadiya</span>. To know more, check out the 
                                   <a className="theme-text fw-bolder" href="https://github.com/HeT-Delwadiya"> my github profile</a>. 
                            </div> 
                     </>)}
              
                     {passProtected && (<>
                            <div className="d-flex justify-content-between px-5 mt-3">
                                   <h3 className="fs-2 fw-bold my-3 bg-dark text-white rounded-3 p-2 text-center">This message is password protected</h3>
                            </div>
                            
                            <div className="input-group mb-3 px-5 mt-3">
                                   <span className="input-group-text dark-text" id="question-field">Password Hint</span>
                                   <input type="text" className="form-control" value={passHint} readOnly aria-label="Sizing example input" aria-describedby="question-field"/>
                            </div>
                            <div className="input-group mb-3 px-5">
                                   <span className="input-group-text dark-text" id="password-field">Password</span>
                                   <input type="password" className="form-control" value={password} onChange={(e) => {setPassword(e.target.value); setError(false)}} aria-label="Sizing example input" aria-describedby="password-field"/>
                            </div>
                            <div className="px-5 mt-3 mb-5">
                                   <button type="button" onClick={handleSubmit} className={isProcessing? "btn btn-dark btn-lg rounded-3 w-100 disabled" : "btn btn-dark btn-lg rounded-3 w-100"}>{isProcessing ? "Verifying..." : "Verify"}</button>
                            </div>
                     </>)}
              </div>
       );
}

export async function getServerSideProps({params}) {
       const id = params.id;
       const res = await axios(`http://localhost:3000/api/msg/${id}`);
       if (res.data.success===true) {
              if (res.data.msg) {
                     return {
                            props: { msg: res.data.msg }
                     };
              } else {
                     return {
                            props: { passProtected: res.data.passProtected, passHint: res.data.passHint }
                     };
              }
       } 
       return {
              props: { error404: "This message is no longer available to read!" }
       };
}

export default Msg;