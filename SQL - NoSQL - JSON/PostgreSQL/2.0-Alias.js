/**
*	SELECT WITH ALIAS
*/

// SELECT Single Columns  
SELECT column_name AS alias_name
FROM table_name;
// OR
SELECT column_name alias_name
FROM table_name;

/*
If a column alias contains one or more spaces, you need to surround it with double quotes like this:
*/
SELECT column_name AS "column alias"
FROM table_name;

// SELECT Multiple Columns  
SELECT 
   first_name, 
   last_name AS surname
FROM customer;


// SELECT with expression
SELECT
    first_name || ' ' || last_name AS full_name
FROM
    customer;