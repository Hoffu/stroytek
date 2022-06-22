import '../App.css';
import Document from './document';
import fer from "../download/FER.zip";
import gesn from "../download/GESN.zip";
import fssts from "../download/FSSTs.zip";
import mds1 from "../download/MDS 81-3-99.doc";
import mds2 from "../download/MDS 81-25-2001.doc";
import mds3 from "../download/MDS 81-33-2004.doc";
import mds4 from "../download/MDS 81-35-2004.doc";
import mds5 from "../download/MDS 83-1-99.doc";
import fsem from "../download/FSEM.doc";

function Documents() {
    return (
        <div className="documents">
            <h3>На этой странице Вы можете скачать "ГОСУДАРСТВЕННЫЕ СМЕТНЫЕ НОРМАТИВЫ (ГЭСН, ФЕР, ФССЦ, МДС, ФСЭМ)"</h3>
            <Document name={"архив со сборником ГЭСН"} file={gesn} />
            <Document name={"архив со сборником ФЕР"} file={fer} />
            <Document name={"архив со сборником ФССЦ"} file={fssts} />
            <Document name={"МДС 81-3-99"} file={mds1} />
            <Document name={"МДС 81-25-2001"} file={mds2} />
            <Document name={"МДС 81-33-2004"} file={mds3} />
            <Document name={"МДС 81-35-2004"} file={mds4} />
            <Document name={"МДС 83-1-99"} file={mds5} />
            <Document name={"ФСЭМ для расчета машиночаса"} file={fsem} />
        </div>
    );
}

export default Documents;