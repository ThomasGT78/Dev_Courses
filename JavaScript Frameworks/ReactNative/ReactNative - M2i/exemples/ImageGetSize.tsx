/*
ImageGetSize.tsx
https://reactnative.dev/docs/image
Image.getSize(uri, success, [failure]);
Bof !!!
https://www.reddit.com/r/reactnative/comments/binpik/using_imagegetsize_without_a_stateful_component/
*/
import React, { Component } from 'react';
import { Image } from 'react-native';

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const URI_IMAGE = 'https://pascalbuguet.alwaysdata.net/images/maison_dansante.jpg';
    Image.getSize(URI_IMAGE, (width, height) => {
      //          if (width * 3 / 2 < height)
      //   height = width * 3 / 2;
      // this.setState({ aspectRatio: width / height });
      alert("Dimensions");
    })
  };

  render() {
    return <Image
      source={{
        uri: 'https://pascalbuguet.alwaysdata.net/images/maison_dansante.jpg'
      }

      }
    />
  }
}
export default App; 