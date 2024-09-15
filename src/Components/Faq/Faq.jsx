import React, { useEffect, useRef, useState } from 'react';
import "./Faq.css";


function Faq() {

    const ref =useRef();
    const [toggle, settoggle] = useState(true);
    const [questionId, setQuestionId] = useState();
    const [questions, setQuestions] = useState([
        {
            id: 1, question: "بیشترین سوال های پرسیده شده؟", answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
        {
            id: 2, question: "بیشترین سوال های پرسیده شده؟", answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
        {
            id: 3, question: "بیشترین سوال های پرسیده شده؟", answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
        {
            id: 4, question: "بیشترین سوال های پرسیده شده؟", answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
    ]);


function clickHandler(questionID) {
    if (questionID == questionId) {
        setQuestionId("");
    } else {
        setQuestionId(questionID);
    }
}

const toggleHandler = (e) => {
    settoggle((prev) => !prev);
    e.target.parentNode.classList.toggle("circle-right")
}

return (
    <div className="faq">
        <div className="faq-container">
            <div className="faq-div">
                <div className="faq-toggle ">
                    <span className="faq-toggle__text">سوال ها</span>
                    <div onClick={toggleHandler} className="faq-toggle__btn"></div>
                    <span className="faq-toggle__text">پلن ها</span>
                </div>
                {toggle ? (
                    <>
                        <div className="faq__title">بیشترین سوال های پرسیده شده</div>
                        <div className="faq__questions">
                            {questions.map((question) => {
                                return (

                                    <div key={question.id} className="faq__question-div">
                                        <div className="faq__question">
                                            <span className="faq__question-title">{question.question}</span>
                                            <span onClick={() => { clickHandler(question.id) }} className="faq__question-icon">{questionId == question.id ? "-" : "+"}</span>
                                        </div>
                                        <div className={`faq__question-answer ${questionId == question.id && "faq__question-answer--activ"}`}>
                                            <div className='faq__question-answer-box'>
                                                {question.answer}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                ) : (
                    <>
                        <div>plans</div>
                    </>
                )}
            </div>
        </div>
    </div>
)
}

export default Faq 