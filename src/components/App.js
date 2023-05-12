import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

const ERROR_MSG =
  'У нас не получилось взять данные о собачке, попробуйте еще разочек 😇';

export class App extends Component {
  render() {
    return (
      <Layout>
        <GlobalStyle />
      </Layout>
    );
  }
}
