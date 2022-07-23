import React from 'react'

export default function TestForm(props) {
  return (
    <div>
        <form>
          <div className="container" style= {{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea type="text" className="form-control" id="myBox" rows="8" style={{background: props.mode==='dark'?'#AE0A12':'white',color: props.mode==='dark'?'white':'black'}}>
                    </textarea>
                    <br/>
                    <button className="btn btn-primary">Convert to uppercase</button>
                </div>
          </div>
        </form>
    </div>
  )
}
