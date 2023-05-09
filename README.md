# Steps

- Continue working on Recipes App from previous lesson
- Explain component lifecycle phases (mount, update, unmount)
- Persist `recipes` state to localstorage
  - Explain `ComponentDidUpdate`
  - Eplain previous and current render concept (prevProps and prevState vs
    this.state and this.props)
  - Explain infinite render loop when setting state in `ComponentDidUpdate`
    without checking prev and current values
- Read and populate recipes state with value from localstorage on page load
  - Explain `ComponentDidMount`
  - Init recipes state with data from localstorage if any data available
  - Init recipes state with recipes array from `recipes.json` or an empty array
    if no data is available in localstorage
