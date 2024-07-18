const url = 'http://20.244.56.144/test/auth';
const data = { 
  companyName: 'afford', clientID: 'c9b01483-0a4b-417a-bd1d-41851c56c4a5', clientSecret: 'rSVGOpijMHjVJltT', ownerName: 'loydlobo', ownerEmail: '21b28.loyd@sjec.ac.in', rollNo: '4So21ec049',accessCode:"umHPpw"
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