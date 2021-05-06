import tensorflow as tf
import numpy as np
from PIL import Image
from urllib import request
from io import BytesIO

from tensorflow import keras

class Model:
    def __init__(self, url):
        self.model = keras.models.load_model("C:/Users/Dell/Documents/Code/pokedex/backend/api/classifier/model.h5")
        self.img = self.load_img(url)

    def load_img(self, url):
        with urllib.request.urlopen(url) as url:
            img = image.load_img(BytesIO(url.read()), target_size=(125, 125))

        print("Img loaded")
        return image.img_to_array(img)
    
    def execute(self):
        img_array = self.img
        img_array = tf.expand_dims(img_array, 0) # Create a batch
        predictions = self.model.predict(img_array)
        score = tf.nn.softmax(predictions[0])

        print(
            "This image most likely belongs to {} with a {:.2f} percent confidence."
            .format(np.argmax(score), 100 * np.max(score))
        )