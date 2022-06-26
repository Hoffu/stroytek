import { useState, useCallback, useEffect } from 'react';
import '../../App.css';
import downloadIcon from "../../img/document-download.svg";

function Document(props) {
    const [file, setFile] = useState(null);
    const url = 'http://localhost:8080/api/docs/';

    const getDoc = useCallback(async () => {
        const res = await fetch(url + props.file);
        const docBlob = await res.blob();
        const docObjectURL = URL.createObjectURL(docBlob);
        setFile(docObjectURL);
    }, [props.file]);

    useEffect(() => {
        getDoc();
    }, [getDoc]);

    return (
        <a href={file} className="download" download>
            <img src={downloadIcon} alt="Download" width="19" height="19"></img>
            Скачать {props.name}
        </a>
    );
}

export default Document;