/**
*	ORDER BY
*/

SELECT
	select_list
FROM
	table_name
ORDER BY
	sort_expression1 [ASC | DESC],
        ...
	sort_expressionN [ASC | DESC];

// Simple order
SELECT
	first_name,
	last_name
FROM
	customer
ORDER BY
	first_name ASC;

// Multiple Order
SELECT
	first_name,
	last_name
FROM
	customer
ORDER BY
	first_name ASC,
	last_name DESC;

// 
SELECT 
	first_name,
	LENGTH(first_name) len
FROM
	customer
ORDER BY 
	len DESC;