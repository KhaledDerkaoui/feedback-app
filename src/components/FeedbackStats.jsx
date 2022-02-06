import { useContext } from "react"
import FeedbackContext from "../context/feedbackContext"
 
const FeedbackStats = () => {
    const {feedback}= useContext(FeedbackContext)
    let avrg = feedback.reduce((acc, cur) => {
        return acc+cur.rating
    }, 0) / feedback.length
    avrg = Number(avrg.toFixed(1))
    return ( 
        <div className="feedback-stats">
            <h4>{feedback.length} Reviws</h4>
            <h4>Average Rating: {isNaN(avrg)?"No rating":avrg}</h4>
        </div>
     );
}
 
export default FeedbackStats;