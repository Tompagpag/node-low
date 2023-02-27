// EXERCICE 1

/* const { readFileSync } = require("fs");
const path = require("path");

const urlFileStudents = path.join(__dirname, "./data/student.txt");

// on doit lui préciser l'encodage pour travailler sur les données du fichier dans le script, sinon il retourne un buffer (données sont encodées en binaire)
const data = readFileSync(urlFileStudents, "utf-8");

// filter permet de retirer la dernière vide si présente dans votre fichier
const students = data
  .split(/\r?\n/)
  .slice(1)
  .filter((s) => s != "")
  .map((s) => {
    const [note, name, address] = s.split(" ");

    // parenthèses forcent le retour des valeurs sur plusieurs lignes
    return {
      note,
      name,
      address,
    };
  });

// 1 Lecture et formatage des données du fichier
console.log(students);

// 2 Etudiants qui ont eu plus de 17, la constante bloque la ré-assignation
const studentsMore17 = students.filter((student) => student.note > 17);

console.log(studentsMore17);

// 3 Le/les meilleur(s) étudiant(s)
console.log(students.map((student) => student.note));
*/

// EXERCICE 2

/*
const numberToFind = Math.floor(1 + Math.random() * 100);
let attempts = 5;

process.stdout.write(
  "Bonjour, vous avez 10 tentatives pour trouver un nombre compris entre 1 et 100 :\n >"
);

const gameProcess = (chunk) => {
  const userTry = parseInt(chunk);
  console.log(numberToFind)
  if(isNaN(userTry) != true) {
    if (userTry === numberToFind) {
      process.stdout.write(`Trouvé ! Le nombre était bien ${numberToFind}, en ${5 - attempts} coups.`);
      process.exit(0);
    } else if (attempts > 1) {
      attempts--;
      process.stdout.write(
        `${
          userTry > numberToFind
            ? "Le nombre est plus petit\n"
            : "Le nombre est plus grand\n"
        }`
      );
      process.stdout.write(
        `Il vous reste ${attempts} essai${attempts > 1 ? "s" : ""}\n>`
      );
    } else {
      process.stdout.write(`Perdu, le nombre a trouver était : ${numberToFind}`);
      process.exit(0);
    }
  } else {
    process.stdout.write("Ce n'est un pas un nombre !\n>");
  }
};

process.stdin.on("data", gameProcess);
*/

// EXERCICE 3

/*
const readline = require("readline");

const students = ["Alan", "Sonia", "Sophie"];
// Création de l'interface de gestion des entrées et sorties, basée sur input et ouput de la console

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Message dans la console
rl.setPrompt("OHAI> ");
// définit l'invite de commande
rl.prompt();
rl.question("How do you like node ?", answer => {
    console.log(` Your answer ${answer} `);

// écoute tout les événements de la console et récupère le flux en entrée
rl.on("line", (line) => {
  if (students.includes(line.trim())) {
    console.log("Bingo !");
    // la méthode close permet d'arrêter le processus d'écoute
    rl.close();
    return;
  } else {
    console.log("Not this time ! Try again.");
  }
  rl.prompt();
  // si on fait un Ctrl + c pour arrêter le process
}).on("close", () => {
  console.log("Have a great day!");
});

*/

// EXERCICE 4

// const capitalize = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

const fs = require("fs");
const readline = require("readline");
const data = JSON.parse(fs.readFileSync("./data/students.json"));
// On récupère les données à partir de la clé
const { students } = data;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("OHAI> ");
rl.prompt();

rl.on("line", (line) => {
  line = line.trim().toString();

  if (isNaN(line) === false) {
    console.log("Vous devez proposer que des chaînes de caractères");
    rl.prompt();

    return;
  }

  if (line == "stop") {
    console.log("Have a great day!");
    process.exit(0); // arrêt du processus
  }

  for (const student of students) {
    const { name, notes } = student;

    if (name.toLowerCase() === line.toLowerCase()) {
      const sum = notes.reduce((acc, curr) => acc + curr);
      const average = Math.floor((sum / notes.length) * 100) / 100;

      console.log(average);
      console.log("Une autre moyenne ?");
      rl.prompt();

      return;
    }
  }

  console.log(
    "Désolé mais nous n'avons pas trouvé la personne que vous rechercher dans le fichier"
  );
  rl.prompt();
}).on("close", () => {
  console.log("Have a great day!");
  process.exit(0); // arrêt du processus
});
