Principes du requêtage et techniques de requêtage.

Technique/Méthode

Ancre		// GET

Formulaire	// GET		POST

Meta		// GET
<meta http-equiv="refresh" content="0; URL=url">

Redirection JavaScript			// GET
document.location.ref = "url";
AJAX

Redirection PHP					// GET
header("location: url")


attention "query" avec get
app.get("/valider", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");

 

    const ville = req.query.ville;
    const pays = req.query.pays;

 
attention "body" avec post
app.post("/valider", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");

 

    const ville = req.body.ville;
    const pays = req.body.pays;