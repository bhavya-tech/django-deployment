---
sidebar_position: 4
---

# Secruing with HTTPS

Make sure the website is accessible by port 80 (default for HTTP)domain as above.

Test the website by visiting [http://domain:80](http://domain:80)

Enable port 443 on firewall for HTTPS:

```bash
sudo ufw allow 443
```

Follow the steps in this for using Certbot: [https://certbot.eff.org/instructions](https://certbot.eff.org/instructions)

The website should be now accessible over HTTPS:
[https://domain](https://domain)



