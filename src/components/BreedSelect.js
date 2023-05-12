import { fetchBreeds } from 'api';
import { HTTP_ERROR_MSG } from 'constants';
import { Component } from 'react';
import Select from 'react-select';
import { ErrorMessage } from './ErrorMessage';

export class BreedSelect extends Component {
  state = {
    breeds: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true, error: null });
      const fetchedBreeds = await fetchBreeds();
      this.setState({ breeds: fetchedBreeds });
    } catch (error) {
      this.setState({ error: HTTP_ERROR_MSG });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { onSelect } = this.props;
    const { breeds, loading, error } = this.state;
    const options = breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));

    return (
      <div>
        <Select
          options={options}
          isLoading={loading}
          onChange={option => onSelect(option.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
}
