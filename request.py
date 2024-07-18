import requests

url = "http://20.244.56.144/test/register"
headers = {
    "Content-Type": "application/json"
}
data = {
    "companyName": "afford",
    "ownerName": "loydlobo",
    "rollno": "4SO21EC049",
    "ownerEmail":"21b28.loyd@sjec.ac.in",
    "accessCode":"umHPpw"
    # Add other key-value pairs as needed
}

response = requests.post(url, headers=headers, json=data)

print("Status Code:", response.status_code)
print("Response Body:", response.json())
