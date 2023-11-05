import { AiOutlinePlus } from 'react-icons/ai';

interface Props {
  id: number;
  title: string;
  info: string;
}

export default function Question({ title, info }: Props) {
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn'>
          <AiOutlinePlus />
        </button>
      </header>
    </article>
  );
}
