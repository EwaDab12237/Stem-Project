from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
db = SQLAlchemy(app)

class Project(db.Model):
    id = db.Columns(db.Integrer, primaty_key = True)
    title = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    link = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DataTime, nullable=False, deafult = datetime.now)
    finished = db.Column(db.Boolean)

    def _repr_(self):
        return f'<Project {self.title}>'

@app.route("/")
def hello_world():
    return render_template("index.html")
