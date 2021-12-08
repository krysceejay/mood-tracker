
const App = () => {
  return (
    <main>
      <div className="container">
        <div className="app">
          <section className="app__emoji-box">
            <img src="/img/cat-img1.png" alt="Cat Image" className="app__emoji-box_image" />
            <p className="app__emoji-box_text">What is your cat’s <br /> current mood?</p>
            <div className="app__emoji-box_container">
              <div className="app__emoji-box_container_sad">
                <img src="/img/sad.png" alt="Sad Emoji" />
              </div>
              <div className="app__emoji-box_container_indifferent">
                <img src="/img/indifferent.png" alt="Indifferent Emoji" />
              </div>
              <div className="app__emoji-box_container_happy">
                <img src="/img/happy.png" alt="Happy Emoji" />
              </div>
            </div>
            <p className="app__emoji-box_selected">Cat was super excited!</p>
            <button>Save mood</button>
          </section>
          <section className="app__mood-history">
            <div className="app__mood-history_head">
              <div className="app__mood-history_head_image">
                <img src="/img/cat-img1.png" alt="Cat Image" />
              </div>
              <div className="app__mood-history_head_text">Cat mood tracker™</div>
            </div>
            <div className="app__mood-history_title">mood history</div>
            <div className="app__mood-history_list">
              <div className="app__mood-history_list_item sad">
                <div className="app__mood-history_list_item_img-sad">
                  <img src="/img/sad.png" alt="Sad Emoji" />
                </div>
                <div className="app__mood-history_list_item_text">
                  <p className="app__mood-history_list_item_text_head_sad">Cat wasn’t having it</p>
                  <p className="app__mood-history_list_item_text_date">06-09-2021 / 07:01</p>
                </div>
                <div className="app__mood-history_list_item_cat-img">
                  <img src="/img/background.png" alt="Sad Emoji" />
                </div>
              </div>
              <div className="app__mood-history_list_item happy">
                <div className="app__mood-history_list_item_img-happy">
                  <img src="/img/happy.png" alt="Happy Emoji" />
                </div>
                <div className="app__mood-history_list_item_text">
                  <p className="app__mood-history_list_item_text_head_happy">Cat was super excited!</p>
                  <p className="app__mood-history_list_item_text_date">06-09-2021 / 07:01</p>
                </div>
                <div className="app__mood-history_list_item_cat-img">
                  <img src="/img/background.png" alt="Sad Emoji" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App;
