---
sidebar_position: 6
---

```
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