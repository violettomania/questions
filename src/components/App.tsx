import Question from './Question';

import questions from '../data';

export default function App() {
  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        {questions.map(({ id, ...rest }) => (
          <Question key={id} {...rest} />
        ))}
      </section>
    </main>
  );
}
