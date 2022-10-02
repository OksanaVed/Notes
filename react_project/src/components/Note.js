import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';

function Note() {

    let {noteURL} = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');



    useEffect(()=>{
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body : JSON.stringify({"url" : noteURL})
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setNoteText(response.note);
                    setLineClass('');
                    setFormClass('hide');
                    setErrorClass('hide');
                } else if(!response.result) {
                    setLineClass('hide');
                    setFormClass('hide');
                    setErrorClass('');
                }
                
                
            })
        } else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');

        }
    }, []);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert("Заповніть поля");
            return false;
        }
        noteURL = url;
        window.location.href = env.url+'/'+url;
    }

    function searchNote(){
        window.location.href = env.url;
    }

    return (
        <div className="note">
            <div className={lineClass}>
                <h4>Note:</h4><br />    
                <div className="fst-italic fs-5">{noteText}</div><br />
                <div className={lineClass}><button className="btn btn-secondary" onClick={searchNote}>Дивитись ще одну замітку</button></div>
                <p style={{"marginTop":"10px"}} className="h6">Увага! Скопіюйте замітку. Після показу замітка буде видалена!</p>
            </div>
            <div className={errorClass}>
                <p className="h5 fw-light">З'явилася помилка, такий хеш не знайдений</p>
                <a href={env.url}><button className="btn btn-secondary">спробуйте ще раз</button></a>
            </div>
            <div className={formClass}>
                <form action="" onSubmit={getNote}>
                    <label className="h6" htmlFor="url">Введіть хеш замітки: </label>
                    <input style={{'margin':"15px auto"}} type="text" name="url" ir="url" className="form-control shadow-sm p-2 bg-body rounded"/>
                    <button type="submit" className="btn btn-secondary">Шукати замітку</button>
                </form>
            </div>

        </div>
    );
}

export default Note;