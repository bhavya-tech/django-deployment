---
sidebar_position: 6
---

# Checking the installation

## Basic Installation

1.  Activate the virtual environment
1.  Run: 
    ```bash
    python manage.py runserver
    ```
1.  Troubleshoot any issues in the installation
1.  If your project needs any additional setup, e.g. a custom database or other services running on the server, then this is the step where you need to set those up.


At this point, you should be able to run the Django project.

## Deployment ready installation

For your site to go live safely, you many need to do some extra checks.

Run:
```bash
python manage.py check
```

Resolve any issues found by running the Django check command.