import React from "react";

export const SettingsPage = ()=>{
    return(
        <div className="setting">
            <div className="setting__wrapper">
                <div className="setting__item">
                <button className="setting__btn">
                    Редактировать  данные
                </button>
                </div>
                <div className="setting__item">
                <button className="setting__btn">
                    Добавить пост 
                </button>
                </div>
            </div>
        </div>
    )
}