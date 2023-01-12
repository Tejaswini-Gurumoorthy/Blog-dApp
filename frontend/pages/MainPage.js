import React, { useEffect, useState } from 'react';
//import Web3 from 'web3'



export default function MainPage() {
    const[message, setMessage]= useState('Hello there!')
    const [address, setAddress]= useState('');
    const [web3, setWeb3]= useState();
    let Web3= require('web3');

    useEffect(()=>{
        getCurrentWalletConnected();
        const w3= new Web3(window.ethereum);
        setWeb3(w3);
    },[])
    
    async function connectWallet(){
        if(typeof window!= "undefined" && typeof window.ethereum!= "undefined")
        {
            try
            {
                //const accounts= web3.eth.accounts;
                const accounts= await window.ethereum.request({method: "eth_requestAccounts"});
                setAddress(accounts[0]);
                console.log('connected: '+accounts[0]);
                return address;
            }
        catch(err){
            console.log('Error!!'+err);
            return err;
        }
    }
    else{
        console.log('Error Buddy!');
    }}
    const getCurrentWalletConnected= async()=>{
            if(typeof window!= "undefined" && typeof window.ethereum!= "undefined")
            {
                try{
                {
                    const accounts= await window.ethereum.request({method: "eth_accounts"});
                    if(accounts[0].length>0)
                    {
                    console.log(accounts[0]);
                    setAddress(accounts[0]);
                    } 
                    else
                    {
                        console.log('Connect metamask using connect button!');
                    }
                } 
                
            }
            catch(err){
                console.log('Error!!'+err);
            }
        }
        else{
            console.log('Error Buddy!');
        }
    }

    async function signMessage(address)
    {
        try{
        const signature= await web3.eth.personal.sign(message, address);
        console.log('signature: '+signature);
        const verfiedAddress= await web3.eth.personal.ecRecover(message,signature);
        console.log('After signing: '+verfiedAddress);
        console.log('Before Signing: '+address);
        }
        catch(error)
        {
            console.log('Probably address not available.: '+error);
        }
        
        
    }
    return (
        <>
        <button className='connection' onClick={connectWallet}><span>{address.length>0 ? `Connected: ${address.substring(0,5)}...${address.substring(35,38)}`: 'Connect Wallet' }</span></button>
        <button className='connection' onClick={()=>{
            connectWallet().then((address)=>{
                signMessage(address)
            }).catch((err)=>{
                console.log('Promised error: '+err)
            })
        }}><span>Sign</span></button>
        </>
    )
}