import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
);
const secondelement = (
    <div>
    <p>Hello I am a paragraph</p>
    <p>Helli I am a second paragraph</p>
    </div>
        );

ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(secondelement, document.getElementById('root'));