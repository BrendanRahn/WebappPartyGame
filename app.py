import flask

app = flask.Flask(__name__, static_url_path="/static")

@app.route("/")
def homepage():
    return flask.render_template("main_page.html")
