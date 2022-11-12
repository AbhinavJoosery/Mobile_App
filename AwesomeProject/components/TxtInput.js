import {StyleSheet, View, TextInput} from 'react-native';

import Colours from '../Colours';

function TxtInput({
  placeholderLabel,
  inputHandler,
  contentType,
  secureEntry = false,
}) {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholderLabel}
        onChangeText={inputHandler}
        textContentType={contentType}
        secureTextEntry={secureEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    width: '80%',
    marginBottom: 20,
  },

  textInput: {
    borderColor: Colours.grey,
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    padding: 20,
    color: Colours.darkBlue,
    backgroundColor: Colours.grey,
  },
});

export default TxtInput;
