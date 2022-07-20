---
sidebar_position: 2
---

# Updating static files

The /var/www/* folders may need sudo permissions.

Run:
```bash
sudo su
cd <path_inside_the_project_folder>
source venv/bin/activate
python manage.py collectstatic
exit
```