import '../../App.css';
import Document from './document';

function Documents() {
    const files = {
        "архив со сборником ГЭСН": 'GESN.zip',
        "архив со сборником ФЕР": 'FER.zip',
        "архив со сборником ФССЦ": 'FSSTs.zip',
        "МДС 81-3-99": 'MDS 81-3-99.doc',
        "МДС 81-25-2001": 'MDS 81-25-2001.doc',
        "МДС 81-33-2004": 'MDS 81-33-2004.doc',
        "МДС 81-35-2004": 'MDS 81-35-2004.doc',
        "МДС 83-1-99": 'MDS 83-1-99.doc',
        "ФСЭМ для расчета машиночаса": 'FSEM.doc'
    };

    return (
        <div className="documents">
            <h3>На этой странице Вы можете скачать "ГОСУДАРСТВЕННЫЕ СМЕТНЫЕ НОРМАТИВЫ (ГЭСН, ФЕР, ФССЦ, МДС, ФСЭМ)"</h3>
            {Object.keys(files).map((name, index) => {
                return <Document key={index} name={name} file={files[name]} />
            })}
        </div>
    );
}

export default Documents;