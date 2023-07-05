# 🪛 Want to contribute?

We welcome you to join us!
### How to Contribute to this repository

1. Fork the repository (Click the Fork button in the top right of this page,
   click your Profile Image)
2. Clone the forked repository to your local machine.

```markdown
git clone https://github.com/your-username/free-hit.git
```

3. change the present working directory

```markdown
cd free-hit
```

4. Open CMD in your current directory and install pnpm packages using command.[If pnpm is not installed, you can install it by clicking on this link to [pnpm](https://pnpm.io/installation)]

```markdown
pnpm i
```

> Run it locally using

```
pnpm start
```

5. Add new tool :
   > Go to **src > DB > `product.json`** & add your code

```
{
    productName: "< App_Name >",
    category: "remote | resume | tweet | ai | ethical | movies | extensions | tools",
    image: "< Image-Url >",
    link: "< Link_to_the_website >",
    description: "< Description of product >"
},
```

- To ensure that your URLs are short, it is recommended to use **[bitly](https://bitly.com/)** for URL shortening.
- Description should not exceed **10-12 words**

6. Make changes in the project. Add, Commit and push the project using following commands:

> Add all files

```markdown
git add .
```

> Commit the changes

```markdown
git commit -m "Write Your commit Message"
```

> Create a new branch

```diff
git branch -M <your-name>
```

> Set upstream command to create a PR

```diff
git remote add upstream https://github.com/JasonDsouza212/free-hit.git
```

> Push the branch

```markdown
git push
```

7. Create a new pull request from your forked repository (Click the `New Pull Request` button located at the top of your repo)
### How to Create a PR
1. After you push the changes you need to create a pull request and name the issue and mention the issue number,
eg: chore: added tool #issuenumber
2. The tags which can be used for url submission are as follows:
fix: , feat: , docs: , test: , chore: , ci: , perf: , refactor: , revert: , style: , data:
3. Put an x between the braces to select the keypoint and leave a space if you don't want to select it.
eg: [x] I foolow the contribution guidelines.
8. Wait for your PR review and merge approval!
9. **Star this repository** if you had fun contributing!
