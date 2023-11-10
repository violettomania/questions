import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface Props {
  title: string;
  info: string;
}

export default function Question({ title, info }: Props) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button
          className='question-btn'
          onClick={() => setShowInfo((prevInfo) => !prevInfo)}
          aria-expanded={showInfo}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}
