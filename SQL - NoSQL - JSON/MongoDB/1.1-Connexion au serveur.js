		/************************
		*	 Connexion Local	*
		************************/
Serveur:
"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath "C:\mongodbdata"

Client:
"C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"

		/************************
		*	 sur AlwaysData:	*
		************************/

// adresse IP: 192.168.1.37
// username: tomgt 
// password: capoeraGT@78 
// authenticationDatabase: tomgt_bdmongo


"C:/Program Files/MongoDB/Server/4.2/bin/mongo.exe" --host 192.168.1.37 --username tomgt --password capoeraGT@78 --authenticationDatabase tomgt_bdmongo --authenticationMechanism SCRAM-SHA-1

"C:/Program Files/MongoDB/Server/4.2/bin/mongo.exe" --host mongodb-tomgt.alwaysdata.net --username tomgt --password capoeraGT@78 --authenticationDatabase tomgt_bdmongo --authenticationMechanism SCRAM-SHA-1