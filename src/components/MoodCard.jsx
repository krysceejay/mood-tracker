
const MoodCard = ({it}) => {
    return (
        <div className={`app__mood-history_list_item app__mood-history_list_item--${it?.emoji}`}>
            <div className={`app__mood-history_list_item_img-${it?.emoji}`}>
            <img src={`/img/${it?.emoji}.png`} alt={`${it?.emoji} Emoji`} />
            </div>
            <div className="app__mood-history_list_item_text">
            <p className={`app__mood-history_list_item_text_head_${it?.emoji}`}>
                {it?.emojiText}
            </p>
            <p className="app__mood-history_list_item_text_date">{it?.date}</p>
            </div>
            <div className="app__mood-history_list_item_cat-img">
            <img src="/img/background.png" alt="Background" />
            </div>
        </div>
    )
}

export default MoodCard
