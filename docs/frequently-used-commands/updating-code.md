---
sidebar_position: 1
---

# Updating deployed code

First, make the changes and test them on the local device.
If all the functionalities work without breaking, push the code to GitHub.

On the server, navigate to the project folder

Run:
```bash
cd <path_inside_the_project_folder>
git pull
sudo systemctl restart gunicorn
```

