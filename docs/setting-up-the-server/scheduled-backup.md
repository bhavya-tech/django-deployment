---
sidebar_position: 6
---

# Scheduled backup

The backup process can be run regularly using cron

Run:
```bash
crontab -e
```

Write this in the cron editor:

```bash
0 3 * * * <path_inside_the_project_folder>/venv/bin/python <path_inside_the_project_folder>/manage.py dumpdata --natural-foreign --natural-primary -e contenttypes -e auth.Permission --indent 2 > <path_inside_the_project_folder>/data.json
```

And save pressing Ctrl+X.

:::note

The above script will run a cron job to take backup every day at 3 a.m. The schedule can be changed by updating 0 3 * * * according to cron.

:::