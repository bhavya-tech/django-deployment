---
sidebar_position: 2
---


# Reverse Proxy

Reverse proxy is type of proxy which sits between the internet and the webserver which is running the Django code.

Its basic function is to take the incoming requests from the internet and forward them to the webserver and vice versa.

Ideally, it is possible to run server code without a reverse proxy, but it is not recommended. But for practical purposes, reverse proxy is useful when you want to process the incoming requests before they reach the webserver.

## Why use a reverse proxy?

In context of this guide, reverse proxy provides the following benefits:

1. Caching:

   Reverse proxy can cache the server's response to a client's request. And when the same request is made again, the reverse proxy can serve the cached responsewithout having the server to process the request again.

   The response can be anyhting from static files(images, css, js), response of an API or even some pages which are not changed much frequently(like About Us page).

2. Security:

    As you can see currently, the communication is currently done over HTTP protocol which is insecure. The reverse proxy can be configured to use HTTPS protocol with clients. 

    The way it works is that communications between client and reverse proxy is done over HTTPS. The reverse proxy then decrypts the request and forwards it to Django in HTTP protocol. Django then processes the request and sends the response to the reverse proxy which then encrypts the response and sends it to the client.
