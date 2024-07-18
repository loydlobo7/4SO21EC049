const url = 'http://20.244.56.144/test/register';
const data = { 
  "companyName": "sjeccollege",
    "ownerName": "loydlobo",
    "rollno": "4SO21EC049",
    "ownerEmail":"21b28.loyd@sjec.ac.in",
    "accessCode":"umHPpw"
};
fetch(url, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});