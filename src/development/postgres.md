# Postgresql

Ce tuto est destiné à **Ubuntu**.

## Installation

- Ajouter le répertoire apt :

```sh
echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -sc)-pgdg main" > /etc/apt/sources.list.d/pgdg.list
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
```

- Lancer l'installation en choisissant votre version (`9.4`, `9.5`, `9.6`, `10`, `12`) :

```sh
sudo apt-get install postgresql-12
```

## Configuration

### UTF-8

Cette suite de cmd va mettre psql en mode `utf-8`.

- Lister les clusters :

```sh
sudo -i -u postgres
pg_lsclusters
```

Cette commande donne en résultat :

```sh
Version Cluster   Port Status Owner    Data directory                     Log file
9.1     main      5432 online postgres /var/lib/postgresql/9.1/main       /var/log/postgresql/postgresql-9.1-main.log
```

- On récupère la version, on supprime le cluster et on le recrée :

```sh
pg_dropcluster 9.1 main --stop
pg_createcluster --locale fr_FR.UTF-8 9.1 main
pg_ctlcluster 9.1 main start
psql -l
```

La dernière commande devrait montrer les configurations utf-8.

### Création user et BDD

- Se connecter a l'utilisateur `postgre` et lancer le CLI Postgresql :

```sh
sudo -i -u postgres
psql
```

- Créer et configurer le nouvel utilisateur :

```sql
CREATE USER <nom_utilisateur>;
ALTER ROLE <nom_utilisateur> WITH SUPERUSER;
ALTER USER <nom_utilisateur> WITH ENCRYPTED PASSWORD 'mon_mot_de_passe';
```

- Créer la première base de données :

```sql
CREATE DATABASE <nom_base_de_donnee> OWNER <nom_utilisateur>;
```

## Docker

Pour un projet snapshot rapide, docker est idéal.

- Le fichier `docker-compose.yml` :

```yaml
version: '3.1'

services:
  db:
    image: postgres:9.6
    restart: always
    env_file: database.env
    volumes:
      - ./pgdata:/var/lib/postgresql/data
      - ./data:/docker-entrypoint-initdb.d/
    ports:
      - "5433:5432"
```

- Le fichier `database.env` :

```env
POSTGRES_USER=so_emballage
POSTGRES_PASSWORD=so_emballage
POSTGRES_DB=so_emballage
```

Utilisation :

- Placer tous vos fichiers sql d'initialisation dans un dossier data. **Attention** : Ils sont executés par ordre alphabétique.
- Ensuite lancer :

```sh
sudo  docker-compose pull && sudo  docker-compose build --no-cache && sudo docker-compose up --force-recreate
```

Pour un example complet : [https://github.com/ripoul/MSPR-BI](https://github.com/ripoul/MSPR-BI).
