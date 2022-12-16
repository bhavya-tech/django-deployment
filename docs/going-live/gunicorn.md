---
sidebar_position: 1
---

# Gunicorn

Gunicorn is a Python Web Server Gateway Interface HTTP server. It is needed to run the server in deployment mode. 

## Installing Gunicorn

1. Activate the virtual environment
2. Run:
    ```bash
    pip install gunicorn
    ```

## Configuring Gunicorn

### Gunicorn socket

If you are on ssh, run:
```bash
sudo nano /etc/systemd/system/gunicorn.socket
```

If you have GUI access, run:
```bash
sudo gedit /etc/systemd/system/gunicorn.socket
```

Edit the below code accordingly and paste it:
```unit title="/etc/systemd/system/gunicorn.socket"
[Unit]
Description=gunicorn socket

[Socket]
ListenStream=0.0.0.0:8080

[Install]
WantedBy=sockets.target
```

This will run the Gunicorn server on port 8080. If you need to run on other port, make sure to edit it in all the steps.

:::info

It is possible to use unix domain socket (IPC socket) to run gunicorn rather than network port. Replace `0.0.0.0:8000` with a socket address like `/run/gunicorn.sock`.
:::

### Gunicorn service

Run:

```bash
sudo nano /etc/systemd/system/gunicorn.service
```

Add the below code:

```unit title="/etc/systemd/system/gunicorn.service"
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=<user>
Group=www-data
WorkingDirectory=<path_inside_the_project_folder>
ExecStart=<path_inside_the_project_folder>/venv/bin/gunicorn \
          --access-logfile gunicorn.log \
          --workers <n_workers> \
          --bind 0.0.0.0:8080 \
         <projectname>.wsgi:application

[Install]
WantedBy=multi-user.target
```

The above code needs to be modified in the following ways:
1. user - linux username of the user who has necessary permissions to run Django server. "root" gives all privileges and works without raising any permission issues but it is not recommended because of security issues. Create a user with only necessary permissions and use that user here.
1. path_inside_the_project_folder - absolute path inside the projectname folder
    E.g. /home/projectname/
1. n_workers - the number of threads Django can take. The general rule is 2n+1 where n is the number of CPU cores. But may have to reduce n_workers if other services also running on the server.

:::note

Make sure the `--bind` flag's value matches the ListenStream path if you are using unix socket.

:::

## Running Gunicorn

Run the following commands to start the Gunicorn server:

```bash
sudo systemctl start gunicorn.socket
sudo systemctl enable gunicorn.socket

sudo systemctl start gunicorn
sudo systemctl enable gunicorn
sudo systemctl daemon-reload
sudo systemctl restart gunicorn
```

## Testing Gunicorn
``` bash
sudo systemctl status gunicorn
```

Troubleshoot any issues in this. For more detailed information run:

```bash
sudo journalctl -u gunicorn
```

## Reloading Gunicorn
When any changes are made to code or env files run the following command:

```bash
sudo systemctl restart gunicorn.
```
