import React from 'react'
import Song from './Song'

export default function Carouser() {
  return (
    <div>
        <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
    <div class="carousel-item active">
        <div className='row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8'>
                <Song
                    songName={'Atom Heart Mother'}
                    urlLink={'1142337763'}
                >        
                </Song>
            </div>
            <div className='col-sm-2'></div>
        </div>
    </div>
    <div class="carousel-item">
        <div className='row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8'>
                <Song
                songName={'If'}
                urlLink={'1142335621'}
                >        
                </Song>
            </div>
            <div className='col-sm-2'></div>
        </div>
    </div>
    <div class="carousel-item">
        <div className='row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8'>
                <Song
                songName={"Alan's Psychedelic Breakfast"}
                urlLink={'1142337091'}
                >        
                </Song>        
            </div>
            <div className='col-sm-2'></div>
        </div>
    </div>    
    <div class="carousel-item">
        <div className='row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8'>
                <Song
                    songName={'Summer 68'}
                    urlLink={'1142336215'}
                >        
                </Song>        
            </div>
            <div className='col-sm-2'></div>
        </div>
    </div>    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
