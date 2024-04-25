import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [username, setUserName] = useState('');

    const createNewRoom = (e) =>{
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Create a new room')
    }

    const joinRoom = () => {
        if(!roomId || !username){
            toast.error('ROOM ID & username is required');
            return;
        }
        navigate(`/editor/${roomId}`, {
            state: {
                username, 
            },
        });
    };

    const handleInputEnter = (e) => {
        if(e.code === 'Enter'){
            joinRoom();
        }
    }

    return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <img className="homePageLogo" src="/code-sync.png" alt="code-sync-logo" />
            <h4 className="mainLabel">Paste invitation ROOM ID</h4>
            <div className="inputGroup">
                <input 
                    type="text" 
                    className="inputBox" 
                    placeholder="ROOM ID"
                    onChange={(e) => setRoomId(e.target.value)}
                    value = {roomId}
                    onKeyUp={handleInputEnter}

                />
                <input 
                    type="text" 
                    className="inputBox" 
                    placeholder="USERNAME"
                    onChange={(e) => setUserName(e.target.value)}
                    value = {username}
                    onKeyUp={handleInputEnter}
                />
            <button className="btn joinBtn" onClick={(joinRoom)}>Join</button>
            <span className="createInfo">
                If you don't have an invite then create &nbsp;
                <a onClick={createNewRoom} className="createNewBtn">
                    new room
                </a>
            </span>
        </div>
        </div>
        
        <footer>
            <h4>
                Built by &nbsp;<a href="https://github.com/Aryan-Mac01">MAC</a>
            </h4>
        </footer>
    </div>  
    ) 
}
export default Home 
