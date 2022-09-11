import type { Component, For } from 'solid-js';
import { createResource } from 'solid-js';
import { createClient } from '@urql/core';


const client = createClient({
  url: 'http://localhost:4000',
});

const [todos] = createResource(() =>
  client.query(
    `
       query {
      getTodos {
        id
        done
        text
      }
    }`)
    .toPromise()
    .then(({ data }) => data.getTodos));

const App: Component = () => {
  return (
    <div>
      <For each={todos()}>
        {({ id, done, text }) => (<div>
          <input type="checkbox" id="id" checked={done} />
          <span>{text}</span>
        </div>
        )}
      </For>
    </div >
  );
};

export default App;
