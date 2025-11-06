import express from "express"
const app = express();
app.use(express.json())
app.get("/add/:a/:b", function(req, res) {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.json({
        message: a + b
    });
});

app.get("/sub", function(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        message: a - b
    });
});

app.get("/div", function(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        message: a / b
    });
});

app.get("/mul", function(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        message: a * b
    });
});


app.listen(3000)