---
sidebar_position: 2
---


# Reverse Proxy (Apache)

Only needed when DEBUG = False or maybe extra server control.

## Installing Apache
To install Apache, follow the guide: [How To Install the Apache Web Server on Ubuntu 20.04] (https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-20-04)

Then, run:

```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
```

## Configuring Apache
To configure Apache, run:

```bash
sudo nano /etc/apache2/sites-available/<projectname>.conf
```

Edit the below code and paste it:

```unit title="/etc/apache2/sites-available/<projectname>.conf"
Listen 80
<VirtualHost *:80>
    ProxyPreserveHost On
    ServerName <your-domain>
    ServerAlias <your-domain>
    ProxyRequests Off

    DocumentRoot /var/www/<project-name>/static/
    Alias /static "/var/www/<project-name>/static/"
    <Directory "/var/www/<project-name>/static/">
        Order allow,deny
        Allow from all
    </Directory>

    DocumentRoot /var/www/<project-name>/media/
    Alias /media "/var/www/<project-name>/media/"
    <Directory "/var/www/<project-name>/media/">
        Order allow,deny
        Allow from all
    </Directory>

    ProxyPass /static/ !
    ProxyPass /media/ !
    ProxyPass / http://0.0.0.0:8080/
    ProxyPassReverse / http://0.0.0.0:8080/
</VirtualHost>
```

You may remove ```Listen 80``` if there is a port clash.

Run:

```bash
sudo a2ensite <projectname>.conf
sudo systemctl reload apache2

sudo ufw allow 8000
```

At this point, the site should be accessible on the internet by:

[http://<static_ip>:8000](http://<static_ip>:8000)

If not, troubleshoot for the issues.
