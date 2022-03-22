import React, { useState } from 'react';
import './page.css'
import Content from './components/content.jsx'

const Page = () => {
    const [modalActive, setModalActive] = useState(true)
    return (
    <div className='PageContent'>
        <div className="wrapper">
        <header id="header" className="header">
            <div className="header_container">
               <a href="#" id="down" className="down"><img src="img/MyPhotoSmall.png" className="profile_photo" alt="profile_photo" /></a>
               <p className="MyName">Даша Касьянова</p>
                    <a href="#">
                        <img src="img/logo.svg" class="logo" alt="logo" />
                    </a>
                <button className="control_panel">Панель управления</button>    
            </div>
        </header>

        <section id="section" className="section">
            <div className="section_container">
                <div className="bacgr_image">
                    <img src="img/background_image.svg" className="background_image" alt="background_image" />
                </div>
                <h1 className="welcome">Добро пожаловать
                    <br />в академию!
                </h1>
                <div className="selection_photo">
                    <img src="img/MyPhoto.jpg" class="main_photo" alt="main_photo" />
                </div>
                <div className="first_block_content">
                    <h3 className="name">Даша Касьянова</h3>
                    <p className="birth">05.08.2001</p>
                    <div class="main_info">
                        <p className="city"><span>Город:</span> Томск</p>
                        <p className="gender"><span>Пол:</span> женщина</p>
                        <p className="age"><span>Возраст:</span> 20</p>
                        <p className="about"><span>О себе: </span>Всем привет! Меня зовут Даша, мне 20 лет и я учусь на переводчика. Я немного занимаюсь музыкой и программированием самостоятельно. Я решила бросить себе вызов и сделать тестовое задание, так как всегда открыта к новым знаниям и опыту.
                        <br />
                        <br />
                        <span className="btw">BTW: у меня тоже есть котик!</span></p>
                        <p className="pet"><span>Домашнее животное:</span> есть</p>
                    </div>
                    <div className="main_info_decorations">
                        <img src="img/female.svg" className="female_icon" alt="female_icon" />
                        <img src="img/pet.svg" className="pet_icon" alt="pet_icon" />
                    </div>
                </div>
                <div className="second_block_content">
                    <h2>Отзывы</h2>
                    <div className='CommentButton'>
                    
                    <button onClick={() => setModalActive(true)} className="add_comment">Добавить отзыв</button>
                        <img src="img/comment_plus.svg" class="comment_plus" alt="comment_button" />
                    </div>
                </div>
    
                <div className="all">
                        <input checked type="radio" name="respond" id="desktop" />
                            <article id="slider">
                                    <input checked type="radio" name="slider" id="switch1" />
                                    <input type="radio" name="slider" id="switch2" />
                                <div id="slides">
                                    <div id="overflow">
                                        <div class="image">
                                            <article><img src="img/FirstSlide.png" /></article>
                                            <article><img src="img/SecondSlide.png" /></article>
                                        </div>
                                    </div>
                                </div>
                                <div id="controls">
                                    <label for="switch1"></label>
                                    <label for="switch2"></label>
                                </div>
                                <div id="active">
                                    <label for="switch1"></label>
                                    <label for="switch2"></label>
                                </div>
                            </article>
                </div>
            </div>

        </section>
        <footer className='Footer'>
            <div className="footer_container">
                <p>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</p>
                <a href="https://vk.com/subkeezy"><img src="img/vk.svg" className="vk_icon" alt="vk_icon" /></a>
                <a href="https://instagram.com/subkeezy"><img src="img/insta.svg" className="insta_icon" alt="insta_icon" /></a>
            </div>
        </footer>


        <Content active={modalActive} setActive={setModalActive} />





        </div>
    </div>
    );
  }


export default Page;