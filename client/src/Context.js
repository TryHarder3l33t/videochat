import React, { createContext, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();
// //heroku
//const url = 'https://stackvideo.herokuapp.com/';
//dev
const url = 'http://localhost:5001/';

const socket = io(url);

const ContextProvider = ({ children }) => {
  const [stream, setStream] = useState(null);
  const [serverInfo, setServerInfo] = useState('');
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState();
  const [calling, setCalling] = useState(false);
  const [answerNameId, setAnswerNameId] = useState('');
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream;
      });

    socket.on('serverInfo', (id) => setServerInfo(id));

    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCalling(true);

      setCall({ isReceived: true, from, name: callerName, signal });
    });
  }, []);
  //When yoh answer the call send your name back
  const answerCall = () => {
    setCalling(false);
    setCallAccepted(true);
    window.scroll(0, 0);
    const peer = new Peer({ initiator: false, trickle: false, stream });

    //Send Call info for name here
    peer.on('signal', (data) => {
      socket.emit('answerCall', {
        signal: data,
        to: call.from,
        answerName: name,
      });
    });
    console.log('This is the name should be Eric');
    console.log(name);
    console.log(answerNameId);
    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
    console.log('this is the call');
    console.log(call);
  };

  //To call a user emit
  const callUser = (id, ev) => {
    ev.preventDefault();
    console.log('call user pressed');
    const peer = new Peer({ initiator: true, trickle: false, stream });
    peer.on('signal', (data) => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: serverInfo,
        name,
      });
    });
    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', ({ signal, answerName }) => {
      setCallAccepted(true);
      setAnswerNameId(answerName);
      peer.signal(signal);

      connectionRef.current = peer;
      console.log('this is the answer name id', answerName);
    });
  };

  const leaveCall = () => {
    setCallEnded(true);
    setCalling(false);
    setCall({ isReceived: false });
    connectionRef.current.destroy();
    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        calling,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        serverInfo,
        callUser,
        leaveCall,
        answerCall,
        url,
        answerNameId,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
