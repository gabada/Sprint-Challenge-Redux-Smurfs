import React, {useState} from 'react';

const SmurfForm = props => {
    const [name, setName] = useState('');
    return (
        <div>
            <form>
                <input type="text" placeholder="friend name" onChange={e => setName(e.target.value)} name="name" value={name} />
            </form>
        </div>
    )
    
};

export default SmurfForm;