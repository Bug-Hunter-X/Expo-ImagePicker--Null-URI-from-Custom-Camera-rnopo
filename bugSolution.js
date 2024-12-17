The solution involves using promises to ensure the image URI is available before proceeding:
```javascript
import * as ImagePicker from 'expo-image-picker';

async function pickImage() {
  let result = await ImagePicker.launchCameraAsync();
  if (result.cancelled) {
    return null; 
  }

  // Ensure the URI is available before using it
  if (result.uri) {
    // Use result.uri 
    console.log('Image URI:', result.uri);
  } else {
    console.error('Image URI is null or undefined');
  }
}
```
This ensures that the code waits for the image selection to complete and the URI to be populated before continuing, thereby preventing null or undefined URI errors.