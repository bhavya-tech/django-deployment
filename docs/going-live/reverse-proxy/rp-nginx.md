---
sidebar_position: 6
---

# Reverse proxy (Nginx)

## Installing Nginx
To install Nginx, follow the guide: [How To Install Nginx on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)


## Configuring Nginx

To configure Nginx, run:

```bash
sudo nano /etc/nginx/sites-available/<projectname>.conf
```

Edit the below code and paste it:

``` unit title="/etc/nginx/sites-available/<projectname>.conf"
server {
    listen 80;
	server_name domain_or_ip;
	
    location /media/ {
        autoindex on;
        alias /var/www/toddle/media/;
    }
    	
    location /static/ {
        autoindex on;
        alias /var/www/toddle/static/;
    }
    	
    location / {
        include proxy_params;
        proxy_pass http://0.0.0.0:8008/;
    }
}
```

Run:

```bash
sudo ln -s /etc/nginx/sites-available/<projectname>.conf /etc/nginx/sites-enabled
```

```bash
sudo nginx -t
```

```bash
sudo systemctl restart nginx
```