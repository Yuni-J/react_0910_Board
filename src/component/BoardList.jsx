import React from 'react';
import { boardList } from '../data/data';
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
                    boardList.map(b => (
                                <tr key={b.id}>
                                    <td>{b.id}</td>
                                    <td>{b.title}</td>
                                    <td>{b.writer}</td>
                                    <td>{b.reg_date}</td>
                                </tr>
                    ))
                }
                    </tbody>
                </table>
        </div>
    );
};

export default BoardList;