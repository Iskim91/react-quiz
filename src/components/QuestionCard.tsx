import React from 'react';
// import './something'
import { AnswerObject } from '../App';
// interface Props {
// }
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
}) => (
    <div>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}/>
        <div>
            {answers.map((answer, i) => (
                <div key={i}>
                    <button disabled={!!userAnswer} value={answer} onClick={callback} >
                        <span dangerouslySetInnerHTML={{ __html: answer}}  />
                    </button>
                </div>
            ))}
        </div>
    </div>
);