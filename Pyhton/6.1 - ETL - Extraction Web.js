	/**  ETL - Extract, Transform, Load  **/

Écriture d'un programme Python
  - Permettant d'extraire les données d'un site web
  - Transformer les données dans un format choisis
  - Les enregistrer dans un fichier CSV

/// Récupérer du HTML (REQUESTS)
`Le package « requests »  a une fonction .get() qui peut être utilisée pour récupérer le code HTML du site`

// Dans le Terminal:
pip install requests

// Dans le fichier .py
import requests

url = "https://www.gov.uk/search/news-and-communications"
page = requests.get(url)

print(page.content) /* Voir le code html source */
`Le code récupéré est incompréhensible, il faut le « parser »
parser = Parcourir le contenu d'un texte ou d'un fichier en l'analysant pour vérifier sa syntaxe ou en extraire des éléments`


/// Parser le code source HTML (BEAUTIFUL SOUP)
`Le package « beautifulsoup4 » permet de :
  - Repère les attributs HTML « class » et « id » 
  - Organise le code pour qu'il soit lisible`
  
// Dans le Terminal:
pip install beautifulsoup4

// Dans le fichier .py
from bs4 import BeautifulSoup

url = "https://www.gov.uk/search/news-and-communications"
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

/* Get a list of titles */
class_name = "gem-c-document-list__item-link"
titles = soup.find_all("a", class_=class_name)

/* Get a list of descriptions */
descriptions = soup.find_all("p", class_="gem-c-document-list__item-description")

// Dans le Terminal:
soup	/* Display the page content */
tiltes	/* Display a list of titles */
descriptions	/* Display a list of descriptions */