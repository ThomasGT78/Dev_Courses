		/****************
		*	FIXTURES	*
		****************/
		
/// Installer Bibliothèque Fixtures
composer req orm-fixtures
composer req --dev fzaninotto/faker

/// Create new Fixture
php bin/console make:fixture

// Remplir la table avec un nouvel objet
// (vide la table avant)
php bin/console doctrine:fixtures:load
// (ne vide pas la table avant, rajoute à la suite)
php bin/console doctrine:fixtures:load --append

