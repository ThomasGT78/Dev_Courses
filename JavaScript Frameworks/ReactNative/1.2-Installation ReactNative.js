"https://reactnavigation.org/docs/4.x/getting-started/"

/// Expo CLI
/* Ensemble d'outils construit autour de React Native, permet, en autre, d'écrire une application React Native en quelques minutes */

// dans la commande en Général
npm install -g expo-cli

/// Créer Nouvelle Application
expo init NomDuProjet

Panneau de Configuration => Système et Sécurité => Système => Paramètres Système Avancés => Variable d'environnement
=> nouvelle:
// Variable :
ANDROID_SDK_ROOT
// Valeur (chemin):
C:\Users\thoma\AppData\Local\Android\Sdk

/// Download JDK package (Java Development Kit)
"https://www.oracle.com/java/technologies/javase-jdk15-downloads.html"
Panneau de Configuration => Système et Sécurité => Système => Paramètres Système Avancés => Variable d'environnement
=> nouvelle:
// Variable :
JAVA_HOME
// Valeur (chemin):
C:\Program Files\Java\jdk-15.0.1

/// Set Up Android development
"https://reactnative.dev/docs/environment-setup"

// Enregistrer les Paths
Panneau de Configuration => Système et Sécurité => Système => Paramètres Système Avancés => Variable d'environnement
cliquer sur Path

ou 
 dans la commande
path %path%; nouveauchemin
path %path%; C:\Users\thoma\AppData\Local\Android\Sdk\emulator
path %path%; C:\Users\thoma\AppData\Local\Android\Sdk\platform-tools

ADK = Android development kit
AVD = Android Virtual Device = emulateur