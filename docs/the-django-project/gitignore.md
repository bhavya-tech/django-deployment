---
sidebar_position: 3
---

# Gitignore

Make a proper ‘.gitignore’ file to prevent any issues of data clash among multiple developers.

A template for .gitignore can be found in this [Gist](https://gist.github.com/bhavya-tech/43cb060bc435c4eec777a3ba934bb470)

To get it in your project, use the following command:

```bash
wget -o .gitignore https://gist.githubusercontent.com/bhavya-tech/43cb060bc435c4eec777a3ba934bb470/raw/7e12dbe76dbe6108c34d5dabc927ba544da9bb46/.gitignore
```

:::info
Add the files which may change from device to device in ```.gitignore```.

:::

:::danger
Make sure all the files which contain sensitive data like passwords, secret key and api keys are added in ```.gitignore```.
:::