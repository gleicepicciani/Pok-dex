import React, { useEffect, useState } from 'react'
import {Text, ScrollView, StyleSheet, Image, View, ActivityIndicator} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { pegarPokemon } from './services/PokemonService'
import { capitalize, getColorFromType } from './utils'

export default props => { 
  let id = props.route.params.id; 
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);  
  let pokemons = [];
  
  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = () => { 
    pegarPokemon(id)
    .then(pokemon =>{
      setData(pokemon)
      setLoading(false)
    }); 
  };

  const jsxLoading = () => (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
  
  pokemon = data;
  if (!Array.isArray(pokemon)) {
    let type = [];
    let typeCor = getColorFromType(pokemon.types[0]);
    let idPokemon = '#' + ('000' + id).slice(-3);   
    let name = capitalize(pokemon.name);

  for (let key in pokemon.types) {
    type.push(
      <Text style={styles.type} key={key}>
        {pokemon.types[key]}
      </Text>,
    );
  }

  const botaoVoltar = () => {
    props.navigation.goBack();
  };


  const jsxTela= () => (
    <View
      style={[styles.container, {backgroundColor: typeCor}]}>
    <View
      style={styles.header}>
        <Icon name="arrow-back" style={styles.icon} onPress={botaoVoltar} />
    </View>
    <View
      style={styles.navbar}>
        <Text style={styles.id}>{idPokemon}</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.typeContainer}>{type}</View>
        <View style={styles.containerImage}>
          <Image
            style={styles.imgPokeball}
            source={require('../assets/pokeball.png')}/>
          <Image style={styles.imgPokemon } source={{uri: pokemon.image}} />
        </View>
    </View>
      <ScrollView style={[styles.body]}>
        <View
          style={styles.container2}>
        <View>
          <Text style={[styles.titulo, {color: typeCor}]}>Sobre o pokemon</Text>
          <Text style={styles.descricao}>{pokemon.description}</Text>
        </View>
          <Text style={[styles.titulo2, {color: typeCor}]}>Dados principais</Text>

        <View
          style={styles.row}>
            <Text style={styles.textoL}>Espécie: </Text>
            <Text style={styles.textoR}>{pokemon.species}</Text>
        </View>

        <View
          style={styles.row}>
            <Text style={styles.textoL}>Tamanho: </Text>
            <Text style={styles.textoR}>{pokemon.height}m</Text>
        </View>

        <View
          style={styles.row}>
            <Text style={styles.textoL}>Peso: </Text>
            <Text style={styles.textoR}>{pokemon.weight}Kg</Text>
        </View>

        <Text style={[styles.titulo2, {color:typeCor}]}>Treinamento</Text>

        <View
          style={styles.row}>
            <Text style={styles.textoL}>EV Yield: </Text>
            <Text style={styles.textoR}>{pokemon.training.evYield}</Text>
        </View>

        <View
          style={styles.row}>
            <Text style={styles.textoL}>Catch Rate: </Text>
            <Text style={styles.textoR}>{pokemon.training.catchRate.text}</Text>
        </View>

        <View
          style={styles.row}>
            <Text style={styles.textoL}>Base Friendship</Text>
            <Text style={styles.textoR}>{pokemon.training.baseFriendship.text}</Text>
        </View>
        
        <Text style={[styles.titulo2, {color:typeCor}]}>Breeding</Text>

          <View
            style={styles.row}>
              <Text style={styles.textoL}>Egg Groups: </Text>
              <Text style={[styles.textoR]}>{pokemon.breedings.eggGroups[0]}, </Text>
              <Text style={styles.textoR}>{pokemon.breedings.eggGroups[1]}</Text>
          </View>

          <View
              style={styles.row}>
              <Text style={styles.textoL}>Egg Cycles: </Text>
              <Text style={styles.textoR}>{pokemon.breedings.eggCycles.text}</Text>
          </View>
          <View style={styles.row}></View>

        </View>
      </ScrollView>
    </View>
  );
    
  return loading ? jsxLoading() : jsxTela();  
  }
  return jsxLoading();  
};

const styles = StyleSheet.create({
  icon: {
    color: '#FFF',
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 22
  },
  type: {
    color: '#FFF',
    paddingHorizontal: 20,
    marginRight: 5,
    borderRadius: 50,
    padding: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    fontSize: 15,
  },
  typeContainer: {
    flexDirection: 'row',
    margin: 2
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 0,
    backgroundColor: '#fff',
    paddingTop: 60
  },
  navbar: {
    paddingVertical: 2,
    paddingHorizontal: 10
  },
  header: {
    padding: 20,
  },
  id: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  name: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10
  },
  imgPokeball: {
    width: 130,
    height: 130,
    opacity: 0.2,
    tintColor: '#FFF',
    position: 'absolute',
    right: -40,
    bottom: -75,
    marginTop: 10,
  },
  imgPokemon: {
    zIndex: 1,
    width: 130,
    height: 130,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 5,
    bottom: -100,    
  },
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 40,
    marginHorizontal: 10,
    marginTop: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20    
  },
  container2: {
    flex: 1,
    padding: 20
  },
  titulo: {
    marginVertical: 10,
    marginHorizontal: 0,
    fontSize: 22,
    fontWeight: 'bold'
  },
  descricao: {
    color: '#747476',
    fontSize: 16,
    marginBottom: 10
  },
  titulo2: {
    marginVertical: 20,
    marginHorizontal: 0,
    fontSize: 16,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15
  },
  textoL: {
    color: '#000000',
    width: 120,
    fontSize: 14,
    fontWeight: 'bold'
  },
  textoR: {
    color: '#747476',
    fontSize: 14
  }
});
