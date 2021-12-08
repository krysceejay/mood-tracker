import React, {useState} from 'react'
import moment from 'moment'
import EmptyState from './components/EmptyState'
import TrackMood from './components/TrackMood'
import MoodCard from './components/MoodCard'

const App = () => {

  const [state, setState] = useState({
    history: [],
    isSelected: null

  })

  const { history, isSelected } = state

  const handleSelect = ind => {
    let emojiText
    switch (ind) {
      case "sad":
        emojiText = "Cat wasn’t having it"
        break;

      case "indifferent":
        emojiText = "Cat was indifferent"
        break;

      case "happy":
        emojiText = "Cat was super excited!"
        break;
    
      default:
        emojiText = ""
        break;
    }

    const dataSelected = {
      emoji: ind,
      date: `${moment().format("DD-MM-YYYY")} / ${moment().format('h:mm a')}`,
      emojiText
    }

    setState({...state, isSelected: dataSelected})
  }

  const handleSubmit = () => {
    setState({...state, history: [isSelected, ...history], isSelected: null})
  }

  return (
    <main>
      <div className="container">
        <div className="app">
          <TrackMood 
          isSelected={isSelected}
          handleSelect={handleSelect}
          handleSubmit={handleSubmit}
          />
          <section className="app__mood-history">
            <div className="app__mood-history_head">
              <div className="app__mood-history_head_image">
                <img src="/img/cat-img1.png" alt="Cat" />
              </div>
              <div className="app__mood-history_head_text">Cat mood tracker™</div>
            </div>
            <div className="app__mood-history_title">mood history</div>
            {history.length === 0 ?
            <EmptyState /> :
            <div className="app__mood-history_list">
              {history.map((it, ind) => (
                <MoodCard 
                key={ind}
                it={it}
                />
              ))}
            </div> 
            }
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
