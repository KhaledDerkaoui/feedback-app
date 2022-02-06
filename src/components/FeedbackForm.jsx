import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from './shared/Button';
import Rating from "./RatingSelect";
import FeedbackContext from "../context/feedbackContext"



const FeedbackForm = () => {
    const [text, setText] = useState("")
    const [rating, setRating] = useState(10)
    const [btnMessage, setBtnMessage] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const {addFeedback,feedbackToEdit,updateFeedback}= useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackToEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackToEdit.item.text)
            setRating(feedbackToEdit.item.rating)
        }
    },[feedbackToEdit])

    const handelTextChange = e => {
        setText(e.target.value)
        if (text === "") {
            setBtnDisabled(true)
            setBtnMessage(null)
        } else if (text !== '' && text.trim().length<=10) {
            setBtnMessage("The text must be at least 10 carachters")
            setBtnDisabled(true)
        } else {
            setBtnMessage(null)
            setBtnDisabled(false)
        }
    }
    
    const handleSubmit = e => {
        e.preventDefault()
    
        if (text.trim().length > 10) {
            
            const newFeedback={
                text,
                rating
            }
            
            if (feedbackToEdit.edit === true) {
                updateFeedback(feedbackToEdit.item.id, newFeedback)
                setBtnDisabled(true)
            }
            else addFeedback(newFeedback)    
            
            
        setText("")
        }
    }
    return ( 
        <Card>
            <form onSubmit={handleSubmit}>
                <h1>How would you rate your service with us ?</h1>
                <Rating handleRating={ (rt)=>setRating(rt) }/>
                <div className="input-group">
                    <input type="text" placeholder="Wite a review" onChange={handelTextChange} value={text} />
                    <Button type="submit" isDisabled={btnDisabled}> Send </Button>
                </div>
                {btnMessage && <div className="message"> {btnMessage} </div>}
            </form>
    </Card>
        );
}
 
export default FeedbackForm;