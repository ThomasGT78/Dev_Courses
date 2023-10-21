test ? vrai : faux

// Components/Search.js

render() {
  return (
    <View style={styles.main_container}>
      <TextInput
        style={styles.textinput}
        placeholder='Titre du film'
        onChangeText={(text) => this._searchTextInputChanged(text)}
        onSubmitEditing={() => this._loadFilms()}
      />
      <Button title='Rechercher' onPress={() => this._loadFilms()}/>
      <FlatList
        data={this.state.films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <FilmItem film={item}/>}
      />
      { this.state.isLoading ?
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
          : null
      }
    </View>
  )
}