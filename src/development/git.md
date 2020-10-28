# Git : des commandes utiles

## Delete commit

 - supprimer un commit : `git reset --hard HEAD^`
 - supprimer X commits : `git reset --hard HEAD~X`
 - supprimer un commit mais garder les changements : `git reset HEAD^`
 - supprimer X commits mais garder les changements : `git reset HEAD~X`

## Log

Git fournit des outils pour afficher l'historique de commit de manière lisible et claire :

 - affiche chaque commit sur une ligne

```sh
git log --pretty=oneline
```

![log-one-line](/img/git/log-one-line.PNG)

 - acffiche chaque commit sur une ligne en suivant le format spécifié. [Doc sur les formats ici](https://git-scm.com/docs/pretty-formats)

```sh
git log --pretty=format:"%h - %an, %ar : %s"
```

![log-one-line-format](/img/git/log-one-line-format.PNG)

 - affichage des commits sous forme de graph (branching)

```sh
git log --pretty=format:"%h %s" --graph
```

![log-one-line-graph](/img/git/log-one-line-graph.PNG)

 - affichage de toutes les infos détaillées des commits

```sh
git log --stat
```

![log-detail](/img/git/log-detail.PNG)

## More cmd

 - Premier commit de la branche current. Utile pour rebase notamment :

```sh
git log PARENT_BRANCH..$(git branch --show-current) --oneline --pretty=format:"%h" | tail -1
```

## Git alias et raccourci
zaegpjeg
Il y a deux manière de customiser le cli de git :

 - avec des alias via CLI :

```sh
git config --global alias.co checkout
git co ...
```

 - avec les alias via `.gitconfig` :

```ini
[alias]
	co = checkout
	cob = checkout -b
	coo = !git fetch && git checkout
	br = branch
	brd = branch -d
	brD = branch -D
	merged = branch --merged
	st = status
	aa = add -A .
	cm = commit -m

    ignore_python = "!wget -O ./.gitignore https://raw.githubusercontent.com/github/gitignore/master/Python.gitignore"
```
