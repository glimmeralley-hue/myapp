#import flask and its components
from flask import *
import os
#import the pymysql module- it helps us to connect connection btwn python flask sand mySQL database
import pymysql

# create a Flask application and give it a name

app = Flask(__name__)

#configure the location to where your product images will be saved on your application

app.config["UPLOAD_FOLDER"]="static/images"

#below is the sign up route
@app.route("/api/signup",methods=["POST"])
def signup():
    if request.method=="POST":
        # extract the different details entered on the form
        username =request.form["username"]
        email = request.form["email"]
        password = request.form["password"]
        phone = request.form["phone"]

        # by use of the print function,lets print all those details sent on the upcoming request
        # print(username,email,password,phone)

        # establish a connection btwn flask/python and mySQL database
        connection = pymysql.connect(host="localhost",user="root",password="",database="sokogarden")

        # create a cursor object to execute SQL queries
        cursor = connection.cursor()
        # create an SQL query to insert the extracted details into the database

        sql= "INSERT INTO users (username,email,password,phone) VALUES (%s,%s,%s,%s)"
        #the %s are placeholders for the values we want in the database-i.e we shall replace them later

        # create a tuple that will hold all the data gotten from the form
        data = (username,email,password,phone)

        # by use of the cursor ,execute the sql as you replace the placeholders with the actual data
        cursor.execute(sql,data)


       # commit the changes to the database
        connection.commit()


    return jsonify({"message":"user registered successfully"})


#below is the sign up route
@app.route("/api/signin",methods=["POST"])
def signin():
    if request.method=="POST":
        #extract the details entered on the form
        email = request.form["email"]
        password = request.form["password"]

       #print out the details entered 
       

        # print(email,password)

        #establish a connection to the database
        connection = pymysql.connect(host="localhost",user="root",password="",database="sokogarden")    

        #create a cursor object to execute SQL queries
        cursor = connection.cursor(pymysql.cursors.DictCursor)

        #structure the SQL query  that will check whether the email and password entered are correct
        sql = "SELECT * FROM users WHERE email=%s AND password=%s"

        #create a tuple that will hold the email and password entered
        data = (email,password)

        #using the cursor,execute the sql query
        cursor.execute(sql,data)

        #check whether there are rows returned and store them in a variable
        count= cursor.rowcount


        #if there are records returned it means the password and email are correct,else they are wrong
        if count==0:
            return jsonify({"message":"invalid credentials"})
        else:
            #there must be a user so we create a variable that will hold the user details fetched from the database
            user = cursor.fetchone()
            #return a response that the signin was successful and also return the user details
            return jsonify({"message":"signin successful","user":user})
        
       
    return jsonify({"message":"signin successful"})



    #below is the route for adding products
@app.route("/api/add_product",methods=["POST"])
def add_product():
    if request.method=="POST":

        #extract data entered on the form
        product_name= request.form["product_name"]
        product_description= request.form["product_description"]
        product_cost=request.form["product_cost"]

        #for the product photo,we shall fetch it from files as shown below
        product_photo=request.files["product_photo"]

         #extract the filename of the product photo 

        filename=product_photo.filename

        #by use of the os module,we can extract the file path where the image is currently saved

        photo_path=os.path.join(app.config["UPLOAD_FOLDER"],filename)

        #save the product photo to the location specified in the UPLOAD_FOLDER configuration

        product_photo.save(photo_path)

        #print them out to test whether we are receiving the details sent with the request
        
        # print(product_name,product_description,product_cost,product_photo)

        #establish a connection to the DB
        connection=pymysql.connect(host="localhost",user="root",password="",database="sokogarden")

        # create a cursor
        cursor=connection.cursor()
    # structure the SQL query to insert the product details into the database
        sql="INSERT INTO product_details(product_name,product_description,product_cost,product_photo) VALUES (%s,%s,%s,%s)"

        #create a tuple to hold the data extracted from the form
        data=(product_name,product_description,product_cost,filename)


        #execute the SQL query as you replace the placeholders with the actual data
        cursor.execute(sql,data)
        
        #commit the changes to the database
        connection.commit() 



        return jsonify({"message":"product added successfully"})


        #print
        #below is the route for fetching products
@app.route("/api/get_products")
def get_products():
    # create a connection to the DB
    connection=pymysql.connect(host="localhost",
    user="root",password="",database="sokogarden")
    #create a cursor
    cursor=connection.cursor(pymysql.cursors.DictCursor)

    #structure an sql query to fetch all products from table product_details
    sql="SELECT * FROM product_details "

    #execute the query
    cursor.execute(sql)
    #create a variable that holds the data fetched from the table
    products= cursor.fetchall()

    return jsonify(products)


    # Mpesa Payment Route/Endpoint 
import requests
import datetime
import base64
from requests.auth import HTTPBasicAuth
 
@app.route('/api/mpesa_payment', methods=['POST'])
def mpesa_payment():
    if request.method == 'POST':
        amount = request.form['amount']
        phone = request.form['phone']
        # GENERATING THE ACCESS TOKEN
        # create an account on safaricom daraja
        consumer_key = "GTWADFxIpUfDoNikNGqq1C3023evM6UH"
        consumer_secret = "amFbAoUByPV2rM5A"
 
        api_URL = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"  # AUTH URL
        r = requests.get(api_URL, auth=HTTPBasicAuth(consumer_key, consumer_secret))
                        
        data = r.json()
        access_token = "Bearer" + data['access_to' ' + ken']
 
        #  GETTING THE PASSWORD
        timestamp = datetime.datetime.today().strftime('%Y%m%d%H%M%S')
        passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'
        business_short_code = "174379"
        data = business_short_code + passkey + timestamp
        encoded = base64.b64encode(data.encode())
        password = encoded.decode('utf-8')
 
        # BODY OR PAYLOAD
        payload = {
            "BusinessShortCode": "174379",
            "Password": "{}".format(password),
            "Timestamp": "{}".format(timestamp),
            "TransactionType": "CustomerPayBillOnline",
            "Amount": amount,  # use 1 when testing
            "PartyA": phone,  # change to your number
            "PartyB": "174379",
            "PhoneNumber": phone,
            "CallBackURL": "https://modcom.co.ke/api/confirmation.php",
            "AccountReference": "account",
            "TransactionDesc": "account"
        }
 
        # POPULAING THE HTTP HEADER
        headers = {
            "Authorization": access_token,
            "Content-Type": "application/json"
        }
 
        url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"  # C2B URL
 
        response = requests.post(url, json=payload, headers=headers)
        print(response.text)
        return jsonify({"message": "Please Complete Payment in Your Phone and we will deliver in minutes"})
        


# run the application
app.run(debug=True)