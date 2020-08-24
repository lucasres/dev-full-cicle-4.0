# Descrição 

Criar uma imagem no docker que retorne um "Eu sou Full Cycle"

## Tecnologia

* Node com typescript 
* Docker 

## Get Start

Fazendo a build da imagem

```
docker build --tag=full-cicle-dsf-01:lasted .
```

Rodando o projeto em sua maquina 

```
docker run -p 8080:8080 --rm -d full-cicle-dsf-01:lasted
```