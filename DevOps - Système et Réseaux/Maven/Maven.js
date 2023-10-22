mvn archetype:generate -DarchetypeArtefactId=maven-archetype-quickstart -DarchetypeVersion=1.1


// mvn clean
`Delete the Target folder
To not reused the previews compiled Classess`

// mvn compile
`For each package, it COMPILES the Class from src/main/java/package_name
  => put it in target/classes/package_path folder`

// mvn test
Test the Classes

// mvn package
Compile and Test the Classes
Put the source code into a .jar file

// mvn install
create the .jar file and put it into the local maven repository
"C:\project_path\group_id\Artefact_id\version"



/// Test
mvn compiler:compile
mvn compiler:testCompile
mvn surefire:test
mvn surefire-report:report-only

mvn compiler:compile
mvn compiler:testCompile
mvn surefire-report:report

mvn package -PskipTestsProfile
mvn package -DskipTests=true
