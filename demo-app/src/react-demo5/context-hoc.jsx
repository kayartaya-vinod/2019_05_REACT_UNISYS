import React from 'react';
import Context from './Context';

export const consumer = (...params) => (OldComp) => (props) => {
    return <Context.Consumer>
        {
            (context)=> {
                const newProps = {};
                params.forEach(p=>{
                    newProps[p] = context[p];
                });
            
            return <OldComp {...newProps} {...props}/>
            }
        }
    </Context.Consumer>;
};