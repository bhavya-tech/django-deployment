---
sidebar_position: 3
---


# Domain related setup

## Binding IP to domain

Go to your domain provider website and open DNS management of the corresponding domain.

Add the following records in DNS:

| Name | Type | TTL | Target |
| --- | --- | --- | --- |
| (blank) | A | 3600 | <static_ip> |
| WWW | CNAME | 3600 | <domain_name> |



Save the changes.
DNS may take upto 5 mins - 24 hrs to update.

Now the site should be accessible by: [http://domain](http://domain)

