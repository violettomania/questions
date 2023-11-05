import { AiOutlinePlus } from 'react-icons/ai';

export default function App() {
  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        <article className='question'>
          <header>
            <h5>Do I have to allow the use of cookies?</h5>
            <button className='question-btn'>
              <AiOutlinePlus />
            </button>
          </header>
        </article>
      </section>
    </main>
  );
}
