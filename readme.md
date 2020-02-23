# Bookmarklets

## Usage

- Add (e.g. via drag and drop) the bookmarklet link to your browser bookmarks.
- Navigate to the specified page and execute the bookmarklet by clicking on the new bookmark.
- Profit. 🙌

## Bookmarklet links

- <a
  class="bookmarklet"
  href="javascript:(function()%7Bdocument.querySelectorAll(%22article%22).forEach(article%20%3D%3E%20%7Blet%20titles%20%3D%20article.querySelectorAll(%22%3Ascope%20title%22)%3Bif%20(titles%20%26%26%20titles.length%20%3E%200)%20%7Blet%20foundPlus%20%3D%20Array.from(titles).find(title%20%3D%3Etitle.textContent.includes(%22Spiegel%20Plus%22))%3Bif%20(foundPlus)%20%7Barticle.style.display%20%3Darticle.style.display%20!%3D%3D%20%22none%22%20%3F%20%22none%22%20%3A%20%22block%22%3B%7D%7D%7D)%7D)()"> Spiegel Plus Minus</a> - Hides or shows the Spiegel Plus articles of the German weekly news magazine.