import React, {useState} from 'react';
import env from '../env.json';

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');



    let sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body : JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(response => {
            if (response.result) {
                setUrl(env.url+'/'+response.url);
            }
        })
    }

    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Заповніть поля');
            return false;
        }
        sendData({'note' : note});
    }

    return (
        <div className='create'>
            <form onSubmit={loadDataFromForm} className={formClass}>
                {/* <label className='h5 fw-light' htmlFor="">Введіть замітку: </label><br /> */}
                <textarea className='form-control shadow-sm p-2 bg-body rounded' placeholder="Введіть тут замітку" name="note" id="note"></textarea><br />
                <button type="submit" className="btn btn-outline-secondary" style={{"textAlign":"center", "width": "198.76px"}}>Створити</button>
            </form>
            <div className={lineClass}>{url}</div>
            <div><button className="btn btn-outline-secondary" onClick={()=> {window.location.reload()}}>Створити нову замітку</button></div>
        </div>
    );
}

export default Create;