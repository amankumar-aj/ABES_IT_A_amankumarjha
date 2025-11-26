const express=require('express');
const app=express()
const port=8080;
const cors=require('cors');

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.get('/',(req,res)=>{
    res.send('hi this is my first about server')
});

app.get('/api/about', (req, res) => {
  const students = [
    {
      id: 1,
      name: "Aman",
      Class: "10",
      img: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 2,
      name: "Rohit",
      Class: "9",
      img: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 3,
      name: "Mohit",
      Class: "10",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 4,
      name: "Nitin",
      Class: "8",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 5,
      name: "Karan",
      Class: "9",
      img: "https://randomuser.me/api/portraits/men/15.jpg"
    }
  ];

  res.json(students);
});


app.get('/api/contact',(req,res)=>{
    res.send('<h1> Contact US</h1>')
});

app.listen(port,()=>{
    console.log(`Hi this is your server listening at:http://localhost:${port}`)
});