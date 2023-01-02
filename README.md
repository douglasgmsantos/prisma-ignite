# PRISMA - IGNITE

## Iniciando o web-services em node-js utilizando o docker.

1. Confirme se existe instalado o docker na sua máquina:

```
docker --version
```

2. Com o docker instalado execute o comando:

```
docker-compose up
```

3. Acessando a base (opcional):

```
psql -h "host" -p "port" -d "database" -U "user" -W
```

4. Entrar em uma pasta de aulaXX:

5. Instalar as dependências:

```
yarn
```

5. Alterações no banco de dados:

```
yarn prisma migrate dev
```
