import tensorflow as tf
import numpy as np

from tensorflow import keras

model = keras.models.load_model('model_2.h5')

img = keras.preprocessing.image.load_img(
    'snorlax.jpg', target_size=(200, 200)
)
img_array = keras.preprocessing.image.img_to_array(img)
img_array = tf.expand_dims(img_array, 0) # Create a batch

predictions = model.predict(img_array)
score = tf.nn.softmax(predictions[0])

print(
    "This image most likely belongs to {} with a {:.2f} percent confidence."
    .format(np.argmax(score), 100 * np.max(score))
)