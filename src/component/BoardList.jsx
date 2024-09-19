import React from 'react';
import { boardList } from '../data/data';
import { Link } from 'react-router-dom';
import './BoardList.css';

const BoardList = () => {
    return (
        <div className='boardList'>
            <h2>Board List Page</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Writer</th>
                            <th>Reg_date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            boardList.map(b=>(
                                <tr key={b.id}>
                                    <td>{b.id}</td>
                                    <td>
                                        <Link to={`/detail/${b.id}`} className='link'>{b.title}</Link>
                                    </td>
                                    <td>{b.writer}</td>
                                    <td>{b.reg_date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link to={'/writing'}><button>글쓰기</button></Link>
        </div>
    );
};

export default BoardList;