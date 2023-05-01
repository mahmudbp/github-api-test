# Github API test

## Description

This is a test of the Github API. It is a simple app that allows searching of public repositories and displaying of their details along with basic sorting.

## Machine configuration

1. Install Node and NPM

    - [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) is recommended
    - See `package.json` for required versions.

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm run` to see the list of available tasks
4. Run `npm start`

## Usage

1. Enter a search term in the search bar and click the search button
2. Click on "open README" to see the README for the repository
3. Select an option in the sort dropdown to sort the results

## Implementation thoughts

-   Starting this project, I used create-react-app as it's a quick and easy starting point for a react project and I have experience with it.

-   I used TailwindCSS to handle the styling, this was a good choice as it's easy to use and has a lot of semantic classnames that are useful for a project like this.

-   My approach to getting the data was to use a basic fetch call, however I went with Octokit as the documentation suggested, this worked well as it made getting the readme much easier than doing it with fetch.

-   I wanted to add filtering but as I wasn't sure what filters would be useful so instead I implemented sorting, this allows users to sort by any of the displayed fields.

## Struggles

-   As this is my first timed project I struggled with time management, I spent too long on some areas initially which left me with less time on others towards the end.

-   I had some difficulty with displaying the readme, I wasn't sure how to display this initially without breaking the pages structure. I had to use a third party library to convert the markdown to html, I tried to decode it myself but this was quite inconsistent with different markdown formats.

-   I struggled with fetching the paginated data, I was able to get the first page of data but I wasn't sure how to get the rest of the data before running out of time.

## Improvements

-   I would add some tests, I would have used Jest with React testing library as I have experience with these and they seem to be most commonly used.

-   I wanted to add pagination and fetch more of the results, I now know I could have used the pagination provided by Octokit as it's their suggested way of paginating the data.

-   I would use TypeScript as I have experience with it and it would have helped with type checking, im not very familiar with setting it up on a project so this would have required more time.

-   I would add filtering to the results but I was unable to think of appropriate filters for this project.

-   I would display the readme on a new page and used react-router-dom to handle the routing, this would have allowed me to display the readme without breaking the structure of the page when it's displayed.

-   The sorting function is slightly clunky, I would have liked to build the sorting into the table headers directly which would be more intuitive and better to use, also I would have liked to make shared sorting functions to use between similar sorts e.g. sorting numerically could have been done with the same function as well as sorting alphabetically with another single function.
