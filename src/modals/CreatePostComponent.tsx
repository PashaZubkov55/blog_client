import React, { useRef, useState } from "react";

export const CreatePostComponent = ()=>{
    const fileInputRef = useRef(null);
    const [file, setFile] = useState('')
    const handleClick = () => {
        // Вызываем метод click() у input элемента, чтобы открыть диалог выбора файла
        fileInputRef.current.click();
      };
      const handleFileChange = (event) => {
       // console.log('Выбранный файл:', event.target.files[0].name);
       setFile(event.target.files[0])
           
      };
      console.log(file)
    return(
        <div className="modal">
            <div className="modal__container">
                <form className="modal__body">
                    <span className="modal__close"></span>
                   <div className="modal__title">
                    Добавить пост
                   </div>
                   <div className="modal__input">
                    <input type="text" placeholder="Название" className="input-text" />
                   </div>
                   <div className="modal__input">
                   <textarea className="input   modal__descriptinon" ></textarea>
                   </div>
                   <div className="modal__files">
                   <button type="button" className="button-success" onClick={handleClick}>Выбрать фото</button>
                   <input type="file"  className="file"ref = {fileInputRef} onChange={handleFileChange}/>
                   </div>
                   <div className="modal__sucsess">
                    <button className="button-success"> Создать</button>
                   </div>
                  
                  
                       
                </form>
            </div>
        </div>
    )
}