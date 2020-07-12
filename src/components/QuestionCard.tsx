import React from 'react';
// import './something'
import { AnswerObject } from '../App';
// interface Props {
// }

import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

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
    <Wrapper>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}/>
        <div>
            {answers.map((answer, i) => (
                <ButtonWrapper 
                    key={i}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                    >
                    <button disabled={!!userAnswer} value={answer} onClick={callback} >
                        <span dangerouslySetInnerHTML={{ __html: answer}}  />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);