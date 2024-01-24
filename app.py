import flask
import json

app = flask.Flask(__name__, static_url_path="/static")

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

