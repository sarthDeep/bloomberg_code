# <h1 align='center'> Simple Restaurant App </h1>

We have two project in this application one is the frontend and another is the backend where frontend has written in React.js and Backend has written in Django and Django rest.

## Setup -

#### Clone or Download the repository
```bash
git clone https://github.com/devanshipatel21/bloomberg_test.git
```


#### 1.) Backend

#### Create virtual environment and activate
```bash
cd bloomberg_test/backend

python -m venv env

source env/bin/activate 
```

#### Install Dependencies

```bash
pip install -r requirements.txt
```

#### Database Migrations

```bash
python manage.py migrate
python manage.py migrate restaurants
```

#### Now launch the server
```bash
python manage.py runserver
```

#### To run tests
```bash
python manage.py test
```

### Available Routes - 
| Ent-Point  | Method  |
|---|---|
| http://localhost:8000/api/restaurants/  | GET |
| http://localhost:8000/api/restaurants/  | POST  |
| http://localhost:8000/api/restaurants/{id}/  | GET  |
| http://localhost:8000/api/restaurants/{id}/  | PUT  |
| http://localhost:8000/api/restaurants/{id}/  | DELETE  |

---

#### 2.) Frontend

#### Install Dependencies

```bash
cd bloomberg_test/frontend
npm install
```

#### Now launch the react server
```bash
npm run start
```
