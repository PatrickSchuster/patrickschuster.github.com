import { debounce } from "./util.js"

const search = document.getElementById("search")
const favoriteTechEl = document.getElementById("favorite-tech")
const experienceTechEl = document.getElementById("experienced-tech")

setInterval(() => {
    const randomTech = [...favorites.keys()][Math.floor(Math.random() * [...favorites.keys()].length)]
    search.setAttribute("placeholder", `${randomTech} ...`)
}, 2000)

const favorites = new Map([
    ["javascript", "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"],
    ["typescript", "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"],
    ["vue", "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"],
    ["html", "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"],
    ["css", "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"],
    ["vite", "https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E"],
    ["jest", "https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"],
    ["github actions", "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white"],
    ["prettier", "https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"],
    ["eslint", "https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"],
    ["git", "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"],
    ["vercel", "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"],
    ["linux", "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"],
    ["mac", "https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white"],
    ["github", "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"],
    ["leetcode", "https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black"],
    ["stackoverflow", "https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white"],
    ["vscode", "https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"],
])

const experience = new Map([
    ["java", "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"],
    ["spring", "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"],
    ["circleci", "https://img.shields.io/badge/circleci-343434?style=for-the-badge&logo=circleci&logoColor=white"],
    ["aws", "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"],
    ["jenkins", "https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"],
    ["sonar", "https://img.shields.io/badge/Sonar%20cloud-F3702A?style=for-the-badge&logo=sonarcloud&logoColor=white"],
    ["nodejs", "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"],
    ["sass", "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"],
    ["react", "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"],
    ["angular", "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"],
    ["material", "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"],
    ["mongodb", "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"],
    ["heroku", "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"],
    ["figma", "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"],
    ["groovy", "https://img.shields.io/badge/apache%20Groovy-4298B8?style=for-the-badge&logo=apachegroovy&logoColor=white"],
    ["json", "https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"],
    ["clojure", "https://img.shields.io/badge/Clojure-5881D8?style=for-the-badge&logo=clojure&logoColor=white"],
    ["graphql", "https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white"],
    ["gulp", "https://img.shields.io/badge/Gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white"],
    ["docker", "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"],
    ["playwright", "https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white"],
    ["lodash", "https://img.shields.io/badge/Lodash-3492FF?style=for-the-badge&logo=lodash&logoColor=white"],
])

function filter(name) {
    favoriteTechEl.replaceChildren();
    experienceTechEl.replaceChildren();
    [...favorites.keys()].filter(key => key.startsWith(name)).forEach(match => favoriteTechEl.appendChild(createImg(match, favorites)));
    [...experience.keys()].filter(key => key.startsWith(name)).forEach(match => experienceTechEl.appendChild(createImg(match, experience)));
}

function createImg(match, hashmap) {
    const img = document.createElement("img")
    img.setAttribute("src", hashmap.get(match))
    img.setAttribute("alt", `${match}`)
    return img
}

const debouncedFilter = debounce(filter, 0)
search.addEventListener("input", (e) => debouncedFilter(e.target.value))

filter("")

