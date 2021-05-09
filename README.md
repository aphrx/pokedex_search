# Pokedex

## Introduction
This was a fun and interesting project to do. I had always wanted to create a Pokedex application, but never had any reason to, until now!

This project is made using Django and React.js for the back-end and front-end respectfully. Libraries such as Tensorflow have also been used to create models to help determine Pokemon using image search

## Pre-Requisites
- Python 3.x
- Node.js

## Run Application
### Run Backend
```
cd backend
pip install -r requirements.txt
python manage.py runserver
```

### Run Frontend
```
npm i
npm start
```

## Train Pokemon Classifier
- Download Images from https://www.kaggle.com/lantian773030/pokemonclassification and place in a data folder in tools/classifier folder.
- Run ```python train_model.py``` to train the model
- Run model using ```python run_model.py``` to test model
- Copy into backend/api/classifier to be used in backend