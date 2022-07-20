---
sidebar_position: 4
---

# Updating apache conf file

Run:
```bash
sudo nano /etc/apache2/sites-available/<projectname>.conf
```

Make the changes.

Run:
```bash
sudo systemctl restart apache2
```