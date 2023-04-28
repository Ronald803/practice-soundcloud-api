import React from 'react'
import Song from './Song';

export default function Songs() {
  return (
    <div className='container d-flex justify-content-center h-100 align-items-center'>
{/* <Song 
        songName={'Audio de prueba'} 
        urlLink={'273320224'}
        >
      </Song> */}
      <Song
        songName={'Atom Heart Mother'}
        urlLink={'1142337763'}
      >        
      </Song>
      <Song
        songName={'If'}
        urlLink={'1142335621'}
      >        
      </Song>
      <Song
        songName={'Summer 68'}
        urlLink={'1142336215'}
      >        
      </Song>
      <Song
        songName={"Alan's Psychedelic Breakfast"}
        urlLink={'1142337091'}
      >        
      </Song>
    </div>
  )
}
