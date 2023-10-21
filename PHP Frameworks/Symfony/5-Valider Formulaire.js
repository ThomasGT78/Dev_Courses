/// Validation de Formulaire
// Liste des références des Contraintes de validation
"https://symfony.com/doc/current/reference/constraints.html"

// Installer la Bibliothèque
composer require validator

// Utiliser le Namespace
use Symfony\Component\Validator\Constraints as Assert;


// Exemple
@Assert\NotBlank(message="Le titre ne peut pas être vide")

@Assert\Length(
	min=3,
	max=10,
	minMessage="Le titre doit faire au moins {{ limit }} carctères",
	maxMessage="Le titre doit faire au plus {{ limit }} carctères")
	
@Assert\LessThanOrEqual(
	"today",
	message="La date de publication ne peut pas être supérieure à aujourd'hui")
