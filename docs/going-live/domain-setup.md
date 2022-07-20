---
sidebar_position: 3
---


# Domain related setup

## Binding IP to domain

Go to your domain provider website and open DNS management of the corresponding domain.

Add the following records in DNS:

1.
    ```
    Name:       (Keep it blank)
    Type: A
    TTl: 3600
    Target: <static_ip>
    ```
2.
    ```
    Name: WWW
    Type: CNAME
    TTl: 3600
    Target: <domain_name>
    ```

Save the changes.
DNS may take upto 5 mins - 24 hrs to update.

Now the site should be accessible by: [http://domain](http://domain)

