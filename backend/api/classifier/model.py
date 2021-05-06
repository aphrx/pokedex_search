import tensorflow as tf
import numpy as np
from io import BytesIO
from PIL import Image
import requests

from tensorflow import keras

class Model:
    def __init__(self, url):
        self.model = keras.models.load_model("/home/aphrx/Code/pokedex/backend/api/classifier/model.h5")

    def load_img(self, url):
        response = requests.get(url)
        img_bytes = BytesIO(response.content)
        img = Image.open(img_bytes)
        img = img.convert('RGB')
        img = img.resize((200,200), Image.NEAREST)
        self.img = keras.preprocessing.image.img_to_array(img)
        print('loaded img')
    
    def execute(self):
        print("starting exec")
        img_array = tf.expand_dims(self.img, 0) # Create a batch
        predictions = self.model.predict(img_array)
        score = tf.nn.softmax(predictions[0])
        print(
            "This image most likely belongs to {} with a {:.2f} percent confidence."
            .format(np.argmax(score), 100 * np.max(score))
        )
        return np.argmax(score)