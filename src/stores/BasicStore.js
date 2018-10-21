class BasicStore{
  constructor(stores){
    this.allStroes = stores;
  }

  getStore(store){
    return this.allStroes[store];
  }
}

export default BasicStore;
