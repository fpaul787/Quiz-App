import * as React from 'react';

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
  <div>
    <p className="number">
      Question: {questionNr} / {totalQuesetions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question }} />
    <div>
      {answers.map(answer => (
        <div key={answer}>
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer}} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;