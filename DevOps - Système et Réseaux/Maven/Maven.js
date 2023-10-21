mvn archetype:generate -DarchetypeArtefactId=maven-archetype-quickstart -DarchetypeVersion=1.1

// Test
mvn compiler:compile
mvn compiler:testCompile
mvn surefire:test
mvn surefire-report:report-only

mvn compiler:compile
mvn compiler:testCompile
mvn surefire-report:report

mvn package -PskipTestsProfile
mvn package -DskipTests=true
