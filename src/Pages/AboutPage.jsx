import { Link } from "react-router-dom";
import Card from "../components/shared/Card";


function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About Page</h1>
                <p>This is a feedback appp to make feedbacks</p>
                <p>Version: 1.0.0</p>
                <Link to='/'>Back to home</Link>
            </div>
        </Card>
    );
}

export default AboutPage;