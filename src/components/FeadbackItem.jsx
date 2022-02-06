import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../context/feedbackContext"

const FeadbackItem = ({ item }) => {
    const {deleteFeedback,editFeedback}= useContext(FeedbackContext)
    return ( 
        <Card>
            <div className="num-display">{ item.rating}</div>
            <div className="text-display">{item.text}</div>
            <button className="close" onClick={()=>deleteFeedback(item.id)}><FaTimes color="purple"/> </button>
            <button className="edit" onClick={()=>editFeedback(item)}><FaEdit color="purple"/> </button>
        </Card>    
        
     );
}
 
export default FeadbackItem;