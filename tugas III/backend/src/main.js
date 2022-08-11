import express from "express";
const app = express();
app.use(express.json());
const port = 7000;

app.get("/", (req, res) => {
  res.send({
    nama: "Mochamad Ilhan Dhivala",
  });
});
app.get("/makanan", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Cimol",
      rasa: "Bawang",
    },
    {
      id: 2,
      nama: "Indomie",
      rasa: "Rendang",
    },
    {
      id: 3,
      nama: "Ubi",
      rasa: "Cream soup",
    },
    {
      id: 4,
      nama: "Pisang",
      rasa: "Keju",
    },
  ]);
});
app.get("/minuman", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Tea",
      rasa: "Lemon",
    },
    {
      id: 2,
      nama: "Pucuk",
      rasa: "Harum",
    },
    {
      id: 3,
      nama: "Pop ice",
      rasa: "Bublegum",
    },
    {
      id: 4,
      nama: "Teh",
      rasa: "Sisri",
    },
  ]);
});
app.post("/create", (req, res) => {
  res.send({
    nama: req.body,
  });
});

app.listen(port, () => {
  console.log(`Aplikasi Berjalan di port ${port}`);
});