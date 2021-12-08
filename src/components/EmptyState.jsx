import React from 'react'

const EmptyState = () => {
    return (
        <div className="app__mood-history_empty-state">
            <div className="app__mood-history_empty-state_img">
                <img src="/img/empty-state.png" alt="Empty State" />
            </div>
            <p className="app__mood-history_empty-state_text">No mood history <br /> to show yet</p>
        </div>
    )
}

export default EmptyState
