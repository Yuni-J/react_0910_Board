import React, { useRef, useState } from 'react';
import { boardList } from '../data/data';
import { Link } from 'react-router-dom';
import './BoardList.css';

const BoardWriting = () => {
    const nextId = useRef(8);

    // 오늘 날짜
    const today = new Date().toLocaleDateString();
        
    const [ boardListTmp, setBoardListTmp ] = useState([...boardList]);
    console.log(boardListTmp);

    const [ board, setBoard ] = useState({
        title:'',
        writer:'',
        content:'',
        reg_date: today
    });
    
    const { title, writer, content, reg_date } = board;

    const onCreate = () =>{
        const b = {
            id: nextId.current,
            title,
            writer,
            content,
            reg_date
        };
        
        setBoardListTmp(boardListTmp.concat(b));
        setBoard({
            title:'',
            writer:'',
            content:'',
            reg_date: today
        });

        nextId.current += 1;
    }
    const onChange = (e) => {
        const{ name, value } = e.target;
        setBoard({
            ...board,
            [name]:value
        })
    }

    return (
        <div className='boardWriting'>
            <h2>글쓰기</h2>
            <form className='content'>
                <label htmlFor="r"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'end',
                    lineHeight: '25px',
                    margin: '0px 0px 0px 5px'
                }}>
                    date : 
                    <input type="text" id='r' name='reg_date' value={reg_date}/>
                </label>
                <label htmlFor="t">
                    Title
                    <input 
                    type="text"
                    id='t'
                    name='title'
                    value={title}
                    onChange={onChange}
                    placeholder='제목을 입력해주세요'
                    /> 
                </label>
                <label htmlFor="w">
                    Writer
                    <input 
                    type="text" 
                    id='w'
                    name='writer'
                    value={writer}
                    onChange={onChange}
                    />
                </label>
                <label htmlFor="c">
                    Content
                    <input 
                    type="text" 
                    id='c'
                    name='content'
                    value={content}
                    onChange={onChange}
                    placeholder='내용을 입력해주세요'
                    />
                </label>
            </form> 
            <Link to={'/'}><button onClick={onCreate}>등록</button></Link>
        </div>
        
    );
};

export default BoardWriting;