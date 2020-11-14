import * as React from 'react';

// Styles
import {Wrapper, ButtonWrapper } from './QuestionCard.styles'

// Types
import { AnswerObject } from '../App'

// props for component
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuesetions: number;
}

const QuestionCard: React.FC<Props> = ({ 
  question, 
  answers, 
  callback, 
  userAnswer, 
  questionNr, 
  totalQuesetions, }) => (
  <Wrapper>
    <p className="number">
      Question: {questionNr} / {totalQuesetions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question }} />
    <div>
      {answers.map(answer => (
        <ButtonWrapper  
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          key={answer}>
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer}} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;