import React, { useEffect, useState } from 'react';
import '../App.css'


const Content = ({active, setActive}) => {
    
        const [userName, SetUserName] = useState('')
        const [userComment, SetUserComment] = useState('')
    
        const [userNameEmpty, SetUserNameEmpty] = useState(false)
        const [userCommentEmpty, SetUserCommentEmpty] = useState(false)
    
        const [userNameError, SetUserNameError] = useState('Пожалуйста, введите имя')
        const [userCommentError, SetUserCommentError] = useState('Пожалуйста, напишите отзыв')

        const [formValid, setFormValid] = useState(false)
        
        
        useEffect(() => {
            if (userNameError || userCommentError) {
                setFormValid(false)
            } else {
                setFormValid(true)
            }    
        }, [userNameError, userCommentError])
        
    const userNameHandler = (e) => {
        SetUserName(e.target.value)
        if (!e.target.value) {
            SetUserNameError('Пожалуйста, введите имя')
        } else {SetUserNameError('')
        }
    }

    const userCommentHandler = (e) => {
        SetUserComment(e.target.value)
        if (!e.target.value) {
            SetUserCommentError('Пожалуйста, напишите отзыв')
        } else {SetUserCommentError('')
        }
    }

    function blurHandler(e) {
    switch (e.target.name) {
        case 'InputName':
            SetUserNameEmpty(true);
        break;
        case 'InputComment':
            SetUserCommentEmpty(true);
        break;
        }
    }
    
    
    return (
        <div>
        <div className={active ? "modal_content active" : "modal_content"} onClick={() => setActive(false)}>
        <div className={active ? "App_wrapper active" : "App_wrapper"} onClick={e => e.stopPropagation()}>
        

        
        <h4>Отзыв</h4>
        <p className='YourName'>Как Вас зовут?</p>
        <p className='YourComment'>Все ли Вам понравилось?</p>
        <p className='Moderation'>Все отзывы проходят модерацию в течение 2 часов</p>
        <img src="img/important.svg" class="moderation_icon" alt="Moderation" />
        <img src="img/comment_plus.svg" class="photo_plus" alt="photo_plus" />
        
        <form action="">
            {(userNameEmpty && userNameError) && <div className="NameError" style={{color:'red'}}>{userNameError}</div>}
            <input onChange={e => userNameHandler(e)} onBlur={e => blurHandler(e)} type="text" value={userName} className="InputName" placeholder="Имя Фамилия" name="InputName"/>

            {(userCommentEmpty && userCommentError) && <div style={{color:'red'}}>{userCommentError}</div>}
            <textarea onChange={e => userCommentHandler(e)} onBlur={e => blurHandler(e)} value={userComment} className="InputComment" placeholder="Напишите пару слов о вашем опыте..." id="textarea" maxLength="200" name="UserComment"></textarea>

            <div className='PhotoUploadContainer'>
                <input type="file" name="file" id='file' class="PhotoUpload" accept=".png, .jpg, .jpeg" />
                <label htmlFor="file"><span>Загрузить фото</span></label>
            </div>

            <div className="Validation">{!formValid}</div>
            <button disabled={!formValid} className="SendComment" value="submit" type="submit">Отправить отзыв</button>
        </form>
        </div>
    </div>
    </div>

    )
}



export default Content;