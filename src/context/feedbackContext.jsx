import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()



export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
        id: 1,
        text: "This is from react context 1",
        rating:9
        },
        {
        id: 2,
        text: "This is from react context 2",
        rating:8
        },
        {
        id: 3,
        text: "This is from react context 3",
        rating:7
        },
    ])
    const [feedbackToEdit, setFeedbackToEdit] = useState({
        item: {},
        edit:false
    })
     
    const deleteFeedback = id => {
        if(window.confirm('Are you sure you want to delete this feedback'))  setFeedback(feedback.filter(item => item.id !== id))
    }
    
    const addFeedback = newFeedback => {
        newFeedback.id=uuidv4()
        setFeedback([newFeedback,...feedback])
    }
    const updateFeedback = (id,updatedItem) => {
        const newfeedback=feedback.map(item => (item.id === id) ? { ...item, ...updatedItem } : item)
        setFeedback(newfeedback)
        setFeedbackToEdit({item:{},edit:false})
    }
    const editFeedback = item => {
        setFeedbackToEdit({item,edit:true})
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackToEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback

}}>
    {children}
</FeedbackContext.Provider>)}

export default FeedbackContext