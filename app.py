import flask
import psycopg2
import json

app = flask.Flask(__name__, static_url_path="/static")


def get_db_connection():
    conn = psycopg2.connect(
        host="localhost",
        port=8080,
        database="webapp_db",
        user="webapp",
        password="admin"
    )
    return conn


@app.route("/getsong")
def get_song():
    conn = get_db_connection()
    curr = conn.cursor()
    curr.execute("SELECT * FROM MyTable")
    data = curr.fetchall()
    curr.close()
    conn.close
    return data


@app.route("/")
def homepage():
    return flask.render_template("main_page.html")

@app.route("/post_song", methods=["POST"])
def post_song():
    print("hit route")
    print(flask.request)
    response = {
        "status": 200,
        "id": "lol"
    }
    two = json.dumps(response)
    return flask.Response(two)

