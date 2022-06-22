import '../App.css';
import downloadIcon from "../img/document-download.svg";

function Document(props) {
    return (
        <a href={props.file} className="download" download>
            <img src={downloadIcon} alt="Download" width="19" height="19"></img>
            Скачать {props.name}
        </a>
    );
}

export default Document;