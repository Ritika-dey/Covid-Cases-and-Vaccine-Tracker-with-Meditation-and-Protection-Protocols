import React from 'react'
import sleep from './music/sleep.mp3'
import peace from './music/peace.mp3'

export default function Med() {
    return (
        <>
        <div className="meditation">
           <div className="main-div container">
           <h1 className="med-header">Take care of your body. It's the only place you have to live--Jim Rohn</h1> 
               <div className="row">
                   <div className="ml-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 sleep">
                       <h4>Steps For a Good Sleep:</h4>
                       <ul>
                           <li>Find a quiet area. Sit or lie down, depending on what feels most comfortable. Lying down is preferable at bedtime.</li>
                           <li>Close your eyes and breathe slowly. Inhale and exhale deeply. Focus on your breathing.</li>
                           <li>If a thought pops up, let it go and refocus on your breathing.</li>
                       </ul>
                       <audio controls className="music"> 
                            <source src={sleep} type="audio/mpeg" /> 
                        </audio>
                    </div>
                   <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-1 peace">
                       <h4>Steps For Peaceful Mind:</h4>
                       <ul>
                           <li>Pick a recording. Dim the light of your phone or device you’re using to listen to the guided meditation.</li>
                           <li>Start the recording. Lie down in bed and breathe deeply and slowly.</li>
                           <li>Focus on the music. If your mind wanders, slowly return your attention to the recording.</li>
                       </ul>
                       <audio controls className="music"> 
                            <source src={peace} type="audio/mpeg" /> 
                       </audio>
                   </div>
               </div>
           </div>
        </div>
        </>
    )
}
