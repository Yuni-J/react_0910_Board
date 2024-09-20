import React, { useState, useEffect } from 'react';
import { boardList } from '../data/data';
import { Link, useParams } from 'react-router-dom';

const BoardModify = () => {

    const [ boardListTmp, setBoardListTmp ] = useState([...boardList]);
    console.log(boardListTmp);

    const { id } = useParams();

    const [ mod, setMod ] = useState({
        title: '',
        writer: '',
        content: '',
        reg_date: ''
    });

    const { title, writer, contents, reg_date } = mod;

    useEffect(() => {
        const board = Number(id);
        const boardToModify = boardListTmp.find(I => I.id === board);
        setMod(boardToModify);
    }, [id, boardListTmp]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setMod({
            ...mod,
            [name]:value
        });
    }

    const onCreate = () => {
        const b = {
            id : id,
            title : title,
            writer : writer,
            content : contents
        };
        setBoardListTmp(boardListTmp.concat(b));
        setMod({
            title: '',
            writer: '',
            content: '',
            reg_date: ''
        });
    }
    return (
        <div className='boardModify'>
            <h2>Board Modify</h2>
            <div className='content'>
                <div className='title'>
                    <input type="text" name='title' placeholder='Title' value={title} onChange={onChange}/>
                </div>
                <div className='writer'>작성자 : {writer} | 작성일 : [{reg_date.substring(0, reg_date.indexOf("T"))}]</div>
                {/* <div className='writer'>
                    <input type="text" name='writer' placeholder='Writer' value={writer} onChange={onChange}/>
                    [{reg_date.substring(0, reg_date.indexOf("T"))}]
                </div> */}
                <div className='con'>
                    <textarea type="text" name='content' placeholder='Content' value={contents} onChange={onChange}/>
                </div>
            </div>
            <div>
                <Link to={'/'}><button onClick={onCreate}>Modify</button></Link>
                <button>Remove</button>
                <Link to={'/'}><button>List</button></Link> 
            </div>
        </div>
    );
};

export default BoardModify;
