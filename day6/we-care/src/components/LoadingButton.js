import React from 'react'

function LoadingButton({ className,type, loading, children, onClick, loadingText = 'Please wait...' }) {
    return (
        <>
            {
                (loading) ? (<>
                    <button className={className} disabled={loading}>
                        <div className='loading-indicator'>
                        <div class="spinner-border" role="status" style={{width: '23px', height: '23px' }}>
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div>
                            {loadingText}
                        </div>
                        </div>
                    </button>
                </>) : (<>
                    <button className={className} type={type} onClick={onClick}>
                        {children}
                    </button>
                </>)
            }
        </>
    )
}

export default LoadingButton