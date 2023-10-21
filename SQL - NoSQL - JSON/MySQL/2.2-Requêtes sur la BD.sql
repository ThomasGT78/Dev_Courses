	/*****************************************
	*	 REQUÊTES SUR LA BASE DE DONNÉES	 *
	*****************************************/

-- SIMPLE LISTE DES TABLES
SELECT  * 
FROM  information_schema.tables
WHERE  table_type='BASE TABLE';

-- informations utiles comme la colonne object_id ou encore la date de création et de modification, soit create_date et modify_date
SELECT  * 
FROM  sys.tables;

-- schéma, le nombre de lignes et l’espace disque utilisé par chaque table
SELECT 
  sch.name AS SCHEMANAME,
  tab.name AS TABLENAME,
  par.rows AS ROWCOUNTS,
  SUM(alc.total_pages) * 8  AS TOTAL_SPACE,
  SUM(alc.used_pages) * 8  AS USED_SPACE,
  (SUM(alc.total_pages) - SUM(alc.used_pages)) * 8 AS UNUSED_SPACE
FROM   sys.tables tab
  INNER JOIN sys.indexes ind 
  ON tab.object_id = ind.object_id
  INNER JOIN sys.partitions par 
  ON    ind.object_id = par.object_id 
    AND ind.index_id = par.index_id
  INNER JOIN sys.allocation_units alc 
  ON par.partition_id = alc.container_id
  LEFT OUTER JOIN  sys.schemas sch 
  ON tab.schema_id = sch.schema_id
GROUP BY tab.name, sch.name, par.rows
ORDER BY 3 desc;