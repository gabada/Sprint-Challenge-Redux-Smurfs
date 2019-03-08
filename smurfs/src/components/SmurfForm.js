import React, {useState} from 'react';

const SmurfForm = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    return (
        <div>
            <form>
                <input type="text" placeholder="Smurfs name" onChange={e => setName(e.target.value)} name="name" value={name} />
                <input type="text" placeholder="Smurfs age" onChange={e => setAge(e.target.value)} name="age" value={age} />
                <input type="text" placeholder="Smurfs height" onChange={e => setHeight(e.target.value)} name="height" value={height} />
            </form>
            <button onClick={() => {
                props.addSmurf({name, age, height})
                    setName('');
                    setAge('');
                    setHeight('');
                }
            }>Add New Smurf</button>
        </div>
    )
    
};

export default SmurfForm;