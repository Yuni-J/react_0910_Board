import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardList from './BoardList';
import BoardDetail from './BoardDetail';
import BoardWriting from './BoardWriting';

const BoardHome = () => {
    return (
        <div className='boardHome'>
            <h1>My First React Board Project</h1>
            <hr />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<BoardList />}/>
                    <Route path='/list' element={<BoardList />}/>
                    <Route path='/detail/:id' element={<BoardDetail />}/>
                    <Route path='/writing' element={<BoardWriting />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default BoardHome;