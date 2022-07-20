---
sidebar_position: 3
---

# Database backup and restore

## Backup

Activate the virtual environment and run Django dumpdata

``` bash
cd <path_inside_the_project_folder>
source venv/bin/activate

python manage.py dumpdata --natural-foreign --natural-primary -e contenttypes -e auth.Permission --indent 2 > ./data.json
```

# Restore

Activate the virtual environment and run Django loaddata

```bash
cd <path_inside_the_project_folder>
source venv/bin/activate

python manage.py loaddata ./data.json
```