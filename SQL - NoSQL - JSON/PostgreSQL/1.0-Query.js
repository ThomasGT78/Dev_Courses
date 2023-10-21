/**
*	SELECT
*/
// SELECT Single Columns  
SELECT
   select_list
FROM
   table_name;

// SELECT Multiple Columns  
SELECT
   first_name,
   last_name,
   email
FROM
   customer;
   

// SELECT All Columns 
SELECT * FROM customer;

/**
*	EXPRESSIONS
*/
// Concatenation Operator ||
SELECT 
   first_name || ' ' || last_name,
   email
FROM 
   customer;
   
// SELECT with expression
SELECT 5 * 3; /* => SELECT 15; */
