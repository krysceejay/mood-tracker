
const TrackMood = ({isSelected, handleSelect, handleSubmit}) => {
    return (
        <section className="app__emoji-box">
            <img src="/img/cat-img1.png" alt="Cat" className="app__emoji-box_image" />
            <p className="app__emoji-box_text">What is your cat’s <br /> current mood?</p>
            <div className="app__emoji-box_container">
                <div className={`app__emoji-box_container_image ${isSelected?.emoji === "sad" && "app__emoji-box_container--sad"} `} onClick={() => handleSelect("sad")}>
                <img src="/img/sad.png" alt="Sad Emoji" />
                </div>
                <div className={`app__emoji-box_container_image mx-1-5 ${isSelected?.emoji === "indifferent" && "app__emoji-box_container--indifferent"} `} onClick={() => handleSelect("indifferent")}>
                <img src="/img/indifferent.png" alt="Indifferent Emoji" />
                </div>
                <div className={`app__emoji-box_container_image ${isSelected?.emoji === "happy" && "app__emoji-box_container--happy"} `} onClick={() => handleSelect("happy")}>
                <img src="/img/happy.png" alt="Happy Emoji" />
                </div>
            </div>
            {isSelected &&
                <div className="app__emoji-box_selected">
                {isSelected?.emoji === "sad" && <p className="app__emoji-box_selected--sad">Cat wasn’t having it</p>}
                {isSelected?.emoji === "indifferent" && <p className="app__emoji-box_selected--indifferent">Cat was indifferent</p>}
                {isSelected?.emoji === "happy" && <p className="app__emoji-box_selected--happy">Cat was super excited!</p>}
                </div>
            }
            <button className={`app__emoji-box_submit ${isSelected && "app__emoji-box_submit--active"}`} onClick={isSelected && handleSubmit}>Save mood</button>
        </section>
    )
}

export default TrackMood
