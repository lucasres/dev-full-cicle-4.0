package main

import (
	"encoding/json"
	"context"
	goic "github.com/coreos/go-oidc"
	"log"
	"net/http"
	oauth2 "golang.org/x/oauth2"
)

var (
	clientID     = "app"
	clientSecret = "eda64ba0-3f4d-42f7-874e-9c8c9ac60067"
)

func main() {
	ctx := context.Background()
	provider, err := goic.NewProvider(ctx,"http://localhost:8080/auth/realms/demo")
	if err != nil {
		log.Fatal(err)
	}

	config := oauth2.Config{
		ClientID: 		clientID,
		ClientSecret: 	clientSecret,
		Endpoint: 		provider.Endpoint(),
		RedirectURL: 	"http://localhost:8081/auth/callback",
		Scopes:			[]string{goic.ScopeOpenID, "profile", "email", "roles"},
	}

	state := "magica"
	//acessar o callback do login
	http.HandleFunc("/auth/callback", func (w http.ResponseWriter, r *http.Request)  {
		//valida o state
		if (r.URL.Query().Get("state") != state){
			http.Error(w,"State invalido", http.StatusBadRequest)
			return
		}
		//faz a troca para o token
		oauth2Token , err := config.Exchange(ctx, r.URL.Query().Get("code"))
		if (err != nil){
			http.Error(w, "Falha na troca do code",http.StatusBadRequest)
			return
		}
		//pega o jwt token do usuario
		rawIDToken, ok := oauth2Token.Extra("id_token").(string)
		if (!ok) {
			http.Error(w,"Falha em recuperar o IDToken", http.StatusBadRequest)
			return
		}
		//estrutura do retorno
		resp := struct {
			OAuth2Token *oauth2.Token
			RawIDToken string
		}{
			oauth2Token,
			rawIDToken,
		}

		data, err := json.MarshalIndent(resp, "", "    ")
		if(err != nil) {
			http.Error(w, err.Error(),http.StatusBadRequest)
			return
		}
		w.Write(data)
	})

	//ao acessar o / executa essa funcao
	http.HandleFunc("/",func(write http.ResponseWriter, r *http.Request){
		//redireciona o cara para o keycloack
		http.Redirect(write, r, config.AuthCodeURL(state), http.StatusFound)
	})

	log.Fatal(http.ListenAndServe(":8081",nil))

}
