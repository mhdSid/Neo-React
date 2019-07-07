import React from 'react';
import { Info } from './Info';

/*
 * Progress Component
 */
export function Progress (props) {
    return (
      <div className='progress-box'>
        <div className='progress-title flex flex-row justify-between align-center'>
          <div className='flex align-center'>
            <span className='progress-title-text progress-text'>
              {props.text}
            </span>
            <Info></Info>
          </div>
          <span className='progress-title-text progress-value'>
            {props.value}%
          </span>
        </div>
        <div className='progress-bar'>
          <div className='progress-bar-inner' style={{width: `${props.value}%`, backgroundColor: props.color}}></div>
        </div>
      </div>
    );
  }