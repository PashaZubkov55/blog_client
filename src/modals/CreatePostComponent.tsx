import React from "react";

export const CreatePostComponent = ()=>{
    return(
        <div className="modal">
            <div className="modal__container">
                <div className="modal__body">
                   <div className="modal__title">
                    Добавить пост
                   </div>
                   <div className="modal__input">
                    <input type="text" placeholder="Название" className="input-text" />
                   </div>
                   <div className="modal__input">
                   <textarea className="input   modal__descriptinon" ></textarea>
                   </div>
                   <div className="modal__input">
                    <input type="file" placeholder="прекрепить фото" className="input file" />
                   </div>
                </div>
            </div>
        </div>
    )
}