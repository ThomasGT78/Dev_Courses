		/********************************************
		*	 Prepare environment to set an event	*
		********************************************/
		
// VIEW the status of the event scheduler thread
SHOW PROCESSLIST;

// SET the event_scheduler system variable to enable and start it
SET GLOBAL event_scheduler = ON;

=> see confirmation
show variables where variable_name='event_scheduler';

ALTER EVENT test_event_04 enable;
// Grant Super Privileges
GRANT SUPER ON *.* TO 't.garot@nws-tech.fr'@'localhost'  IDENTIFIED BY 'pirk-doo4torn0STOF';

GRANT SUPER ON *.* TO 'user'@'%' IDENTIFIED BY PASSWORD

		/****************
		*	SET EVENT	*
		****************/

//Create event
CREATE EVENT [IF NOT EXIST] event_name
ON SCHEDULE schedule
DO
event_procedure
// SHOW EVENT
SHOW EVENTS FROM database_name;

// REMOVE an existing event
DROP EVENT [IF EXIST] event_name;

/// Schedule list:
// One-time event
AT timestamp [+ INTERVAL]

// Recurring event
EVERY interval STARTS timestamp [+INTERVAL] ENDS timestamp [+INTERVAL]

		/****************
		*	EXEMPLES	*
		****************/
CREATE EVENT IF NOT EXISTS test_event_01
        ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 MINUTE
        DO
        UPDATE `3VQ4Io6_users` SET `user_status` = 3 WHERE `ID` = 40;
SELECT * FROM `3VQ4Io6_users` WHERE `ID` = 40;		

// on-time event that inserts a new row into a table
CREATE EVENT IF NOT EXISTS test_event_01
ON SCHEDULE AT CURRENT_TIMESTAMP
DO
  INSERT INTO messages(message,created_at)
  VALUES('Test MySQL Event 1',NOW());
  
// one-time event that is executed after its creation time 1 minute and not dropped after execution
CREATE EVENT test_event_02
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 MINUTE
ON COMPLETION PRESERVE
DO
   INSERT INTO messages(message,created_at)
   VALUES('Test MySQL Event 2',NOW());

// recurring event that executes every minute and is expired in 1 hour from its creation time
CREATE EVENT test_event_03
ON SCHEDULE EVERY 1 MINUTE
STARTS CURRENT_TIMESTAMP
ENDS CURRENT_TIMESTAMP + INTERVAL 1 HOUR
DO
   INSERT INTO messages(message,created_at)
   VALUES('Test MySQL recurring Event',NOW());
   
//
CREATE EVENT test_event_00
  ON SCHEDULE EVERY 1 MINUTE
  STARTS CURRENT_TIMESTAMP
  ENDS CURRENT_TIMESTAMP + INTERVAL 1 HOUR
  DO 
	UPDATE `3VQ4Io6_users` SET `user_status` = 3 WHERE `ID` = 40;

CREATE EVENT IF NOT EXISTS test_event_01
        ON SCHEDULE AT CURRENT_TIMESTAMP
		ON COMPLETION PRESERVE
        DO
        UPDATE `3VQ4Io6_users` SET `user_status` = 3 WHERE `ID` = 40;
		
CREATE EVENT test_event_06 
	ON SCHEDULE EVERY 1 MINUTE 
    	STARTS CURRENT_TIMESTAMP 
        ENDS CURRENT_TIMESTAMP + INTERVAL 3 HOUR 
    ON COMPLETION PRESERVE
    DO 
    	UPDATE `3VQ4Io6_users` SET `user_status` = 3 WHERE `ID` = 40;

SET GLOBAL event_scheduler = 1 ;
#DROP EVENT test_event_03;
#SHOW PROCESSLIST;
SHOW EVENTS FROM wp_u7lia;
#SELECT * FROM `3VQ4Io6_users` WHERE `ID` = 40;	
#show variables where variable_name='event_scheduler';
#ALTER EVENT test_event_04 enable;