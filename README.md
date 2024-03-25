## D2D

**GitHub Code Push Checklist**

Before pushing the code to GitHub, please follow the steps below:

1. Run Prettier to check for formatting issues:

   ```
   npx prettier --check .
   ```

2. Run Prettier to automatically fix formatting issues:

   ```
   npx prettier --write .
   ```

3. Build the project:
   ```
   npm run build
   ```

After running these commands, proceed with the following steps:

4. Add all changes to the staging area:

   ```
   git add .
   ```

5. Commit the changes with a meaningful message and sign the commit:

   ```
   git commit -am "<message>" -S
   ```

6. Push the changes to the `stage` branch:
   ```
   git push stage
   ```

**Note:** Ensure that you are on the correct branch (`stage`) before pushing the changes.

Please refer to the documentation for more details on each command and its usage.

Thank you!
