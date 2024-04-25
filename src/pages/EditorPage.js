import React, {useState} from 'react'

const EditorPage = () => {

    const [clients, setClients] = useState([
        {socketId: 1, username: 'Aryan Mac'},
        {socketId: 2, username: 'Roach'},
    ]);

    return (
    <div className="mainWrap">
        <div className="aside">
            <div className="asideInner">
                <div className="logo">
                    <img 
                        src="/code-sync.png" 
                        alt="logo" 
                        className="logoImage" 
                    />
                </div>
                <h3>Connected</h3>
                <div className="clientsList">
                    {
                        //1:10
                    }
                </div>
            </div>
        </div>
        <div className="editorWrap">Editor goes here...</div>
        
    </div>
    )
}

export default EditorPage