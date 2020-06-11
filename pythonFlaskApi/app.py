from flask import Flask,request,Response
import json 

app = Flask(__name__)


@app.route("/",methods=["GET"])
def home():
	responseMessage = {
		"status":"success",
		"message":"Welcome to Flask API Running as a service"
	}
	res = Response(json.dumps(responseMessage),status=200,mimetype="application/json")
	return res


