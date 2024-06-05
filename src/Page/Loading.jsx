import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <>
    <div className='d-flex vh-100 justify-content-center align-items-center'>
    <ClipLoader
        color="#C8B002"
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </>
  )
}

export default Loading