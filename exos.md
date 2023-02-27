### Exercice 1 read students (module fs)

Les données sont dans le dossier Data et dans le fichier student.txt

1. Lisez le fichier à l'aide de la méthode asynchrone.

1.(bis) Pour la suite utilisez l'approche synchrone afin de récupérer les données que vous pourrez exploiter par la suite dans le script.

2. Recherchez dans le tableau tous les étudiants qui ont eu plus de 17 de moyenne strictement.

3. Recherchez dans le tableau l'étudiant qui a eu la meilleur node.

4. Récupérez les données dans un objet student, puis ajoutez chaque étudiant dans un tableau students.

```js
// { name : null, note : null, address : null}; // structure de l'objet
const students = []; // tableau pour récupérer les données.
```

### Exercice 2 (module process)

1. Créez un petit jeu en console : on doit deviner un nombre compris entre 1 et 100. Si l'utilisateur propose un nombre plus petit on lui indique qui l'est plus grand et réciproquement.

2. L'utilisateur à 5 tentatives pour deviner le nombre caché, après le jeu s'arrête. Si l'utilisateur trouve le nombre avant cette borne, le jeu s'arrête également.

3. Pensez à gérer également les erreurs de saisi dans le jeu.


## Exercice 3 rechercher un étudiant (module readline)

L'utilisateur doit proposer dans le terminal un nom d'étudiant. Dès que l'utilisateur a trouvé un nom dans la liste on arrête le processus d'écoute.

La recherche sera insensible à la casse et aux espaces.

```js
const students = ["Alan", "Sonia", "Sophie"];
```

## Exercice 4 rechercher dans un fichier

1. Vous allez lire un fichier puis calculer la moyenne de chaque étudiant. Affichez le nom de l'étudiant, puis donner sa moyenne. Récupérez les données dans le dossier Data le fichier **students.json**.

2. Pensez à gérer le cas où l'on souhaite arrêter le processus. Ainsi que le fait que la recherche doit être insensible à la casse.

3. Gérez les exceptions/erreurs de saisi.

```js
const fs = require("fs");
const readline = require("readline");
const json = JSON.parse( fs.readFileSync("./data/students.json") );

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt("OHAI> ");
  rl.prompt();

  rl.on("line", (line) => {

    rl.prompt();
  }).on("close", () => {
    console.log("Have a great day!");
    process.exit(0); // arrêt du processus
  });
