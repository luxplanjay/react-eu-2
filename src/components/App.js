import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { BreedSelect } from './BreedSelect';
import { fetchDogByBreed } from 'api';
import { HTTP_ERROR_MSG } from 'constants';
import { DogDetails } from './DogDetails';
import { DogSkeleton } from './DogSkeleton';
import { ErrorMessage } from './ErrorMessage';

export class App extends Component {
  state = {
    dog: null,
    loading: false,
    error: '',
  };

  fetchDog = async breedId => {
    try {
      this.setState({ loading: true, error: null });
      const fetchedDog = await fetchDogByBreed(breedId);
      this.setState({ dog: fetchedDog });
    } catch (error) {
      this.setState({ error: HTTP_ERROR_MSG });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { dog, loading, error } = this.state;

    return (
      <Layout>
        <BreedSelect onSelect={this.fetchDog} />
        {dog && !loading && <DogDetails dog={dog} />}
        {loading && <DogSkeleton />}
        {error && <div>{error}</div>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <GlobalStyle />
      </Layout>
    );
  }
}
